interface TulipIconProps {
  className?: string;
  size?: number;
}

const TulipIcon = ({ className = '', size = 48 }: TulipIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Stem */}
      <path
        d="M32 45V75"
        stroke="hsl(125 30% 45%)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M32 55C32 55 22 52 18 60C22 58 28 58 32 60"
        fill="hsl(125 25% 55%)"
      />
      <path
        d="M32 62C32 62 42 59 46 67C42 65 36 65 32 67"
        fill="hsl(125 25% 55%)"
      />
      {/* Tulip petals */}
      <ellipse
        cx="24"
        cy="28"
        rx="10"
        ry="25"
        fill="url(#tulipGrad1)"
        transform="rotate(-15 24 28)"
      />
      <ellipse
        cx="40"
        cy="28"
        rx="10"
        ry="25"
        fill="url(#tulipGrad2)"
        transform="rotate(15 40 28)"
      />
      <ellipse
        cx="32"
        cy="26"
        rx="9"
        ry="24"
        fill="url(#tulipGrad3)"
      />
      <defs>
        <linearGradient id="tulipGrad1" x1="14" y1="5" x2="34" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f9a8c0" />
          <stop offset="100%" stopColor="#d94a6a" />
        </linearGradient>
        <linearGradient id="tulipGrad2" x1="30" y1="5" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f9a8c0" />
          <stop offset="100%" stopColor="#d94a6a" />
        </linearGradient>
        <linearGradient id="tulipGrad3" x1="23" y1="5" x2="41" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fcc5d3" />
          <stop offset="100%" stopColor="#e86b8a" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TulipIcon;
