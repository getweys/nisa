export default function PartnerIllustration() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="partnerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7547F" />
          <stop offset="100%" stopColor="#FF8FA3" />
        </linearGradient>
        <linearGradient id="partnerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3F4" />
          <stop offset="100%" stopColor="#FCE7F3" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="30" r="15" fill="url(#partnerGrad2)" opacity="0.4" />
      <circle cx="160" cy="25" r="18" fill="url(#partnerGrad2)" opacity="0.6" />
      <circle
        cx="170"
        cy="120"
        r="12"
        fill="url(#partnerGrad2)"
        opacity="0.3"
      />
      <rect
        x="80"
        y="60"
        width="40"
        height="60"
        rx="4"
        fill="url(#partnerGrad1)"
      />
      <rect x="83" y="63" width="34" height="54" rx="2" fill="#F8FAFC" />
      <rect
        x="87"
        y="70"
        width="6"
        height="6"
        rx="1"
        fill="url(#partnerGrad1)"
        opacity="0.3"
      />
      <rect
        x="95"
        y="70"
        width="6"
        height="6"
        rx="1"
        fill="url(#partnerGrad1)"
        opacity="0.3"
      />
      <rect
        x="103"
        y="70"
        width="6"
        height="6"
        rx="1"
        fill="url(#partnerGrad1)"
        opacity="0.3"
      />
      <rect
        x="87"
        y="82"
        width="6"
        height="6"
        rx="1"
        fill="url(#partnerGrad1)"
        opacity="0.3"
      />
      <rect
        x="95"
        y="82"
        width="6"
        height="6"
        rx="1"
        fill="url(#partnerGrad1)"
        opacity="0.3"
      />
      <rect
        x="103"
        y="82"
        width="6"
        height="6"
        rx="1"
        fill="url(#partnerGrad1)"
        opacity="0.3"
      />
      <rect
        x="97"
        y="102"
        width="6"
        height="15"
        rx="3"
        fill="url(#partnerGrad1)"
      />
      <g transform="translate(55, 90)">
        <ellipse cx="10" cy="15" rx="8" ry="6" fill="url(#partnerGrad2)" />
        <rect x="3" y="11" width="6" height="12" rx="3" fill="#FBBF24" />
        <rect x="11" y="11" width="6" height="12" rx="3" fill="#FBBF24" />
        <rect
          x="5"
          y="13"
          width="10"
          height="4"
          rx="2"
          fill="url(#partnerGrad1)"
        />
      </g>
      <g transform="translate(135, 75)">
        <circle
          cx="10"
          cy="10"
          r="8"
          fill="white"
          stroke="url(#partnerGrad1)"
          strokeWidth="1.5"
        />
        <path
          d="M6 9 L8 11 L14 5"
          stroke="url(#partnerGrad1)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      <g
        stroke="url(#partnerGrad1)"
        strokeWidth="1.5"
        opacity="0.4"
        strokeDasharray="2,2"
      >
        <line x1="60" y1="95" x2="80" y2="90" />
        <line x1="120" y1="90" x2="140" y2="80" />
        <line x1="100" y1="60" x2="100" y2="45" />
      </g>
      <circle cx="60" cy="95" r="2" fill="url(#partnerGrad1)" />
      <circle cx="140" cy="80" r="2" fill="url(#partnerGrad1)" />
      <circle cx="100" cy="45" r="2" fill="url(#partnerGrad1)" />
    </svg>
  );
}
