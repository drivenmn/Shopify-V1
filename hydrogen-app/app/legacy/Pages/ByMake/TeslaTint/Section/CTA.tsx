import { motion } from 'motion/react';
import { Button } from '~/legacy/components/ui/button';
import { Calendar, ShoppingBag } from 'lucide-react';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-auto-carbon to-auto-asphalt relative overflow-hidden" data-section="TeslaTintCTA">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-auto-plum-neon/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-['Exo_2'] font-bold text-white mb-6 uppercase tracking-tight">
            Ready to Tint <span className="text-auto-plum-neon">Your Tesla?</span>
          </h2>
          <p className="text-xl text-auto-silver mb-10 font-['Inter'] font-light">
            Expert installation with lifetime warranty. Same-day service available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-auto-plum-neon hover:bg-white text-black px-10 py-7 rounded-xl text-lg font-['Exo_2'] font-bold uppercase tracking-widest shadow-lg shadow-auto-plum-neon/20 transition-all"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Installation
            </Button>
            <Button
              onClick={() => onNavigate('shop')}
              variant="outline"
              className="border-white/10 text-white hover:bg-white/10 px-10 py-7 rounded-xl text-lg font-['Exo_2'] font-bold uppercase tracking-widest"
            >
              <ShoppingBag className="mr-2 w-5 h-5" />
              Shop DIY Kits
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
