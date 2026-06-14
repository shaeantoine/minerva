import styles from "./plate.module.css";

export function CapabilityPlate() {
  return (
    <svg
      viewBox="0 0 100 130"
      className={styles.plateSvg}
      role="img"
      aria-label="A theatrical engraved plate of the Capability Bloom, with three figures annotated"
    >
      {/* engraved frame border */}
      <rect
        x="3"
        y="3"
        width="94"
        height="124"
        fill="none"
        stroke="rgba(20, 20, 20, 0.85)"
        strokeWidth="0.4"
      />
      <rect
        x="5"
        y="5"
        width="90"
        height="120"
        fill="none"
        stroke="rgba(20, 20, 20, 0.5)"
        strokeWidth="0.18"
      />

      {/* watercolor wash backdrop, suggesting depth behind the figure */}
      <ellipse
        cx="50"
        cy="62"
        rx="38"
        ry="46"
        fill="rgba(44, 74, 142, 0.04)"
      />
      <ellipse
        cx="48"
        cy="50"
        rx="22"
        ry="32"
        fill="rgba(44, 74, 142, 0.03)"
      />

      {/* ground line / soil */}
      <line
        x1="22"
        y1="116"
        x2="78"
        y2="116"
        stroke="rgba(20, 20, 20, 0.85)"
        strokeWidth="0.4"
      />
      <line
        x1="20"
        y1="118"
        x2="80"
        y2="118"
        stroke="rgba(20, 20, 20, 0.45)"
        strokeWidth="0.22"
        strokeDasharray="0.6 0.4"
      />

      {/* main stem, rising from soil */}
      <path
        d="M 50 116 Q 47 92 51 70 Q 55 50 50 32 Q 46 22 50 14"
        fill="none"
        stroke="rgba(20, 20, 20, 0.95)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* secondary stem to FIG. II */}
      <path
        d="M 51 70 Q 62 64 70 56 Q 76 50 76 44"
        fill="none"
        stroke="rgba(20, 20, 20, 0.92)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* tertiary stem to FIG. III */}
      <path
        d="M 47 92 Q 38 86 30 80 Q 24 76 22 72"
        fill="none"
        stroke="rgba(20, 20, 20, 0.92)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* leaves down the main and secondary stems */}
      {[
        { x: 38, y: 102, rot: -28 },
        { x: 60, y: 92, rot: 32 },
        { x: 42, y: 80, rot: -36 },
        { x: 58, y: 60, rot: 38 },
        { x: 44, y: 48, rot: -30 },
        { x: 60, y: 36, rot: 28 },
        { x: 36, y: 86, rot: -50 },
        { x: 64, y: 60, rot: 60 },
      ].map((l, i) => (
        <g key={i}>
          <ellipse
            cx={l.x}
            cy={l.y}
            rx="9"
            ry="3.2"
            fill="rgba(44, 74, 142, 0.16)"
            stroke="rgba(20, 20, 20, 0.92)"
            strokeWidth="0.42"
            transform={`rotate(${l.rot} ${l.x} ${l.y})`}
          />
          {/* central vein */}
          <line
            x1={l.x - 8}
            y1={l.y}
            x2={l.x + 8}
            y2={l.y}
            stroke="rgba(20, 20, 20, 0.55)"
            strokeWidth="0.22"
            transform={`rotate(${l.rot} ${l.x} ${l.y})`}
          />
        </g>
      ))}

      {/* FIG. I — top, central — the largest bloom (Mission) */}
      <g>
        {/* outer petals */}
        {[-1, 0, 1].map((side, i) => (
          <ellipse
            key={`p1-${i}`}
            cx={50 + side * 5}
            cy={14 - Math.abs(side) * 1.5}
            rx="3.6"
            ry="6"
            fill="rgba(44, 74, 142, 0.55)"
            stroke="rgba(20, 20, 20, 0.95)"
            strokeWidth="0.4"
            transform={`rotate(${side * 22} ${50 + side * 5} ${14 - Math.abs(side) * 1.5})`}
          />
        ))}
        {/* inner petals */}
        {[-1, 0, 1].map((side) => (
          <ellipse
            key={`p1i-${side}`}
            cx={50 + side * 2.5}
            cy={16}
            rx="2.4"
            ry="4.4"
            fill="rgba(44, 74, 142, 0.7)"
            stroke="rgba(20, 20, 20, 0.85)"
            strokeWidth="0.3"
            transform={`rotate(${side * 14} ${50 + side * 2.5} 16)`}
          />
        ))}
        <circle cx="50" cy="17" r="2.2" fill="rgba(20, 20, 20, 0.92)" />
        <circle
          cx="50"
          cy="17"
          r="1.4"
          fill="rgba(252, 247, 232, 1)"
          stroke="rgba(20, 20, 20, 0.85)"
          strokeWidth="0.25"
        />
      </g>

      {/* FIG. II — right, mid-height — secondary bloom (Vision) */}
      <g>
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const a = ((angle - 90) * Math.PI) / 180;
          const x = 76 + Math.cos(a) * 4.5;
          const y = 44 + Math.sin(a) * 4.5;
          return (
            <ellipse
              key={`p2-${angle}`}
              cx={x}
              cy={y}
              rx="2.6"
              ry="4.4"
              fill="rgba(44, 74, 142, 0.45)"
              stroke="rgba(20, 20, 20, 0.9)"
              strokeWidth="0.32"
              transform={`rotate(${angle + 90} ${x} ${y})`}
            />
          );
        })}
        <circle cx="76" cy="44" r="2.6" fill="rgba(44, 74, 142, 0.85)" stroke="rgba(20, 20, 20, 0.9)" strokeWidth="0.32" />
        <circle cx="76" cy="44" r="1.2" fill="rgba(252, 247, 232, 1)" />
      </g>

      {/* FIG. III — left, lower — fruiting body (Purpose) */}
      <g>
        <ellipse
          cx="22"
          cy="72"
          rx="6"
          ry="7.2"
          fill="rgba(44, 74, 142, 0.5)"
          stroke="rgba(20, 20, 20, 0.95)"
          strokeWidth="0.45"
        />
        <path
          d="M 22 65 Q 20 60 22 56 Q 24 60 22 65"
          fill="rgba(20, 20, 20, 0.75)"
        />
        {/* stipple to suggest texture */}
        {[
          [20, 70],
          [24, 73],
          [22, 75],
          [19, 73],
          [25, 70],
          [21, 68],
          [23, 70],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="0.3"
            fill="rgba(20, 20, 20, 0.7)"
          />
        ))}
      </g>

      {/* roots */}
      {[200, 220, 240, 260, 280, 300, 320, 340].map((angle, i) => {
        const a = ((angle - 90) * Math.PI) / 180;
        const len = 7 + (i % 3) * 3;
        const x = 50 + Math.cos(a) * len;
        const y = 116 + Math.sin(a) * len;
        return (
          <path
            key={i}
            d={`M 50 116 Q ${50 + (x - 50) * 0.5} ${116 + (y - 116) * 0.6} ${x} ${y}`}
            fill="none"
            stroke="rgba(20, 20, 20, 0.6)"
            strokeWidth="0.4"
          />
        );
      })}

      {/* annotation labels with leader lines pointing to figures */}
      {/* FIG. I label */}
      <g>
        <line
          x1="58"
          y1="14"
          x2="70"
          y2="10"
          stroke="rgba(20, 20, 20, 0.7)"
          strokeWidth="0.22"
        />
        <text
          x="71"
          y="11"
          fontSize="2.4"
          fontFamily="serif"
          fill="rgba(20, 20, 20, 0.95)"
        >
          FIG. I
        </text>
      </g>

      {/* FIG. II label */}
      <g>
        <line
          x1="83"
          y1="44"
          x2="92"
          y2="40"
          stroke="rgba(20, 20, 20, 0.7)"
          strokeWidth="0.22"
        />
        <text
          x="83"
          y="38"
          fontSize="2.4"
          fontFamily="serif"
          fill="rgba(20, 20, 20, 0.95)"
        >
          FIG. II
        </text>
      </g>

      {/* FIG. III label */}
      <g>
        <line
          x1="14"
          y1="72"
          x2="6"
          y2="68"
          stroke="rgba(20, 20, 20, 0.7)"
          strokeWidth="0.22"
        />
        <text
          x="6"
          y="65"
          fontSize="2.4"
          fontFamily="serif"
          fill="rgba(20, 20, 20, 0.95)"
        >
          FIG. III
        </text>
      </g>

      {/* small ornamental flourish at top */}
      <g transform="translate(50 8)">
        <path
          d="M -8 0 Q -4 -1 0 0 Q 4 -1 8 0"
          fill="none"
          stroke="rgba(44, 74, 142, 0.6)"
          strokeWidth="0.3"
        />
        <circle cx="0" cy="0" r="0.5" fill="rgba(20, 20, 20, 0.8)" />
        <circle cx="-8" cy="0" r="0.35" fill="rgba(20, 20, 20, 0.6)" />
        <circle cx="8" cy="0" r="0.35" fill="rgba(20, 20, 20, 0.6)" />
      </g>

      {/* engraver's mark, lower-left */}
      <text
        x="9"
        y="123"
        fontSize="1.5"
        fontFamily="serif"
        fontStyle="italic"
        fill="rgba(20, 20, 20, 0.55)"
      >
        H4 ad vivum
      </text>
      <text
        x="91"
        y="123"
        fontSize="1.5"
        fontFamily="serif"
        fontStyle="italic"
        textAnchor="end"
        fill="rgba(20, 20, 20, 0.55)"
      >
        del. et sculp.
      </text>
    </svg>
  );
}
