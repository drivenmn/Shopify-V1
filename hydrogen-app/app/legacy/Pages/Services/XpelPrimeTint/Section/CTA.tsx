// CTA.tsx
// Reuse similar CTA logic or a placeholder if source didn't have one specific.
// ServiceCategoryPage didn't have a specific CTA section other than the cards.
// But the tree requires it. I'll add a generic one.

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-20 bg-background text-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <Button 
            onClick={() => onNavigate('contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-xl"
          >
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
