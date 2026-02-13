import { Layers, Shield, Eye, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatIsXPEL() {
  return (
    <section className="py-24 bg-auto-carbon border-b border-white/5" data-section="WhatIsXPEL">
      <div className="container mx-auto px-4" data-component="WhatIsXPELContent">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-auto-plum-deep/20 border border-auto-plum-neon/30 text-auto-plum-mist px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-auto-plum-neon" />
              <span className="font-['Exo_2'] text-xs font-bold uppercase tracking-widest">Technology Explained</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight font-['Exo_2']">
              What is <span className="text-auto-plum-neon">XPEL</span> Windshield Protection?
            </h2>
            <p className="text-auto-silver max-w-3xl mx-auto leading-relaxed text-lg font-light">
              XPEL Windshield Protection Film is a premium, optically-clear urethane film engineered specifically to protect automotive windshields from impact damage, environmental hazards, and daily wear.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16" data-component="TechnologyBreakdown">
            {/* Left - Technology Breakdown */}
            <div className="space-y-8">
              <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Advanced Multi-Layer Technology</h3>
                <p className="text-auto-silver mb-8 leading-relaxed font-light">
                  XPEL Windshield Protection Film features a sophisticated multi-layer construction that combines impact resistance with self-healing properties and optical clarity.
                </p>

                <div className="space-y-6">
                  {/* Layer 1 */}
                  <div className="bg-white/5 border-l-4 border-auto-plum-neon rounded-r-xl p-6 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                      <Layers className="w-6 h-6 text-auto-plum-neon flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-bold mb-1 uppercase font-['Exo_2']">Top Coat - Self-Healing Clear Coat</p>
                        <p className="text-auto-silver font-light text-sm">Thermoplastic polyurethane that automatically repairs minor scratches and swirl marks when exposed to heat.</p>
                      </div>
                    </div>
                  </div>

                  {/* Layer 2 */}
                  <div className="bg-white/5 border-l-4 border-auto-plum-mist rounded-r-xl p-6 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-auto-plum-mist flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-bold mb-1 uppercase font-['Exo_2']">Impact Layer - Urethane Core</p>
                        <p className="text-auto-silver font-light text-sm">High-tensile urethane absorbs and disperses impact energy from rocks, gravel, and debris.</p>
                      </div>
                    </div>
                  </div>

                  {/* Layer 3 */}
                  <div className="bg-white/5 border-l-4 border-auto-plum-neon rounded-r-xl p-6 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                      <Eye className="w-6 h-6 text-auto-plum-neon flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-bold mb-1 uppercase font-['Exo_2']">Optical Layer - Crystal Clear Film</p>
                        <p className="text-auto-silver font-light text-sm">Precision-engineered for 100% optical clarity with zero distortion, haze, or interference.</p>
                      </div>
                    </div>
                  </div>

                  {/* Layer 4 */}
                  <div className="bg-white/5 border-l-4 border-auto-plum-mist rounded-r-xl p-6 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-auto-plum-mist flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-bold mb-1 uppercase font-['Exo_2']">Adhesive Layer - UV Stable Bond</p>
                        <p className="text-auto-silver font-light text-sm">Pressure-sensitive acrylic adhesive creates a permanent bond that won't yellow or degrade.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right - Key Specifications */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8" 
               data-component="Specifications"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Technical Specifications</h3>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-auto-silver font-light">Film Thickness</span>
                      <span className="text-white font-bold font-['Exo_2']">8 mil (203 microns)</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-auto-silver font-light">UV Protection</span>
                      <span className="text-white font-bold font-['Exo_2']">99% UV Ray Blocking</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-auto-silver font-light">Light Transmission</span>
                      <span className="text-white font-bold font-['Exo_2']">99.9% Visible Light</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-auto-silver font-light">Self-Healing</span>
                      <span className="text-white font-bold font-['Exo_2']">Active at 140°F+</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-auto-silver font-light">Warranty Coverage</span>
                      <span className="text-white font-bold font-['Exo_2']">10 Years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-auto-silver font-light">Installation Time</span>
                      <span className="text-white font-bold font-['Exo_2']">2-3 Hours</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-auto-plum-deep to-auto-plum-deep/50 rounded-2xl p-8 text-white border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Exo_2'] uppercase">Why Choose XPEL?</h3>
                <ul className="space-y-4">
                  {[
                    "Industry leader in protective film technology since 1997",
                    "Trusted by luxury automakers including Tesla, Porsche, and BMW",
                    "Computer-cut precision patterns for perfect fitment",
                    "Comprehensive 10-year manufacturer warranty",
                    "Safe for factory warranties and ADAS calibration"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-auto-plum-neon mt-1 font-bold">✓</span>
                      <span className="font-light text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center" 
            data-component="ScienceCTA"
          >
            <h3 className="text-2xl font-bold text-white mb-3 font-['Exo_2'] uppercase">The Science of Protection</h3>
            <p className="text-auto-silver max-w-3xl mx-auto leading-relaxed font-light">
              XPEL's proprietary urethane formulation underwent rigorous testing including impact resistance, optical clarity, weathering simulation, and adhesion durability. The result is a windshield protection film that outperforms all competitors.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
