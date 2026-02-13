import { motion } from 'motion/react';
import { Eye, Scale, Shield } from 'lucide-react';

export function VLTOptions() {
  const vltOptions = [
    { 
      percentage: '5%', 
      name: 'Limo Dark', 
      description: 'Maximum privacy and darkest legal tint', 
      legal: 'Rear windows only',
      lightTransmission: 'Blocks 95% of visible light',
      bestFor: 'Rear passengers, cargo privacy, maximum style',
      darkness: 5
    },
    { 
      percentage: '15%', 
      name: 'Very Dark', 
      description: 'Extremely private with strong heat rejection', 
      legal: 'Rear windows only',
      lightTransmission: 'Blocks 85% of visible light',
      bestFor: 'Strong privacy needs, hot climates',
      darkness: 15
    },
    { 
      percentage: '20%', 
      name: 'Dark', 
      description: 'Popular choice for style and privacy', 
      legal: 'Rear windows only',
      lightTransmission: 'Blocks 80% of visible light',
      bestFor: 'Most popular rear window choice, great balance',
      darkness: 20
    },
    { 
      percentage: '35%', 
      name: 'Medium', 
      description: 'Balanced privacy and visibility', 
      legal: 'Legal on front windows (most states)',
      lightTransmission: 'Blocks 65% of visible light',
      bestFor: 'Front windows, legal compliance, daily drivers',
      darkness: 35
    },
    { 
      percentage: '50%', 
      name: 'Light', 
      description: 'Subtle tint with excellent heat rejection', 
      legal: 'Legal on all windows',
      lightTransmission: 'Blocks 50% of visible light',
      bestFor: 'Maximum visibility, heat control without dark tint',
      darkness: 50
    },
    { 
      percentage: '70%', 
      name: 'Very Light', 
      description: 'Nearly clear with IR heat rejection', 
      legal: 'Legal on all windows including windshield',
      lightTransmission: 'Blocks 30% of visible light',
      bestFor: 'Windshield applications, minimal appearance change',
      darkness: 70
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[var(--auto-asphalt)] to-black relative overflow-hidden text-white" data-section="VLTOptions">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--auto-plum-neon) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(157,78,221,0.15) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(74,20,140,0.15) 0%, transparent 70%)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10" data-component="VLTOptionsContent">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--auto-plum-neon)]/10 border border-[var(--auto-plum-neon)]/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Eye className="w-4 h-4 text-[var(--auto-plum-neon)]" />
            <span className="text-sm text-[var(--auto-plum-neon)]">VLT Darkness Levels</span>
          </motion.div>
          <h2 className="mb-6 text-white">
            Choose Your Perfect Darkness Level
            <span className="block text-[var(--auto-plum-deep)] mt-2">VLT (Visible Light Transmission) Options</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            VLT percentage indicates how much visible light passes through the film. Lower numbers = darker tint. 
            We&apos;ll ensure your installation complies with all state tinting laws.
          </p>
        </motion.div>

        {/* VLT Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" data-component="VLTGrid">
          {vltOptions.map((option, index) => (
            <motion.div
              key={option.percentage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
              data-component="VLTCard"
            >
              <motion.div 
                className="h-full bg-gradient-to-br from-[var(--auto-carbon)]/50 to-[var(--auto-asphalt)]/50 border-2 border-[var(--auto-chrome)]/50 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                whileHover={{ 
                  y: -8,
                  borderColor: 'var(--auto-plum-neon)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Visual Darkness Indicator */}
                <div className="mb-6 relative h-32 rounded-xl overflow-hidden border-2 border-[var(--auto-chrome)]/50">
                  <div 
                    className="absolute inset-0 bg-black transition-opacity"
                    style={{ opacity: (100 - option.darkness) / 100 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl text-white drop-shadow-lg mb-1">
                        {option.percentage}
                      </div>
                      <div className="text-sm text-white/80">
                        {option.name}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-10">
                  <div>
                    <h3 className="mb-2 text-white">{option.name} Tint</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{option.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-[var(--auto-plum-neon)] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-500">Light Transmission: </span>
                        <span className="text-gray-300">{option.lightTransmission}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Scale className="w-4 h-4 text-[var(--auto-warning)] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-500">Legal: </span>
                        <span className="text-gray-300">{option.legal}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-[var(--auto-plum-deep)] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-500">Best For: </span>
                        <span className="text-gray-300">{option.bestFor}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: '0 0 40px rgba(157,78,221,0.3)'
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Legal Compliance Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-gradient-to-br from-[var(--auto-plum-deep)]/10 to-transparent border-2 border-[var(--auto-plum-deep)]/20"
        >
          <div className="flex items-start gap-4">
            <Scale className="w-8 h-8 text-[var(--auto-plum-deep)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="mb-2 text-white">State Tint Law Compliance Guaranteed</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Window tint laws vary by state and regulate VLT percentages for different windows. Most states allow 
                darker tint on rear windows than front windows. Some states have restrictions on windshield tinting.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-[var(--auto-carbon)]/30 border border-[var(--auto-chrome)]/30">
                  <p className="text-[var(--auto-plum-deep)] font-semibold mb-1">Common Front Window Laws:</p>
                  <p className="text-gray-400">Most states require 35% or higher VLT on front side windows</p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--auto-carbon)]/30 border border-[var(--auto-chrome)]/30">
                  <p className="text-[var(--auto-plum-deep)] font-semibold mb-1">Rear Windows:</p>
                  <p className="text-gray-400">Many states allow any darkness on rear side and back windows</p>
                </div>
              </div>
              <p className="text-gray-400 mt-4 text-sm">
                Our certified installers stay current with all state regulations and will ensure your installation is fully compliant. 
                We&apos;ll recommend the darkest legal tint for your specific vehicle and location.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Popular Combinations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="mb-6 text-white">Popular Tint Combinations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'MN Sedan Legal',
                combo: '50% All Windows',
                desc: 'Maximum legal darkness for passenger cars in Minnesota.'
              },
              {
                title: 'MN SUV & Truck',
                combo: '50% Front / Any % Rear',
                desc: 'Legal front limit with unlimited privacy allowed for rear windows.'
              },
              {
                title: 'Factory Match',
                combo: '50% Front / 20% Rear',
                desc: 'Matches factory privacy glass while keeping front windows legal.'
              }
            ].map((combo, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-[var(--auto-plum-deep)]/10 to-transparent border border-[var(--auto-plum-deep)]/20"
              >
                <h4 className="mb-2 text-[var(--auto-plum-deep)]">{combo.title}</h4>
                <p className="text-lg text-white mb-2">{combo.combo}</p>
                <p className="text-sm text-gray-400">{combo.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
