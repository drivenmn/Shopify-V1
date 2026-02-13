import { motion } from 'motion/react';
import { Droplets, Anchor, Sparkles, Paintbrush, Clock, ShieldCheck } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Droplets,
      title: 'Acid Wash',
      description: 'Removal of scum lines, algae, and mineral deposits from the hull using specialized marine cleaners.',
      duration: '3h'
    },
    {
      icon: Sparkles,
      title: 'Heavy Cut',
      description: 'Aggressive compounding to remove oxidation and restore the gelcoat to its original color and finish.',
      duration: '6-10h'
    },
    {
      icon: Paintbrush,
      title: 'Fine Polish',
      description: 'Refining the finish to a high gloss, removing any compounding haze and preparing for coating.',
      duration: '4h'
    },
    {
      icon: Anchor,
      title: 'Application',
      description: 'Thicker marine-grade ceramic is applied to hull and topsides to withstand saltwater environments.',
      duration: '5h'
    },
    {
      icon: Clock,
      title: 'Curing Period',
      description: 'Vessel must remain dry for 24-48 hours to allow the coating to fully cross-link and harden.',
      duration: '48h'
    },
    {
      icon: ShieldCheck,
      title: 'Maintenance',
      description: 'We provide you with a care guide to maintain the hydrophobic properties for years to come.',
      duration: '30m'
    }
  ];

  return (
    <section className="py-24 bg-auto-asphalt relative overflow-hidden" data-section="MarineProcess">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-auto-plum-deep/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Anchor className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold text-white uppercase tracking-widest font-['Exo_2']">Marine Workflow</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Exo_2']">
            RESTORATION & <span className="text-auto-plum-neon">PROTECTION</span>
          </h2>
          <p className="text-xl text-auto-silver max-w-3xl mx-auto font-light leading-relaxed font-['Inter']">
            The marine environment is unforgiving. Our process ensures your vessel is sealed against salt, sun, and sea.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-auto-plum-neon/30 transition-colors group"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-white/5 group-hover:text-auto-plum-neon/10 font-['Exo_2'] transition-colors">
                  0{idx + 1}
                </div>

                <div className="w-12 h-12 rounded-xl bg-auto-plum-neon/10 flex items-center justify-center mb-6 group-hover:bg-auto-plum-neon group-hover:text-black text-auto-plum-neon transition-all duration-300">
                  <step.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-['Exo_2']">{step.title}</h3>
                <p className="text-sm text-auto-silver mb-4 leading-relaxed font-light min-h-[60px] font-['Inter']">
                  {step.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-wider group-hover:text-auto-plum-neon transition-colors">
                  <Clock className="w-3 h-3" />
                  <span>Avg: {step.duration}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
