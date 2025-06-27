export default function PersonalIllustration() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <defs>
        <linearGradient id="personalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <path d="M14 16 L34 16 L32 36 L16 36 Z" fill="url(#personalGrad)" />
      <path
        d="M14 16 L34 16 L32 36 L16 36 Z"
        fill="none"
        stroke="white"
        strokeWidth="1"
      />
      <path
        d="M20 16 C20 13 22 11 24 11 S28 13 28 16"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      <g transform="translate(8, 6)">
        <path
          d="M6 3 C6 1.5 4.5 0 3 0 S0 1.5 0 3 C0 4.5 3 9 3 9 S6 4.5 6 3 Z"
          fill="white"
        />
        <path
          d="M6 3 C6 1.5 7.5 0 9 0 S12 1.5 12 3 C12 4.5 9 9 9 9 S6 4.5 6 3 Z"
          fill="white"
        />
      </g>
      <rect
        x="36"
        y="26"
        width="10"
        height="16"
        rx="2"
        fill="white"
        stroke="url(#personalGrad)"
        strokeWidth="1"
      />
      <rect
        x="37"
        y="28"
        width="8"
        height="10"
        rx="1"
        fill="url(#personalGrad)"
        opacity="0.3"
      />
      <circle cx="41" cy="40" r="1" fill="url(#personalGrad)" />
    </svg>
  );
}
