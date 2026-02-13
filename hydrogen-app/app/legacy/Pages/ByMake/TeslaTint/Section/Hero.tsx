import { motion } from 'motion/react';
import { Sun, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface HeroProps {
  onNavigate: (page: string) => void;
  breadcrumbSegments?: BreadcrumbSegment[];
}

export function Hero({ onNavigate, breadcrumbSegments }: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-auto-asphalt" data-section="TeslaTintHero">
       {/* Background Elements */}
       <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
         <div className="absolute inset-0 bg-gradient-to-b from-auto-asphalt via-auto-asphalt/80 to-auto-asphalt" />
      </div>

       {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-auto-plum-deep/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Breadcrumb - Lower Left */}
      {breadcrumbSegments && breadcrumbSegments.length > 0 && (
        <div className="absolute bottom-8 left-8 z-20 hidden md:block" data-component="Breadcrumbs">
          <div className="flex items-center gap-2 text-sm font-['Inter']">
            <button
              onClick={() => onNavigate('home')}
              className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            {breadcrumbSegments.map((segment, index) => (
               <div key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-white/30" />
                  {index === breadcrumbSegments.length - 1 ? (
                     <span className="text-auto-plum-neon font-medium">{segment.label}</span>
                  ) : (
                     <button onClick={() => onNavigate(segment.href!)} className="text-white/50 hover:text-white transition-colors">
                        {segment.label}
                     </button>
                  )}
               </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-6 z-10" data-component="HeroContent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-8 backdrop-blur-md">
            <Sun className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-auto-silver text-xs font-bold uppercase tracking-widest font-['Exo_2']">XPEL Prime Ceramic Film</span>
          </div>
          
          <h1 className="text-white mb-6 font-['Exo_2'] font-bold uppercase tracking-tight leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Tesla Window <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-neon to-white drop-shadow-[0_0_15px_rgba(157,78,221,0.5)]">Tinting</span>
          </h1>
          
          <p className="text-xl text-auto-silver max-w-3xl mx-auto mb-10 font-['Inter'] font-light leading-relaxed">
            Superior UV protection, heat rejection, and privacy for your Tesla. Experience the difference of XPEL Prime XR Plus ceramic technology.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => onNavigate('tint-configurator')}
              className="bg-auto-plum-neon hover:bg-white text-black font-['Exo_2'] font-bold uppercase tracking-widest px-8 py-6 rounded-xl shadow-[0_0_20px_rgba(157,78,221,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              Configure Your Tint
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
      </div>
    </section>
  );
}
