import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotation: number;
}

const COLORS = [
  '#d94a6a', // tulip red
  '#f9a8c0', // pink
  '#8fbf93', // sage
  '#F2C46B', // caramel
  '#a97455', // latte
  '#fcc5d3', // light pink
];

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1,
      duration: 2 + Math.random() * 3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    }));
    setPieces(newPieces);
  }, [reducedMotion]);

  if (reducedMotion || pieces.length === 0) {
    return (
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
        <div className="text-6xl">🎉</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50" aria-hidden="true">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            top: '-5%',
            '--confetti-delay': `${piece.delay}s`,
            '--confetti-duration': `${piece.duration}s`,
          } as React.CSSProperties}
        >
          <div
            style={{
              width: piece.size,
              height: piece.size * 0.6,
              backgroundColor: piece.color,
              transform: `rotate(${piece.rotation}deg)`,
              borderRadius: '2px',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Confetti;
