import styles from "./atlas.module.css";

const REGIONS = [
  { x: 28, y: 32, name: "the architects", small: "systems & structure" },
  { x: 62, y: 24, name: "the storytellers", small: "narrative & meaning" },
  { x: 78, y: 52, name: "the synthesists", small: "cross-domain transfer" },
  { x: 22, y: 64, name: "the experimenters", small: "hypothesis & test" },
  { x: 50, y: 70, name: "the cartographers", small: "frameworks & maps" },
];

export function CapabilityMap() {
  return (
    <svg
      viewBox="0 0 100 90"
      className={styles.map}
      role="img"
      aria-label="An abstract map of regions of human capability"
    >
      <defs>
        <pattern
          id="atlas-grid"
          x="0"
          y="0"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 6 0 L 0 0 0 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.12"
            opacity="0.18"
          />
        </pattern>
      </defs>

      <rect width="100" height="90" fill="url(#atlas-grid)" />

      {/* coastline shapes — abstract continent */}
      <path
        d="M 12 28 Q 22 18 38 22 Q 52 14 66 18 Q 80 14 88 22
           Q 94 32 90 44 Q 92 56 84 64 Q 76 76 60 78
           Q 44 82 30 76 Q 16 70 12 56 Q 8 42 12 28 Z"
        fill="rgba(180, 95, 60, 0.05)"
        stroke="rgba(38, 50, 80, 0.5)"
        strokeWidth="0.35"
        strokeDasharray="0.6 0.4"
      />

      {/* inner topographic line */}
      <path
        d="M 22 36 Q 32 28 46 30 Q 58 24 70 30 Q 82 36 80 50
           Q 78 62 64 66 Q 50 70 36 66 Q 22 60 22 48 Z"
        fill="none"
        stroke="rgba(38, 50, 80, 0.32)"
        strokeWidth="0.22"
        strokeDasharray="0.5 0.5"
      />

      {/* tighter inland contour */}
      <path
        d="M 36 46 Q 44 40 56 44 Q 66 48 64 56 Q 56 62 44 60 Q 36 56 36 46 Z"
        fill="none"
        stroke="rgba(38, 50, 80, 0.22)"
        strokeWidth="0.18"
        strokeDasharray="0.4 0.4"
      />

      {/* compass rose */}
      <g transform="translate(88 80)" opacity="0.7">
        <circle r="3.6" fill="none" stroke="rgba(38, 50, 80, 0.6)" strokeWidth="0.18" />
        <path d="M 0 -3.6 L 0.7 -0.5 L 0 0 L -0.7 -0.5 Z" fill="rgba(180, 95, 60, 0.85)" />
        <path d="M 0 3.6 L -0.7 0.5 L 0 0 L 0.7 0.5 Z" fill="rgba(38, 50, 80, 0.5)" />
        <path d="M -3.6 0 L -0.5 0.5 L 0 0 L -0.5 -0.5 Z" fill="rgba(38, 50, 80, 0.5)" />
        <path d="M 3.6 0 L 0.5 -0.5 L 0 0 L 0.5 0.5 Z" fill="rgba(38, 50, 80, 0.5)" />
        <text
          x="0"
          y="-4.4"
          textAnchor="middle"
          fontSize="1.6"
          fontFamily="serif"
          fill="rgba(38, 50, 80, 0.7)"
        >
          N
        </text>
      </g>

      {/* latitude tick marks on the left edge */}
      {[14, 30, 46, 62, 78].map((y, i) => (
        <g key={i}>
          <line
            x1="3"
            x2="6"
            y1={y}
            y2={y}
            stroke="rgba(38, 50, 80, 0.4)"
            strokeWidth="0.18"
          />
          <text
            x="2"
            y={y + 0.7}
            fontSize="1.4"
            fontFamily="serif"
            fill="rgba(38, 50, 80, 0.45)"
            textAnchor="end"
          >
            {(60 - i * 12).toString()}°
          </text>
        </g>
      ))}

      {/* regions */}
      {REGIONS.map((r, i) => (
        <g key={r.name}>
          {/* faint connecting threads between regions */}
          {i < REGIONS.length - 1 && (
            <line
              x1={r.x}
              y1={r.y}
              x2={REGIONS[i + 1].x}
              y2={REGIONS[i + 1].y}
              stroke="rgba(180, 95, 60, 0.25)"
              strokeWidth="0.14"
              strokeDasharray="0.3 0.6"
            />
          )}
          <circle
            cx={r.x}
            cy={r.y}
            r="0.9"
            fill="rgba(180, 95, 60, 0.85)"
          />
          <circle
            cx={r.x}
            cy={r.y}
            r="2.2"
            fill="none"
            stroke="rgba(180, 95, 60, 0.4)"
            strokeWidth="0.18"
          />
          <text
            x={r.x}
            y={r.y - 3.5}
            fontSize="2"
            fontFamily="serif"
            fontStyle="italic"
            textAnchor="middle"
            fill="rgba(38, 50, 80, 0.92)"
          >
            {r.name}
          </text>
          <text
            x={r.x}
            y={r.y - 1.4}
            fontSize="1.3"
            fontFamily="sans-serif"
            textAnchor="middle"
            fill="rgba(38, 50, 80, 0.55)"
          >
            {r.small}
          </text>
        </g>
      ))}

      {/* scale bar */}
      <g transform="translate(10 84)">
        <line x1="0" y1="0" x2="20" y2="0" stroke="rgba(38, 50, 80, 0.5)" strokeWidth="0.25" />
        <line x1="0" y1="-1" x2="0" y2="1" stroke="rgba(38, 50, 80, 0.5)" strokeWidth="0.25" />
        <line x1="10" y1="-0.6" x2="10" y2="0.6" stroke="rgba(38, 50, 80, 0.5)" strokeWidth="0.25" />
        <line x1="20" y1="-1" x2="20" y2="1" stroke="rgba(38, 50, 80, 0.5)" strokeWidth="0.25" />
        <text x="10" y="3" fontSize="1.3" fontFamily="serif" textAnchor="middle" fill="rgba(38, 50, 80, 0.55)">
          a learner's lifetime
        </text>
      </g>
    </svg>
  );
}
