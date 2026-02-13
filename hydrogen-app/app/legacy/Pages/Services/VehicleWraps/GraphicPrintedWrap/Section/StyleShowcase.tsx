import { motion } from 'motion/react';
import { Palette, Flag, Building2, Brush } from 'lucide-react';

const styles = [
  {
    title: 'Racing Liveries',
    description: 'Track-ready designs inspired by GT3, Formula Drift, and Rally. Bold stripes, sponsor placement, and aggressive color blocking.',
    icon: Flag,
    image: 'https://images.unsplash.com/photo-1765202665069-69b73d827420?auto=format&fit=crop&q=80'
  },
  {
    title: 'Itasha & Anime',
    description: 'Detailed character art and complex backgrounds. We work with talented illustrators to bring your favorite characters to life.',
    icon: Brush,
    // Placeholder image for anime style since specific ones are hard to find on Unsplash
    image: 'https://images.unsplash.com/photo-1682980798840-94f282483074?auto=format&fit=crop&q=80' 
  },
  {
    title: 'Commercial Branding',
    description: 'Turn your company vehicle into a marketing machine. Clean, professional layouts that communicate your brand instantly.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?auto=format&fit=crop&q=80'
  },
  {
    title: 'Abstract Art',
    description: 'Geometric patterns, camouflage, gradients, and digital noise. Perfect for making a unique statement without specific imagery.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1638731006124-1c9a33edba30?auto=format&fit=crop&q=80'
  }
];

export function StyleShowcase() {
  return (
    <section className="py-24 bg-auto-carbon relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Exo_2'] uppercase">
            Design <span className="text-auto-plum-neon">Styles</span>
          </h2>
          <p className="text-auto-silver max-w-2xl mx-auto">
            From subtle accents to full-blown race cars, our design team can handle any aesthetic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {styles.map((style, idx) => {
            const Icon = style.icon;
            return (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[300px] rounded-2xl overflow-hidden border border-white/10"
              >
                <img 
                  src={style.image} 
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-auto-plum-neon text-black rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-['Exo_2']">{style.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed max-w-md">
                    {style.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
