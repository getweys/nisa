export default function ProfessionalIllustration() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <defs>
        <linearGradient
          id="professionalGrad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F7547F" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
      </defs>
      <rect
        x="12"
        y="18"
        width="24"
        height="16"
        rx="2"
        fill="url(#professionalGrad)"
      />
      <rect
        x="14"
        y="20"
        width="20"
        height="12"
        rx="1"
        fill="white"
        opacity="0.2"
      />
      <rect
        x="20"
        y="14"
        width="8"
        height="6"
        rx="1"
        fill="url(#professionalGrad)"
      />
      <circle cx="24" cy="26" r="2" fill="white" />
      <circle
        cx="38"
        cy="12"
        r="6"
        fill="white"
        stroke="url(#professionalGrad)"
        strokeWidth="2"
      />
      <circle cx="38" cy="12" r="1" fill="url(#professionalGrad)" />
      <line
        x1="38"
        y1="12"
        x2="38"
        y2="8"
        stroke="url(#professionalGrad)"
        strokeWidth="1"
      />
      <line
        x1="38"
        y1="12"
        x2="41"
        y2="12"
        stroke="url(#professionalGrad)"
        strokeWidth="1"
      />
      <path
        d="M8 10 C6 10 4 12 4 14 C4 16 8 22 8 22 S12 16 12 14 C12 12 10 10 8 10 Z"
        fill="url(#professionalGrad)"
      />
      <circle cx="8" cy="14" r="2" fill="white" />
    </svg>
  );
}
