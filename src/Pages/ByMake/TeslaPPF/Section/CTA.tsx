import { motion } from 'motion/react';
import { ArrowRight, Phone, Calendar, MapPin } from 'lucide-react';
import { Button } from '../../../../../components/ui/button';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-24 bg-auto-asphalt relative overflow-hidden" data-section="TeslaPPFCTA">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      {/* Color Accent Orbs */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-auto-plum-deep/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-6 text-4xl md:text-6xl font-['Exo_2'] font-bold uppercase tracking-tight">
            Ready to Protect <span className="text-auto-plum-neon">Your Tesla?</span>
          </h2>
          <p className="text-xl text-auto-silver max-w-3xl mx-auto mb-10 font-['Inter'] font-light leading-relaxed">
            Don't drive another mile unprotected. Schedule your XPEL installation with Minnesota's Tesla experts today.
          </p>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <Button
            onClick={() => onNavigate('tesla-package')}
            className="bg-auto-plum-neon hover:bg-white text-black font-['Exo_2'] font-bold uppercase tracking-widest px-10 py-7 rounded-xl text-lg shadow-[0_0_20px_rgba(157,78,221,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            Build Your Package
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            onClick={() => onNavigate('contact')}
            variant="outline"
            className="border-white/10 text-white hover:bg-white/10 font-['Exo_2'] font-bold uppercase tracking-widest px-10 py-7 rounded-xl text-lg"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book Consultation
          </Button>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: Phone, title: 'Call Us', content: '(612) 843-9727', action: 'tel:6128439727' },
            { icon: MapPin, title: 'Visit Studio', content: 'Burnsville, MN', action: null },
            { icon: MapPin, title: 'Service Area', content: 'Twin Cities Metro', action: null }
          ].map((item, idx) => (
            <div key={idx} className="bg-auto-carbon border border-white/10 rounded-2xl p-8 text-center hover:border-auto-plum-neon/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-auto-plum-deep/20 transition-colors">
                <item.icon className="w-6 h-6 text-auto-plum-neon" />
              </div>
              <h3 className="text-white font-['Exo_2'] font-bold uppercase tracking-wider mb-2 text-sm">{item.title}</h3>
              {item.action ? (
                <a href={item.action} className="text-auto-silver hover:text-white transition-colors font-['Inter'] text-lg">
                  {item.content}
                </a>
              ) : (
                <p className="text-auto-silver font-['Inter'] text-lg">{item.content}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
