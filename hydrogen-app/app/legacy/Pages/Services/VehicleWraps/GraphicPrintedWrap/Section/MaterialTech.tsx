import { motion } from 'motion/react';
import { Layers, Printer, Sun, Shield } from 'lucide-react';

export function MaterialTech() {
  return (
    <section className="py-24 bg-auto-asphalt relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative z-10">
               <div className="absolute inset-0 bg-gradient-to-br from-auto-plum-deep/20 to-transparent mix-blend-overlay z-20" />
               <img 
                 src="https://images.unsplash.com/photo-1626785774573-4b79931b7842?auto=format&fit=crop&q=80" 
                 alt="Large format printing"
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-auto-plum-neon/20 rounded-2xl z-0" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-['Exo_2'] uppercase">
              Technology Meets <span className="text-auto-plum-neon">Durability</span>
            </h2>
            <p className="text-auto-silver mb-8 leading-relaxed">
              We don't just print stickers; we engineer long-lasting vehicle finishes. 
              Our multi-layer process ensures your graphic wrap stays vibrant and adhered 
              through Minnesota winters and summers.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'High-Fidelity Latex Printing',
                  desc: 'Eco-friendly inks that offer wider color gamut and instant curing without hazardous solvents.',
                  icon: Printer
                },
                {
                  title: 'Protective Overlaminate',
                  desc: 'Every print is sealed with a UV-resistant clear laminate (Gloss, Matte, or Luster) to prevent fading and scratches.',
                  icon: Layers
                },
                {
                  title: 'Air-Release Adhesive',
                  desc: 'Advanced adhesive channels allow air to escape during installation, guaranteeing a bubble-free finish.',
                  icon: Sun
                },
                {
                  title: 'Surface Safe',
                  desc: 'Our films are designed to be removed cleanly up to 5 years later, protecting your original paint underneath.',
                  icon: Shield
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-auto-plum-deep/10 rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                      <Icon className="w-6 h-6 text-auto-plum-neon" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold font-['Exo_2'] mb-1">{item.title}</h3>
                      <p className="text-auto-silver text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
