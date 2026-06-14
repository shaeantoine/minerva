import { h4 } from "@/content/h4";
import { StarChart } from "./StarChart";
import styles from "./constellation.module.css";

const CONSTELLATIONS: Array<{
  key: keyof typeof h4.pillars;
  label: string;
  constellation: string;
  bearing: string;
  glyph: { x: number; y: number; r?: number }[];
}> = [
  {
    key: "mission",
    label: "Mission",
    constellation: "The Compass Rose",
    bearing: "Rises N · Spring",
    glyph: [
      { x: 50, y: 50, r: 1.6 },
      { x: 50, y: 26 },
      { x: 50, y: 74 },
      { x: 26, y: 50 },
      { x: 74, y: 50 },
    ],
  },
  {
    key: "vision",
    label: "Vision",
    constellation: "The Open Sky",
    bearing: "Rises E · Summer",
    glyph: [
      { x: 18, y: 36 },
      { x: 38, y: 22 },
      { x: 56, y: 30, r: 1.5 },
      { x: 74, y: 22 },
      { x: 86, y: 38 },
      { x: 64, y: 56 },
      { x: 30, y: 56 },
    ],
  },
  {
    key: "purpose",
    label: "Purpose",
    constellation: "The North Star",
    bearing: "Fixed · Year-round",
    glyph: [
      { x: 50, y: 30, r: 2.4 },
      { x: 30, y: 60 },
      { x: 70, y: 60 },
      { x: 50, y: 78 },
    ],
  },
];

export function ConstellationDesign() {
  return (
    <div className={styles.page}>
      <div className={styles.starfield} aria-hidden />

      <header className={styles.masthead}>
        <div className={styles.mastheadInner}>
          <span className={styles.mastheadName}>
            <span className={styles.mastheadH4}>H4</span>
            <span className={styles.mastheadDivider}>·</span>
            <span className={styles.mastheadSub}>A Celestial Atlas</span>
          </span>
          <span className={styles.mastheadCoord}>
            ☽ Folio I · MMXXVI
          </span>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>Folio I · By the stars</p>
          <h1 className={styles.heroHeadline}>
            Every learner navigates by their own{" "}
            <span className={styles.constellation}>constellation.</span>
          </h1>
          <p className={styles.heroLede}>{h4.tagline}</p>
          <a href={h4.cta.href} className={styles.heroCta}>
            <span>Find your bearing</span>
            <span className={styles.heroCtaArrow}>→</span>
          </a>
        </div>
        <div className={styles.chartWrap}>
          <StarChart />
        </div>
      </section>

      <section className={styles.pillars}>
        <div className={styles.pillarRule} aria-hidden />
        <div className={styles.pillarsHeader}>
          <h2 className={styles.sectionTitle}>Three constellations, charted.</h2>
          <p className={styles.sectionSub}>
            What a learner steers by reveals what they are made of. Each H4
            pillar is a constellation we observe in the night sky of how
            students grow.
          </p>
        </div>

        <div className={styles.pillarGrid}>
          {CONSTELLATIONS.map(
            ({ key, label, constellation, bearing, glyph }) => (
              <article key={key} className={styles.pillar}>
                <div className={styles.pillarHead}>
                  <span className={styles.pillarTag}>{constellation}</span>
                  <span className={styles.pillarBearing}>{bearing}</span>
                </div>
                <h3 className={styles.pillarLabel}>{label}</h3>
                <p className={styles.pillarBody}>{h4.pillars[key]}</p>
                <div className={styles.pillarGlyph} aria-hidden>
                  <svg viewBox="0 0 100 100">
                    {glyph.map((s, i) => (
                      <g key={i}>
                        {i > 0 && (
                          <line
                            x1={glyph[0].x}
                            y1={glyph[0].y}
                            x2={s.x}
                            y2={s.y}
                            stroke="rgba(212, 175, 55, 0.35)"
                            strokeWidth="0.4"
                            strokeDasharray="0.8 1.4"
                          />
                        )}
                      </g>
                    ))}
                    {glyph.map((s, i) => (
                      <circle
                        key={`s-${i}`}
                        cx={s.x}
                        cy={s.y}
                        r={s.r ?? 0.85}
                        fill="rgba(212, 175, 55, 0.95)"
                      />
                    ))}
                  </svg>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <section className={styles.essay}>
        <div className={styles.essayInner}>
          <p className={styles.essayKicker}>From the night log</p>
          <h2 className={styles.essayTitle}>What the stars tell us.</h2>
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
              Charting how every learner finds their bearing — by the stars
              of their own becoming.
            </p>
          </div>
          <a href={h4.cta.href} className={styles.colophonCta}>
            Set your course →
          </a>
        </div>
        <div className={styles.colophonRule} aria-hidden />
        <p className={styles.colophonMeta}>
          Folio I of III · Observed under clear skies · MMXXVI
        </p>
      </footer>
    </div>
  );
}
