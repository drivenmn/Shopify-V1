import { Shield, Sun, Zap, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingActionsProps {
  onNavigate: (page: string) => void;
}

export function FloatingActions({
  onNavigate,
}: FloatingActionsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-40 flex flex-col gap-3 items-end"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Tesla Package - Premium highlighted button */}
      <motion.button
        onClick={() => onNavigate('tesla-package')}
        className="group relative overflow-hidden bg-gradient-to-r from-warning/10 via-card/95 to-card/95 backdrop-blur-xl border-2 border-warning hover:border-warning text-foreground px-4 py-4 hover:px-7 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-0 hover:gap-3 hover:shadow-warning/40 hover:shadow-2xl"
        title="Tesla Package Quote"
        variants={buttonVariants}
        whileHover={{ 
          scale: 1.08,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated gradient background on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-warning/20 via-warning/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-warning/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        
        <Zap className="relative w-5 h-5 text-warning group-hover:text-warning group-hover:drop-shadow-[0_0_8px_rgba(253,181,33,0.5)] transition-all duration-300 group-hover:rotate-12 flex-shrink-0" />
        <span className="relative font-medium tracking-wide group-hover:tracking-wider transition-all duration-300 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100">Tesla Package</span>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          initial={false}
        />
      </motion.button>
      
      {/* PPF Quote */}
      <motion.button
        onClick={() => onNavigate('ppf-configurator')}
        className="group relative overflow-hidden bg-card/95 backdrop-blur-xl border-2 border-primary hover:border-primary hover:bg-primary/10 text-foreground px-4 py-3.5 hover:px-6 rounded-full shadow-xl transition-all duration-300 flex items-center gap-0 hover:gap-3 hover:shadow-primary/40 hover:shadow-xl"
        title="Get PPF Quote"
        variants={buttonVariants}
        whileHover={{ 
          scale: 1.05,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        
        <Shield className="relative w-5 h-5 text-primary group-hover:text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.5)] group-hover:scale-110 flex-shrink-0" />
        <span className="relative font-medium group-hover:tracking-wide transition-all duration-300 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100">PPF Quote</span>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          initial={false}
        />
      </motion.button>

      {/* Schedule Service Appointment */}
      <motion.button
        onClick={() => onNavigate('vehicle-configurator')}
        className="group relative overflow-hidden bg-gradient-to-r from-accent/15 via-card/95 to-card/95 backdrop-blur-xl border-2 border-accent hover:border-accent hover:bg-accent/15 text-foreground px-4 py-3.5 hover:px-6 rounded-full shadow-xl transition-all duration-300 flex items-center gap-0 hover:gap-3 hover:shadow-accent/40 hover:shadow-xl"
        title="Schedule Your Service Appointment Today"
        variants={buttonVariants}
        whileHover={{ 
          scale: 1.05,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        
        <Calendar className="relative w-5 h-5 text-accent group-hover:text-accent transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.6)] group-hover:scale-110 flex-shrink-0" />
        <span className="relative font-medium group-hover:tracking-wide transition-all duration-300 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100">Schedule Service</span>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          initial={false}
        />
      </motion.button>
      
      {/* Tint Quote */}
      <motion.button
        onClick={() => onNavigate('tint-configurator')}
        className="group relative overflow-hidden bg-card/95 backdrop-blur-xl border-2 border-warning/40 hover:border-warning hover:bg-warning/10 text-foreground px-4 py-3.5 hover:px-6 rounded-full shadow-xl transition-all duration-300 flex items-center gap-0 hover:gap-3 hover:shadow-warning/35 hover:shadow-xl"
        title="Get Tint Quote"
        variants={buttonVariants}
        whileHover={{ 
          scale: 1.05,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-warning/15 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        
        <Sun className="relative w-5 h-5 text-warning transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(253,181,33,0.5)] group-hover:rotate-90 group-hover:scale-110 flex-shrink-0" />
        <span className="relative font-medium group-hover:tracking-wide transition-all duration-300 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100">Tint Quote</span>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-warning/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          initial={false}
        />
      </motion.button>
    </motion.div>
  );
}