import styles from "./terrain.module.css";

const PEAKS = [
  { x: 28, y: 44, name: "Trailhead", elevation: "210 m" },
  { x: 56, y: 32, name: "Plateau", elevation: "880 m" },
  { x: 78, y: 22, name: "Summit", elevation: "1,247 m" },
];

const CONTOURS = [
  { d: "M 8 70 Q 30 66 52 70 T 96 72", opacity: 0.55 },
  { d: "M 10 62 Q 28 56 50 60 Q 70 64 92 62", opacity: 0.5 },
  { d: "M 12 54 Q 26 46 46 50 Q 62 54 76 50 Q 86 46 92 50", opacity: 0.45 },
  { d: "M 16 46 Q 28 38 44 42 Q 56 46 66 42 Q 76 38 86 44", opacity: 0.55 },
  { d: "M 20 38 Q 30 32 42 36 Q 52 40 60 36 Q 70 30 82 38", opacity: 0.65 },
  { d: "M 22 32 Q 32 26 42 30 Q 50 32 56 30 Q 70 26 80 32", opacity: 0.7 },
  { d: "M 24 26 Q 32 22 40 24 Q 48 28 54 26 Q 70 22 78 26", opacity: 0.78 },
  { d: "M 26 22 Q 32 18 38 20 Q 48 24 54 22 Q 68 20 76 22", opacity: 0.85 },
  { d: "M 50 18 Q 58 16 64 18 Q 72 20 76 18", opacity: 0.95 },
];

export function ContourMap() {
  return (
    <svg
      viewBox="0 0 100 90"
      className={styles.map}
      role="img"
      aria-label="A topographic survey showing three elevations of capability"
    >
      <defs>
        <pattern
          id="terrain-grid"
          x="0"
          y="0"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 8 0 L 0 0 0 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
            opacity="0.18"
          />
        </pattern>
        <linearGradient id="terrain-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(15, 110, 122, 0.10)" />
          <stop offset="60%" stopColor="rgba(15, 110, 122, 0.04)" />
          <stop offset="100%" stopColor="rgba(15, 110, 122, 0)" />
        </linearGradient>
      </defs>

      <rect width="100" height="90" fill="url(#terrain-grid)" />
      <rect width="100" height="90" fill="url(#terrain-gradient)" />

      {/* contour lines, deepest first */}
      {CONTOURS.map((c, i) => (
        <path
          key={i}
          d={c.d}
          fill="none"
          stroke="rgba(15, 110, 122, 1)"
          strokeWidth="0.35"
          opacity={c.opacity}
          className={i >= CONTOURS.length - 3 ? styles.summit : undefined}
        />
      ))}

      {/* faint shadow contours suggesting a second ridge */}
      <path
        d="M 14 80 Q 30 76 46 80 Q 60 82 76 80 Q 88 78 94 80"
        fill="none"
        stroke="rgba(15, 110, 122, 0.5)"
        strokeWidth="0.3"
        strokeDasharray="0.4 0.6"
      />
      <path
        d="M 18 84 Q 36 82 54 84 Q 72 86 92 84"
        fill="none"
        stroke="rgba(15, 110, 122, 0.35)"
        strokeWidth="0.25"
        strokeDasharray="0.4 0.6"
      />

      {/* peaks */}
      {PEAKS.map((p, i) => (
        <g key={p.name}>
          {/* dotted line connecting peaks like a survey traverse */}
          {i < PEAKS.length - 1 && (
            <line
              x1={p.x}
              y1={p.y}
              x2={PEAKS[i + 1].x}
              y2={PEAKS[i + 1].y}
              stroke="rgba(160, 101, 74, 0.7)"
              strokeWidth="0.18"
              strokeDasharray="0.3 0.5"
            />
          )}
          {/* triangular peak marker */}
          <path
            d={`M ${p.x} ${p.y - 1.6} L ${p.x - 1.4} ${p.y + 0.5} L ${p.x + 1.4} ${p.y + 0.5} Z`}
            fill="rgba(160, 101, 74, 0.9)"
            stroke="rgba(26, 58, 46, 0.9)"
            strokeWidth="0.18"
          />
          {/* small benchmark triangle */}
          <circle
            cx={p.x}
            cy={p.y + 0.2}
            r="0.5"
            fill="rgba(26, 58, 46, 0.9)"
          />
          <text
            x={p.x}
            y={p.y - 3.2}
            fontSize="2"
            fontFamily="serif"
            fontStyle="italic"
            textAnchor="middle"
            fill="rgba(26, 58, 46, 0.95)"
          >
            {p.name}
          </text>
          <text
            x={p.x}
            y={p.y - 1.2}
            fontSize="1.3"
            fontFamily="ui-monospace, monospace"
            textAnchor="middle"
            fill="rgba(15, 110, 122, 0.85)"
          >
            ▲ {p.elevation}
          </text>
        </g>
      ))}

      {/* north arrow */}
      <g transform="translate(90 12)">
        <line x1="0" y1="-3" x2="0" y2="3" stroke="rgba(26, 58, 46, 0.7)" strokeWidth="0.22" />
        <path d="M 0 -3 L -0.6 -2 L 0.6 -2 Z" fill="rgba(160, 101, 74, 0.9)" />
        <text
          x="0"
          y="-3.8"
          fontSize="1.4"
          fontFamily="serif"
          textAnchor="middle"
          fill="rgba(26, 58, 46, 0.7)"
        >
          N
        </text>
      </g>

      {/* eastern grid coordinate ticks */}
      {[20, 40, 60, 80].map((y) => (
        <g key={y}>
          <line
            x1="96"
            x2="98"
            y1={y}
            y2={y}
            stroke="rgba(26, 58, 46, 0.4)"
            strokeWidth="0.18"
          />
          <text
            x="99"
            y={y + 0.6}
            fontSize="1.1"
            fontFamily="ui-monospace, monospace"
            fill="rgba(26, 58, 46, 0.45)"
          >
            {(50 - y * 0.5).toFixed(0)}
          </text>
        </g>
      ))}

      {/* scale bar */}
      <g transform="translate(8 84)">
        <rect x="0" y="-0.5" width="6" height="1" fill="rgba(26, 58, 46, 0.85)" />
        <rect x="6" y="-0.5" width="6" height="1" fill="none" stroke="rgba(26, 58, 46, 0.85)" strokeWidth="0.18" />
        <rect x="12" y="-0.5" width="6" height="1" fill="rgba(26, 58, 46, 0.85)" />
        <text
          x="0"
          y="3.4"
          fontSize="1.2"
          fontFamily="ui-monospace, monospace"
          fill="rgba(26, 58, 46, 0.7)"
        >
          0
        </text>
        <text
          x="18"
          y="3.4"
          fontSize="1.2"
          fontFamily="ui-monospace, monospace"
          fill="rgba(26, 58, 46, 0.7)"
        >
          1 km
        </text>
      </g>
    </svg>
  );
}
