import { motion } from 'motion/react';
import { Layers, Droplets, Sun, Sparkles, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Self-Healing Technology',
    description: 'Advanced polymers allow swirl marks and light scratches to disappear before your eyes with simple heat exposure.',
    icon: Sparkles
  },
  {
    title: 'Stain Resistance',
    description: 'Superior resistance against environmental contaminants like bird droppings, bug splatter, and road oils.',
    icon: Droplets
  },
  {
    title: 'Discoloration Defense',
    description: 'UV-stable film formulation will not yellow from sun exposure, ensuring a crystal clear finish for years.',
    icon: Sun
  },
  {
    title: 'Precision Fit',
    description: 'Computer-cut patterns specific to your VIN ensure a perfect, seamless fit without blades touching your paint.',
    icon: Layers
  }
];

export function Features() {
  return (
    <section className="py-24 bg-auto-asphalt relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
             <ShieldCheck className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold text-white uppercase tracking-widest font-['Exo_2']">
              Advanced Technology
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight font-['Exo_2']"
          >
            Why Choose <span className="text-auto-plum-neon">XPEL?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-auto-silver max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            The industry standard for automotive protection, engineered to perform in the harshest conditions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-auto-plum-neon/50 hover:bg-auto-plum-deep/5 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-auto-plum-neon/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-14 h-14 rounded-xl bg-auto-carbon border border-white/10 flex items-center justify-center mb-6 group-hover:border-auto-plum-neon/50 group-hover:bg-auto-plum-neon group-hover:text-black transition-all duration-300">
                <feature.icon className="w-7 h-7 text-auto-silver group-hover:text-black transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide font-['Exo_2'] group-hover:text-auto-plum-mist transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-auto-silver text-sm leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
