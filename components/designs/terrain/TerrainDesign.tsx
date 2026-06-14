import { h4 } from "@/content/h4";
import { ContourMap } from "./ContourMap";
import styles from "./terrain.module.css";

const ZONES: Array<{
  key: keyof typeof h4.pillars;
  label: string;
  zone: string;
  elevation: string;
  reading: string;
}> = [
  {
    key: "mission",
    label: "Mission",
    zone: "Zone I — Trailhead",
    elevation: "210 m",
    reading: "↑ stable",
  },
  {
    key: "vision",
    label: "Vision",
    zone: "Zone II — Plateau",
    elevation: "880 m",
    reading: "↗ rising",
  },
  {
    key: "purpose",
    label: "Purpose",
    zone: "Zone III — Summit",
    elevation: "1,247 m",
    reading: "◯ clear",
  },
];

export function TerrainDesign() {
  return (
    <div className={styles.page}>
      <header className={styles.masthead}>
        <div className={styles.mastheadInner}>
          <span className={styles.mastheadName}>
            <span className={styles.mastheadH4}>H4</span>
            <span className={styles.mastheadDivider}>·</span>
            <span className={styles.mastheadSub}>A Capability Survey</span>
          </span>
          <span className={styles.mastheadCoord}>
            47°23′N · 8°31′E · Sheet I
          </span>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>Field Survey · Sheet I</p>
          <h1 className={styles.heroHeadline}>
            A <em>topography</em> of how every student{" "}
            <span className={styles.learns}>learns.</span>
          </h1>
          <p className={styles.heroLede}>{h4.tagline}</p>
          <div className={styles.heroCtaRow}>
            <a href={h4.cta.href} className={styles.heroCta}>
              <span>Begin the survey</span>
              <span className={styles.heroCtaArrow}>→</span>
            </a>
            <span className={styles.heroReading}>
              elevation gain · 1,037 m · est. travel: a learner's lifetime
            </span>
          </div>
        </div>
        <div className={styles.mapWrap}>
          <ContourMap />
        </div>
      </section>

      <section className={styles.zones}>
        <div className={styles.zonesRule} aria-hidden />
        <div className={styles.zonesHeader}>
          <h2 className={styles.sectionTitle}>Three elevations, surveyed.</h2>
          <p className={styles.sectionSub}>
            Mastery is not a flat plain — it has bedrock and summit, valley
            and ridge. Each H4 pillar names a different elevation in the
            terrain we set out to chart.
          </p>
        </div>

        <div className={styles.zoneGrid}>
          {ZONES.map(({ key, label, zone, elevation, reading }) => (
            <article key={key} className={styles.zone}>
              <div className={styles.zoneHead}>
                <span className={styles.zoneTag}>{zone}</span>
                <span className={styles.zoneElev}>{elevation}</span>
              </div>
              <h3 className={styles.zoneLabel}>{label}</h3>
              <p className={styles.zoneBody}>{h4.pillars[key]}</p>
              <div className={styles.zoneFoot}>
                <span className={styles.zoneReading}>reading · {reading}</span>
              </div>
              <div className={styles.zoneContour} aria-hidden>
                <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                  {Array.from({ length: 7 }, (_, i) => (
                    <path
                      key={i}
                      d={`M0,${50 - i * 5} Q40,${44 - i * 6} 80,${48 - i * 5} T160,${50 - i * 5} T240,${48 - i * 5}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.55"
                      opacity={0.4 - i * 0.04}
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
          <p className={styles.essayKicker}>From the field survey</p>
          <h2 className={styles.essayTitle}>
            What the terrain reveals.
          </h2>
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
              Surveying the elevations of how students learn — so they may
              know how deep their mastery runs.
            </p>
          </div>
          <a href={h4.cta.href} className={styles.colophonCta}>
            Take a reading →
          </a>
        </div>
        <div className={styles.colophonRule} aria-hidden />
        <div className={styles.colophonMeta}>
          <span>Sheet I of III · Surveyed MMXXVI</span>
          <span>1 km ≈ a learner's lifetime</span>
        </div>
      </footer>
    </div>
  );
}
