import { motion } from 'motion/react';
import { Sparkles, Eye, Zap, Shield } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Eliminate Swirls',
      description: 'Remove unsightly spider-webbing and swirl marks caused by improper washing techniques, restoring true color depth.'
    },
    {
      icon: Eye,
      title: 'Mirror Clarity',
      description: 'Level the clear coat to achieve maximum reflection and gloss that far exceeds a factory finish.'
    },
    {
      icon: Zap,
      title: 'Remove Oxidation',
      description: 'Restore faded, dull paintwork that has been damaged by UV exposure and environmental fallout.'
    },
    {
      icon: Shield,
      title: 'Prepare for Protection',
      description: 'The essential first step before applying Ceramic Coating or Paint Protection Film to ensure optimal bonding.'
    }
  ];

  return (
    <section className="py-24 bg-auto-carbon relative" data-section="PaintCorrectionBenefits">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Exo_2'] font-bold text-white uppercase italic mb-4">
            Why Paint Correction?
          </h2>
          <p className="text-xl text-auto-silver max-w-2xl mx-auto font-['Inter'] font-light">
            It's not just a wax. It's a permanent restoration of your vehicle's clear coat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-white/5 bg-auto-asphalt hover:border-auto-plum-neon/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(157,78,221,0.1)]"
            >
              <div className="w-14 h-14 bg-auto-plum-deep/10 rounded-xl flex items-center justify-center text-auto-plum-neon group-hover:text-white group-hover:bg-auto-plum-neon transition-all duration-300 mb-6 border border-auto-plum-neon/20 group-hover:border-auto-plum-neon">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Exo_2'] uppercase tracking-wide group-hover:text-auto-plum-neon transition-colors">
                {benefit.title}
              </h3>
              <p className="text-auto-silver leading-relaxed text-sm font-['Inter'] font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
