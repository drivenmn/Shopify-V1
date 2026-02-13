import { motion } from 'motion/react';
import { ArrowRight, Phone, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-32 bg-auto-asphalt relative overflow-hidden" data-section="PPFCTA">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-auto-asphalt via-auto-plum-deep/20 to-auto-asphalt"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-auto-plum-neon/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-auto-carbon/80 border border-white/10 rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden backdrop-blur-xl shadow-2xl shadow-auto-plum-deep/20"
        >
           {/* Glow Lines */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-auto-plum-neon to-transparent opacity-50" />
           <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-auto-plum-deep to-transparent opacity-50" />

           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-neon/10 border border-auto-plum-neon/30 mb-8">
             <Sparkles className="w-4 h-4 text-auto-plum-neon" />
             <span className="text-xs font-bold text-auto-plum-neon uppercase tracking-widest font-['Exo_2']">Get Started Today</span>
           </div>

           <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-['Exo_2'] leading-tight">
             PROTECT YOUR <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-auto-plum-mist to-white">INVESTMENT</span>
           </h2>
           
           <p className="text-xl text-auto-silver max-w-2xl mx-auto mb-12 font-light leading-relaxed">
             Don't leave your vehicle's paint vulnerable to the road. Schedule your consultation with Minneapolis's premier XPEL facility.
           </p>

           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
             <Button
               onClick={() => onNavigate('ppf-configurator')}
               className="w-full sm:w-auto bg-auto-plum-neon hover:bg-white text-black font-bold px-10 h-16 rounded-xl text-lg shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all uppercase tracking-wide"
             >
               Build Your Package <ArrowRight className="ml-2 w-5 h-5" />
             </Button>
             
             <Button
               onClick={() => onNavigate('contact')}
               variant="outline"
               className="w-full sm:w-auto border-white/20 text-white hover:bg-white hover:text-black h-16 px-10 rounded-xl text-lg font-bold font-['Exo_2'] uppercase tracking-wide backdrop-blur-sm"
             >
               <Calendar className="mr-2 w-5 h-5" />
               Book Consultation
             </Button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
              <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Phone className="w-5 h-5 text-auto-plum-mist" />
                 </div>
                 <div className="text-sm font-bold text-white uppercase tracking-wider">Call Us</div>
                 <a href="tel:612-555-0100" className="text-auto-silver hover:text-white transition-colors">(612) 555-0100</a>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin className="w-5 h-5 text-auto-plum-mist" />
                 </div>
                 <div className="text-sm font-bold text-white uppercase tracking-wider">Visit Us</div>
                 <div className="text-auto-silver">Minneapolis, MN</div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Calendar className="w-5 h-5 text-auto-plum-mist" />
                 </div>
                 <div className="text-sm font-bold text-white uppercase tracking-wider">Hours</div>
                 <div className="text-auto-silver">Mon-Sat: 8AM - 6PM</div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
