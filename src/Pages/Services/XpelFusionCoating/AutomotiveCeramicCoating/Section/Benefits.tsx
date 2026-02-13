import { motion } from 'motion/react';
import { Droplets, Sun, Shield, Sparkles } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Droplets,
      title: 'Hydrophobic Formula',
      description: 'By repelling water and contaminants, FUSION PLUS ceramic coating makes your vehicle slicker and easier to clean.'
    },
    {
      icon: Sparkles,
      title: 'Depth & Gloss',
      description: 'Enhances the depth of color and adds a brilliant, mirror-like shine that outlasts traditional waxes.'
    },
    {
      icon: Sun,
      title: 'Element Protection',
      description: 'Protects against UV rays, oxidation, insect acids, corrosion, and contaminants that cause fading and damage.'
    },
    {
      icon: Shield,
      title: 'Scratch Resistance',
      description: 'Adds a hard, sacrificial layer that improves scratch resistance against light washing marks and swirl marks.'
    }
  ];

  return (
    <section className="py-24 bg-auto-carbon relative" data-section="CeramicCoatingBenefits">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Exo_2'] font-bold text-white uppercase italic mb-4">
            FUSION PLUS <span className="text-auto-plum-neon">BENEFITS</span>
          </h2>
          <p className="text-xl text-auto-silver max-w-2xl mx-auto font-['Inter'] font-light">
            Engineered to outperform and outlast traditional waxes and sealants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-white/5 bg-auto-asphalt hover:border-auto-plum-neon/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(157,78,221,0.1)]"
            >
              <div className="w-14 h-14 bg-auto-plum-deep/10 rounded-xl flex items-center justify-center text-auto-plum-neon group-hover:text-white group-hover:bg-auto-plum-neon transition-all duration-300 mb-6 border border-auto-plum-neon/20 group-hover:border-auto-plum-neon">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Exo_2'] uppercase tracking-wide group-hover:text-auto-plum-neon transition-colors">
                {benefit.title}
              </h3>
              <p className="text-auto-silver leading-relaxed text-sm font-['Inter'] font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
