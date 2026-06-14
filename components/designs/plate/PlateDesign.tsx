import { h4 } from "@/content/h4";
import { CapabilityPlate } from "./CapabilityPlate";
import styles from "./plate.module.css";

const ANNOTATIONS: Array<{
  key: keyof typeof h4.pillars;
  label: string;
  fig: string;
}> = [
  { key: "mission", label: "Mission", fig: "FIG. I" },
  { key: "vision", label: "Vision", fig: "FIG. II" },
  { key: "purpose", label: "Purpose", fig: "FIG. III" },
];

export function PlateDesign() {
  return (
    <div className={styles.page}>
      <header className={styles.masthead}>
        <div className={styles.mastheadInner}>
          <span className={styles.mastheadName}>H4</span>
          <span className={styles.mastheadCenter}>
            Royal Folio · Plate the First
          </span>
          <span className={styles.mastheadRight}>MMXXVI</span>
        </div>
      </header>

      <section className={styles.plate}>
        <div className={styles.plateInner}>
          <p className={styles.plateEyebrow}>Plate I</p>
          <h1 className={styles.plateTitle}>
            <em>The</em> Capability Bloom
          </h1>
          <p className={styles.plateSubtitle}>
            being a study of how every learner unfolds —
            <br />
            drawn from observation, in three figures
          </p>

          <div className={styles.illustration}>
            <CapabilityPlate />
          </div>

          <p className={styles.plateCaption}>
            <em>Discipulus capabilis</em> · drawn ad vivum, MMXXVI ·
            engraved at the request of educators of the rising cohort
          </p>
        </div>
      </section>

      <section className={styles.figures}>
        <div className={styles.figuresInner}>
          <p className={styles.figuresKicker}>
            ❦ With reference to the figures
          </p>
          <div className={styles.figureRow}>
            {ANNOTATIONS.map(({ key, label, fig }) => (
              <article key={key} className={styles.figure}>
                <p className={styles.figureFig}>{fig}</p>
                <h3 className={styles.figureLabel}>{label}</h3>
                <p className={styles.figureBody}>{h4.pillars[key]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.essay}>
        <div className={styles.essayInner}>
          <p className={styles.essayKicker}>Annotations</p>
          <h2 className={styles.essayTitle}>
            <em>Of</em> the figure here drawn.
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
        <div className={styles.colophonRule} aria-hidden />
        <div className={styles.colophonInner}>
          <div>
            <p className={styles.colophonName}>H4</p>
            <p className={styles.colophonImprint}>
              <em>
                Drawing what learning makes — so we may know what every
                learner may yet become.
              </em>
            </p>
          </div>
          <a href={h4.cta.href} className={styles.colophonCta}>
            <span>Subscribe to the folio</span>
            <span className={styles.colophonArrow}>→</span>
          </a>
        </div>
        <p className={styles.colophonImprintMeta}>
          ❦ Plate I of an ongoing folio · drawn, etched, &amp; published
          ad vivum · MMXXVI ❦
        </p>
      </footer>
    </div>
  );
}
