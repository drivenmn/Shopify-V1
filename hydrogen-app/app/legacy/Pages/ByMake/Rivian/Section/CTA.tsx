import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-24 bg-auto-plum-deep relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-8">Ready for Adventure?</h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Protect your Rivian before your next off-road trip.
        </p>
        <Button 
          onClick={() => onNavigate('contact')}
          className="bg-white text-black hover:bg-gray-100 font-bold px-10 py-6 rounded-xl text-lg"
        >
          Schedule Service <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
}
