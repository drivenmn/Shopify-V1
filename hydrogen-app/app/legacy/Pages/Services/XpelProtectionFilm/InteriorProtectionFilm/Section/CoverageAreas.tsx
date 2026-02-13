import { motion } from 'motion/react';
import { Check, Layers } from 'lucide-react';

export function CoverageAreas() {
  const areas = [
    "Center Consoles",
    "Touchscreens & Navigation",
    "Dashboard Trim",
    "Door Panels & Controls",
    "Carbon Fiber Accents",
    "Piano Black Surfaces"
  ];

  return (
    <section className="py-24 bg-auto-asphalt text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-auto-plum-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 mb-6">
               <Layers className="w-4 h-4 text-auto-plum-neon" />
               <span className="text-xs font-bold text-auto-plum-mist uppercase tracking-widest font-['Exo_2']">
                 Precision Cut Patterns
               </span>
             </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Exo_2'] uppercase tracking-tight">
              Coverage <span className="text-auto-plum-neon">Areas</span>
            </h2>
            <p className="text-auto-silver text-lg mb-10 leading-relaxed font-light">
              Our DAP (Design Access Program) software provides precision patterns for nearly every interior surface that needs protection. No blades touch your vehicle's interior.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-auto-plum-neon/50 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-auto-plum-deep/30 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-auto-plum-neon group-hover:text-black transition-all">
                    <Check className="w-4 h-4 text-auto-plum-neon group-hover:text-black" />
                  </div>
                  <span className="font-['Inter'] font-medium tracking-wide text-white/90">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group"
          >
             {/* Image */}
             <img 
               src="https://images.unsplash.com/photo-1767277974735-a6e70cd71d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGNlbnRlciUyMGNvbnNvbGUlMjB0b3VjaHNjcmVlbiUyMGNhcmJvbiUyMGZpYmVyfGVufDF8fHx8MTc3MDQ3ODIzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
               alt="Luxury Interior Protection"
               className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
             />
             
             {/* Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
             
             {/* Badge */}
             <div className="absolute bottom-8 left-8">
               <div className="px-4 py-2 bg-auto-plum-neon text-black text-xs font-bold rounded-lg uppercase tracking-wider shadow-lg">
                 Precision Cut
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
