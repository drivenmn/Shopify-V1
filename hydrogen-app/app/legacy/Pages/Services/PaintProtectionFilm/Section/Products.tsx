import { motion } from 'motion/react';
import { Shield, Sparkles, Droplets, CheckCircle2, Star, ChevronRight, Zap } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

export function Products() {
  const products = [
    {
      name: 'XPEL Ultimate Plus',
      tagline: 'The Industry Standard',
      description: 'The world’s most advanced self-healing paint protection film. Optically clear, non-yellowing, and virtually invisible defense against road hazards.',
      price: 'From $1,999',
      features: [
        'Self-Healing Top Coat',
        'Stain Resistant',
        'Mirror Smooth Finish',
        '10-Year Warranty'
      ],
      badge: 'Most Popular',
      color: 'plum'
    },
    {
      name: 'XPEL Stealth',
      tagline: 'Satin Matte Finish',
      description: 'Transform your gloss paint to a sleek satin finish, or protect your factory matte paint without altering its unique sheen.',
      price: 'From $2,499',
      features: [
        'Satin Matte Finish',
        'Self-Healing Tech',
        'Custom Look',
        '10-Year Warranty'
      ],
      badge: 'Custom Look',
      color: 'silver'
    },
    {
      name: 'Ultimate Plus Fusion',
      tagline: 'Ceramic Infused PPF',
      description: 'The best of both worlds. All the protection of PPF with the hydrophobic properties of ceramic coating bonded directly into the top coat.',
      price: 'From $2,799',
      features: [
        'Hydrophobic Surface',
        'Easy Maintenance',
        'Enhanced Gloss',
        '10-Year Warranty'
      ],
      badge: 'Premium',
      color: 'gold'
    },
    {
      name: 'Ultimate Plus 10',
      tagline: 'Heavy Duty Defense',
      description: '25% thicker than standard film for maximum impact protection on track cars, trucks, and high-wear areas.',
      price: 'From $2,299',
      features: [
        '10 mil Thickness',
        'Maximum Impact Rating',
        'Track Ready',
        '10-Year Warranty'
      ],
      badge: 'Heavy Duty',
      color: 'teal'
    }
  ];

  return (
    <section className="py-24 bg-auto-carbon relative overflow-hidden" data-section="PPFProducts">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-auto-plum-deep/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-auto-gunmetal/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold text-auto-plum-mist uppercase tracking-widest font-['Exo_2']">Product Lineup</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Exo_2']">
            ENGINEERED FOR <span className="text-auto-plum-neon">PERFECTION</span>
          </h2>
          <p className="text-xl text-auto-silver max-w-3xl mx-auto font-light leading-relaxed">
            Choose from the world's finest paint protection films. Whether you want invisible protection, a matte transformation, or hydrophobic performance, we have the perfect solution.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, idx) => {
            const isPlum = product.color === 'plum';
            
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`
                  group relative flex flex-col md:flex-row h-full rounded-[2rem] overflow-hidden border border-white/5 
                  hover:border-auto-plum-neon/50 transition-all duration-500 bg-auto-asphalt/50 backdrop-blur-sm
                  ${isPlum ? 'shadow-[0_0_30px_rgba(157,78,221,0.1)]' : 'shadow-lg'}
                `}
              >
                 {/* Hover Glow */}
                 <div className="absolute inset-0 bg-gradient-to-br from-auto-plum-neon/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                 {/* Content Side */}
                 <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">
                    <div className="flex justify-between items-start mb-6">
                       <div>
                          <span className="text-xs font-bold text-auto-plum-neon uppercase tracking-widest mb-2 block">{product.tagline}</span>
                          <h3 className="text-3xl font-bold text-white font-['Exo_2'] group-hover:text-auto-plum-mist transition-colors">
                            {product.name}
                          </h3>
                       </div>
                       {product.badge && (
                         <span className="bg-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10 shadow-sm whitespace-nowrap">
                           {product.badge}
                         </span>
                       )}
                    </div>

                    <p className="text-auto-silver mb-8 leading-relaxed font-light flex-grow">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-auto-plum-neon" />
                           <span className="text-sm text-white/80 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                       <div>
                          <p className="text-xs text-auto-silver uppercase tracking-wider mb-0.5">Starting At</p>
                          <p className="text-2xl font-bold text-white font-['Exo_2']">{product.price}</p>
                       </div>
                       
                       <Button 
                         variant="ghost" 
                         className="text-auto-plum-neon hover:text-white hover:bg-auto-plum-neon/20 px-6 h-12 rounded-xl group/btn"
                       >
                         Learn More <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                       </Button>
                    </div>
                 </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
           <Button 
             className="bg-white text-black hover:bg-auto-plum-mist font-bold px-10 h-14 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all uppercase tracking-wide text-sm"
           >
             Compare Detailed Specs
           </Button>
        </div>
      </div>
    </section>
  );
}
