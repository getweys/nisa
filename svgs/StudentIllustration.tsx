export default function StudentIllustration() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <defs>
        <linearGradient id="studentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <path d="M24 8 L6 14 L24 20 L42 14 L24 8 Z" fill="url(#studentGrad)" />
      <rect x="22" y="20" width="4" height="10" fill="url(#studentGrad)" />
      <path d="M20 30 L28 30 L26 34 L22 34 Z" fill="url(#studentGrad)" />
      <rect
        x="12"
        y="26"
        width="10"
        height="12"
        rx="1"
        fill="white"
        stroke="url(#studentGrad)"
        strokeWidth="1"
      />
      <line
        x1="14"
        y1="29"
        x2="20"
        y2="29"
        stroke="url(#studentGrad)"
        strokeWidth="1"
      />
      <line
        x1="14"
        y1="32"
        x2="18"
        y2="32"
        stroke="url(#studentGrad)"
        strokeWidth="1"
      />
      <line
        x1="14"
        y1="35"
        x2="20"
        y2="35"
        stroke="url(#studentGrad)"
        strokeWidth="1"
      />
      <rect
        x="30"
        y="24"
        width="8"
        height="10"
        rx="2"
        fill="url(#studentGrad)"
      />
      <rect x="31" y="26" width="6" height="2" rx="1" fill="white" />
      <circle cx="32" cy="27" r="0.5" fill="url(#studentGrad)" />
      <circle cx="36" cy="27" r="0.5" fill="url(#studentGrad)" />
    </svg>
  );
}
