/**
 * Hero diagram — a single request moving through a real AI system.
 *
 * Laid out as an actual architecture rather than a top-to-bottom list: the
 * router fans out to three context sources running in parallel, they converge
 * on the model, and after the guardrail gate the path splits — one branch to
 * the user, one to evaluation, which loops back into routing. The fan, the
 * convergence, and the split are what make it read as a system.
 */
const icons: Record<string, string> = {
  request: "M2.5 8h11 M10 4.5 13.5 8 10 11.5",
  router: "M6 4 2.5 8 6 12 M10 4l3.5 4-3.5 4",
  retrieval:
    "M3 4.2c0-1 2.2-1.9 5-1.9s5 .9 5 1.9-2.2 1.9-5 1.9-5-.9-5-1.9z M3 4.2v7.6c0 1 2.2 1.9 5 1.9s5-.9 5-1.9V4.2 M3 8c0 1 2.2 1.9 5 1.9s5-.9 5-1.9",
  tools:
    "M6.6 9.4a2.6 2.6 0 0 0 3.7 0l2-2a2.6 2.6 0 0 0-3.7-3.7l-.9.9 M9.4 6.6a2.6 2.6 0 0 0-3.7 0l-2 2a2.6 2.6 0 0 0 3.7 3.7l.9-.9",
  memory: "M8 2.2 14 5.5 8 8.8 2 5.5z M2 8.5 8 11.8l6-3.3",
  model: "M8 2.2 9.3 6 13 7.3 9.3 8.6 8 12.4 6.7 8.6 3 7.3 6.7 6z M12.6 11.4l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5z",
  guard: "M8 2.2l5 1.9v3.7c0 3.1-2.1 5.4-5 6.1-2.9-.7-5-3-5-6.1V4.1z M6 8l1.5 1.5L10.5 6.5",
  response: "M2.5 3.5h11v9h-11z M2.5 6.5h11",
  eval: "M2.5 12a5.5 5.5 0 1 1 11 0 M8 12 11 6.6",
};

const W = 404;
const H = 442;
const CX = W / 2;
const ROW_H = 36;

/** Header. Indented past the bracket ornament sitting on the top-left corner. */
const HEAD_X = 58;
const HEAD_W = W - HEAD_X - 20;

/** The three parallel context sources. */
const P_W = 112;
const P_GAP = 12;
const P_X = [22, 22 + P_W + P_GAP, 22 + (P_W + P_GAP) * 2];
const P_C = P_X.map((x) => x + P_W / 2);

/** The emphasised model node. */
const CORE_W = 224;
const CORE_X = (W - CORE_W) / 2;
const CORE_H = 52;

/** The terminal split. */
const S_W = 152;
const S_LX = 34;
const S_RX = W - S_LX - S_W;
const S_LC = S_LX + S_W / 2;
const S_RC = S_RX + S_W / 2;

const REQ_W = 152;
const ROUTER_W = 180;
const GUARD_W = 200;

const Y = { request: 50, router: 108, parallel: 176, core: 244, guard: 318, split: 386 };
const FAN_Y = Y.parallel - 16;
const MERGE_Y = Y.core - 16;
const SPLIT_Y = Y.split - 16;

function Node({
  x, y, w, h = ROW_H, icon, label, meta, small = false, featured = false,
}: {
  x: number; y: number; w: number; h?: number;
  icon: string; label: string; meta?: string; small?: boolean; featured?: boolean;
}) {
  const mid = y + h / 2;
  const badge = small ? 20 : 24;
  const bx = x + (small ? 8 : 11);
  const tx = x + (small ? 34 : 44);
  return (
    <g className={featured ? "pipe__node pipe__node--core" : "pipe__node"}>
      <rect className="pipe__box" height={h} rx="10" width={w} x={x} y={y} />
      <g className="pipe__badge">
        <rect height={badge} rx="6" width={badge} x={bx} y={mid - badge / 2} />
        <g transform={`translate(${bx + (badge - 16) / 2}, ${mid - 8})`}>
          <path d={icons[icon]} />
        </g>
      </g>
      <text className={small ? "pipe__label pipe__label--sm" : "pipe__label"} x={tx} y={meta ? mid : mid + 4}>
        {label}
      </text>
      {meta && (
        <text className="pipe__meta" x={tx} y={mid + 13}>
          {meta}
        </text>
      )}
    </g>
  );
}

