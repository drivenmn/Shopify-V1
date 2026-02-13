import { motion } from 'motion/react';
import { ArrowRight, Phone, Calendar, Scissors, Sparkles } from 'lucide-react';
import { Button } from '../../../../../../components/ui/button';
import { useBooking } from '../../../../../../components/features/scheduling/BookingContext';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  const { openBooking } = useBooking();

  return (
    <section className="py-32 bg-auto-asphalt relative overflow-hidden" data-section="AccentWrapsCTA">
      <div className="absolute inset-0 bg-gradient-to-t from-auto-asphalt via-auto-plum-deep/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-auto-plum-neon/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-auto-carbon/80 border border-white/10 rounded-[3rem] p-12 md:p-20 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-auto-plum-neon to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-auto-plum-deep to-transparent opacity-50" />

            <div className="text-center mb-16 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-neon/10 border border-auto-plum-neon/30 mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-auto-plum-neon" />
                <span className="text-xs font-bold text-auto-plum-neon uppercase tracking-widest font-['Exo_2']">Personalize It</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-['Exo_2'] uppercase tracking-tight leading-none">
                Small Changes, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-auto-plum-mist to-white">Big Impact</span>
              </h2>
              
              <p className="text-xl text-auto-silver max-w-3xl mx-auto leading-relaxed font-light">
                Ready to de-chrome your Tesla or add a gloss black roof to your sports car? 
                Book your appointment today and transform your vehicle in just a few hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 relative z-10">
              <Button
                onClick={openBooking}
                className="bg-auto-plum-neon text-black hover:bg-white px-10 h-16 rounded-xl font-bold uppercase tracking-wider text-lg shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white px-10 h-16 rounded-xl font-bold uppercase tracking-wider text-lg backdrop-blur-sm"
              >
                <Phone className="mr-2 w-5 h-5" />
                Get a Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
