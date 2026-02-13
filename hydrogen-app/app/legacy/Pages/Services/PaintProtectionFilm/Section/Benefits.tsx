import { motion } from 'motion/react';
import { Shield, Droplets, Sun, Zap, DollarSign, TrendingUp, Clock, Award } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Rock Chip Defense',
      description: 'Absorbs impact from rocks and road debris, preventing chips and damage to your factory paint.',
      color: 'plum'
    },
    {
      icon: Droplets,
      title: 'Self-Healing Tech',
      description: 'Advanced polymer technology allows swirl marks and light scratches to disappear with heat.',
      color: 'neon'
    },
    {
      icon: Sun,
      title: 'UV Protection',
      description: 'Blocks harmful UV rays, preventing paint oxidation and fading while maintaining clarity.',
      color: 'silver'
    },
    {
      icon: Zap,
      title: 'Stain Resistance',
      description: 'Resists staining from bird droppings, bug splatter, and environmental contaminants.',
      color: 'plum'
    },
    {
      icon: DollarSign,
      title: 'Resale Value',
      description: 'Maintains showroom quality paint, significantly increasing future trade-in or resale value.',
      color: 'neon'
    },
    {
      icon: Award,
      title: 'Invisible Finish',
      description: 'Optically clear formula ensures the film is virtually undetectable on your vehicle.',
      color: 'silver'
    },
    {
      icon: Clock,
      title: '10-Year Warranty',
      description: 'Backed by a comprehensive 10-year manufacturer warranty against yellowing and cracking.',
      color: 'plum'
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Prevents costly repainting and body work repairs from everyday driving damage.',
      color: 'neon'
    }
  ];

  return (
    <section className="py-24 bg-auto-asphalt relative" data-section="PPFBenefits">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Exo_2']">
            WHY CHOOSE <span className="text-auto-plum-neon">XPEL?</span>
          </h2>
          <p className="text-xl text-auto-silver max-w-3xl mx-auto font-light leading-relaxed">
            More than just a clear sticker. XPEL Paint Protection Film is advanced engineering for your vehicle's surfaces.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-auto-plum-neon/50 hover:to-auto-plum-deep/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-auto-carbon rounded-2xl m-[1px]" />
                
                <div className="relative h-full p-8 rounded-2xl overflow-hidden">
                  {/* Background Glow on Hover */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-auto-plum-neon/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-auto-plum-neon/50 group-hover:bg-auto-plum-neon/10 transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-white/80 group-hover:text-auto-plum-neon transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-3 font-['Exo_2'] group-hover:text-auto-plum-mist transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-auto-silver leading-relaxed font-light group-hover:text-white/80 transition-colors">
                    {benefit.description}
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
