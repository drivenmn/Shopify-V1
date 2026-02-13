import { motion } from 'motion/react';
import { Shield, ArrowRight, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { Button } from '../../../../../components/ui/button';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-auto-asphalt" data-section="PPFHero">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay">
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop')`,
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
          <button onClick={() => onNavigate('home')} className="text-white/50 hover:text-white transition-colors">Home</button>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <button onClick={() => onNavigate('services')} className="text-white/50 hover:text-white transition-colors">Services</button>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-auto-plum-neon font-medium">XPEL Paint Protection Film</span>
        </motion.div>

        {/* Main Hero Content - Left Aligned for Impact */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 mb-8 backdrop-blur-sm"
            >
              <Shield className="w-4 h-4 text-auto-plum-neon fill-auto-plum-neon/20" />
              <span className="text-auto-plum-mist text-xs font-bold uppercase tracking-widest font-['Exo_2']">XPEL Certified Installation Center</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Exo_2'] leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              THE ULTIMATE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-neon to-white drop-shadow-[0_0_15px_rgba(157,78,221,0.5)]">INVISIBLE SHIELD</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-auto-silver max-w-2xl mb-10 font-light leading-relaxed font-['Inter']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Protect your investment with XPEL Ultimate Plus paint protection film. 
              Self-healing technology, mirror-smooth finish, and a 10-year warranty against rock chips and road debris.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                onClick={() => onNavigate('ppf-configurator')}
                size="lg"
                className="bg-auto-plum-neon text-black hover:bg-white hover:text-black font-bold text-base px-8 h-14 rounded-xl shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                Build Your Package <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => onNavigate('contact')}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white h-14 px-8 rounded-xl backdrop-blur-sm font-['Exo_2'] font-bold tracking-wide"
              >
                Schedule Consultation
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
                { value: '10 YR', label: 'Manufacturer Warranty' },
                { value: '100%', label: 'Self-Healing Tech' },
                { value: '5000+', label: 'Vehicles Protected' },
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
                  src="https://images.unsplash.com/photo-1600706432502-793910c85c07?q=80&w=1587&auto=format&fit=crop" 
                  alt="Porsche 911 PPF Installation" 
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Floating Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 glass p-4 rounded-xl border border-white/10">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-auto-plum-neon/20 flex items-center justify-center border border-auto-plum-neon/50">
                         <Shield className="w-6 h-6 text-auto-plum-neon" />
                      </div>
                      <div>
                         <p className="text-white font-bold font-['Exo_2']">Ultimate Protection</p>
                         <div className="flex items-center gap-1 text-xs text-auto-plum-mist">
                            <Star className="w-3 h-3 fill-auto-plum-mist" />
                            <Star className="w-3 h-3 fill-auto-plum-mist" />
                            <Star className="w-3 h-3 fill-auto-plum-mist" />
                            <Star className="w-3 h-3 fill-auto-plum-mist" />
                            <Star className="w-3 h-3 fill-auto-plum-mist" />
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-auto-plum-neon/20 rounded-full blur-3xl animate-pulse" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-auto-plum-deep/40 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
