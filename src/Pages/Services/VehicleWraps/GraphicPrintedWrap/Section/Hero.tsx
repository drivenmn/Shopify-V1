import { motion } from 'motion/react';
import { PenTool, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../../../../components/ui/button';
import { useBooking } from '../../../../../../components/features/scheduling/BookingContext';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { openBooking } = useBooking();

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-auto-asphalt" data-section="GraphicWrapsHero">
      {/* Background Parallax */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div 
          className="w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1682980798840-94f282483074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjB3aXRoJTIwY29sb3JmdWwlMjBsaXZlcnklMjB3cmFwfGVufDF8fHx8MTc3MDQ4MTA0N3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} 
        />
      </div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-auto-asphalt via-auto-asphalt/90 to-auto-asphalt" />

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
              <PenTool className="w-4 h-4 text-auto-plum-neon" />
              <span className="text-auto-plum-mist text-xs font-bold uppercase tracking-widest font-['Exo_2']">
                Custom Design Studio
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
            <span className="block text-white">Custom Graphic</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-neon via-white to-auto-plum-neon animate-gradient-x bg-[length:200%_auto]">
              Vehicle Wraps
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-auto-silver max-w-2xl mx-auto mb-10 leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From racing liveries to custom artistic designs. 
            We turn your vision into reality with high-resolution printed wraps and expert installation.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              'In-House Design Team',
              'High-Resolution Print',
              'Premium 3M/Avery Vinyl'
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
              onClick={openBooking}
              className="bg-auto-plum-neon text-black hover:bg-white px-8 py-6 rounded-xl font-bold uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              Start Design Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white px-8 py-6 rounded-xl font-bold uppercase tracking-wider backdrop-blur-sm"
            >
              View Gallery
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
