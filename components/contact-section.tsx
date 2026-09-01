"use client";

import { useState, type FormEvent } from "react";
import { contactDetails } from "../lib/site-content";
import { Section } from "./section";
import { SyscovBracket } from "./syscov-mark";

const projectTypes = [
  "Website or web platform",
  "Custom software",
  "Mobile application",
  "AI or automation",
  "APIs and backend",
  "Cloud and infrastructure",
  "System modernization",
  "Not sure yet",
];

type Errors = Partial<Record<"name" | "email" | "description", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [banner, setBanner] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    const nextErrors: Errors = {};
    if (!values.name?.trim())
      nextErrors.name = "Please tell us who we are speaking with.";
    if (!values.email?.trim())
      nextErrors.email = "We need an email address to reply to.";
    else if (!emailPattern.test(values.email.trim()))
      nextErrors.email = "That email address does not look complete.";
    if (!values.description?.trim())
      nextErrors.description =
        "A sentence or two about the project is enough to start.";

    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      const field = form.elements.namedItem(firstInvalid);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    setBanner(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok)
        throw new Error(`Request failed with status ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("idle");
      setBanner(
        "We could not send that just now. Please try again in a moment — your details are still here.",
      );
    }
  };

  return (
    <Section className="contact-section" id="contact" tone="mist">
      <div className="contact-panel" data-reveal>
        <SyscovBracket
          className="contact-panel__bracket contact-panel__bracket--start"
          gradientId="contact-bracket-start"
          side="left"
        />
        <SyscovBracket
          className="contact-panel__bracket contact-panel__bracket--end"
          gradientId="contact-bracket-end"
          side="right"
        />

        <div className="contact-section__grid">
          <aside className="contact-aside contact-aside--start" data-reveal>
            <p className="eyebrow">Start a project</p>
            <h2>Tell us what you are trying to build.</h2>
            <p className="text-large">
              The most useful first message is the problem, not the
              specification. Send us the situation you are in and we will come
              back with a practical technical read on it.
            </p>

            {contactDetails.responsePolicy && (
              <p className="contact-note">{contactDetails.responsePolicy}</p>
            )}

            {(contactDetails.email ||
              contactDetails.phone ||
              contactDetails.location) && (
              <ul className="contact-alternatives">
                {contactDetails.email && (
                  <li>
                    <span>Email</span>
                    <a
                      className="text-link"
                      href={`mailto:${contactDetails.email}`}
                    >
                      {contactDetails.email}
                    </a>
                  </li>
                )}
                {contactDetails.phone && (
                  <li>
                    <span>Phone</span>
                    <a
                      className="text-link"
                      href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                    >
                      {contactDetails.phone}
                    </a>
                  </li>
                )}
                {contactDetails.location && (
                  <li>
                    <span>Where we are</span>
                    {contactDetails.location}
                  </li>
                )}
              </ul>
            )}
          </aside>

          <div className="contact-card" data-reveal>
            {status === "sent" ? (
              <div className="contact-success" role="status">
                <svg
                  aria-hidden="true"
                  className="contact-success__check"
                  viewBox="0 0 52 52"
                >
                  <circle cx="26" cy="26" r="24" />
                  <path d="M15 27l8 8 15-16" />
                </svg>
                <h3>Message received.</h3>
                <p>
                  Thanks for the detail — it helps. We will read it properly and
                  come back to you with a considered response rather than a
                  template.
                </p>
                <button
                  className="button button--secondary"
                  onClick={() => setStatus("idle")}
                  type="button"
                >
                  Send another inquiry{" "}
                  <span aria-hidden="true" className="button__arrow">
                    <svg fill="none" viewBox="0 0 16 16">
                      <path
                        d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            ) : (
              <form className="contact-form" noValidate onSubmit={handleSubmit}>
                {banner && (
                  <div className="form-banner" role="alert">
                    <p>{banner}</p>
                    <button
                      aria-label="Dismiss"
                      onClick={() => setBanner(null)}
                      type="button"
                    >
                      ×
                    </button>
                  </div>
                )}

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input
                      aria-invalid={Boolean(errors.name)}
                      id="name"
                      name="name"
                      type="text"
                    />
                    {errors.name && (
                      <p className="field__error">{errors.name}</p>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      aria-invalid={Boolean(errors.email)}
                      id="email"
                      name="email"
                      type="email"
                    />
                    {errors.email && (
                      <p className="field__error">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="projectType">Project type</label>
                  <select
                    defaultValue={projectTypes[0]}
                    id="projectType"
                    name="projectType"
                  >
                    {projectTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="description">Project description</label>
                  <textarea
                    aria-invalid={Boolean(errors.description)}
                    id="description"
                    name="description"
                    placeholder="What are you trying to build, and what is making it difficult?"
                    rows={3}
                  />
                  {errors.description && (
                    <p className="field__error">{errors.description}</p>
                  )}
                </div>

                <button
                  className="button button--primary contact-form__submit"
                  disabled={status === "submitting"}
                  type="submit"
                >
                  {status === "submitting" ? (
                    <>
                      Sending{" "}
                      <span aria-hidden="true" className="button__spinner" />
                    </>
                  ) : (
                    <>
                      Send inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Describes how an inquiry is handled — intent only, no response times
          or volumes, since none of that has been supplied or verified. */}
          <aside className="contact-aside contact-aside--end contact-next-card" data-reveal>
            <p className="eyebrow">What happens next</p>
            <ol className="contact-next">
              <li>
                <h3>An engineer reads it first</h3>
                <p>Your message reaches the people who would build the work, not a sales queue.</p>
              </li>
              <li>
                <h3>You get a technical assessment</h3>
                <p>What the work involves, where the difficulty sits, and what we would resolve first.</p>
              </li>
              <li>
                <h3>We scope it together</h3>
                <p>If there is a fit, we define the shape of the engagement before either side commits.</p>
              </li>
            </ol>
          </aside>
        </div>
      </div>
    </Section>
  );
}
