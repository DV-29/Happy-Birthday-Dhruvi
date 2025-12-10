import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Pause, Play, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

const Typewriter = ({ text, speed = 40, onComplete, className = '' }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const lines = text.split('\n');

  useEffect(() => {
    if (isPaused || isComplete) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, isPaused, isComplete, text, speed, onComplete]);

  const handleSkip = useCallback(() => {
    setDisplayedText(text);
    setCurrentIndex(text.length);
    setIsComplete(true);
    onComplete?.();
  }, [text, onComplete]);

  const togglePause = useCallback(() => {
    setIsPaused(!isPaused);
  }, [isPaused]);

  return (
    <div className={className}>
      <div className="mb-6 flex gap-2 justify-end">
        <Button
          variant="gentle"
          size="sm"
          onClick={togglePause}
          disabled={isComplete}
          aria-label={isPaused ? 'Resume' : 'Pause'}
        >
          {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </Button>
        <Button
          variant="gentle"
          size="sm"
          onClick={handleSkip}
          disabled={isComplete}
          aria-label="Skip to end"
        >
          <SkipForward className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="font-body text-foreground leading-relaxed whitespace-pre-wrap">
        {displayedText}
        {!isComplete && (
          <span className="inline-block w-0.5 h-5 bg-tulip-red ml-0.5 animate-blink align-middle" />
        )}
      </div>
    </div>
  );
};

export default Typewriter;
