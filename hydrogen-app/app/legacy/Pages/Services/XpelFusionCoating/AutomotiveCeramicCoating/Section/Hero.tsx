import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ChevronRight, ShieldCheck, Home } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface HeroProps {
  onNavigate: (page: string) => void;
  breadcrumbSegments?: BreadcrumbSegment[];
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-auto-asphalt" data-section="CeramicCoatingHero">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay">
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1627280052756-cc5e080c8458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-auto-asphalt via-auto-asphalt/80 to-auto-asphalt" />
        <div className="absolute inset-0 bg-gradient-to-r from-auto-asphalt via-transparent to-auto-asphalt/50" />
      </div>

      {/* Animated Atmosphere Glows */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-auto-plum-deep/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-auto-plum-neon/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content Container */}
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 md:px-8 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Breadcrumbs */}
        <motion.div 
          className="flex items-center gap-2 mb-8 text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button onClick={() => onNavigate('home')} className="text-white/50 hover:text-white transition-colors flex items-center gap-1">
             <Home className="w-3 h-3" />
             Home
          </button>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <button onClick={() => onNavigate('services')} className="text-white/50 hover:text-white transition-colors">Services</button>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-auto-plum-neon font-medium">Ceramic Coating</span>
        </motion.div>

        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 mb-8 backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4 text-auto-plum-neon fill-auto-plum-neon/20" />
              <span className="text-auto-plum-mist text-xs font-bold uppercase tracking-widest font-['Exo_2']">XPEL FUSION PLUS™ Certified</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Exo_2'] leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              UNRIVALED <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-neon to-white drop-shadow-[0_0_15px_rgba(157,78,221,0.5)]">PROTECTION</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-auto-silver max-w-2xl mb-10 font-light leading-relaxed font-['Inter']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              FUSION PLUS® bonds at the molecular level to seal and protect surfaces from environmental contaminants, harmful UV rays, and insect acids. Experience superior hydrophobicity and gloss.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                onClick={() => onNavigate('contact')}
                size="lg"
                className="bg-auto-plum-neon text-black hover:bg-white hover:text-black font-bold text-base px-8 h-14 rounded-xl shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 font-['Exo_2'] tracking-wide"
              >
                Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white h-14 px-8 rounded-xl backdrop-blur-sm font-['Exo_2'] font-bold tracking-wide"
              >
                View Applications
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { value: '4 YEAR', label: 'Warranty' },
                { value: '9H', label: 'Hardness' },
                { value: '100%', label: 'Hydrophobic' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white font-['Exo_2'] mb-1">{stat.value}</div>
                  <div className="text-xs text-auto-silver font-['Inter'] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <div className="lg:col-span-5 hidden lg:block relative">
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-auto-plum-deep/30 glass-card"
             >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1751077932652-b1237f626928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1587&auto=format&fit=crop" 
                  alt="Ceramic Coating Application" 
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Floating Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 glass p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-auto-plum-neon/20 flex items-center justify-center border border-auto-plum-neon/50">
                         <Sparkles className="w-6 h-6 text-auto-plum-neon" />
                      </div>
                      <div>
                         <p className="text-white font-bold font-['Exo_2']">Molecular Bond</p>
                         <div className="flex items-center gap-1 text-xs text-auto-plum-mist">
                            <span>Paint Protection Film Compatible</span>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
