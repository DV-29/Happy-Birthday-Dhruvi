import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TulipIcon from '@/components/TulipIcon';
import Typewriter from '@/components/Typewriter';
import PageTransition from '@/components/PageTransition';

const MARCH31_LETTER = `My Dearest Dhruvvii,

31st March…

The day everything quietly began. The day I gathered just enough courage to text you a simple “hi”. I didn’t know then that this one message would turn into something so beautiful, something that would slowly become the most important part of my life.

One year. 365 days. And somewhere in between all those conversations, you became my favorite part of every single day. From waiting for your reply to smiling at my phone for no reason, you slowly became my habit, my comfort, my home.

And today, all I feel is this overwhelming love for you. I love you so much. Bohottt zyada. More than I can properly put into words, more than I even understand myself sometimes. It is there in everything I do, in every thought that comes back to you.

There were so many moments in this journey. The random talks, the long conversations that never felt long, the silences that still felt full. We didn’t rush anything. We just let it become what it is today, something real, something beautiful.

No matter what happens, no matter where life takes us, I want you to always remember this one thing. I am always with you. In ways you see and even in ways you don’t. In your happy moments, in your quiet ones, in the days that feel heavy. I am there.

I had imagined doing so much for you today. I wanted to make it special in every possible way. But I’m sorry, I am not even in the state to write as much as I truly want to.

Still, I didn’t want this day to pass without giving you something from my heart.

So I recorded some videos. And out of all of them, I’ve shared the ones where I felt ready to come in front of you, the ones I wanted you to see right now. I’ve attached those on the next page.

Go there when you’re ready.

Happy anniversary of us, my love. Thank you for being you, for being mine, for being a part of my life in the way you are.

Tera Doba,`;

const March31Letter = () => {
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState(false);

  const floatingHearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
    size: 12 + Math.random() * 12,
  }));

  return (
    <PageTransition className="min-h-screen bg-march-gradient bg-paper-texture relative overflow-hidden">
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

      {/* Background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-tulip-red/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-tulip-sage/15 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Corner decorations */}
      <motion.div
        className="absolute top-6 left-6"
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
      >
        <TulipIcon size={32} />
      </motion.div>

      <motion.div
        className="absolute top-8 right-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <Sparkles className="w-6 h-6 text-tulip-red/30" />
      </motion.div>

      <div className="container max-w-3xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card border border-border relative"
          style={{ fontFamily: '"Pacifico", "Dancing Script", cursive' }}
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

          {/* Decorative tulip */}
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

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <Heart className="w-8 h-8 mx-auto text-tulip-red fill-tulip-red/50 mb-3" />
            <h1 className="font-display text-2xl md:text-3xl text-tulip-red italic">
              Happy 31st March ❤️
            </h1>
            <p className="font-body text-muted-foreground text-sm mt-2">
              Our story began here...
            </p>
          </motion.div>

          <Typewriter
            text={MARCH31_LETTER}
            speed={25}
            onComplete={() => setIsComplete(true)}
            className="text-[1.05rem] md:text-[1.25rem] leading-relaxed tracking-wide"
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

          {/* CTA to videos */}
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
              There's more... shall we relive our moments?
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="romantic"
                size="lg"
                onClick={() => navigate('/march31-videos')}
                className="group"
              >
                <Sparkles className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                <span>Watch Something I recorded</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default March31Letter;
