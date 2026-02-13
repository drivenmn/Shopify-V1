import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCTAProps {
  onNavigate: (page: string) => void;
}

export function FinalCTA({ onNavigate }: FinalCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-auto-plum-deep">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-auto-plum-deep to-black opacity-90" />
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }} 
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to <span className="text-auto-plum-neon">Protect</span> Your Vehicle?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            Don't wait for rock chips or sun damage. Secure your appointment at Minnesota's premier protection studio today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('ppf-configurator')}
              className="group relative px-8 py-4 bg-white text-auto-plum-deep hover:bg-auto-plum-mist rounded-lg font-bold tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto min-w-[200px]"
            >
              <span className="flex items-center justify-center gap-2">
                GET STARTED
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="group px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-lg font-bold tracking-wide transition-all w-full sm:w-auto min-w-[200px]"
            >
              CONTACT US
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
