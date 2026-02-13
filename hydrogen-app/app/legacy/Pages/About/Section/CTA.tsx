import { ArrowRight } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2>
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-primary-foreground/90 leading-relaxed" style={{ fontSize: '1.25rem' }}>
            Contact us today to schedule your appointment or get a free quote. 
            Experience the Driven Styling difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-warning text-background hover:bg-warning/90 h-14 px-8 rounded-full transition-all shadow-lg"
            >
              Contact Us
            </Button>
            <Button 
              onClick={() => onNavigate('services')}
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary h-14 px-8 rounded-full transition-all"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
