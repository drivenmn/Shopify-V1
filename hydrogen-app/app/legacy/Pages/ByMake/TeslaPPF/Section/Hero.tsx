import { motion } from 'motion/react';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-auto-asphalt" data-section="TeslaPPFHero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1662947475980-4ef86d494b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXNsYSUyMG1vZGVsJTIwMyUyMHBlcmZvcm1hbmNlJTIwcmVkJTIwc3R1ZGlvfGVufDF8fHx8MTc2NTEzNzY0MXww&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center bg-no-repeat grayscale mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-auto-asphalt via-auto-asphalt/80 to-auto-asphalt" />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-auto-plum-deep/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-auto-plum-neon/10 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <motion.div 
        className="relative max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
          staggerChildren: 0.15
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Shield className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-auto-silver text-xs font-bold uppercase tracking-widest font-['Exo_2']">
              Tesla Protection Specialists
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-white mb-6 font-['Exo_2'] font-bold uppercase tracking-tight leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Premium Protection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-neon to-white drop-shadow-[0_0_15px_rgba(157,78,221,0.5)]">
              For Your Tesla
            </span>
          </h1>
          
          <p className="text-auto-silver max-w-3xl mx-auto mb-10 text-lg md:text-xl font-['Inter'] font-light leading-relaxed">
            Protect your Model S, 3, X, or Y from rock chips and road debris with industry-leading XPEL paint protection film. Precision-cut patterns designed specifically for Tesla vehicles.
          </p>

          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {[
              'Factory Trained Installers',
              'Precision Computer Cuts',
              '10-Year Warranty'
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/70 font-['Inter'] text-sm">
                <CheckCircle2 className="w-4 h-4 text-auto-plum-neon" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => onNavigate('tesla-package')}
              className="bg-auto-plum-neon hover:bg-white text-black font-['Exo_2'] font-bold uppercase tracking-widest px-8 py-6 rounded-xl shadow-[0_0_20px_rgba(157,78,221,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              Configure Package
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-white/10 text-white hover:bg-white/10 font-['Exo_2'] font-bold uppercase tracking-widest px-8 py-6 rounded-xl"
            >
              Get Free Quote
            </Button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {[
            { value: '500+', label: 'Teslas Protected' },
            { value: 'XPEL', label: 'Certified Facility' },
            { value: '10-Year', label: 'Warranty' },
            { value: '5-Star', label: 'Rated Service' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center group hover:border-auto-plum-neon/50 transition-colors"
            >
              <div className="text-3xl text-white font-['Exo_2'] font-bold mb-1 group-hover:text-auto-plum-neon transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-auto-silver font-['Exo_2'] font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
