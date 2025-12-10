import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Coffee, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TulipIcon from '@/components/TulipIcon';
import Typewriter from '@/components/Typewriter';
import PageTransition from '@/components/PageTransition';
import { LETTER_TEXT } from '@/data/content';

const Letter = () => {
  const navigate = useNavigate();
  const [isRevealed, setIsRevealed] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const floatingHearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
    size: 12 + Math.random() * 12,
  }));

  return (
    <PageTransition className="min-h-screen bg-tulip-gradient bg-paper-texture relative overflow-hidden">
      {/* Floating hearts background */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute pointer-events-none"
          style={{ left: `${heart.left}%` }}
          initial={{ y: '110vh', opacity: 0, rotate: -20 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.6, 0.6, 0],
            rotate: 20,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Heart 
            className="text-tulip-red/40 fill-tulip-red/20" 
            style={{ width: heart.size, height: heart.size }}
          />
        </motion.div>
      ))}

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-tulip-red/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-tulip-sage/15 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Header with tulip icon */}
      <motion.div 
        className="absolute top-6 left-6"
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
      >
        <TulipIcon size={32} />
      </motion.div>

      {/* Decorative corner sparkles */}
      <motion.div
        className="absolute top-8 right-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <Sparkles className="w-6 h-6 text-tulip-red/30" />
      </motion.div>

      <div className="container max-w-3xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            // Button to reveal message
            <motion.div
              key="button"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center min-h-[60vh]"
            >
              {/* Decorative envelope */}
              <motion.div
                className="relative mb-8"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-48 h-36 bg-card rounded-xl shadow-card border border-tulip-red/20 relative overflow-hidden">
                  {/* Envelope flap */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-tulip-red/10 to-transparent" 
                    style={{ 
                      clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                    }}
                  />
                  {/* Heart seal */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Heart className="w-12 h-12 text-tulip-red fill-tulip-red" />
                  </motion.div>
                </div>
                
                {/* Sparkle effects around envelope */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-tulip-red/60 rounded-full"
                    style={{
                      top: `${20 + Math.sin(i * 1.5) * 40}%`,
                      left: `${10 + i * 25}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.4,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.div>

              <motion.h2
                className="font-display text-2xl md:text-3xl text-foreground italic mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                A letter awaits you...
              </motion.h2>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="romantic"
                  size="xl"
                  onClick={() => setIsRevealed(true)}
                  className="group relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-tulip-red-light/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  <span className="relative">Message for my Love</span>
                  <Sparkles className="w-4 h-4 ml-2 opacity-70" />
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            // Letter content
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
             className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card border border-border relative font-handwritten"
            >
              {/* Paper fold decoration */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-tulip-red/15 to-transparent transform rotate-45 translate-x-10 -translate-y-10" />
              </motion.div>

              {/* Decorative tulip in corner */}
              <motion.div
                className="absolute -top-4 -left-4"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                <div className="w-12 h-12 rounded-full bg-tulip-red/10 flex items-center justify-center">
                  <TulipIcon size={24} />
                </div>
              </motion.div>

              {/* Letter heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-8"
              >
                <Heart className="w-8 h-8 mx-auto text-tulip-red fill-tulip-red/50 mb-3" />
                <h1 className="font-display text-2xl md:text-3xl text-tulip-red italic">
                  My Dearest Love
                </h1>
              </motion.div>

             <Typewriter
              text={LETTER_TEXT}
              speed={30}
              onComplete={() => setIsComplete(true)}
              className="text-[1.1rem] md:text-[1.3rem] leading-relaxed tracking-wide"
             />


              {/* Signature */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isComplete ? 1 : 0, x: isComplete ? 0 : 20 }}
                transition={{ duration: 0.8 }}
                className="mt-8 text-right"
              >
                <p className="font-handwritten text-4xl md:text-5xl text-tulip-red">
                  — Dhruv
                </p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block mt-2"
                >
                  <Heart className="w-6 h-6 text-tulip-red fill-tulip-red inline" />
                </motion.div>
              </motion.div>

              {/* CTA to playlist */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 30 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-12 text-center"
              >
                <motion.p 
                  className="font-body text-muted-foreground mb-4"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Ready for some music?
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="coffee"
                    size="lg"
                    onClick={() => navigate('/playlist')}
                    className="group"
                  >
                    <Coffee className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                    <span>Pour a cup and listen</span>
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Letter;
