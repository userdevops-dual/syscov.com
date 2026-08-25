import { NextResponse } from "next/server";

/**
 * Project inquiry endpoint.
 *
 * Delivery is configured with `INQUIRY_WEBHOOK_URL` — any endpoint that accepts
 * a JSON POST (email service, CRM, Slack, automation platform). Until that
 * variable is set the inquiry is validated and written to the server log only,
 * and the response reports `delivered: false` so the gap is visible in
 * monitoring rather than silent. Set it before the site goes live.
 */

const maxLength = { name: 120, email: 200, company: 160, phone: 60, description: 4000, requirements: 4000 };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function readField(source: Record<string, unknown>, key: string, limit: number) {
  const value = source[key];
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const inquiry = {
    name: readField(payload, "name", maxLength.name),
    email: readField(payload, "email", maxLength.email),
    company: readField(payload, "company", maxLength.company),
    phone: readField(payload, "phone", maxLength.phone),
    projectType: readField(payload, "projectType", 120),
    budget: readField(payload, "budget", 60),
    timeline: readField(payload, "timeline", 60),
    description: readField(payload, "description", maxLength.description),
    requirements: readField(payload, "requirements", maxLength.requirements),
    receivedAt: new Date().toISOString(),
  };

  const fieldErrors: Record<string, string> = {};
  if (!inquiry.name) fieldErrors.name = "Name is required.";
  if (!inquiry.email) fieldErrors.email = "Email is required.";
  else if (!emailPattern.test(inquiry.email)) fieldErrors.email = "Email address is not valid.";
  if (!inquiry.description) fieldErrors.description = "Project description is required.";

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ ok: false, fieldErrors }, { status: 422 });
  }

  const webhook = process.env.INQUIRY_WEBHOOK_URL;

  if (!webhook) {
    console.warn(
      "[syscov] INQUIRY_WEBHOOK_URL is not set — inquiry was not delivered anywhere. Logged instead:",
      inquiry,
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const delivery = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inquiry),
    });
    if (!delivery.ok) throw new Error(`Webhook responded with ${delivery.status}`);
  } catch (error) {
    console.error("[syscov] Failed to deliver inquiry:", error, inquiry);
    return NextResponse.json({ ok: false, error: "Delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
