import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../../../../../../components/ui/button';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-24 bg-auto-asphalt relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-auto-asphalt via-auto-plum-deep/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-auto-plum-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-auto-carbon/80 border border-white/10 rounded-[2.5rem] p-12 md:p-20 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-auto-plum-deep/20"
        >
          {/* Decorative accents */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-auto-plum-neon to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-auto-plum-deep to-transparent opacity-50" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-neon/10 border border-auto-plum-neon/30 mb-8">
             <Sparkles className="w-4 h-4 text-auto-plum-neon" />
             <span className="text-xs font-bold text-auto-plum-neon uppercase tracking-widest font-['Exo_2']">Clear Vision</span>
           </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight font-['Exo_2'] leading-none">
            Protect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-auto-plum-mist to-white">Vision</span>
          </h2>
          
          <p className="text-auto-silver text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
             Don't wait until your headlights are foggy and yellow. Protect them today with XPEL Headlight Protection Film.
          </p>
          
          <div className="flex justify-center">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-auto-plum-neon text-black hover:bg-white px-10 h-16 rounded-xl font-bold uppercase tracking-wider text-lg shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              Schedule Appointment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
