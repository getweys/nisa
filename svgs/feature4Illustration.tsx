export default function Feature4Illustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="feature4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#feature4)" opacity="0.1" />
      <g stroke="url(#feature4)" strokeWidth="2" fill="none" opacity="0.3">
        <circle cx="60" cy="60" r="35" />
        <circle cx="60" cy="60" r="25" />
        <circle cx="60" cy="60" r="15" />
      </g>
      <g transform="translate(40, 40)">
        <circle cx="10" cy="10" r="6" fill="#FBBF24" />
        <path
          d="M6 6 Q10 2 14 6"
          stroke="url(#feature4)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="8" cy="8" r="0.8" fill="#374151" />
        <circle cx="12" cy="8" r="0.8" fill="#374151" />
        <path
          d="M8 12 Q10 14 12 12"
          stroke="#374151"
          strokeWidth="1"
          fill="none"
        />
        <rect
          x="5"
          y="16"
          width="10"
          height="15"
          rx="5"
          fill="url(#feature4)"
        />
        <rect
          x="3"
          y="18"
          width="14"
          height="10"
          rx="7"
          fill="#F7547F"
          opacity="0.7"
        />
      </g>
      <g transform="translate(65, 40)">
        <circle cx="10" cy="10" r="6" fill="#FBBF24" />
        <path
          d="M6 6 Q10 2 14 6"
          stroke="url(#feature4)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="8" cy="8" r="0.8" fill="#374151" />
        <circle cx="12" cy="8" r="0.8" fill="#374151" />
        <path
          d="M8 12 Q10 14 12 12"
          stroke="#374151"
          strokeWidth="1"
          fill="none"
        />
        <rect
          x="5"
          y="16"
          width="10"
          height="15"
          rx="5"
          fill="url(#feature4)"
        />
        <rect
          x="3"
          y="18"
          width="14"
          height="10"
          rx="7"
          fill="#F7547F"
          opacity="0.7"
        />
      </g>
      <g transform="translate(50, 75)">
        <path
          d="M10 4 C10 2 8 0 6 0 S2 2 2 4 C2 6 6 12 6 12 S10 6 10 4 Z"
          fill="#F7547F"
          transform="rotate(-10)"
        />
        <path
          d="M10 4 C10 2 12 0 14 0 S18 2 18 4 C18 6 14 12 14 12 S10 6 10 4 Z"
          fill="#F7547F"
          transform="rotate(10)"
        />
      </g>
      <g transform="translate(20, 25)" opacity="0.6">
        <path
          d="M0 8 Q4 0 8 8 Q12 16 16 8"
          stroke="url(#feature4)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="4" cy="8" r="1.5" fill="url(#feature4)" />
        <circle cx="12" cy="8" r="1.5" fill="url(#feature4)" />
      </g>
    </svg>
  );
}
