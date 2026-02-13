import { motion } from 'motion/react';
import { Sparkles, Shield, Zap, Layers, Plus } from 'lucide-react';

export function AddOns() {
  const addons = [
    { name: 'Headlight Restoration', price: '$199', icon: Sparkles, description: 'Remove yellowing and oxidation from lenses to restore clarity and night visibility.' },
    { name: 'Ceramic Coating', price: 'From $899', icon: Shield, description: 'Lock in your correction results for years with a 9H hydrophobic ceramic coating.' },
    { name: 'Engine Bay Detail', price: '$149', icon: Zap, description: 'Safe steam cleaning, degreasing and dressing of all engine bay components.' },
    { name: 'Wheel Coating', price: '$299', icon: Layers, description: 'High-temp ceramic protection for wheel faces and barrels to repel brake dust.' },
  ];

  return (
    <section className="py-24 bg-auto-asphalt relative" data-section="PaintCorrectionAddOns">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Plus className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold text-white uppercase tracking-widest font-['Exo_2']">Enhancements</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-['Exo_2'] font-bold text-white uppercase italic mb-4">
            POPULAR <span className="text-auto-plum-neon">ADD-ONS</span>
          </h2>
          <p className="text-auto-silver font-['Inter'] font-light">
            Complete your detail with these premium extras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-auto-carbon p-8 rounded-2xl shadow-sm border border-white/5 hover:border-auto-plum-neon/40 transition-all group flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-auto-plum-deep/10 flex items-center justify-center group-hover:bg-auto-plum-neon/20 transition-colors">
                  <addon.icon className="w-6 h-6 text-auto-plum-mist group-hover:text-auto-plum-neon transition-colors" />
                </div>
                <span className="font-bold text-auto-plum-neon font-['Exo_2'] text-lg bg-auto-plum-deep/10 px-3 py-1 rounded-lg border border-auto-plum-neon/20">{addon.price}</span>
              </div>
              <h3 className="font-bold text-white mb-3 font-['Exo_2'] uppercase text-lg group-hover:text-auto-plum-mist transition-colors">{addon.name}</h3>
              <p className="text-sm text-auto-silver font-['Inter'] font-light leading-relaxed flex-grow">{addon.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
