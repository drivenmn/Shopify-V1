import { motion } from 'motion/react';
import { Eye, Sun, Check, AlertTriangle } from 'lucide-react';

export function Options() {
  return (
    <section id="options" className="py-24 bg-auto-asphalt text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-auto-plum-deep/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-auto-plum-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 mb-6">
             <Eye className="w-4 h-4 text-auto-plum-neon" />
             <span className="text-xs font-bold text-auto-plum-mist uppercase tracking-widest font-['Exo_2']">Style Options</span>
           </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Exo_2'] uppercase text-white tracking-tight">
            Customize Your <span className="text-auto-plum-neon">Look</span>
          </h2>
          <p className="text-auto-silver text-lg font-light leading-relaxed">
            Available in clear for invisible protection, or smoked finishes to add a custom style to your vehicle while maintaining durability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Clear */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[2rem] bg-auto-carbon border border-white/10 hover:border-auto-plum-neon/50 transition-all duration-300 shadow-xl"
          >
            <div className="h-64 overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-b from-auto-asphalt to-black/90 z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80" 
                 alt="Clear Headlight Protection" 
                 className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <span className="text-white font-bold font-['Exo_2'] tracking-widest text-sm uppercase">Invisible Finish</span>
                  </div>
               </div>
            </div>
            <div className="p-10 relative z-10">
              <h3 className="text-2xl font-bold mb-4 font-['Exo_2'] uppercase text-white group-hover:text-auto-plum-mist transition-colors">XPEL Clear</h3>
              <p className="text-auto-silver mb-8 font-light leading-relaxed">
                The standard for protection. Virtually invisible, allowing 100% light transmission while providing maximum protection.
              </p>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-auto-plum-neon rounded-full" />High Gloss Finish</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-auto-plum-neon rounded-full" />Maximum Clarity</li>
              </ul>
            </div>
          </motion.div>

          {/* Slate Smoke */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-[2rem] bg-auto-carbon border border-white/10 hover:border-auto-plum-neon/50 transition-all duration-300 shadow-xl"
          >
            <div className="h-64 overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-b from-auto-asphalt to-black/90 z-10 mix-blend-multiply" />
               <img 
                 src="https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=800&q=80" 
                 alt="Slate Smoke Headlight Protection" 
                 className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale"
               />
               <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-white/80 font-bold font-['Exo_2'] tracking-widest text-sm uppercase">35% VLT</span>
                  </div>
               </div>
            </div>
            <div className="p-10 relative z-10">
              <h3 className="text-2xl font-bold mb-4 font-['Exo_2'] uppercase text-white group-hover:text-auto-plum-mist transition-colors">Slate Smoke</h3>
              <p className="text-auto-silver mb-8 font-light leading-relaxed">
                A light smoke finish (35% VLT) that dims the chrome reflection in the housing without significantly impacting light output.
              </p>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-auto-plum-neon rounded-full" />Subtle Tint</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-auto-plum-neon rounded-full" />Enhanced Style</li>
              </ul>
            </div>
          </motion.div>

          {/* Charcoal Smoke */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-[2rem] bg-auto-carbon border border-white/10 hover:border-auto-plum-neon/50 transition-all duration-300 shadow-xl"
          >
             <div className="h-64 overflow-hidden relative">
               <div className="absolute inset-0 bg-black z-10 opacity-60" />
               <img 
                 src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80" 
                 alt="Charcoal Smoke Headlight Protection" 
                 className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5">
                    <span className="text-white/60 font-bold font-['Exo_2'] tracking-widest text-sm uppercase">50% VLT</span>
                  </div>
               </div>
            </div>
            <div className="p-10 relative z-10">
              <h3 className="text-2xl font-bold mb-4 font-['Exo_2'] uppercase text-white group-hover:text-auto-plum-mist transition-colors">Charcoal Smoke</h3>
              <p className="text-auto-silver mb-8 font-light leading-relaxed">
                A darker smoke finish (50% VLT) for a more aggressive, blackout look. Best for off-road or show vehicles.
              </p>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-auto-plum-neon rounded-full" />Aggressive Look</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-auto-plum-neon rounded-full" />Custom Aesthetic</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-6 bg-auto-plum-deep/10 border border-auto-plum-neon/20 rounded-xl max-w-3xl mx-auto flex gap-4 items-start"
        >
          <AlertTriangle className="w-6 h-6 text-auto-plum-neon flex-shrink-0 mt-1" />
          <p className="text-auto-plum-mist text-sm leading-relaxed">
            <strong>Note:</strong> Check your local laws regarding headlight tinting. Some levels of tint may not be street legal in all areas. Clear protection is legal everywhere.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
