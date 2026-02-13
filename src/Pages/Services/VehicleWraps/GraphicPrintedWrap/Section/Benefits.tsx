import { motion } from 'motion/react';
import { PenTool, Printer, Award, Eye } from 'lucide-react';

const benefits = [
  {
    title: 'Unique Expression',
    description: 'Create a vehicle that is completely unique to you. No two graphic wraps are the same, allowing for ultimate personalization.',
    icon: PenTool
  },
  {
    title: 'High Impact',
    description: 'Bold graphics and designs demand attention. Perfect for show cars, rally builds, or just making a statement on the street.',
    icon: Eye
  },
  {
    title: 'Photo-Realistic Quality',
    description: 'We use state-of-the-art wide format printers to produce incredibly sharp, high-resolution images and gradients.',
    icon: Printer
  },
  {
    title: 'Award-Winning Design',
    description: 'Our in-house design team has years of experience creating stunning liveries and custom graphics for all vehicle types.',
    icon: Award
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-auto-asphalt relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Why Choose a Graphic Wrap?</h2>
          <p className="text-auto-silver max-w-2xl mx-auto">Turn your vehicle into a moving work of art.</p>
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
