export default function CourierIllustration() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <defs>
        <linearGradient id="courierGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="20"
        width="20"
        height="12"
        rx="2"
        fill="url(#courierGrad)"
      />
      <rect
        x="28"
        y="23"
        width="10"
        height="9"
        rx="2"
        fill="url(#courierGrad)"
      />
      <rect
        x="10"
        y="22"
        width="16"
        height="6"
        rx="1"
        fill="white"
        opacity="0.3"
      />
      <rect
        x="30"
        y="25"
        width="6"
        height="4"
        rx="1"
        fill="white"
        opacity="0.3"
      />
      <circle cx="16" cy="32" r="3" fill="#374151" />
      <circle cx="16" cy="32" r="1.5" fill="#6B7280" />
      <circle cx="32" cy="32" r="3" fill="#374151" />
      <circle cx="32" cy="32" r="1.5" fill="#6B7280" />
      <rect
        x="12"
        y="12"
        width="6"
        height="6"
        rx="1"
        fill="white"
        stroke="url(#courierGrad)"
        strokeWidth="1"
      />
      <line
        x1="14"
        y1="10"
        x2="16"
        y2="10"
        stroke="url(#courierGrad)"
        strokeWidth="2"
      />
      <line
        x1="15"
        y1="8"
        x2="15"
        y2="12"
        stroke="url(#courierGrad)"
        strokeWidth="2"
      />
      <g transform="translate(38, 8)">
        <circle
          cx="3"
          cy="3"
          r="2.5"
          fill="white"
          stroke="url(#courierGrad)"
          strokeWidth="1"
        />
        <line
          x1="3"
          y1="5.5"
          x2="3"
          y2="9"
          stroke="url(#courierGrad)"
          strokeWidth="1"
        />
        <line
          x1="1.5"
          y1="7.5"
          x2="4.5"
          y2="7.5"
          stroke="url(#courierGrad)"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
