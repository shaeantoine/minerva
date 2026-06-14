import { h4 } from "@/content/h4";
import { CapabilityMap } from "./CapabilityMap";
import styles from "./atlas.module.css";

const PILLARS: Array<{
  key: keyof typeof h4.pillars;
  label: string;
  region: string;
  bearing: string;
}> = [
  { key: "mission", label: "Mission", region: "Region I", bearing: "N 47°" },
  { key: "vision", label: "Vision", region: "Region II", bearing: "E 23°" },
  { key: "purpose", label: "Purpose", region: "Region III", bearing: "S 12°" },
];

export function AtlasDesign() {
  return (
    <div className={styles.page}>
      <header className={styles.masthead}>
        <div className={styles.mastheadInner}>
          <span className={styles.mastheadName}>
            <span className={styles.mastheadH4}>H4</span>
            <span className={styles.mastheadDivider}>·</span>
            <span className={styles.mastheadSub}>An Atlas of Capability</span>
          </span>
          <span className={styles.mastheadCoord}>Plate I — 2026</span>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>Plate I</p>
          <h1 className={styles.heroHeadline}>
            An <em>atlas</em> of where students will{" "}
            <span className={styles.thrive}>thrive.</span>
          </h1>
          <p className={styles.heroLede}>{h4.tagline}</p>
          <a href={h4.cta.href} className={styles.heroCta}>
            <span>Begin the journey</span>
            <span className={styles.heroCtaArrow}>→</span>
          </a>
        </div>
        <div className={styles.mapWrap}>
          <CapabilityMap />
        </div>
      </section>

      <section className={styles.pillars}>
        <div className={styles.pillarRule} aria-hidden />
        <h2 className={styles.sectionTitle}>Three regions, charted.</h2>
        <p className={styles.sectionSub}>
          Each pillar names a territory in our atlas of human capability —
          places we travel to as we build H4.
        </p>
        <div className={styles.pillarGrid}>
          {PILLARS.map(({ key, label, region, bearing }) => (
            <article key={key} className={styles.pillar}>
              <div className={styles.pillarHead}>
                <span className={styles.pillarRegion}>{region}</span>
                <span className={styles.pillarBearing}>{bearing}</span>
              </div>
              <h3 className={styles.pillarLabel}>{label}</h3>
              <p className={styles.pillarBody}>{h4.pillars[key]}</p>
              <div className={styles.pillarTopo} aria-hidden>
                <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                  {Array.from({ length: 6 }, (_, i) => (
                    <path
                      key={i}
                      d={`M0,${10 + i * 8} Q60,${4 + i * 8} 120,${14 + i * 8} T200,${10 + i * 8}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.6"
                      opacity={0.35 - i * 0.04}
                    />
                  ))}
                </svg>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.essay}>
        <div className={styles.essayInner}>
          <h2 className={styles.essayTitle}>From the field notes.</h2>
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
              Mapping how students learn — so they may discover where they
              will thrive.
            </p>
          </div>
          <a href={h4.cta.href} className={styles.colophonCta}>
            Chart a course →
          </a>
        </div>
        <div className={styles.colophonRule} aria-hidden />
        <p className={styles.colophonMeta}>
          Set in a typographer's serif · Drawn on the open web · MMXXVI
        </p>
      </footer>
    </div>
  );
}
