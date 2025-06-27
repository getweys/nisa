export default function Feature5Illustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="feature5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#feature5)" opacity="0.1" />
      <rect
        x="25"
        y="30"
        width="70"
        height="50"
        rx="4"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      <rect
        x="30"
        y="60"
        width="8"
        height="15"
        fill="url(#feature5)"
        opacity="0.7"
      />
      <rect
        x="42"
        y="55"
        width="8"
        height="20"
        fill="url(#feature5)"
        opacity="0.8"
      />
      <rect x="54" y="45" width="8" height="30" fill="url(#feature5)" />
      <rect x="66" y="40" width="8" height="35" fill="url(#feature5)" />
      <rect x="78" y="35" width="8" height="40" fill="url(#feature5)" />
      <path
        d="M34 65 L46 60 L58 50 L70 45 L82 40"
        stroke="#F7547F"
        strokeWidth="2"
        fill="none"
      />
      <g transform="translate(10, 10)">
        <circle cx="8" cy="8" r="6" fill="url(#feature5)" />
        <text
          x="8"
          y="11"
          textAnchor="middle"
          fill="white"
          fontSize="6"
          fontWeight="bold"
        >
          ₨
        </text>
      </g>
      <g transform="translate(95, 15)">
        <circle cx="8" cy="8" r="5" fill="url(#feature5)" />
        <text x="8" y="10" textAnchor="middle" fill="white" fontSize="5">
          ₨
        </text>
      </g>
      <g transform="translate(35, 85)">
        <circle cx="15" cy="10" r="6" fill="#FBBF24" />
        <path
          d="M11 6 Q15 2 19 6"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="13" cy="8" r="0.8" fill="#374151" />
        <circle cx="17" cy="8" r="0.8" fill="#374151" />
        <rect x="8" y="16" width="14" height="10" rx="2" fill="#374151" />
        <rect x="9" y="17" width="12" height="7" rx="1" fill="#60A5FA" />
        <rect x="10" y="18" width="3" height="1.5" fill="white" />
        <rect x="10" y="20" width="4" height="1" fill="white" />
        <rect x="10" y="22" width="3.5" height="1" fill="white" />
      </g>
      <g transform="translate(85, 85)">
        <circle cx="8" cy="8" r="6" fill="#10B981" />
        <path
          d="M4 8 L6 10 L12 4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
