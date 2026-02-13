import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../../../../../components/ui/button';

interface ComparisonProps {
  onNavigate: (page: string) => void;
}

export function Comparison({ onNavigate }: ComparisonProps) {
  const tintOptions = [
    { name: 'Windshield Strip', percentage: 'AS-1 Line', price: '$199' },
    { name: 'Front Two Windows', percentage: '35% or 50%', price: '$249' },
    { name: 'Rear Windows', percentage: '5% to 50%', price: '$349' },
    { name: 'Full Tesla Tint', percentage: 'Custom VLT', price: '$599+' }
  ];

  return (
    <section className="py-24 bg-auto-asphalt relative" data-section="TeslaTintOptions">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Exo_2'] font-bold text-white mb-6 uppercase tracking-tight">
            Tesla Tint <span className="text-auto-plum-neon">Packages</span>
          </h2>
          <p className="text-lg text-auto-silver max-w-2xl mx-auto font-['Inter'] font-light">
            Choose from partial to full vehicle coverage with customizable VLT percentages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-component="TintOptionsGrid">
          {tintOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-auto-carbon border border-white/10 rounded-2xl p-8 hover:border-auto-plum-neon/50 hover:shadow-[0_0_30px_rgba(157,78,221,0.15)] transition-all duration-300 group flex flex-col"
            >
              <h3 className="text-xl font-['Exo_2'] font-bold text-white mb-2 uppercase tracking-wide h-14">
                {option.name}
              </h3>
              <p className="text-auto-plum-neon text-sm font-mono mb-6 bg-auto-plum-deep/10 inline-block px-3 py-1 rounded border border-auto-plum-neon/20 w-fit">{option.percentage}</p>
              
              <div className="text-4xl font-['Exo_2'] font-bold text-white mb-8 group-hover:text-auto-plum-neon transition-colors">
                {option.price}
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {['Lifetime Warranty', 'Ceramic Technology', '99% UV Block'].map((item) => (
                   <li key={item} className="flex items-center gap-3 text-auto-silver text-sm font-['Inter']">
                    <CheckCircle2 className="w-4 h-4 text-auto-plum-neon" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                 onClick={() => onNavigate('tint-configurator')}
                 className="w-full bg-white/5 hover:bg-auto-plum-neon hover:text-black text-white border border-white/10 hover:border-transparent transition-all font-['Exo_2'] font-bold uppercase tracking-widest"
              >
                 Select
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            onClick={() => onNavigate('tint-configurator')}
            className="bg-auto-plum-neon hover:bg-white text-black px-10 py-7 rounded-xl text-lg font-['Exo_2'] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(157,78,221,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all"
          >
            Use Tint Configurator
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
