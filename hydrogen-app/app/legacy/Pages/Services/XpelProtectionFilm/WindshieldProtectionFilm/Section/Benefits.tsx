import { Shield, Eye, Sparkles, Sun, Droplets, TrendingUp, CheckCircle2, Zap, Gauge, Wrench, Award, Target, Check } from 'lucide-react';
import { motion } from 'motion/react';

const primaryBenefits = [
  {
    icon: Shield,
    title: 'Ultimate Impact Protection',
    description: 'XPEL\'s 8-mil urethane film absorbs the energy from rock impacts, preventing chips and cracks that would otherwise damage your windshield. The film sacrifices itself to protect your glass.',
    stat: '95%',
    statLabel: 'Impact Prevention Rate'
  },
  {
    icon: Sparkles,
    title: 'Self-Healing Technology',
    description: 'Revolutionary thermoplastic topcoat automatically repairs minor scratches and swirl marks when exposed to heat from sunlight or warm water. Maintains pristine clarity for years.',
    stat: '140°F',
    statLabel: 'Activation Temperature'
  },
  {
    icon: Eye,
    title: 'Crystal Clear Optics',
    description: 'Precision-engineered for 99.9% light transmission with zero distortion or haze. You won\'t even know it\'s there - until it saves your windshield from a rock chip.',
    stat: '99.9%',
    statLabel: 'Light Transmission'
  },
  {
    icon: Sun,
    title: 'Advanced UV Protection',
    description: 'Blocks 99% of harmful UV rays to protect your interior from fading and reduce cabin heat. Also protects your skin during long drives while maintaining visibility.',
    stat: '99%',
    statLabel: 'UV Ray Blocking'
  }
];

const secondaryBenefits = [
  {
    icon: Droplets,
    title: 'Hydrophobic Surface',
    description: 'Water beads and rolls off the treated surface, improving rain visibility and reducing wiper usage'
  },
  {
    icon: TrendingUp,
    title: 'Preserves Resale Value',
    description: 'Maintain original windshield in pristine condition - major selling point for luxury and electric vehicles'
  },
  {
    icon: CheckCircle2,
    title: 'Warranty Safe',
    description: 'Compatible with factory warranties and ADAS systems - won\'t void Tesla, Rivian, or luxury car coverage'
  },
  {
    icon: Gauge,
    title: 'ADAS Compatible',
    description: 'Safe for lane assist, collision avoidance, and camera-based systems - no recalibration needed'
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Clean with standard glass cleaner - no special products or care required for long-term performance'
  },
  {
    icon: Award,
    title: '10-Year Warranty',
    description: 'Industry-leading coverage against yellowing, peeling, cracking, and hazing from manufacturer defects'
  },
  {
    icon: Zap,
    title: 'Quick Installation',
    description: '2-3 hour professional installation with same-day service - drive away immediately with full protection'
  },
  {
    icon: Target,
    title: 'Precision Fit',
    description: 'Computer-cut patterns for exact fitment on all vehicle makes and models - perfect edge coverage'
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-auto-carbon relative overflow-hidden" data-section="WindshieldBenefits">
       {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-auto-plum-deep/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-auto-plum-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" data-component="WindshieldBenefitsContent">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight font-['Exo_2']">
              Comprehensive <span className="text-auto-plum-neon">Benefits</span>
            </h2>
            <p className="text-auto-silver max-w-3xl mx-auto text-lg font-light leading-relaxed">
              XPEL Windshield Protection Film delivers multi-layered defense against road hazards, environmental damage, and daily wear - all while remaining completely invisible.
            </p>
          </motion.div>

          {/* Primary Benefits - Large Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20" data-component="PrimaryBenefits">
            {primaryBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-auto-plum-neon/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-auto-plum-neon/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-start gap-6 mb-8 relative z-10">
                    <div className="w-16 h-16 bg-auto-plum-deep/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-auto-plum-neon/50 transition-colors">
                      <Icon className="w-8 h-8 text-auto-plum-neon" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 font-['Exo_2'] uppercase">{benefit.title}</h3>
                      <p className="text-auto-silver leading-relaxed font-light">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-black/20 border border-white/5 rounded-xl p-6 flex items-center justify-between backdrop-blur-sm relative z-10 group-hover:border-auto-plum-neon/30 transition-colors">
                    <div>
                      <div className="text-white mb-1 font-['Exo_2']" style={{ fontSize: '32px', fontWeight: 700, lineHeight: '1' }}>
                        {benefit.stat}
                      </div>
                      <p className="text-auto-plum-mist text-sm font-bold uppercase tracking-wider">{benefit.statLabel}</p>
                    </div>
                    <Icon className="w-12 h-12 text-auto-plum-deep/30 group-hover:text-auto-plum-neon/20 transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Secondary Benefits - Compact Grid */}
          <div className="mb-20" data-component="SecondaryBenefits">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 uppercase tracking-wide font-['Exo_2']">Additional Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {secondaryBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.05) }}
                    className="bg-auto-asphalt border border-white/5 rounded-2xl p-6 hover:border-auto-plum-neon/50 hover:shadow-[0_0_20px_rgba(157,78,221,0.15)] transition-all group"
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-auto-plum-neon group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6 text-auto-plum-mist group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 font-['Exo_2']">{benefit.title}</h4>
                    <p className="text-auto-silver text-sm leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-auto-plum-deep to-auto-plum-deep/80 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden border border-white/10 shadow-2xl" 
            data-component="BenefitsBanner"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight font-['Exo_2']">Invisible Protection, <span className="text-auto-plum-neon">Visible Results</span></h3>
              <p className="text-white/90 max-w-3xl mx-auto leading-relaxed mb-10 text-lg font-light">
                XPEL Windshield Protection Film is the most advanced windshield protection technology available. With over 25 years of research and development, XPEL has perfected the balance between optical clarity and impact resistance.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-white">
                <div className="flex items-center gap-3 bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
                  <Check className="w-5 h-5 text-auto-plum-neon" />
                  <span className="font-bold tracking-wide text-sm">25+ Years Industry Leader</span>
                </div>
                <div className="flex items-center gap-3 bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
                  <Check className="w-5 h-5 text-auto-plum-neon" />
                  <span className="font-bold tracking-wide text-sm">Trusted by Automakers</span>
                </div>
                <div className="flex items-center gap-3 bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
                  <Check className="w-5 h-5 text-auto-plum-neon" />
                  <span className="font-bold tracking-wide text-sm">10-Year Warranty</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
