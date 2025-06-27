export default function Feature1Illustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="feature1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7547F" />
          <stop offset="100%" stopColor="#FF8FA3" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#feature1)" opacity="0.1" />
      <circle cx="60" cy="45" r="15" fill="#FBBF24" />
      <path
        d="M50 38 Q60 28 70 38"
        stroke="url(#feature1)"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="55" cy="42" r="2" fill="#374151" />
      <circle cx="65" cy="42" r="2" fill="#374151" />
      <path
        d="M55 50 Q60 55 65 50"
        stroke="#374151"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="45"
        y="60"
        width="30"
        height="25"
        rx="15"
        fill="url(#feature1)"
      />
      <path
        d="M35 75 L85 75 L80 95 L40 95 Z"
        fill="white"
        stroke="url(#feature1)"
        strokeWidth="2"
      />
      <circle cx="50" cy="85" r="3" fill="url(#feature1)" />
      <circle cx="70" cy="85" r="3" fill="url(#feature1)" />
      <path d="M90 30 L100 30 L100 40 L95 50 L90 40 Z" fill="url(#feature1)" />
      <path d="M92 32 L98 32 L98 38 L95 45 L92 38 Z" fill="white" />
      <text
        x="95"
        y="37"
        textAnchor="middle"
        fill="url(#feature1)"
        fontSize="6"
        fontWeight="bold"
      >
        ✓
      </text>
    </svg>
  );
}
