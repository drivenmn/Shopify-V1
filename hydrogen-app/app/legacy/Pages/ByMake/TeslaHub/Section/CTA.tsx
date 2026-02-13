import { motion } from 'motion/react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface TeslaPageProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: TeslaPageProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }} 
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white mb-6">
              Ready to Protect Your Tesla?
            </h2>
            <p className="text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed text-xl">
              Get an instant quote with our online configurator or speak with a Tesla protection specialist today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={() => onNavigate('tesla-package')}
                className="bg-white hover:bg-gray-100 text-primary px-8 py-6 rounded-xl group shadow-lg text-lg font-bold"
              >
                Get Instant Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 px-8 py-6 rounded-xl text-lg font-bold"
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Contact Specialist
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
              <a
                href="tel:+16125551234"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(612) 555-1234</span>
              </a>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Minneapolis, MN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
