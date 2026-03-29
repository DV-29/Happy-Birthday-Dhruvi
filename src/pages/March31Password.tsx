import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Lock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TulipPetals from '@/components/TulipPetals';
import PageTransition from '@/components/PageTransition';

const March31Password = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  const correctPassword = 'DhruviDhruv@2029';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().replace(/[\s/-]/g, '') === correctPassword) {
      navigate('/march31-letter');
    } else {
      setError("Hmm, that's not it, my love... try again? 💕");
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  const floatingHearts = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 5 + Math.random() * 4,
    size: 12 + Math.random() * 12,
  }));

  return (
    <PageTransition className="min-h-screen bg-march-gradient bg-paper-texture relative overflow-hidden">
      <TulipPetals count={12} />

      {/* Floating hearts */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute pointer-events-none"
          style={{ left: `${heart.left}%` }}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.5, 0.5, 0],
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

      {/* Background orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-tulip-red/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-tulip-sage/15 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-card max-w-md w-full border border-tulip-red/15 relative overflow-hidden"
        >
          {/* Decorative gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-tulip-red/5 via-transparent to-tulip-sage/5"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative z-10 text-center">
            {/* Lock icon with animation */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative inline-block mb-6"
            >
              <div className="w-16 h-16 rounded-full bg-tulip-red/10 flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8 text-tulip-red" />
              </div>
              <motion.div
                className="absolute inset-0 blur-xl"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-16 h-16 rounded-full bg-tulip-red/30" />
              </motion.div>
            </motion.div>

            <motion.h1
              className="font-display text-3xl md:text-4xl text-foreground italic mb-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Happy 31st March ❤️
            </motion.h1>

            <motion.p
              className="font-body text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              This one's special... enter the password to continue
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="Enter password..."
                  className="w-full px-5 py-3.5 rounded-xl bg-muted/60 border border-border text-foreground placeholder:text-muted-foreground/60 font-body text-center text-lg focus:outline-none focus:ring-2 focus:ring-tulip-red/30 focus:border-tulip-red/40 transition-all"
                />
              </motion.div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-handwritten text-tulip-red text-sm"
                >
                  {error}
                </motion.p>
              )}

              <motion.p
                className="font-body text-muted-foreground/70 text-xs italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Hint: My JAM Password 😉
              </motion.p>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  type="submit"
                  variant="romantic"
                  size="xl"
                  className="w-full group relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  <span className="relative">Unlock My Heart</span>
                  <Sparkles className="w-4 h-4 ml-2 opacity-70" />
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default March31Password;
