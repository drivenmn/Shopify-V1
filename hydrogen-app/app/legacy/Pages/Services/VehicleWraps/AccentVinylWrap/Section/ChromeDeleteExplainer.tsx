import { motion } from 'motion/react';
import { ArrowRightLeft } from 'lucide-react';

export function ChromeDeleteExplainer() {
  return (
    <section className="py-24 bg-auto-carbon relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-auto-plum-neon/10 border border-auto-plum-neon/30 mb-6 text-auto-plum-neon text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 font-['Exo_2'] uppercase">
              What is <span className="text-auto-plum-neon">Chrome Delete?</span>
            </h2>
            <p className="text-auto-silver mb-8 leading-relaxed text-lg">
              Modern vehicles often come with excessive chrome trim around windows, grilles, and handles. 
              A "Chrome Delete" involves wrapping these specific pieces in Satin Black, Gloss Black, or Matte Black vinyl.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-white font-bold font-['Exo_2']">Why do it?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-auto-silver">
                  <div className="w-1.5 h-1.5 rounded-full bg-auto-plum-neon" />
                  Achieve a sportier, "blacked-out" aesthetic
                </li>
                <li className="flex items-center gap-3 text-auto-silver">
                  <div className="w-1.5 h-1.5 rounded-full bg-auto-plum-neon" />
                  Protect the underlying chrome from pitting and oxidation
                </li>
                <li className="flex items-center gap-3 text-auto-silver">
                  <div className="w-1.5 h-1.5 rounded-full bg-auto-plum-neon" />
                  Completely reversible if you sell the car
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 group"
          >
            {/* Split Image Effect Concept */}
            <div className="absolute inset-0">
               <img 
                 src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80" 
                 alt="Chrome delete example"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
               <div className="absolute bottom-8 left-8">
                 <div className="flex items-center gap-2 text-white font-bold">
                   <ArrowRightLeft className="w-5 h-5 text-auto-plum-neon" />
                   <span>Before & After</span>
                 </div>
                 <p className="text-xs text-auto-silver mt-1">
                   Drag slider to compare (Interactive placeholder)
                 </p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
