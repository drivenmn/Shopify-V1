import { motion } from 'motion/react';
import { Palette, Shield, Layers, Sun } from 'lucide-react';

const benefits = [
  {
    title: 'Limitless Customization',
    description: 'Choose from hundreds of colors, textures, and finishes including matte, satin, gloss, carbon fiber, and color-shift.',
    icon: Palette
  },
  {
    title: 'Paint Protection',
    description: 'Vinyl wrap acts as a protective layer over your factory paint, shielding it from minor scratches, swirls, and UV fading.',
    icon: Shield
  },
  {
    title: 'Reversible',
    description: 'Unlike a paint job, a vehicle wrap is fully reversible. You can return your car to its original color at any time, preserving resale value.',
    icon: Layers
  },
  {
    title: 'UV Resistance',
    description: 'High-quality vinyl wraps are resistant to UV rays and temperature extremes, ensuring your color stays vibrant for years.',
    icon: Sun
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-auto-asphalt relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Why Wrap Your Vehicle?</h2>
          <p className="text-auto-silver max-w-2xl mx-auto">More than just a color change—it's protection and personalization combined.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-auto-carbon border border-white/5 hover:border-auto-plum-neon/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-auto-plum-deep/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-auto-plum-neon group-hover:text-black transition-colors">
                  <Icon className="w-6 h-6 text-auto-plum-neon group-hover:text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-['Exo_2']">{benefit.title}</h3>
                <p className="text-auto-silver text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
