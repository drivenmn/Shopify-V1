import { motion } from 'motion/react';
import { ArrowUp, LayoutPanelTop } from 'lucide-react';

export function RoofAndHood() {
  return (
    <section className="py-24 bg-auto-asphalt relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Roof Wraps */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-64 rounded-2xl overflow-hidden mb-8 border border-white/5 relative">
              <img 
                src="https://images.unsplash.com/photo-1701797345773-94dc9244549b?auto=format&fit=crop&q=80" 
                alt="Black roof wrap"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                <ArrowUp className="w-6 h-6 text-auto-plum-neon" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-['Exo_2']">Roof Wraps</h3>
            <p className="text-auto-silver leading-relaxed mb-4">
              Wrapping your roof in Gloss Black mimics the look of a panoramic glass roof, lowering the visual profile of the car and giving it a sleeker stance.
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-auto-silver flex items-center gap-2">
                <span className="w-1 h-1 bg-auto-plum-neon rounded-full" /> Gloss Black (Glass Look)
              </li>
              <li className="text-sm text-auto-silver flex items-center gap-2">
                <span className="w-1 h-1 bg-auto-plum-neon rounded-full" /> Carbon Fiber (Sport Look)
              </li>
            </ul>
          </motion.div>

          {/* Hood Wraps */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="h-64 rounded-2xl overflow-hidden mb-8 border border-white/5 relative">
              <img 
                src="https://images.unsplash.com/photo-1635975481751-9e0275f4541b?auto=format&fit=crop&q=80" 
                alt="Carbon fiber hood wrap"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                <LayoutPanelTop className="w-6 h-6 text-auto-plum-neon" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-['Exo_2']">Hood & Trunk Accents</h3>
            <p className="text-auto-silver leading-relaxed mb-4">
              Add aggressive styling with a Satin Black or Carbon Fiber hood wrap. This not only looks great but reduces glare for the driver on track days.
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-auto-silver flex items-center gap-2">
                <span className="w-1 h-1 bg-auto-plum-neon rounded-full" /> Real Dry Carbon Texture
              </li>
              <li className="text-sm text-auto-silver flex items-center gap-2">
                <span className="w-1 h-1 bg-auto-plum-neon rounded-full" /> Satin/Matte Black
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
