import { motion } from 'motion/react';
import { Star, ShieldCheck, Zap } from 'lucide-react';

export function BrandSpotlight() {
  return (
    <section className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-white mb-6 font-['Exo_2'] uppercase">Premium Materials Only</h2>
             <p className="text-auto-silver leading-relaxed">
               We exclusively use cast vinyl films from the industry's top manufacturers. 
               Cheap, calendared vinyl shrinks, cracks, and damages your paint. 
               We don't touch it.
             </p>
           </div>

           <div className="grid md:grid-cols-2 gap-12 items-center">
             {/* 3M Section */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-auto-carbon p-8 rounded-2xl border border-white/5"
             >
               <div className="text-4xl font-black text-white mb-4 italic tracking-tighter">3M</div>
               <h3 className="text-xl font-bold text-auto-plum-neon mb-4">2080 Series</h3>
               <ul className="space-y-3">
                 <li className="flex items-center gap-2 text-sm text-auto-silver">
                   <ShieldCheck className="w-4 h-4 text-auto-plum-neon" />
                   Protective clear cap layer (on gloss)
                 </li>
                 <li className="flex items-center gap-2 text-sm text-auto-silver">
                   <Zap className="w-4 h-4 text-auto-plum-neon" />
                   Superior conformability
                 </li>
                 <li className="flex items-center gap-2 text-sm text-auto-silver">
                   <Star className="w-4 h-4 text-auto-plum-neon" />
                   Industry standard for durability
                 </li>
               </ul>
             </motion.div>

             {/* Avery Section */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-auto-carbon p-8 rounded-2xl border border-white/5"
             >
               <div className="text-4xl font-black text-white mb-4 italic tracking-tighter">Avery Dennison</div>
               <h3 className="text-xl font-bold text-auto-plum-neon mb-4">Supreme Wrapping Film™</h3>
               <ul className="space-y-3">
                 <li className="flex items-center gap-2 text-sm text-auto-silver">
                   <ShieldCheck className="w-4 h-4 text-auto-plum-neon" />
                   Paint-like finish quality
                 </li>
                 <li className="flex items-center gap-2 text-sm text-auto-silver">
                   <Zap className="w-4 h-4 text-auto-plum-neon" />
                   Patented Easy Apply RS™ technology
                 </li>
                 <li className="flex items-center gap-2 text-sm text-auto-silver">
                   <Star className="w-4 h-4 text-auto-plum-neon" />
                   Huge variety of unique colors
                 </li>
               </ul>
             </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
