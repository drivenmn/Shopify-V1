import { motion } from 'motion/react';
import { Layers, Car, DoorOpen } from 'lucide-react';

const levels = [
  {
    title: 'Exterior Only',
    price: 'Starting at $2,800',
    description: 'The most common option. Covers all painted exterior surfaces. When doors are closed, the original color is completely hidden. When doors are open, the original color is visible on the jambs.',
    icon: Car,
    features: [
      'Full exterior coverage',
      'Door handles wrapped',
      'Mirrors wrapped',
      'Emblems removed & replaced',
      '3-4 days installation'
    ]
  },
  {
    title: 'Door Jambs & Returns',
    price: 'Starting at $4,500',
    description: 'For a more complete color change look. We wrap the visible painted areas inside the doors and body of the car. Requires significantly more disassembly and labor.',
    icon: DoorOpen,
    features: [
      'Everything in Exterior Only',
      'Inner door jambs wrapped',
      'Door returns wrapped',
      'Hatch/Trunk jambs wrapped',
      '5-7 days installation'
    ]
  },
  {
    title: 'Full Color Change',
    price: 'Custom Quote Only',
    description: 'The ultimate transformation. Includes removing doors, trunk, hood, and sometimes engine components to wrap every inch of paintable surface. Indistinguishable from paint.',
    icon: Layers,
    features: [
      'Total coverage',
      'Engine bay perimeter (optional)',
      'Under hood/trunk lid',
      'Extensive disassembly required',
      '7-10+ days installation'
    ]
  }
];

export function CoverageLevels() {
  return (
    <section className="py-24 bg-auto-asphalt relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Coverage Options</h2>
          <p className="text-auto-silver max-w-2xl mx-auto">
            Most clients choose "Exterior Only" for a balance of cost and aesthetics, 
            but we can go as deep as you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, idx) => {
            const Icon = level.icon;
            return (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-auto-carbon border border-white/5 rounded-2xl p-8 hover:border-auto-plum-neon/30 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-auto-plum-deep/10 rounded-xl flex items-center justify-center mb-6 border border-white/5">
                  <Icon className="w-7 h-7 text-auto-plum-neon" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 font-['Exo_2']">{level.title}</h3>
                <div className="text-auto-plum-mist font-bold mb-4">{level.price}</div>
                
                <p className="text-auto-silver text-sm mb-8 leading-relaxed">
                  {level.description}
                </p>

                <div className="mt-auto space-y-3 pt-6 border-t border-white/5">
                  {level.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-auto-plum-neon mt-1.5 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
