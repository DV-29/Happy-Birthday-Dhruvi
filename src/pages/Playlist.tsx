import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Gift, Music, Sparkles, Heart, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CoffeeIcon from '@/components/CoffeeIcon';
import PageTransition from '@/components/PageTransition';
import { PLAYLIST_DATA, Track } from '@/data/content';

const TrackCard = ({ track, index }: { track: Track; index: number }) => {
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const audio = document.getElementById(`audio-${track.id}`) as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        // Pause all other audios first
        document.querySelectorAll('audio').forEach((a) => {
          a.pause();
        });
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-card/90 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-card border border-coffee-latte/20 relative overflow-hidden"
    >
      {/* Animated background glow on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-coffee-caramel/10 to-transparent"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Coffee stain decoration */}
      <motion.div 
        className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-coffee-stain/15 blur-xl"
        animate={{ 
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.25 : 0.15,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Music note animation on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-2 right-2"
            initial={{ opacity: 0, y: 10, rotate: -20 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -10, rotate: 20 }}
          >
            <Music className="w-4 h-4 text-coffee-caramel" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="relative z-10">
        {/* Track Info & Controls */}
        <div className="flex items-center gap-3">
          {/* Play/Pause Button - Always visible */}
          <motion.button
            onClick={handlePlayPause}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-coffee-caramel/20 flex items-center justify-center text-coffee-dark hover:bg-coffee-caramel/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </motion.button>

          {/* Track Title */}
          <div className="flex-1 min-w-0">
            <motion.h3 
              className="font-display text-base md:text-lg text-coffee-dark font-semibold truncate"
              animate={{ x: isHovered ? 2 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {track.title}
            </motion.h3>
            {track.artist && (
              <p className="font-body text-xs text-coffee-latte truncate">
                {track.artist}
              </p>
            )}
          </div>
          
          {/* Message Button */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setIsNoteOpen(!isNoteOpen);
            }}
            className="flex-shrink-0 px-3 py-1.5 rounded-full bg-coffee-cream/80 border border-coffee-latte/30 text-coffee-dark text-xs font-medium hover:bg-coffee-cream transition-colors flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-3 h-3 text-coffee-caramel" />
            Message for u
          </motion.button>
        </div>

        {/* Audio Element */}
        <audio
          id={`audio-${track.id}`}
          src={track.audioFile || ''}
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />

        {/* Note Popup */}
        <AnimatePresence>
          {isNoteOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mt-3 bg-coffee-caramel/20 rounded-lg p-3 border border-coffee-caramel/30"
            >
              <p className="font-handwritten text-sm md:text-base text-coffee-dark italic">
                "{track.note || 'Hello World'}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Playlist = () => {
  const navigate = useNavigate();

  // Floating coffee beans/steam elements
  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    left: 10 + i * 15,
    delay: Math.random() * 3,
    duration: 5 + Math.random() * 3,
  }));

  return (
    <PageTransition className="min-h-screen bg-coffee-gradient relative overflow-hidden">
      {/* Animated vignette effect */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-coffee-espresso/15" />
      </motion.div>

      {/* Floating steam elements */}
      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute pointer-events-none opacity-20"
          style={{ left: `${el.left}%`, bottom: '10%' }}
          animate={{
            y: [0, -200, -400],
            x: [0, 20, -10],
            opacity: [0, 0.3, 0],
            scale: [1, 1.5, 2],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          <div className="w-8 h-8 rounded-full bg-coffee-latte/40 blur-md" />
        </motion.div>
      ))}

      {/* Background decorative orbs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-coffee-caramel/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-coffee-latte/10 blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container max-w-2xl mx-auto px-4 py-8 md:py-16 relative z-10">
        {/* Header with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative inline-block"
          >
            <CoffeeIcon size={72} className="mx-auto mb-4" />
            {/* Steam animation */}
            <motion.div
              className="absolute -top-2 left-1/2 -translate-x-1/2"
              animate={{ opacity: [0.4, 0.7, 0.4], y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-coffee-caramel" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="font-display text-3xl md:text-5xl text-coffee-dark italic mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Playlist
          </motion.h1>
          <motion.p 
            className="font-body text-coffee-latte text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Songs that remind me of us
          </motion.p>
        </motion.div>

        {/* Track List */}
        <div className="space-y-3">
          {PLAYLIST_DATA.map((track, index) => (
            <TrackCard key={track.id} track={track} index={index} />
          ))}
        </div>

        {/* CTA to surprise with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <motion.p 
            className="font-handwritten text-xl md:text-2xl text-coffee-latte mb-5"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            One last thing...
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="gentle"
              size="lg"
              onClick={() => navigate('/surprise')}
              className="group bg-coffee-cream hover:bg-card relative overflow-hidden"
            >
              {/* Shimmer effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-coffee-caramel/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              />
              <Gift className="w-5 h-5 mr-2 text-coffee-caramel transition-transform group-hover:rotate-12" />
              <span className="text-coffee-dark relative">Click the sugar cube</span>
              <motion.span
                className="inline-block ml-2 w-5 h-5 bg-card rounded shadow-sm relative"
                animate={{ rotate: [0, 15, -15, 0], y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer with animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-16 text-center font-handwritten text-xl text-coffee-stain"
        >
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            ☕
          </motion.span>
          {' '}Made with love over many cups of coffee
        </motion.p>
      </div>
    </PageTransition>
  );
};

export default Playlist;