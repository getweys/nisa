export default function DriverIllustration() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="driverGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7547F" />
          <stop offset="100%" stopColor="#FF8FA3" />
        </linearGradient>
        <linearGradient id="driverGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3F4" />
          <stop offset="100%" stopColor="#FCE7F3" />
        </linearGradient>
      </defs>
      <circle cx="30" cy="25" r="18" fill="url(#driverGrad2)" opacity="0.5" />
      <circle cx="170" cy="130" r="20" fill="url(#driverGrad2)" opacity="0.3" />
      <ellipse cx="100" cy="140" rx="40" ry="8" fill="#E5E7EB" opacity="0.4" />
      <rect
        x="60"
        y="100"
        width="80"
        height="40"
        rx="20"
        fill="url(#driverGrad1)"
      />
      <rect x="68" y="90" width="64" height="28" rx="14" fill="#F8FAFC" />
      <rect x="72" y="95" width="24" height="20" rx="10" fill="#DBEAFE" />
      <rect x="104" y="95" width="24" height="20" rx="10" fill="#DBEAFE" />
      <circle cx="75" cy="140" r="10" fill="#374151" />
      <circle cx="125" cy="140" r="10" fill="#374151" />
      <circle cx="75" cy="140" r="6" fill="#6B7280" />
      <circle cx="125" cy="140" r="6" fill="#6B7280" />
      <g transform="translate(78, 98)">
        <circle cx="8" cy="8" r="6" fill="#FBBF24" />
        <path
          d="M4 4 Q8 0 12 4"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="6" cy="6" r="0.8" fill="#374151" />
        <circle cx="10" cy="6" r="0.8" fill="#374151" />
        <path
          d="M6 10 Q8 12 10 10"
          stroke="#374151"
          strokeWidth="1"
          fill="none"
        />
      </g>
      <g transform="translate(140, 40)">
        <rect
          x="0"
          y="0"
          width="35"
          height="20"
          rx="10"
          fill="url(#driverGrad1)"
        />
        <circle cx="8" cy="10" r="4" fill="white" />
        <text
          x="8"
          y="12"
          textAnchor="middle"
          fill="url(#driverGrad1)"
          fontSize="6"
          fontWeight="bold"
        >
          ₨
        </text>
        <rect x="15" y="5" width="14" height="2" rx="1" fill="white" />
        <rect x="15" y="9" width="10" height="2" rx="1" fill="white" />
        <rect x="15" y="13" width="12" height="2" rx="1" fill="white" />
      </g>
      <g transform="translate(25, 60)">
        <circle
          cx="10"
          cy="10"
          r="8"
          fill="white"
          stroke="url(#driverGrad1)"
          strokeWidth="1.5"
        />
        <path
          d="M6 10 C6 8 7 7 8 7 S10 8 10 10 C10 12 8 16 8 16 S6 12 6 10 Z"
          fill="url(#driverGrad1)"
        />
        <circle cx="8" cy="10" r="1.5" fill="white" />
      </g>
      <g transform="translate(160, 70)">
        <circle cx="8" cy="8" r="6" fill="#10B981" />
        <path
          d="M5 8 L7 10 L11 6"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
