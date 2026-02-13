import { motion } from 'motion/react';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../../../../components/ui/button';
import { useBooking } from '../../../../../../components/features/scheduling/BookingContext';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { openBooking } = useBooking();

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-auto-asphalt" data-section="WindshieldHero">
      {/* Background Parallax */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div 
          className="w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kc2hpZWxkJTIwZ2xhc3N8ZW58MXx8fHwxNzY0OTc0NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} 
        />
      </div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-auto-asphalt via-auto-asphalt/95 to-auto-asphalt" />

      {/* Animated Atmosphere Glows */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-auto-plum-deep/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-auto-plum-neon/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 backdrop-blur-md">
              <Shield className="w-4 h-4 text-auto-plum-neon" />
              <span className="text-auto-plum-mist text-xs font-bold uppercase tracking-widest font-['Exo_2']">
                XPEL Certified Installation
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-white mb-6 font-['Exo_2'] font-bold uppercase tracking-tight text-5xl md:text-7xl leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white">XPEL Windshield</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-neon via-white to-auto-plum-neon animate-gradient-x bg-[length:200%_auto]">
              Protection
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-auto-silver max-w-2xl mx-auto mb-10 leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The ultimate defense against rock chips, road debris, and environmental damage. 
            Invisible protection with crystal-clear optical clarity that preserves your view.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              'Self-Healing Technology',
              '99% UV Blocking',
              '100% Optical Clarity'
            ].map((item, idx) => (
              <div key={item} className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-auto-plum-neon" />
                <span className="font-['Inter'] text-sm">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={() => onNavigate('ppf-configurator')}
              className="bg-auto-plum-neon text-black hover:bg-white px-8 py-6 rounded-xl font-bold uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={openBooking}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white px-8 py-6 rounded-xl font-bold uppercase tracking-wider backdrop-blur-sm"
            >
              Schedule Consultation
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '10+', label: 'Years Protection' },
              { value: '99%', label: 'UV Blocking' },
              { value: '2-3 Hrs', label: 'Install Time' },
              { value: '100%', label: 'Optical Clarity' }
            ].map((stat, idx) => (
              <motion.div 
                key={stat.label}
                className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-auto-plum-neon/30 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-white mb-1 font-['Exo_2']">
                  {stat.value}
                </div>
                <div className="text-xs text-auto-plum-mist uppercase tracking-wider font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
