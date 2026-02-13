import { motion } from 'motion/react';
import { Search, Eraser, Sparkles, Layers, Clock, CheckCircle2 } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Search,
      title: 'Inspection & Decon',
      description: 'Thorough inspection of paint condition followed by a chemical decontamination wash to strip old waxes and sealants.',
      duration: '2h'
    },
    {
      icon: Eraser,
      title: 'Surface Prep',
      description: 'Clay bar treatment removes embedded contaminants like brake dust and industrial fallout to create a smooth canvas.',
      duration: '2h'
    },
    {
      icon: Sparkles,
      title: 'Paint Correction',
      description: 'Machine polishing removes swirl marks and scratches. This is critical as the coating will lock in the paint\'s condition.',
      duration: '5-8h'
    },
    {
      icon: Layers,
      title: 'Coating Application',
      description: 'FUSION PLUS is applied panel-by-panel in a cross-hatch pattern to ensure even coverage and proper bonding.',
      duration: '3h'
    },
    {
      icon: Clock,
      title: 'IR Curing',
      description: 'Infrared lamps are often used to accelerate the curing process, hardening the coating for maximum durability.',
      duration: '4h'
    },
    {
      icon: CheckCircle2,
      title: 'Final Inspection',
      description: 'A meticulous quality control check under specialized lighting ensures no high spots or streaks remain.',
      duration: '1h'
    }
  ];

  return (
    <section className="py-24 bg-auto-asphalt relative overflow-hidden" data-section="CeramicProcess">
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
            <Layers className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold text-white uppercase tracking-widest font-['Exo_2']">Installation Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Exo_2']">
            PRECISION <span className="text-auto-plum-neon">APPLICATION</span>
          </h2>
          <p className="text-xl text-auto-silver max-w-3xl mx-auto font-light leading-relaxed font-['Inter']">
            A ceramic coating is only as good as the preparation. We follow a strict protocol to ensure molecular bonding.
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
