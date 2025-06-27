export default function RiderIllustration() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="riderGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7547F" />
          <stop offset="100%" stopColor="#FF8FA3" />
        </linearGradient>
        <linearGradient id="riderGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3F4" />
          <stop offset="100%" stopColor="#FCE7F3" />
        </linearGradient>
      </defs>
      <circle cx="170" cy="30" r="20" fill="url(#riderGrad2)" opacity="0.6" />
      <circle cx="30" cy="130" r="15" fill="url(#riderGrad2)" opacity="0.4" />
      <rect x="80" y="30" width="40" height="80" rx="10" fill="#212121" />
      <rect x="83" y="38" width="34" height="60" rx="6" fill="#F8FAFC" />
      <circle cx="100" cy="105" r="4" fill="#374151" />
      <rect
        x="87"
        y="42"
        width="26"
        height="3"
        rx="1.5"
        fill="url(#riderGrad1)"
      />
      <circle cx="90" cy="52" r="2" fill="url(#riderGrad1)" />
      <circle cx="110" cy="52" r="2" fill="url(#riderGrad1)" />
      <rect
        x="87"
        y="60"
        width="26"
        height="10"
        rx="2"
        fill="url(#riderGrad2)"
      />
      <rect
        x="88"
        y="62"
        width="10"
        height="1.5"
        rx="0.5"
        fill="url(#riderGrad1)"
      />
      <rect x="88" y="65" width="16" height="1.5" rx="0.5" fill="#9CA3AF" />
      <rect x="88" y="68" width="13" height="1.5" rx="0.5" fill="#9CA3AF" />
      <g transform="translate(130, 60)">
        <circle cx="20" cy="20" r="12" fill="#FBBF24" />
        <path
          d="M12 15 Q20 8 28 15"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="16" cy="18" r="1" fill="#374151" />
        <circle cx="24" cy="18" r="1" fill="#374151" />
        <path
          d="M16 23 Q20 26 24 23"
          stroke="#374151"
          strokeWidth="1"
          fill="none"
        />
        <rect
          x="12"
          y="32"
          width="16"
          height="24"
          rx="8"
          fill="url(#riderGrad1)"
        />
        <rect
          x="8"
          y="36"
          width="24"
          height="16"
          rx="12"
          fill="#F8FAFC"
          opacity="0.8"
        />
        <rect x="28" y="40" width="6" height="12" rx="3" fill="#374151" />
      </g>
      <g transform="translate(40, 50)">
        <circle cx="12" cy="12" r="10" fill="url(#riderGrad1)" opacity="0.2" />
        <path
          d="M6 12 L9 15 L18 6"
          stroke="url(#riderGrad1)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M60 80 Q100 70 140 80"
        stroke="url(#riderGrad1)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,2"
      />
      <circle cx="60" cy="80" r="3" fill="url(#riderGrad1)" />
      <circle cx="140" cy="80" r="3" fill="#10B981" />
    </svg>
  );
}
