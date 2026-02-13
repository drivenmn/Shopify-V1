import { motion } from 'motion/react';
import { Sofa } from 'lucide-react';

export function InteriorOptions() {
  return (
    <section className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative">
               <img 
                 src="https://images.unsplash.com/photo-1752959819208-ce6d3c797909?auto=format&fit=crop&q=80" 
                 alt="Interior carbon fiber wrap"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
               <div className="absolute bottom-6 left-6 flex items-center gap-3">
                 <div className="p-2 bg-auto-plum-neon rounded-lg text-black">
                   <Sofa className="w-5 h-5" />
                 </div>
                 <span className="text-white font-bold font-['Exo_2']">Interior Console Wrap</span>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-['Exo_2'] uppercase">
              Delete the <span className="text-auto-plum-neon">Piano Black</span>
            </h2>
            <p className="text-auto-silver mb-6 leading-relaxed">
              Many modern cars (especially Teslas) come with glossy "piano black" center consoles that scratch instantly and attract dust/fingerprints. 
            </p>
            <p className="text-auto-silver mb-8 leading-relaxed">
              We can wrap these interior pieces in:
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {['Matte Black', 'Brushed Metal', 'Carbon Fiber', 'Wood Grain', 'White (Color Match)', 'Alcantara Suede'].map((texture) => (
                <div key={texture} className="bg-auto-carbon border border-white/5 p-3 rounded-lg text-sm text-white font-medium text-center hover:border-auto-plum-neon/30 transition-colors">
                  {texture}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
