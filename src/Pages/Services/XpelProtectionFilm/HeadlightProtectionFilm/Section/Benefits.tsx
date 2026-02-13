import { motion } from 'motion/react';
import { Shield, Sun, Search, Eye, Check } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Impact Resistance",
      description: "Deflect rocks, stones, and road debris that can crack or chip your expensive headlight assemblies."
    },
    {
      icon: Sun,
      title: "UV Protection",
      description: "Prevent the cloudy, yellow haze that develops on polycarbonate lenses over time due to UV exposure."
    },
    {
      icon: Search,
      title: "Self-Healing",
      description: "Like our paint protection film, minor scratches and swirl marks disappear with heat."
    },
    {
      icon: Eye,
      title: "Optical Clarity",
      description: "Maintain 100% light output for night driving safety. The film is virtually invisible when applied."
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
            Why Protect Your <span className="text-auto-plum-neon">Headlights?</span>
          </h2>
          <p className="text-auto-silver text-lg font-light leading-relaxed">
            Headlights are one of the most expensive parts to replace on modern vehicles. 
            XPEL Headlight Protection Film acts as a barrier against damage and deterioration.
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
