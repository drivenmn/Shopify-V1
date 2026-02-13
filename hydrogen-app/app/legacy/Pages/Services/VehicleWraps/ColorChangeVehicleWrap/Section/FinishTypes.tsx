import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const finishes = [
  {
    id: 'matte',
    name: 'Matte',
    description: 'A flat, non-reflective finish that absorbs light for a stealthy, modern look. Highlights vehicle body lines aggressively.',
    image: 'https://images.unsplash.com/photo-1611405379965-3ea0ffe17cf4?auto=format&fit=crop&q=80',
    popular: true
  },
  {
    id: 'satin',
    name: 'Satin',
    description: 'The perfect middle ground between matte and gloss. Offers a silky sheen that looks premium and is easier to maintain than matte.',
    image: 'https://images.unsplash.com/photo-1729232843619-0b1b3ce131f3?auto=format&fit=crop&q=80',
    popular: true
  },
  {
    id: 'gloss',
    name: 'High Gloss',
    description: 'Indistinguishable from factory paint. Deep, wet-looking reflection that rivals the best clear coats on the market.',
    image: 'https://images.unsplash.com/photo-1643747653473-d03d0b3e3211?auto=format&fit=crop&q=80',
    popular: false
  },
  {
    id: 'shift',
    name: 'Color Shift',
    description: 'Dynamic films that change color depending on the viewing angle and lighting conditions. Guaranteed to turn heads.',
    image: 'https://images.unsplash.com/photo-1601917750278-12f45b9d74f7?auto=format&fit=crop&q=80',
    popular: false
  }
];

export function FinishTypes() {
  return (
    <section className="py-24 bg-auto-carbon border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Exo_2'] uppercase">
            Choose Your <span className="text-auto-plum-neon">Finish</span>
          </h2>
          <p className="text-auto-silver max-w-2xl mx-auto">
            We offer hundreds of colors across these premium finish types. 
            Stop by our studio to see physical swatches in different lighting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {finishes.map((finish, idx) => (
            <motion.div
              key={finish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={finish.image} 
                  alt={`${finish.name} wrap finish`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {finish.popular && (
                  <div className="absolute top-4 right-4 bg-auto-plum-neon text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                    Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2 font-['Exo_2'] transform translate-y-0 transition-transform duration-300">
                  {finish.name}
                </h3>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {finish.description}
                </p>

                <div className="flex items-center gap-2 text-auto-plum-neon text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <Check className="w-4 h-4" />
                  Available in 50+ Colors
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
