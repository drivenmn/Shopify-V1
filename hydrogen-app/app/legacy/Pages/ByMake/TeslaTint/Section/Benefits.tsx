import { motion } from 'motion/react';
import { Sun, Thermometer, Eye, Shield } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Sun,
      title: '99% UV Protection',
      description: 'Block harmful UV rays to protect your interior and passengers from sun damage'
    },
    {
      icon: Thermometer,
      title: 'Superior Heat Rejection',
      description: 'XPEL Prime XR Plus blocks up to 98% of infrared heat for cooler cabin temperatures'
    },
    {
      icon: Eye,
      title: 'Enhanced Privacy',
      description: 'Choose your desired darkness level while maintaining excellent visibility'
    },
    {
      icon: Shield,
      title: 'Shatter Protection',
      description: 'Holds glass together in case of impact, adding safety and security'
    }
  ];

  return (
    <section className="py-24 bg-auto-carbon relative overflow-hidden" data-section="TeslaTintBenefits">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sun className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold uppercase tracking-widest text-auto-silver font-['Exo_2']">Why XPEL Prime</span>
          </div>
          
          <h2 className="text-white mb-6 text-4xl md:text-5xl font-['Exo_2'] font-bold uppercase tracking-tight">
            Advanced Ceramic <span className="text-auto-plum-neon">Technology</span>
          </h2>
          <p className="text-lg text-auto-silver max-w-2xl mx-auto font-['Inter'] font-light leading-relaxed">
            The world's most advanced ceramic window film technology, engineered for maximum performance and clarity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-component="BenefitsGrid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-auto-plum-neon/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-auto-plum-deep/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-auto-plum-neon/20 transition-colors border border-auto-plum-neon/20">
                <benefit.icon className="w-7 h-7 text-auto-plum-neon" />
              </div>
              <h3 className="text-xl font-['Exo_2'] font-bold text-white mb-3 uppercase tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-auto-silver leading-relaxed font-['Inter'] font-light text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