export function AiPipelineDiagram() {
  return (
    <svg
      aria-label="A request moving through a production AI system: the router fans out to retrieval, tools, and memory running in parallel; these converge on model inference; guardrails then split the path to the response and to evaluation, which feeds back into routing"
      className="pipe"
      role="img"
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pipe-icon" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#7b67c4" />
          <stop offset="1" stopColor="#453b8c" />
        </linearGradient>
        <linearGradient id="pipe-title" x1="0" x2="1" y1="0" y2="0">
          <stop stopColor="#7b67c4" />
          <stop offset="1" stopColor="#453b8c" />
        </linearGradient>
      </defs>

      <text className="pipe__title" x={HEAD_X} y="22">
        AI INFERENCE PIPELINE
      </text>
      <circle className="pipe__live" cx={HEAD_X + HEAD_W - 4} cy="18" r="4" />
      <line className="pipe__rule" x1={HEAD_X} x2={HEAD_X + HEAD_W} y1="36" y2="36" />

      <g className="pipe__wires">
        <path d={`M${CX} ${Y.request + ROW_H} V${Y.router}`} />

        {/* fan out to the three context sources */}
        <path d={`M${CX} ${Y.router + ROW_H} V${FAN_Y}`} />
        <path d={`M${P_C[0]} ${FAN_Y} H${P_C[2]}`} />
        {P_C.map((cx) => (
          <path d={`M${cx} ${FAN_Y} V${Y.parallel}`} key={`fan-${cx}`} />
        ))}

        {/* converge on the model */}
        {P_C.map((cx) => (
          <path d={`M${cx} ${Y.parallel + ROW_H} V${MERGE_Y}`} key={`merge-${cx}`} />
        ))}
        <path d={`M${P_C[0]} ${MERGE_Y} H${P_C[2]}`} />
        <path d={`M${CX} ${MERGE_Y} V${Y.core}`} />

        <path d={`M${CX} ${Y.core + CORE_H} V${Y.guard}`} />

        {/* split: one branch to the user, one to evaluation */}
        <path d={`M${CX} ${Y.guard + ROW_H} V${SPLIT_Y}`} />
        <path d={`M${S_LC} ${SPLIT_Y} H${S_RC}`} />
        <path d={`M${S_LC} ${SPLIT_Y} V${Y.split}`} />
        <path d={`M${S_RC} ${SPLIT_Y} V${Y.split}`} />
      </g>

      {/* Evaluation feeds back into routing — the loop that keeps it honest. */}
      <path
        className="pipe__feedback"
        d={`M${S_RX + S_W} ${Y.split + ROW_H / 2} H${W - 12} q8 0 8 -8 V${Y.router + ROW_H / 2 + 8} q0 -8 -8 -8 H${CX + ROUTER_W / 2}`}
      />
      <text
        className="pipe__feedback-label"
        transform={`rotate(-90 ${W - 2} ${(Y.router + Y.split) / 2 + 18})`}
        x={W - 2}
        y={(Y.router + Y.split) / 2 + 18}
      >
        EVAL FEEDBACK
      </text>

      <Node icon="request" label="Request" w={REQ_W} x={CX - REQ_W / 2} y={Y.request} />
      <Node icon="router" label="Router" meta="policy · model choice" w={ROUTER_W} x={CX - ROUTER_W / 2} y={Y.router} />

      <text className="pipe__aside" x={P_X[0]} y={FAN_Y - 9}>
        parallel context
      </text>
      <Node icon="retrieval" label="Retrieval" small w={P_W} x={P_X[0]} y={Y.parallel} />
      <Node icon="tools" label="Tools" small w={P_W} x={P_X[1]} y={Y.parallel} />
      <Node icon="memory" label="Memory" small w={P_W} x={P_X[2]} y={Y.parallel} />

      <Node featured h={CORE_H} icon="model" label="Model inference" meta="streaming · cached" w={CORE_W} x={CORE_X} y={Y.core} />

      <Node icon="guard" label="Guardrails" meta="schema · PII · citations" w={GUARD_W} x={CX - GUARD_W / 2} y={Y.guard} />

      <Node icon="response" label="Response" small w={S_W} x={S_LX} y={Y.split} />
      <Node icon="eval" label="Evaluation" small w={S_W} x={S_RX} y={Y.split} />
    </svg>
  );
}
