import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Sparkles, Star, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Confetti from '@/components/Confetti';
import PageTransition from '@/components/PageTransition';
import { PHOTOS, POEM } from '@/data/content';

const Surprise = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % PHOTOS.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
  };

  // Floating hearts
  const floatingHearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 4,
    size: 14 + Math.random() * 14,
  }));

  // Sparkle stars
  const sparkleStars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
  }));

  return (
    <PageTransition className="min-h-screen bg-tulip-gradient relative overflow-hidden">
      {showConfetti && <Confetti />}

      {/* Floating hearts background */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute pointer-events-none"
          style={{ left: `${heart.left}%` }}
          initial={{ y: '110vh', opacity: 0, rotate: -30 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.7, 0.7, 0],
            rotate: 30,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Heart 
            className="text-tulip-red/50 fill-tulip-red/30" 
            style={{ width: heart.size, height: heart.size }}
          />
        </motion.div>
      ))}

      {/* Twinkling sparkles */}
      {sparkleStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute pointer-events-none"
          style={{ left: `${star.left}%`, top: `${star.top}%` }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Star className="w-3 h-3 text-tulip-red/30 fill-tulip-red/20" />
        </motion.div>
      ))}

      {/* Soft glow background with animation */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-tulip-red/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-tulip-sage/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container max-w-3xl mx-auto px-4 py-8 md:py-16 relative z-10">
        {/* Header with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="relative inline-block"
          >
            <Heart className="w-14 h-14 mx-auto text-tulip-red fill-tulip-red mb-4" />
            {/* Pulsing glow */}
            <motion.div
              className="absolute inset-0 blur-xl"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-14 h-14 text-tulip-red fill-tulip-red" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground italic mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  '0 0 0px transparent',
                  '0 0 30px hsl(345 65% 57% / 0.4)',
                  '0 0 0px transparent',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              D & D
            </motion.span>
          </motion.h1>
          <motion.p 
            className="font-body text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Dhruvi & Dhruv
          </motion.p>
        </motion.div>

        {/* Photo Slideshow with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mb-14"
        >
          <motion.div 
            className="bg-card rounded-2xl p-5 shadow-card overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPhotoIndex}
                  src={PHOTOS[currentPhotoIndex]}
                  alt={`Memory ${currentPhotoIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -100 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              {/* Decorative frame corners */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-tulip-red/40 rounded-tl-lg" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-tulip-red/40 rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-tulip-red/40 rounded-bl-lg" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-tulip-red/40 rounded-br-lg" />

              {/* Navigation with enhanced styling */}
              <div className="absolute inset-0 flex items-center justify-between p-3">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevPhoto}
                    className="bg-card/90 backdrop-blur-sm hover:bg-card rounded-full shadow-lg"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextPhoto}
                    className="bg-card/90 backdrop-blur-sm hover:bg-card rounded-full shadow-lg"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Photo indicators with animation */}
            <div className="flex justify-center gap-2 mt-5">
              {PHOTOS.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentPhotoIndex
                      ? 'bg-tulip-red w-8'
                      : 'bg-muted hover:bg-tulip-red/50 w-2'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Poem with enhanced entrance */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card border border-tulip-red/15 text-center relative overflow-hidden"
        >
          {/* Decorative sparkles in corners */}
          <motion.div
            className="absolute top-4 left-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-5 h-5 text-tulip-red/30" />
          </motion.div>
          <motion.div
            className="absolute top-4 right-4"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-5 h-5 text-tulip-red/30" />
          </motion.div>

          <motion.h2 
            className="font-display text-2xl md:text-3xl text-tulip-red italic mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            A Poem for You
          </motion.h2>
          
          <motion.div 
            className="font-body text-foreground leading-loose whitespace-pre-line text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {POEM.split('\n').map((line, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                {line}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-10"
          >
            <motion.p
              className="font-handwritten text-4xl md:text-5xl text-tulip-red"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Happy Birthday, Dhruvvii
              <motion.span
                className="inline-block ml-2"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ❤️
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Final message with floating animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-14 text-center"
        >
          <motion.p 
            className="font-handwritten text-xl md:text-2xl text-muted-foreground"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            With all my love, today and always
          </motion.p>
          <motion.p 
            className="font-handwritten text-2xl md:text-3xl text-tulip-sage-dark mt-3"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            — Dhruv
          </motion.p>
          <motion.div
            className="mt-4 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                }}
              >
                <Heart className="w-5 h-5 text-tulip-red fill-tulip-red" />
              </motion.div>
            ))}
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="mt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="romantic"
                size="lg"
                onClick={() => navigate('/')}
                className="group"
              >
                <Home className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Surprise;
