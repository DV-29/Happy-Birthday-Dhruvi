import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  rotation: number;
}

interface TulipPetalsProps {
  disabled?: boolean;
  count?: number;
}

const TulipPetals = ({ disabled = false, count = 20 }: TulipPetalsProps) => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (disabled || reducedMotion) {
      setPetals([]);
      return;
    }

    const newPetals: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 12 + Math.random() * 16,
      opacity: 0.6 + Math.random() * 0.3,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, [disabled, reducedMotion, count]);

  if (disabled || reducedMotion || petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            top: '-5%',
            '--fall-delay': `${petal.delay}s`,
            '--fall-duration': `${petal.duration}s`,
          } as React.CSSProperties}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.4}
            viewBox="0 0 24 34"
            fill="none"
            style={{
              opacity: petal.opacity,
              transform: `rotate(${petal.rotation}deg)`,
            }}
          >
            <path
              d="M12 0C12 0 0 10 0 20C0 28 5.5 34 12 34C18.5 34 24 28 24 20C24 10 12 0 12 0Z"
              fill="url(#petalGradient)"
            />
            <defs>
              <linearGradient id="petalGradient" x1="0" y1="0" x2="24" y2="34">
                <stop offset="0%" stopColor="#f9a8c0" />
                <stop offset="50%" stopColor="#e86b8a" />
                <stop offset="100%" stopColor="#d94a6a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default TulipPetals;
