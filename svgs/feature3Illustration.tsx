export default function Feature3Illustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="feature3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#feature3)" opacity="0.1" />
      <rect
        x="25"
        y="25"
        width="70"
        height="70"
        rx="8"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      <g stroke="#F3F4F6" strokeWidth="1">
        <line x1="35" y1="25" x2="35" y2="95" />
        <line x1="50" y1="25" x2="50" y2="95" />
        <line x1="65" y1="25" x2="65" y2="95" />
        <line x1="80" y1="25" x2="80" y2="95" />
        <line x1="25" y1="35" x2="95" y2="35" />
        <line x1="25" y1="50" x2="95" y2="50" />
        <line x1="25" y1="65" x2="95" y2="65" />
        <line x1="25" y1="80" x2="95" y2="80" />
      </g>
      <circle cx="45" cy="45" r="12" fill="url(#feature3)" opacity="0.2" />
      <circle cx="75" cy="75" r="15" fill="url(#feature3)" opacity="0.2" />
      <path
        d="M35 40 Q50 50 65 60 Q75 65 85 70"
        stroke="url(#feature3)"
        strokeWidth="3"
        fill="none"
        strokeDasharray="4,2"
      />
      <g transform="translate(30, 32)">
        <path
          d="M5 0 C2.5 0 0 2.5 0 5 C0 7.5 5 12 5 12 S10 7.5 10 5 C10 2.5 7.5 0 5 0 Z"
          fill="url(#feature3)"
        />
        <circle cx="5" cy="5" r="2" fill="white" />
      </g>
      <g transform="translate(80, 62)">
        <path
          d="M5 0 C2.5 0 0 2.5 0 5 C0 7.5 5 12 5 12 S10 7.5 10 5 C10 2.5 7.5 0 5 0 Z"
          fill="#F7547F"
        />
        <circle cx="5" cy="5" r="2" fill="white" />
      </g>
      <g transform="translate(100, 15)">
        <path d="M0 0 L10 0 L10 8 L5 12 L0 8 Z" fill="url(#feature3)" />
        <path d="M2 2 L8 2 L8 6 L5 9 L2 6 Z" fill="white" />
        <path d="M3 4 L7 4" stroke="url(#feature3)" strokeWidth="1" />
      </g>
    </svg>
  );
}
