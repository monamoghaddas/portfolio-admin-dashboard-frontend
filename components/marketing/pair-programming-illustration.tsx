type PairProgrammingIllustrationProps = {
  className?: string;
};

/** Decorative SVG: editor window + human review + assistant “spark” — pairs with /building-with-ai. */
export default function PairProgrammingIllustration({
  className,
}: PairProgrammingIllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 440 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="pairGlow"
          x1="120"
          y1="0"
          x2="360"
          y2="220"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1e3a5f" stopOpacity="0.12" />
          <stop offset="1" stopColor="#6366f1" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          id="pairBeam"
          x1="280"
          y1="140"
          x2="380"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1e3a5f" stopOpacity="0.35" />
          <stop offset="1" stopColor="#818cf8" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <rect
        x="8"
        y="16"
        width="424"
        height="268"
        rx="20"
        fill="url(#pairGlow)"
      />

      <rect
        x="32"
        y="40"
        width="376"
        height="220"
        rx="14"
        fill="white"
        stroke="#e2e8f0"
        strokeWidth="2"
      />
      <path
        d="M32 84h376"
        stroke="#e2e8f0"
        strokeWidth="2"
      />
      <circle cx="56" cy="62" r="6" fill="#fca5a5" />
      <circle cx="78" cy="62" r="6" fill="#fcd34d" />
      <circle cx="100" cy="62" r="6" fill="#86efac" />

      <rect x="52" y="104" width="200" height="10" rx="5" fill="#e2e8f0" />
      <rect x="52" y="124" width="160" height="10" rx="5" fill="#e2e8f0" />
      <rect x="52" y="144" width="176" height="10" rx="5" fill="#e2e8f0" />
      <rect x="52" y="164" width="120" height="10" rx="5" fill="#c7d2fe" />
      <rect x="52" y="184" width="148" height="10" rx="5" fill="#e2e8f0" />

      <rect
        x="52"
        y="210"
        width="296"
        height="36"
        rx="8"
        fill="#f8fafc"
        stroke="#cbd5e1"
        strokeWidth="1.5"
      />
      <rect x="64" y="222" width="72" height="12" rx="4" fill="#1e3a5f" fillOpacity="0.85" />
      <rect x="148" y="224" width="140" height="8" rx="4" fill="#cbd5e1" />

      <g opacity="0.95">
        <path
          d="M300 118 L388 76 L388 198 L300 156 Z"
          fill="url(#pairBeam)"
          fillOpacity="0.25"
        />
        <rect
          x="288"
          y="96"
          width="120"
          height="84"
          rx="10"
          fill="white"
          stroke="#1e3a5f"
          strokeWidth="2"
          strokeOpacity="0.35"
        />
        <path
          d="M308 124h80M308 140h56M308 156h72"
          stroke="#94a3b8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="372" cy="112" r="14" fill="#1e3a5f" fillOpacity="0.9" />
        <path
          d="M366 112 L370 116 L380 106"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g fill="#1e3a5f" fillOpacity="0.9">
        <circle cx="118" cy="248" r="3" />
        <circle cx="132" cy="242" r="2.5" />
        <circle cx="128" cy="256" r="2" />
      </g>
      <path
        d="M118 248 Q200 200 330 130"
        stroke="#1e3a5f"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
      />
    </svg>
  );
}
