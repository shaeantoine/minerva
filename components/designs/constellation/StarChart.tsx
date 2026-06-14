import styles from "./constellation.module.css";

const BG_STARS: { x: number; y: number; r: number; tw?: number }[] = [
  { x: 6, y: 8, r: 0.18 },
  { x: 14, y: 12, r: 0.22, tw: 0 },
  { x: 22, y: 6, r: 0.16 },
  { x: 32, y: 14, r: 0.2, tw: 1 },
  { x: 42, y: 8, r: 0.18 },
  { x: 54, y: 12, r: 0.24, tw: 2 },
  { x: 64, y: 6, r: 0.16 },
  { x: 78, y: 10, r: 0.2, tw: 3 },
  { x: 88, y: 14, r: 0.18 },
  { x: 96, y: 6, r: 0.16, tw: 0 },
  { x: 4, y: 22, r: 0.2 },
  { x: 12, y: 30, r: 0.18, tw: 4 },
  { x: 88, y: 28, r: 0.22, tw: 1 },
  { x: 94, y: 36, r: 0.18 },
  { x: 6, y: 42, r: 0.18, tw: 2 },
  { x: 92, y: 50, r: 0.18 },
  { x: 8, y: 58, r: 0.2, tw: 3 },
  { x: 96, y: 64, r: 0.18, tw: 4 },
  { x: 4, y: 72, r: 0.22 },
  { x: 92, y: 76, r: 0.18, tw: 0 },
  { x: 12, y: 82, r: 0.18, tw: 2 },
  { x: 24, y: 86, r: 0.2 },
  { x: 38, y: 82, r: 0.16, tw: 1 },
  { x: 56, y: 86, r: 0.18 },
  { x: 70, y: 82, r: 0.2, tw: 3 },
  { x: 82, y: 86, r: 0.18 },
  { x: 18, y: 50, r: 0.16 },
  { x: 26, y: 60, r: 0.16, tw: 4 },
  { x: 48, y: 60, r: 0.18 },
  { x: 60, y: 50, r: 0.16, tw: 2 },
];

const COMPASS = {
  name: "the compass rose",
  center: { cx: 33, cy: 50 },
  stars: [
    { x: 33, y: 50, r: 1.4 },
    { x: 33, y: 42, r: 0.85 },
    { x: 33, y: 58, r: 0.85 },
    { x: 25, y: 50, r: 0.85 },
    { x: 41, y: 50, r: 0.85 },
  ],
};

const OPEN_SKY = {
  name: "the open sky",
  center: { cx: 68, cy: 30 },
  stars: [
    { x: 56, y: 26, r: 0.7 },
    { x: 64, y: 18, r: 0.75 },
    { x: 72, y: 22, r: 0.75 },
    { x: 80, y: 28, r: 0.7 },
    { x: 76, y: 36, r: 0.7 },
    { x: 66, y: 36, r: 0.95 },
    { x: 60, y: 32, r: 0.7 },
  ],
  lines: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 0],
    [5, 1],
  ],
};

const NORTH_STAR = {
  name: "the north star",
  center: { cx: 72, cy: 62 },
  stars: [
    { x: 72, y: 60, r: 1.8 },
    { x: 65, y: 66, r: 0.7 },
    { x: 79, y: 66, r: 0.7 },
    { x: 72, y: 72, r: 0.65 },
  ],
};

