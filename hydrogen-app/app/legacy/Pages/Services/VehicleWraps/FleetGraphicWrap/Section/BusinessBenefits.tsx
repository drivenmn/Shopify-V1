import { motion } from 'motion/react';
import { Megaphone, TrendingUp, ShieldCheck, RefreshCw } from 'lucide-react';

const benefits = [
  {
    title: 'Mobile Advertising',
    description: 'Generate thousands of impressions daily. Your fleet becomes a 24/7 billboard that promotes your brand wherever your vehicles go.',
    icon: Megaphone
  },
  {
    title: 'High ROI',
    description: 'Vehicle wraps offer one of the lowest costs per impression (CPI) of any advertising medium, delivering long-term value for a one-time cost.',
    icon: TrendingUp
  },
  {
    title: 'Asset Protection',
    description: 'Wraps protect your fleet vehicles paint from scratches and wear, preserving resale value when it is time to cycle your fleet.',
    icon: ShieldCheck
  },
  {
    title: 'Brand Consistency',
    description: 'We ensure perfect color matching and design consistency across all vehicle types, from sedans to box trucks.',
    icon: RefreshCw
  }
];

export function BusinessBenefits() {
  return (
    <section className="py-24 bg-auto-asphalt relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Why Fleet Graphics?</h2>
          <p className="text-auto-silver max-w-2xl mx-auto">Smart investment for your business visibility.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-auto-carbon border border-white/5 hover:border-auto-plum-neon/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-auto-plum-deep/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-auto-plum-neon group-hover:text-black transition-colors">
                  <Icon className="w-6 h-6 text-auto-plum-neon group-hover:text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-['Exo_2']">{benefit.title}</h3>
                <p className="text-auto-silver text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
