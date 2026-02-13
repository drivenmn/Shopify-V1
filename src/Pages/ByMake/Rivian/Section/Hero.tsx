import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../../components/ui/button';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-auto-asphalt">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1675254806679-6766763332ac?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-auto-asphalt/80 via-transparent to-auto-asphalt" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Exo_2']"
        >
          RIVIAN <span className="text-auto-plum-neon">PROTECTION</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-auto-silver max-w-2xl mx-auto mb-8 font-light"
        >
          Adventure-ready protection packages for R1T and R1S.
        </motion.p>
        <Button onClick={() => onNavigate('contact')} className="bg-auto-plum-neon text-black font-bold text-lg px-8 py-6 rounded-xl">
          Get a Quote <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
}
