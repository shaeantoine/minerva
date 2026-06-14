import { h4 } from "@/content/h4";
import { PressedSpecimen } from "./PressedSpecimen";
import styles from "./herbarium.module.css";

const SPECIMENS: Array<{
  key: keyof typeof h4.pillars;
  label: string;
  binomial: string;
  collected: string;
}> = [
  {
    key: "mission",
    label: "Mission",
    binomial: "Adaptatio docens",
    collected: "Coll. cohort 2026 · No. 0247",
  },
  {
    key: "vision",
    label: "Vision",
    binomial: "Aperitas humanis",
    collected: "Coll. cohort 2026 · No. 0248",
  },
  {
    key: "purpose",
    label: "Purpose",
    binomial: "Datus capabilis",
    collected: "Coll. cohort 2026 · No. 0249",
  },
];

export function HerbariumDesign() {
  return (
    <div className={styles.page}>
      <header className={styles.masthead}>
        <div className={styles.mastheadInner}>
          <span className={styles.mastheadName}>
            <span className={styles.mastheadH4}>H4</span>
            <span className={styles.mastheadDivider}>·</span>
            <span className={styles.mastheadSub}>Herbarium of Capability</span>
          </span>
          <span className={styles.mastheadCoord}>
            ✦ Sheet I · Folio MMXXVI
          </span>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>Sheet I · Pressed for the record</p>
          <h1 className={styles.heroHeadline}>
            Every learner is a <em>specimen</em> worth{" "}
            <span className={styles.preserved}>preserving.</span>
          </h1>
          <p className={styles.heroLede}>{h4.tagline}</p>
          <a href={h4.cta.href} className={styles.heroCta}>
            <span>Examine the collection</span>
            <span className={styles.heroCtaArrow}>→</span>
          </a>
          <div className={styles.heroLabel}>
            <p className={styles.heroLabelLatin}>
              <em>Discipulus capabilis</em>
            </p>
            <p className={styles.heroLabelMeta}>
              det. H4 · 2026 · drawn from observation
            </p>
          </div>
        </div>
        <div className={styles.specimenWrap}>
          <PressedSpecimen />
        </div>
      </section>

      <section className={styles.collection}>
        <div className={styles.collectionInner}>
          <p className={styles.collectionKicker}>
            ✦ From the collection
          </p>
          <h2 className={styles.sectionTitle}>
            Three specimens of capability.
          </h2>
          <p className={styles.sectionSub}>
            We mount three together so they may be compared side by side —
            the ways a learner takes root, opens to light, and bears their
            own peculiar fruit.
          </p>

          <div className={styles.sheetGrid}>
            {SPECIMENS.map(({ key, label, binomial, collected }, i) => (
              <article key={key} className={styles.sheet}>
                <div className={styles.sheetCorner} aria-hidden />
                <div className={styles.sheetCornerR} aria-hidden />
                <div className={styles.sheetIllustration} aria-hidden>
                  <svg viewBox="0 0 100 140">
                    {/* stem */}
                    <path
                      d={`M 50 130 Q ${48 + i * 0.4} 80 50 ${30 + i * 5}`}
                      fill="none"
                      stroke="rgba(28, 28, 28, 0.85)"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                    />
                    {/* leaves descending the stem */}
                    {Array.from({ length: 6 }, (_, j) => {
                      const y = 50 + j * 13;
                      const side = j % 2 === 0 ? -1 : 1;
                      return (
                        <ellipse
                          key={j}
                          cx={50 + side * 8}
                          cy={y}
                          rx="6.5"
                          ry="2"
                          fill="rgba(45, 90, 61, 0.18)"
                          stroke="rgba(45, 90, 61, 0.85)"
                          strokeWidth="0.32"
                          transform={`rotate(${side * 28} ${50 + side * 8} ${y})`}
                        />
                      );
                    })}
                    {/* a single bloom or fruit at the top, color varies by specimen */}
                    {i === 0 && (
                      <g>
                        {[-12, -6, 0, 6, 12].map((dx, k) => (
                          <ellipse
                            key={k}
                            cx={50 + dx}
                            cy={28 - Math.abs(dx) * 0.5}
                            rx="3.4"
                            ry="4.6"
                            fill="rgba(158, 103, 112, 0.55)"
                            stroke="rgba(28, 28, 28, 0.7)"
                            strokeWidth="0.3"
                            transform={`rotate(${dx * 4} ${50 + dx} ${28 - Math.abs(dx) * 0.5})`}
                          />
                        ))}
                        <circle cx="50" cy="26" r="1.6" fill="rgba(184, 148, 26, 0.95)" />
                      </g>
                    )}
                    {i === 1 && (
                      <g>
                        {Array.from({ length: 8 }, (_, k) => {
                          const ang = (k / 8) * 2 * Math.PI;
                          return (
                            <ellipse
                              key={k}
                              cx={50 + Math.cos(ang) * 8}
                              cy={32 + Math.sin(ang) * 8}
                              rx="2"
                              ry="5"
                              fill="rgba(184, 148, 26, 0.45)"
                              stroke="rgba(28, 28, 28, 0.65)"
                              strokeWidth="0.3"
                              transform={`rotate(${(ang * 180) / Math.PI + 90} ${50 + Math.cos(ang) * 8} ${32 + Math.sin(ang) * 8})`}
                            />
                          );
                        })}
                        <circle cx="50" cy="32" r="2.4" fill="rgba(45, 90, 61, 0.85)" />
                      </g>
                    )}
                    {i === 2 && (
                      <g>
                        <circle
                          cx="50"
                          cy="34"
                          r="6.5"
                          fill="rgba(158, 103, 112, 0.45)"
                          stroke="rgba(28, 28, 28, 0.7)"
                          strokeWidth="0.4"
                        />
                        <circle
                          cx="50"
                          cy="34"
                          r="3.5"
                          fill="rgba(184, 148, 26, 0.6)"
                          stroke="rgba(28, 28, 28, 0.5)"
                          strokeWidth="0.25"
                        />
                        <path
                          d="M 50 28 Q 48 24 50 22 Q 52 24 50 28"
                          fill="rgba(45, 90, 61, 0.85)"
                        />
                      </g>
                    )}
                    {/* root fragment */}
                    {Array.from({ length: 4 }, (_, j) => (
                      <path
                        key={`r-${j}`}
                        d={`M 50 130 Q ${50 + (j - 1.5) * 4} 134 ${50 + (j - 1.5) * 8} 138`}
                        fill="none"
                        stroke="rgba(28, 28, 28, 0.55)"
                        strokeWidth="0.32"
                        strokeDasharray="0.4 0.5"
                      />
                    ))}
                  </svg>
                </div>
                <div className={styles.sheetLabel}>
                  <p className={styles.sheetBinomial}>
                    <em>{binomial}</em>
                  </p>
                  <h3 className={styles.sheetName}>{label}</h3>
                  <p className={styles.sheetBody}>{h4.pillars[key]}</p>
                  <p className={styles.sheetCollected}>{collected}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.essay}>
        <div className={styles.essayInner}>
          <p className={styles.essayKicker}>From the catalog</p>
          <h2 className={styles.essayTitle}>What the collection teaches.</h2>
          {h4.overview.paragraphs.map((p, i) => (
            <p key={i} className={styles.essayPara}>
              {i === 0 && (
                <span className={styles.essayDropcap}>{p.charAt(0)}</span>
              )}
              {i === 0 ? p.slice(1) : p}
            </p>
          ))}
        </div>
      </section>

      <footer className={styles.colophon}>
        <div className={styles.colophonInner}>
          <div>
            <p className={styles.colophonName}>H4</p>
            <p className={styles.colophonImprint}>
              Pressing what learners reveal — so each may be known by what
              cannot be tested.
            </p>
          </div>
          <a href={h4.cta.href} className={styles.colophonCta}>
            Add to the collection →
          </a>
        </div>
        <div className={styles.colophonRule} aria-hidden />
        <p className={styles.colophonMeta}>
          Collected, mounted, and described · Folio MMXXVI · ✦
        </p>
      </footer>
    </div>
  );
}
