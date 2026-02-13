import { motion } from 'motion/react';
import { Truck, Printer, Users, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Fleet Audit',
    description: 'We analyze your vehicle types and quantity to develop a standardized branding strategy that fits every make and model.',
    icon: Truck
  },
  {
    title: 'Design Standardization',
    description: 'Our designers adapt your logo and branding elements to ensure they look perfect on every vehicle type in your fleet.',
    icon: Users
  },
  {
    title: 'Volume Production',
    description: 'We utilize high-speed printing and cutting workflows to produce consistent kits for your entire fleet efficiently.',
    icon: Printer
  },
  {
    title: 'Coordinated Install',
    description: 'We coordinate installation schedules to minimize fleet downtime, getting your vehicles back on the road quickly.',
    icon: CheckCircle
  }
];

export function FleetProcess() {
  return (
    <section className="py-24 bg-auto-asphalt relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Fleet Workflow</h2>
          <p className="text-auto-silver max-w-2xl mx-auto">Streamlined process to keep your business moving.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-auto-plum-neon/0 via-auto-plum-neon/30 to-auto-plum-neon/0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-auto-carbon p-8 rounded-2xl border border-white/5 z-10 hover:border-auto-plum-neon/50 transition-colors"
              >
                <div className="w-10 h-10 bg-auto-asphalt border border-auto-plum-neon rounded-full flex items-center justify-center mx-auto mb-6 text-auto-plum-neon font-bold relative z-20 shadow-[0_0_15px_rgba(157,78,221,0.3)]">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 text-center font-['Exo_2']">{step.title}</h3>
                <p className="text-auto-silver text-sm leading-relaxed text-center">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
