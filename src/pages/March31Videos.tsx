import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Home, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';

interface VideoSection {
  title: string;
  caption: string;
  driveId: string;
}

const VIDEOS: VideoSection[] = [
  {
    title: '',
    caption: '',
    driveId: '1CjZfPbwrcbjGJ2z_Hveq-8UmjZ5usmaH',
  },
  {
    title: 'Our First Laugh',
    caption: 'The moment I knew your smile was going to be my favorite thing in this world.',
    driveId: 'link_here_2',
  },
  {
    title: 'Late Night Talks',
    caption: 'Those 2 AM conversations where we forgot the world existed, just us.',
    driveId: 'link_here_3',
  },
  {
    title: 'Growing Together',
    caption: 'Every day with you taught me something new about love, about life, about us.',
    driveId: 'link_here_4',
  },
  {
    title: 'Our Promise',
    caption: 'No matter what — I choose you. Today, tomorrow, and every day after.',
    driveId: 'link_here_5',
  },
  {
    title: 'Your Smile',
    caption: 'That one smile that fixes everything instantly.',
    driveId: 'link_here_6',
  },
  {
    title: 'Little Moments',
    caption: 'It was never the big things, it was always us.',
    driveId: 'link_here_7',
  },
  {
    title: 'Missing You',
    caption: 'Even distance couldn’t make me feel far from you.',
    driveId: 'link_here_8',
  },
  {
    title: 'Forever Us',
    caption: 'Every version of my future has you in it.',
    driveId: 'link_here_9',
  },
  {
    title: 'My Favourite Person',
    caption: 'You are, and always will be, my favourite human.',
    driveId: 'link_here_10',
  },
];
const VideoCard = ({ video, index }: { video: VideoSection; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <motion.div
        className="bg-card/70 backdrop-blur-xl rounded-2xl p-5 md:p-6 shadow-card border border-tulip-red/10 relative overflow-hidden"
        whileHover={{ y: -4, transition: { duration: 0.3 } }}
      >
        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-tulip-red/5 via-transparent to-tulip-sage/5 rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Section number */}
        <motion.div
          className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-tulip-red/90 flex items-center justify-center shadow-glow z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
        >
          <span className="text-primary-foreground font-display text-sm font-bold">{index + 1}</span>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="font-display text-xl md:text-2xl text-foreground italic mb-2 pl-6"
        >
          {video.title}
        </motion.h3>

        {/* Caption */}
        <p className="font-body text-muted-foreground text-sm md:text-base mb-5 pl-6 italic">
          "{video.caption}"
        </p>

        {/* Video embed */}
        <div className="relative rounded-xl overflow-hidden shadow-soft aspect-video bg-muted/30">
          <iframe
            src={`https://drive.google.com/file/d/${video.driveId}/preview`}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={video.title}
          />
          {/* Subtle overlay border */}
          <div className="absolute inset-0 rounded-xl border border-tulip-red/10 pointer-events-none" />
        </div>

        {/* Decorative hearts */}
        <motion.div
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="w-4 h-4 text-tulip-red/40 fill-tulip-red/20" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FloatingHeart = ({ delay, left, size }: { delay: number; left: number; size: number }) => (
  <motion.div
    className="absolute pointer-events-none bottom-0"
    style={{ left: `${left}%` }}
    animate={{
      y: [0, -window.innerHeight * 1.2],
      x: [0, Math.sin(left) * 30],
      opacity: [0, 0.6, 0.4, 0],
      rotate: [-20, 20],
    }}
    transition={{
      duration: 8 + Math.random() * 4,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    <Heart
      className="text-tulip-red/30 fill-tulip-red/15"
      style={{ width: size, height: size }}
    />
  </motion.div>
);

const March31Videos = () => {
  const navigate = useNavigate();
  const [sparkles] = useState(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 2,
    }))
  );

  const [hearts] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      size: 10 + Math.random() * 14,
    }))
  );

  return (
    <PageTransition className="min-h-screen bg-march-gradient relative overflow-hidden">
      {/* Floating background hearts */}
      {hearts.map((h) => (
        <FloatingHeart key={h.id} delay={h.delay} left={h.left} size={h.size} />
      ))}

      {/* Twinkling sparkles */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute pointer-events-none"
          style={{ left: `${s.left}%`, top: `${s.top}%` }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Star className="w-3 h-3 text-tulip-red/25 fill-tulip-red/15" />
        </motion.div>
      ))}

      {/* Background glow orbs */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-tulip-red/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-tulip-sage/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="container max-w-3xl mx-auto px-4 py-8 md:py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="relative inline-block"
          >
            <Heart className="w-12 h-12 mx-auto text-tulip-red fill-tulip-red mb-4" />
            <motion.div
              className="absolute inset-0 blur-xl"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-12 h-12 text-tulip-red fill-tulip-red" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="font-display text-3xl md:text-5xl text-foreground italic mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 0px transparent',
                  '0 0 25px hsl(345 65% 57% / 0.3)',
                  '0 0 0px transparent',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Our Moments Together
            </motion.span>
          </motion.h1>
          <motion.p
            className="font-body text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Every video, a chapter of our love story
          </motion.p>
        </motion.div>

        {/* Video sections */}
        <div className="space-y-8">
          {VIDEOS.map((video, index) => (
            <VideoCard key={index} video={video} index={index} />
          ))}
        </div>

        {/* Footer with back button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.p
            className="font-handwritten text-xl md:text-2xl text-muted-foreground mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            This is just the beginning of forever...
          </motion.p>

          <motion.p
            className="font-handwritten text-2xl md:text-3xl text-tulip-red mb-6"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            I love you, Dhruvvii ❤️
          </motion.p>

          <div className="flex justify-center gap-3 flex-wrap">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              >
                <Heart className="w-5 h-5 text-tulip-red fill-tulip-red" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
      </div>
    </PageTransition>
  );
};

export default March31Videos;
