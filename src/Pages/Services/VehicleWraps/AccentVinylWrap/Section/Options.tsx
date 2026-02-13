import { motion } from 'motion/react';
import { Ghost, ArrowUp, Component, Eye } from 'lucide-react';

const options = [
  {
    title: 'Chrome Delete',
    description: 'Eliminate the factory chrome trim around windows, grilles, and handles for a sleek, modern "blackout" aesthetic.',
    icon: Ghost
  },
  {
    title: 'Roof Wraps',
    description: 'Create a panoramic glass look or two-tone effect by wrapping your roof in high-gloss black or carbon fiber.',
    icon: ArrowUp
  },
  {
    title: 'Interior Trim',
    description: 'Update your interior by wrapping wood grain or piano black consoles in modern textures like brushed metal or carbon fiber.',
    icon: Component
  },
  {
    title: 'Mirror & Hood Accents',
    description: 'Add sporty touches with contrasting mirror caps, hood stripes, or spoiler accents in any color you choose.',
    icon: Eye
  }
];

export function Options() {
  return (
    <section className="py-24 bg-auto-asphalt relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Customization Options</h2>
          <p className="text-auto-silver max-w-2xl mx-auto">Mix and match services to create your perfect look.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => {
            const Icon = option.icon;
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
                <h3 className="text-xl font-bold text-white mb-3 font-['Exo_2']">{option.title}</h3>
                <p className="text-auto-silver text-sm leading-relaxed">{option.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