export function StarChart() {
  return (
    <svg
      viewBox="0 0 100 90"
      className={styles.chart}
      role="img"
      aria-label="A celestial chart showing three named constellations of capability"
    >
      <defs>
        <radialGradient id="constellation-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(212, 175, 55, 0.06)" />
          <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" />
        </radialGradient>
        <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>

      {/* outer ring frame, like a celestial atlas plate */}
      <circle
        cx="50"
        cy="45"
        r="44"
        fill="url(#constellation-glow)"
        stroke="rgba(212, 175, 55, 0.25)"
        strokeWidth="0.18"
      />
      <circle
        cx="50"
        cy="45"
        r="42"
        fill="none"
        stroke="rgba(212, 175, 55, 0.18)"
        strokeWidth="0.12"
        strokeDasharray="0.4 0.6"
      />

      {/* ecliptic / horizon arc */}
      <path
        d="M 8 56 Q 50 48 92 56"
        fill="none"
        stroke="rgba(192, 197, 204, 0.25)"
        strokeWidth="0.15"
        strokeDasharray="0.6 0.6"
      />

      {/* zodiacal degree marks around the inner ring */}
      {Array.from({ length: 24 }, (_, i) => {
        const angle = (i / 24) * 2 * Math.PI - Math.PI / 2;
        const x1 = 50 + Math.cos(angle) * 41.5;
        const y1 = 45 + Math.sin(angle) * 41.5;
        const x2 = 50 + Math.cos(angle) * 43;
        const y2 = 45 + Math.sin(angle) * 43;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(212, 175, 55, 0.5)"
            strokeWidth={i % 6 === 0 ? "0.25" : "0.12"}
          />
        );
      })}

      {/* background stars (twinkling) */}
      {BG_STARS.map((s, i) => (
        <circle
          key={`bg-${i}`}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="rgba(243, 238, 219, 0.7)"
          className={s.tw !== undefined ? styles.twinkle : undefined}
          style={
            s.tw !== undefined
              ? { animationDelay: `${s.tw * 0.7}s` }
              : undefined
          }
        />
      ))}

      {/* compass rose constellation */}
      {COMPASS.stars.slice(1).map((s, i) => (
        <line
          key={`cr-line-${i}`}
          x1={COMPASS.stars[0].x}
          y1={COMPASS.stars[0].y}
          x2={s.x}
          y2={s.y}
          stroke="rgba(212, 175, 55, 0.55)"
          strokeWidth="0.18"
        />
      ))}
      {COMPASS.stars.map((s, i) => (
        <g key={`cr-star-${i}`}>
          <circle
            cx={s.x}
            cy={s.y}
            r={s.r * 1.6}
            fill="rgba(212, 175, 55, 0.18)"
            filter="url(#star-glow)"
          />
          <circle
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="rgba(243, 238, 219, 0.98)"
            className={styles.twinkleSlow}
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        </g>
      ))}
      <text
        x={COMPASS.center.cx}
        y={COMPASS.center.cy + 12}
        fontSize="2.1"
        fontFamily="serif"
        fontStyle="italic"
        textAnchor="middle"
        fill="rgba(212, 175, 55, 0.95)"
      >
        {COMPASS.name}
      </text>

      {/* open sky constellation */}
      {OPEN_SKY.lines.map(([a, b], i) => (
        <line
          key={`os-line-${i}`}
          x1={OPEN_SKY.stars[a].x}
          y1={OPEN_SKY.stars[a].y}
          x2={OPEN_SKY.stars[b].x}
          y2={OPEN_SKY.stars[b].y}
          stroke="rgba(212, 175, 55, 0.45)"
          strokeWidth="0.15"
        />
      ))}
      {OPEN_SKY.stars.map((s, i) => (
        <g key={`os-star-${i}`}>
          <circle
            cx={s.x}
            cy={s.y}
            r={s.r * 1.6}
            fill="rgba(212, 175, 55, 0.15)"
            filter="url(#star-glow)"
          />
          <circle
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="rgba(243, 238, 219, 0.95)"
            className={styles.twinkleSlow}
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        </g>
      ))}
      <text
        x={OPEN_SKY.center.cx}
        y={OPEN_SKY.center.cy - 10}
        fontSize="2.1"
        fontFamily="serif"
        fontStyle="italic"
        textAnchor="middle"
        fill="rgba(212, 175, 55, 0.95)"
      >
        {OPEN_SKY.name}
      </text>

      {/* north star constellation */}
      {NORTH_STAR.stars.slice(1).map((s, i) => (
        <line
          key={`ns-line-${i}`}
          x1={NORTH_STAR.stars[0].x}
          y1={NORTH_STAR.stars[0].y}
          x2={s.x}
          y2={s.y}
          stroke="rgba(212, 175, 55, 0.55)"
          strokeWidth="0.18"
        />
      ))}
      {NORTH_STAR.stars.map((s, i) => (
        <g key={`ns-star-${i}`}>
          <circle
            cx={s.x}
            cy={s.y}
            r={s.r * 2}
            fill="rgba(212, 175, 55, 0.22)"
            filter="url(#star-glow)"
          />
          <circle
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="rgba(243, 238, 219, 1)"
            className={i === 0 ? styles.twinkleBright : styles.twinkleSlow}
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        </g>
      ))}
      <text
        x={NORTH_STAR.center.cx}
        y={NORTH_STAR.center.cy + 14}
        fontSize="2.1"
        fontFamily="serif"
        fontStyle="italic"
        textAnchor="middle"
        fill="rgba(212, 175, 55, 0.95)"
      >
        {NORTH_STAR.name}
      </text>

      {/* small N marker on the inner ring */}
      <text
        x="50"
        y="3"
        fontSize="1.6"
        fontFamily="serif"
        textAnchor="middle"
        fill="rgba(212, 175, 55, 0.7)"
      >
        N
      </text>
    </svg>
  );
}
