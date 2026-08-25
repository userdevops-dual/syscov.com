import { complexityDimensions, type Complexity } from "../lib/case-studies";

/**
 * Complexity Fingerprint — five dimensions of engineering demand per system.
 *
 * All five bars measure the same quantity (demand, 0–100), so this is one
 * series and takes one hue. Colouring each dimension differently would
 * double-encode bar length as colour and burn the only free channel; the row
 * labels already carry identity.
 */
export function ComplexityFingerprint({ complexity, score }: { complexity: Complexity; score: number }) {
  return (
    <figure className="fingerprint">
      <figcaption className="fingerprint__head">
        <span className="fingerprint__caption">Complexity</span>
        <span className="fingerprint__score">
          {score.toFixed(1)}
          <small>/10</small>
        </span>
      </figcaption>

      <dl className="fingerprint__rows">
        {complexityDimensions.map((dimension) => {
          const value = complexity[dimension.key];
          return (
            <div className="fingerprint__row" key={dimension.key}>
              <dt>{dimension.label}</dt>
              <dd>
                <span className="fingerprint__track">
                  <span className="fingerprint__fill" style={{ width: `${value}%` }} />
                </span>
                <b>{value}</b>
              </dd>
            </div>
          );
        })}
      </dl>
    </figure>
  );
}
