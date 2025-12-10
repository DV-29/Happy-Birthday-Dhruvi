interface CoffeeIconProps {
  className?: string;
  size?: number;
  showSteam?: boolean;
}

const CoffeeIcon = ({ className = '', size = 48, showSteam = true }: CoffeeIconProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {showSteam && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
          <div 
            className="w-1 h-4 bg-coffee-latte/40 rounded-full animate-steam"
            style={{ animationDelay: '0s' }}
          />
          <div 
            className="w-1 h-5 bg-coffee-latte/30 rounded-full animate-steam"
            style={{ animationDelay: '0.5s' }}
          />
          <div 
            className="w-1 h-4 bg-coffee-latte/40 rounded-full animate-steam"
            style={{ animationDelay: '1s' }}
          />
        </div>
      )}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        {/* Saucer */}
        <ellipse
          cx="32"
          cy="56"
          rx="28"
          ry="6"
          fill="hsl(30 30% 90%)"
          stroke="hsl(25 30% 75%)"
          strokeWidth="1"
        />
        {/* Cup body */}
        <path
          d="M12 24C12 24 14 52 32 52C50 52 52 24 52 24H12Z"
          fill="url(#cupGrad)"
          stroke="hsl(30 25% 85%)"
          strokeWidth="1"
        />
        {/* Coffee */}
        <ellipse
          cx="32"
          cy="28"
          rx="18"
          ry="6"
          fill="url(#coffeeGrad)"
        />
        {/* Cup rim */}
        <ellipse
          cx="32"
          cy="24"
          rx="20"
          ry="6"
          fill="hsl(30 30% 95%)"
          stroke="hsl(30 25% 85%)"
          strokeWidth="1"
        />
        {/* Handle */}
        <path
          d="M52 30C56 30 60 34 60 40C60 46 56 50 52 50"
          stroke="hsl(30 25% 85%)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="cupGrad" x1="12" y1="24" x2="52" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(30 30% 98%)" />
            <stop offset="100%" stopColor="hsl(30 25% 92%)" />
          </linearGradient>
          <linearGradient id="coffeeGrad" x1="14" y1="22" x2="50" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(25 52% 32%)" />
            <stop offset="100%" stopColor="hsl(20 40% 22%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CoffeeIcon;
