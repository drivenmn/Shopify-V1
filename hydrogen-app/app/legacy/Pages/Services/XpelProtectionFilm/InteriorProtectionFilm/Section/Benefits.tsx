import { motion } from 'motion/react';
import { Shield, Eraser, Fingerprint, Scan, Check } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Durable Protection",
      description: "Protect delicate piano black trim and carbon fiber from keys, rings, and fingernail scratches."
    },
    {
      icon: Eraser,
      title: "Self-Healing",
      description: "The advanced polymer technology heals surface scratches and swirl marks with heat or sunlight."
    },
    {
      icon: Fingerprint,
      title: "Fingerprint Resistant",
      description: "Reduces unsightly fingerprints and smudges on touchscreens and glossy surfaces."
    },
    {
      icon: Scan,
      title: "Precision Fit",
      description: "Computer-cut patterns designed specifically for your vehicle's make and model for a factory finish."
    }
  ];

  return (
    <section className="py-24 bg-auto-carbon relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 mb-6">
            <Check className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold text-auto-plum-mist uppercase tracking-widest font-['Exo_2']">
              Why It Matters
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Exo_2'] uppercase tracking-tight">
            Why <span className="text-auto-plum-neon">Interior Protection?</span>
          </h2>
          <p className="text-auto-silver text-lg font-light leading-relaxed">
            Modern vehicles feature more high-gloss surfaces and screens than ever before. 
            These areas are prone to scratching and wear from daily use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:shadow-[0_0_30px_rgba(157,78,221,0.15)] hover:border-auto-plum-neon/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-auto-asphalt rounded-2xl flex items-center justify-center border border-white/10 mb-6 group-hover:bg-auto-plum-neon group-hover:text-black group-hover:border-auto-plum-neon transition-all duration-300 shadow-lg">
                <benefit.icon className="w-8 h-8 text-auto-plum-neon group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-['Exo_2'] uppercase tracking-wide group-hover:text-auto-plum-mist transition-colors">
                {benefit.title}
              </h3>
              <p className="text-auto-silver leading-relaxed font-light group-hover:text-white/90 transition-colors">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
