import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TulipPetals from '@/components/TulipPetals';
import TulipIcon from '@/components/TulipIcon';
import PageTransition from '@/components/PageTransition';

const Landing = () => {
  const navigate = useNavigate();

  // Generate floating sparkle positions
  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <PageTransition className="min-h-screen bg-tulip-gradient relative overflow-hidden">
      <TulipPetals count={20} />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-tulip-red/10 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-tulip-sage/20 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{ left: `${sparkle.left}%`, top: `${sparkle.top}%` }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="w-4 h-4 text-tulip-red/40" />
        </motion.div>
      ))}
      
      {/* Decorative tulip silhouettes with animation */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-40 opacity-15 pointer-events-none"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.15 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <motion.path
            d="M0,120 C150,80 300,100 450,60 C600,20 750,40 900,80 C1050,120 1200,100 1200,120 Z"
            fill="hsl(125 25% 55%)"
            animate={{ d: [
              "M0,120 C150,80 300,100 450,60 C600,20 750,40 900,80 C1050,120 1200,100 1200,120 Z",
              "M0,120 C150,90 300,70 450,80 C600,40 750,60 900,70 C1050,100 1200,110 1200,120 Z",
              "M0,120 C150,80 300,100 450,60 C600,20 750,40 900,80 C1050,120 1200,100 1200,120 Z",
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Decorative tulips with bounce */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring', bounce: 0.5 }}
            className="mb-8 relative"
          >
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <TulipIcon size={90} className="mx-auto" />
            </motion.div>
            {/* Glow effect behind tulip */}
            <motion.div
              className="absolute inset-0 blur-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <TulipIcon size={90} className="mx-auto opacity-30" />
            </motion.div>
          </motion.div>

          {/* Card Container with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card/85 backdrop-blur-md rounded-3xl p-8 md:p-14 shadow-card max-w-xl mx-auto border border-tulip-red/15 relative overflow-hidden"
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-tulip-red/5 via-transparent to-tulip-sage/5"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Wax seal decoration with pulse */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, duration: 0.6, type: 'spring' }}
              className="absolute -top-5 -right-5 z-10"
            >
              <motion.div
                className="w-18 h-18 rounded-full bg-tulip-red flex items-center justify-center shadow-glow"
                style={{ width: 72, height: 72 }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px hsl(345 65% 57% / 0.3)',
                    '0 0 40px hsl(345 65% 57% / 0.5)',
                    '0 0 20px hsl(345 65% 57% / 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-primary-foreground font-handwritten text-2xl">D</span>
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 italic relative z-10"
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    '0 0 0px transparent',
                    '0 0 20px hsl(345 65% 57% / 0.3)',
                    '0 0 0px transparent',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Happy Birthday, Dhruvvii
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="font-body text-muted-foreground text-lg md:text-xl mb-10 relative z-10"
            >
              A little tulip field I planted for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="romantic"
                  size="xl"
                  onClick={() => navigate('/letter')}
                  className="group relative overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <Heart className="w-5 h-5 mr-2 fill-current transition-transform group-hover:scale-110" />
                  <span className="relative">Open Your Letter</span>
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Footer decoration with float animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-10"
          >
            <motion.p
              className="font-handwritten text-xl md:text-2xl text-tulip-sage-dark drop-shadow-sm"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Made with love by Dhruv 
              <motion.span
                className="inline-block ml-1"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💕
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner decorations with rotation */}
      <motion.div 
        className="absolute top-4 left-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <TulipIcon size={44} />
        </motion.div>
      </motion.div>
      <motion.div 
        className="absolute bottom-4 right-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <TulipIcon size={44} />
        </motion.div>
      </motion.div>
    </PageTransition>
  );
};

export default Landing;
