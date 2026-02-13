import { motion } from 'motion/react';
import { MessageSquare, Home, ChevronRight } from 'lucide-react';

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
    <section className="relative pt-32 pb-24 bg-auto-asphalt overflow-hidden" data-section="ContactHero">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-auto-plum-deep/30 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-auto-plum-neon/10 rounded-full blur-[100px]" />
      </div>
      
      {/* Breadcrumb - Lower Left */}
      <motion.div 
        className="absolute bottom-8 left-8 z-20 hidden md:block" 
        data-component="HeroBreadcrumb"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => onNavigate('home')}
            className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
          
          {breadcrumbSegments?.map((segment, index) => (
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
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10" data-component="HeroContent">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-8">
            <MessageSquare className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest font-['Exo_2']">
              Get In Touch
            </span>
          </div>

          <h1 className="font-['Exo_2'] text-white mb-6 uppercase tracking-tight leading-none" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 700 }}>
            Schedule Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-neon to-white drop-shadow-[0_0_15px_rgba(157,78,221,0.5)]">
              Consultation
            </span>
          </h1>

          <p className="text-auto-silver max-w-3xl mx-auto font-['Inter'] font-light leading-relaxed text-lg md:text-xl">
            Booking your next automotive service has never been easier. From Paint Protection Film to Window Tinting and Ceramic Coatings, we're here to give your car the care it deserves.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
