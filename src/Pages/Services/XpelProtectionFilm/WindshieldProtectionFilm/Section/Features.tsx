import { motion } from 'motion/react';
import { Car, Gauge, Award, Wrench, Check, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Car,
    title: 'Universal Fitment',
    description: 'Compatible with all vehicle makes and models',
    details: [
      'Tesla Model S, 3, X, Y',
      'Rivian R1T, R1S',
      'Luxury sedans and SUVs',
      'Sports cars and exotics',
      'Commercial vehicles'
    ]
  },
  {
    icon: Gauge,
    title: 'ADAS Compatible',
    description: 'Safe for advanced driver assistance systems',
    details: [
      'Lane departure warning',
      'Adaptive cruise control',
      'Collision avoidance',
      'Camera-based systems',
      'Professional calibration'
    ]
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Industry-leading materials and warranty',
    details: [
      'Aerospace-grade polymers',
      'Self-healing top coat',
      'UV stable adhesive',
      'Comprehensive warranty',
      '100% satisfaction guarantee'
    ]
  },
  {
    icon: Wrench,
    title: 'Expert Installation',
    description: 'XPEL certified technicians',
    details: [
      'Computer-cut precision',
      'Bulk-free installation',
      'Edge sealing technology',
      'Quality inspection',
      'Same-day service available'
    ]
  }
];

export function Features() {
  return (
    <section className="py-24 bg-auto-asphalt relative overflow-hidden" data-section="WindshieldFeatures">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-auto-plum-deep/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-auto-plum-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" data-component="FeaturesContent">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 mb-6 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-auto-plum-neon" />
              <span className="text-xs font-bold text-auto-plum-mist uppercase tracking-widest font-['Exo_2']">Premium Features</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight font-['Exo_2']">
              Professional-Grade <span className="text-auto-plum-neon">Protection</span>
            </h2>
            <p className="text-xl text-auto-silver max-w-3xl mx-auto font-light leading-relaxed">
              Minnesota's exclusive XPEL certified facility delivers expert windshield protection with unmatched precision and quality.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8" data-component="FeaturesGrid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(157,78,221,0.15)] hover:border-auto-plum-neon/50 group relative overflow-hidden"
                  data-component="FeatureCard"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 bg-auto-carbon rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-auto-plum-neon group-hover:bg-auto-plum-neon group-hover:text-black transition-all duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-auto-silver group-hover:text-black transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-['Exo_2'] uppercase">{feature.title}</h3>
                        <p className="text-auto-silver font-light">{feature.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 border-t border-white/10 pt-6">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-auto-silver group-hover:text-white/90 transition-colors">
                          <div className="w-5 h-5 rounded-full bg-auto-plum-deep/30 flex items-center justify-center border border-auto-plum-neon/20 group-hover:border-auto-plum-neon/50">
                             <Check className="w-3 h-3 text-auto-plum-neon" />
                          </div>
                          <span className="font-light">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
