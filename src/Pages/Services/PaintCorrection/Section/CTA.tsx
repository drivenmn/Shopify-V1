import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../../../../components/ui/button';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-32 relative overflow-hidden bg-auto-plum-deep" data-section="DetailingCTA">
      {/* Background glow and texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-auto-plum-neon/20 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-black/40 blur-[150px]" />

      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-['Exo_2'] font-bold text-white uppercase italic mb-8 leading-tight drop-shadow-xl">
            Ready for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-auto-plum-mist">Transformation?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-['Inter'] font-light">
            Don't let swirls and scratches hide your vehicle's true potential. Schedule your paint correction consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-white text-black hover:bg-auto-plum-mist px-10 py-8 text-lg font-bold font-['Exo_2'] uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] rounded-xl transition-all hover:scale-105"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => onNavigate('services')}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-10 py-8 text-lg font-bold font-['Exo_2'] uppercase tracking-widest rounded-xl backdrop-blur-sm"
            >
              Other Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
