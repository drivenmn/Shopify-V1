import { motion } from 'motion/react';
import { Shield, Sparkles, Droplets, Zap, CheckCircle2 } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Impact Protection',
      description: 'Defend your Tesla\'s painted nose and hood from high-velocity rock chips and road debris common on highways.',
      stats: 'Impact Resistant'
    },
    {
      icon: Sparkles,
      title: 'Self-Healing',
      description: 'Advanced polymer technology allows minor scratches and swirl marks to disappear with heat exposure.',
      stats: 'Scratch Free'
    },
    {
      icon: Droplets,
      title: 'Hydrophobic',
      description: 'Repels water and dirt, making your vehicle significantly easier to clean and maintain.',
      stats: 'Easy Clean'
    },
    {
      icon: Zap,
      title: 'Stain Resistance',
      description: 'Protect against bird droppings, bug splatter, and tree sap that can etch into your clear coat.',
      stats: 'Chemical Resistant'
    }
  ];

  return (
    <section className="py-24 bg-auto-asphalt relative overflow-hidden" data-section="TeslaPPFBenefits">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-auto-plum-deep/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Shield className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold uppercase tracking-widest text-auto-silver font-['Exo_2']">Why XPEL for Tesla</span>
          </div>
          
          <h2 className="text-white mb-6 text-4xl md:text-5xl font-['Exo_2'] font-bold uppercase tracking-tight">
            Essential Protection <span className="text-auto-plum-neon">For EVs</span>
          </h2>
          <p className="text-lg text-auto-silver max-w-3xl mx-auto font-['Inter'] font-light leading-relaxed">
            Teslas have unique paint characteristics and front-end designs that make them particularly vulnerable to road damage. XPEL PPF is the solution.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-auto-carbon border border-white/10 hover:border-auto-plum-neon/50 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(157,78,221,0.1)]">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-auto-plum-neon/30 group-hover:bg-auto-plum-deep/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-auto-plum-neon" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-['Exo_2'] font-bold text-white group-hover:text-auto-plum-neon transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-auto-silver font-['Inter'] leading-relaxed mb-6 font-light">
                  {benefit.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-auto-plum-mist font-['Exo_2']">{benefit.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Us Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-auto-carbon border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden relative"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-auto-plum-neon/10 rounded-full blur-[80px]" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
             <div>
                <h3 className="text-3xl font-['Exo_2'] font-bold text-white mb-6 uppercase">The DrivenMN Difference</h3>
                <p className="text-auto-silver mb-8 leading-relaxed font-['Inter'] font-light text-lg">
                  We don't just install film; we engineer protection. Our team uses custom-modified patterns that wrap edges wherever possible, providing a seamless, near-invisible installation that standard kits can't match.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   {['Wrapped Edges', 'Minimal Seams', 'Badge Removal', 'Sensor Cutouts'].map((item) => (
                     <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-auto-plum-neon" />
                        <span className="text-white font-['Exo_2'] font-bold text-sm uppercase tracking-wide">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1732067663002-2b95d9515d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXNsYSUyMG1vZGVsJTIweSUyMHBhaW50JTIwcHJvdGVjdGlvbiUyMGZpbG0lMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzY1MTM3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Tesla PPF Installation Detail"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
