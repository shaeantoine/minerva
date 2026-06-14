import styles from "./herbarium.module.css";

export function PressedSpecimen() {
  return (
    <svg
      viewBox="0 0 100 130"
      className={styles.pressedSvg}
      role="img"
      aria-label="A pressed botanical specimen mounted on a herbarium sheet"
    >
      {/* mounting paper rectangle */}
      <rect
        x="6"
        y="6"
        width="88"
        height="118"
        fill="rgba(255, 252, 244, 0.55)"
        stroke="rgba(28, 28, 28, 0.35)"
        strokeWidth="0.25"
      />

      {/* corner pin / mount marks */}
      {[
        [12, 12],
        [88, 12],
        [12, 118],
        [88, 118],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <path
            d={`M ${x - 1.6} ${y} L ${x + 1.6} ${y}`}
            stroke="rgba(184, 148, 26, 0.95)"
            strokeWidth="0.45"
          />
          <path
            d={`M ${x} ${y - 1.6} L ${x} ${y + 1.6}`}
            stroke="rgba(184, 148, 26, 0.95)"
            strokeWidth="0.45"
          />
        </g>
      ))}

      {/* main stem (sinuous) */}
      <path
        d="M 50 116 Q 47 96 51 76 Q 55 56 49 38 Q 45 26 50 16"
        fill="none"
        stroke="rgba(28, 28, 28, 0.92)"
        strokeWidth="0.95"
        strokeLinecap="round"
      />

      {/* secondary stem */}
      <path
        d="M 51 76 Q 60 70 64 62 Q 67 54 64 46"
        fill="none"
        stroke="rgba(28, 28, 28, 0.78)"
        strokeWidth="0.6"
        strokeLinecap="round"
      />

      {/* leaves down the main stem */}
      {[
        { y: 100, side: -1, rot: -28, scale: 1.1 },
        { y: 88, side: 1, rot: 30, scale: 1.0 },
        { y: 78, side: -1, rot: -34, scale: 1.05 },
        { y: 64, side: 1, rot: 28, scale: 0.9 },
        { y: 50, side: -1, rot: -26, scale: 0.95 },
        { y: 38, side: 1, rot: 24, scale: 0.85 },
      ].map((l, i) => {
        const cx = 50 + l.side * 9;
        return (
          <g key={i}>
            <ellipse
              cx={cx}
              cy={l.y}
              rx={9 * l.scale}
              ry={3 * l.scale}
              fill="rgba(45, 90, 61, 0.18)"
              stroke="rgba(45, 90, 61, 0.92)"
              strokeWidth="0.34"
              transform={`rotate(${l.rot} ${cx} ${l.y})`}
            />
            <line
              x1={50}
              y1={l.y}
              x2={cx}
              y2={l.y}
              stroke="rgba(45, 90, 61, 0.7)"
              strokeWidth="0.28"
            />
          </g>
        );
      })}

      {/* secondary stem leaves */}
      {[
        { x: 60, y: 68, rot: 40 },
        { x: 64, y: 56, rot: 50 },
        { x: 64, y: 48, rot: 60 },
      ].map((l, i) => (
        <ellipse
          key={`s-${i}`}
          cx={l.x}
          cy={l.y}
          rx="5"
          ry="1.8"
          fill="rgba(45, 90, 61, 0.16)"
          stroke="rgba(45, 90, 61, 0.85)"
          strokeWidth="0.3"
          transform={`rotate(${l.rot} ${l.x} ${l.y})`}
        />
      ))}

      {/* bloom cluster at top — five rose-pink petals + gold center */}
      <g>
        {[
          { x: 50, y: 16, r: 4.2, ry: 5.5, rot: 0 },
          { x: 44, y: 19, r: 3.8, ry: 5, rot: -45 },
          { x: 56, y: 19, r: 3.8, ry: 5, rot: 45 },
          { x: 47, y: 12, r: 3.4, ry: 4.6, rot: -20 },
          { x: 53, y: 12, r: 3.4, ry: 4.6, rot: 20 },
        ].map((p, i) => (
          <ellipse
            key={i}
            cx={p.x}
            cy={p.y}
            rx={p.r}
            ry={p.ry}
            fill="rgba(158, 103, 112, 0.55)"
            stroke="rgba(28, 28, 28, 0.78)"
            strokeWidth="0.38"
            transform={`rotate(${p.rot} ${p.x} ${p.y})`}
          />
        ))}
        <circle cx="50" cy="16" r="2" fill="rgba(184, 148, 26, 0.95)" />
        <circle
          cx="50"
          cy="16"
          r="2"
          fill="none"
          stroke="rgba(28, 28, 28, 0.65)"
          strokeWidth="0.3"
        />
      </g>

      {/* small bud on secondary stem */}
      <g>
        <ellipse
          cx="64"
          cy="42"
          rx="2.4"
          ry="3.2"
          fill="rgba(158, 103, 112, 0.4)"
          stroke="rgba(28, 28, 28, 0.7)"
          strokeWidth="0.32"
        />
        <path
          d="M 64 39 Q 63 36 64 33 Q 65 36 64 39"
          fill="rgba(45, 90, 61, 0.7)"
        />
      </g>

      {/* root system */}
      {Array.from({ length: 7 }, (_, i) => {
        const angle = 200 + i * 20;
        const a = ((angle - 90) * Math.PI) / 180;
        const len = 8 + (i % 3) * 3;
        const x = 50 + Math.cos(a) * len;
        const y = 116 + Math.sin(a) * len;
        return (
          <path
            key={i}
            d={`M 50 116 Q ${50 + (x - 50) * 0.5} ${116 + (y - 116) * 0.6} ${x} ${y}`}
            fill="none"
            stroke="rgba(28, 28, 28, 0.55)"
            strokeWidth="0.32"
            strokeDasharray="0.4 0.5"
          />
        );
      })}

      {/* ground / soil hint */}
      <line
        x1="20"
        y1="116"
        x2="80"
        y2="116"
        stroke="rgba(28, 28, 28, 0.3)"
        strokeWidth="0.18"
        strokeDasharray="0.6 0.5"
      />

      {/* watercolor wash beneath bloom */}
      <ellipse
        cx="50"
        cy="16"
        rx="14"
        ry="9"
        fill="rgba(158, 103, 112, 0.06)"
      />

      {/* hand-lettered label tag at bottom-right */}
      <rect
        x="60"
        y="100"
        width="32"
        height="16"
        fill="rgba(255, 252, 244, 0.92)"
        stroke="rgba(28, 28, 28, 0.55)"
        strokeWidth="0.28"
      />
      <text
        x="62"
        y="105"
        fontSize="2"
        fontFamily="serif"
        fontStyle="italic"
        fill="rgba(28, 28, 28, 0.9)"
      >
        Discipulus
      </text>
      <text
        x="62"
        y="108.5"
        fontSize="2"
        fontFamily="serif"
        fontStyle="italic"
        fill="rgba(28, 28, 28, 0.9)"
      >
        capabilis
      </text>
      <text
        x="62"
        y="112"
        fontSize="1.4"
        fontFamily="serif"
        fill="rgba(28, 28, 28, 0.65)"
      >
        H4 · MMXXVI
      </text>
      <text
        x="62"
        y="114.6"
        fontSize="1.2"
        fontFamily="ui-monospace, monospace"
        fill="rgba(184, 148, 26, 0.85)"
      >
        No. 0247
      </text>

      {/* tiny annotation arrow pointing to the bloom */}
      <path
        d="M 76 24 Q 68 22 60 18"
        fill="none"
        stroke="rgba(28, 28, 28, 0.5)"
        strokeWidth="0.18"
      />
      <text
        x="78"
        y="24"
        fontSize="1.5"
        fontFamily="serif"
        fontStyle="italic"
        fill="rgba(28, 28, 28, 0.7)"
      >
        in flower
      </text>
    </svg>
  );
}
