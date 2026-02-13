import { X, Check, AlertTriangle, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function Comparison() {
  return (
    <section className="py-24 bg-auto-asphalt border-b border-white/5" data-section="WindshieldComparison">
      <div className="container mx-auto px-4" data-component="ComparisonContent">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full mb-6 border border-red-500/20">
              <AlertTriangle className="w-4 h-4" />
              <span className="font-['Exo_2'] text-xs font-bold uppercase tracking-widest">Protection Comparison</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight font-['Exo_2']">
              Protected vs. <span className="text-red-500">Unprotected</span>
            </h2>
            <p className="text-auto-silver max-w-3xl mx-auto leading-relaxed text-lg font-light">
              See the dramatic difference XPEL Windshield Protection Film makes in preventing common road hazards and environmental damage.
            </p>
          </motion.div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16" data-component="ComparisonGrid">
            {/* WITHOUT Protection */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-auto-carbon border-2 border-red-500/30 rounded-[2rem] overflow-hidden hover:border-red-500/50 transition-all duration-300 shadow-lg group" 
              data-component="UnprotectedCard"
            >
              <div className="bg-red-500/10 border-b-2 border-red-500/30 px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Exo_2'] uppercase">Without Protection</h3>
                </div>
              </div>
              <div className="p-8 space-y-6">
                {[
                  { title: "Rock Chip Damage", desc: "Single rock chip can spread into expensive spider-web cracks requiring replacement." },
                  { title: "Constant Repairs", desc: "Frequent chip repairs and eventual replacement every 2-3 years." },
                  { title: "Reduced Resale Value", desc: "Damaged or replaced windshields lower vehicle value and buyer confidence." },
                  { title: "Insurance Claims", desc: "Deductibles, premium increases, and hassle of filing claims for repairs." },
                  { title: "Pitting & Scratches", desc: "Road sand and wiper blade wear creates permanent micro-scratches that impair visibility." },
                  { title: "Downtime & Inconvenience", desc: "Waiting for replacement glass, recalibration of ADAS systems, and vehicle downtime." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-500/20">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                    <div>
                      <p className="text-white font-bold mb-1 font-['Exo_2']">{item.title}</p>
                      <p className="text-auto-silver text-sm font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-red-500/5 border-t-2 border-red-500/30 px-8 py-6">
                <p className="text-red-400 text-center font-['Exo_2'] text-lg">Average 5-year cost: <span className="font-bold text-2xl ml-2">$1,200 - $3,000+</span></p>
              </div>
            </motion.div>

            {/* WITH Protection */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-auto-carbon border-2 border-auto-plum-neon rounded-[2rem] overflow-hidden hover:shadow-[0_0_30px_rgba(157,78,221,0.2)] transition-all duration-300 relative group" 
              data-component="ProtectedCard"
            >
              <div className="absolute inset-0 bg-auto-plum-neon/5 pointer-events-none" />
              
              <div className="bg-auto-plum-neon/20 border-b-2 border-auto-plum-neon px-8 py-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-auto-plum-neon rounded-xl flex items-center justify-center shadow-lg shadow-auto-plum-neon/30">
                    <Shield className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Exo_2'] uppercase">With XPEL Protection</h3>
                </div>
              </div>
              <div className="p-8 space-y-6 relative z-10">
                {[
                  { title: "Impact Resistance", desc: "Absorbs rock impacts preventing chips and cracks - film takes the damage instead." },
                  { title: "Long-Term Protection", desc: "10+ years of continuous protection with zero maintenance or replacement needed." },
                  { title: "Maintained Vehicle Value", desc: "Original factory windshield in pristine condition maximizes resale value." },
                  { title: "No Insurance Hassle", desc: "Avoid deductibles, claims, and premium increases - install once and forget it." },
                  { title: "Self-Healing Surface", desc: "Minor scratches disappear with heat, maintaining crystal-clear visibility forever." },
                  { title: "Drive with Confidence", desc: "No stress about gravel trucks, highway debris, or weather conditions." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-auto-plum-neon/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-auto-plum-neon/40">
                      <Check className="w-3 h-3 text-auto-plum-neon" />
                    </div>
                    <div>
                      <p className="text-white font-bold mb-1 font-['Exo_2']">{item.title}</p>
                      <p className="text-auto-silver text-sm font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-auto-plum-neon/10 border-t-2 border-auto-plum-neon px-8 py-6 relative z-10">
                <p className="text-auto-plum-mist text-center font-['Exo_2'] text-lg">One-time investment: <span className="font-bold text-2xl ml-2 text-white">$399 - $699</span></p>
              </div>
            </motion.div>
          </div>

          {/* ROI Calculator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm" 
            data-component="ROICalculator"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-3 font-['Exo_2'] uppercase">Return on Investment</h3>
              <p className="text-auto-silver max-w-2xl mx-auto leading-relaxed font-light">
                XPEL Windshield Protection Film typically pays for itself after preventing just one windshield replacement. Most customers see ROI within the first year.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-auto-silver mb-2 font-light text-sm uppercase tracking-wider">Avg. Replacement Cost</p>
                <p className="text-white font-['Exo_2']" style={{ fontSize: '32px', fontWeight: 700 }}>$800</p>
              </div>
              <div className="text-center p-8 bg-auto-plum-deep/20 rounded-2xl border border-auto-plum-neon/30">
                <p className="text-auto-plum-mist mb-2 font-light text-sm uppercase tracking-wider">XPEL Protection Film</p>
                <p className="text-auto-plum-neon font-['Exo_2']" style={{ fontSize: '32px', fontWeight: 700 }}>$499</p>
              </div>
              <div className="text-center p-8 bg-green-500/10 rounded-2xl border border-green-500/30">
                <p className="text-green-400 mb-2 font-light text-sm uppercase tracking-wider">Your Savings</p>
                <p className="text-white font-['Exo_2']" style={{ fontSize: '32px', fontWeight: 700 }}>$301+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
