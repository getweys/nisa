export default function Feature2Illustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="feature2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#feature2)" opacity="0.1" />
      <rect x="40" y="25" width="40" height="70" rx="8" fill="#212121" />
      <rect x="43" y="32" width="34" height="50" rx="4" fill="white" />
      <circle cx="60" cy="88" r="4" fill="#374151" />
      <rect x="46" y="36" width="28" height="4" rx="2" fill="url(#feature2)" />
      <rect x="46" y="44" width="20" height="3" rx="1.5" fill="#9CA3AF" />
      <rect x="46" y="50" width="24" height="3" rx="1.5" fill="#9CA3AF" />
      <rect x="46" y="58" width="28" height="16" rx="4" fill="url(#feature2)" />
      <text
        x="60"
        y="64"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        ₨250
      </text>
      <text x="60" y="72" textAnchor="middle" fill="white" fontSize="6">
        Fixed Rate
      </text>
      <circle cx="85" cy="40" r="8" fill="#FBBF24" />
      <text
        x="85"
        y="43"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        ₨
      </text>
      <circle cx="25" cy="70" r="10" fill="url(#feature2)" />
      <path
        d="M20 70 L23 73 L30 66"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
