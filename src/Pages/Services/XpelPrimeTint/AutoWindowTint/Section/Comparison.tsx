import { motion } from 'motion/react';
import { Check, Award } from 'lucide-react';

export function Comparison() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" data-section="AutoTintComparison">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute top-1/3 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(74,20,140,0.2) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-component="ComparisonContent">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Film Comparison</span>
            </motion.div>
            <h2 className="mb-6 text-foreground">
              XPEL PRIME Film Series Comparison
              <span className="block text-primary mt-2">Find Your Perfect Match</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Compare XPEL PRIME HP, XR, and XR PLUS ceramic window films. All include lifetime warranty, 99% UV rejection, and professional installation.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-border rounded-3xl overflow-hidden shadow-xl mb-12"
            data-component="ComparisonTable"
          >
            <div className="bg-gradient-to-r from-primary/10 to-transparent border-b-2 border-border px-6 py-5">
              <h3 className="text-card-foreground text-center">Quick Specification Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border bg-muted/50">
                    <th className="px-6 py-4 text-left text-muted-foreground">Feature</th>
                    <th className="px-6 py-4 text-center text-warning">PRIME HP</th>
                    <th className="px-6 py-4 text-center text-[var(--auto-plum-neon)]">PRIME XR</th>
                    <th className="px-6 py-4 text-center text-[var(--auto-plum-neon)]">PRIME XR PLUS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: 'Film Technology',
                      values: ['Hybrid', 'Multi-Layer Ceramic', 'Premium Nano-Ceramic']
                    },
                    {
                      feature: 'Total Solar Energy Rejected',
                      values: ['76%', '93% IR', '98%'],
                      highlight: true
                    },
                    {
                      feature: 'UV Rejection',
                      values: ['99%', '99%', '99%']
                    },
                    {
                      feature: 'Signal Safe (No Interference)',
                      values: [true, true, true],
                      isCheck: true
                    },
                    {
                      feature: 'VLT Options Available',
                      values: ['5 Options', '6 Options', '6 Options']
                    },
                    {
                      feature: 'Color Stability',
                      values: [true, true, true],
                      isCheck: true
                    },
                    {
                      feature: 'Lifetime Warranty',
                      values: [true, true, true],
                      isCheck: true
                    },
                    {
                      feature: 'Starting Price',
                      values: ['$249', '$449', '$599'],
                      highlight: true
                    }
                  ].map((row, idx) => (
                    <motion.tr
                      key={row.feature}
                      className={`border-b border-border ${row.highlight ? 'bg-muted/30' : ''} hover:bg-primary/5 transition-colors duration-300`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <td className="px-6 py-4 text-foreground/80">{row.feature}</td>
                      {row.values.map((value, colIdx) => (
                        <td key={colIdx} className="px-6 py-4 text-center">
                          {row.isCheck ? (
                            <motion.div whileHover={{ scale: 1.2 }}>
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            </motion.div>
                          ) : (
                            <span className={`${row.highlight ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                              {value}
                            </span>
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Best For Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'PRIME HP',
                subtitle: 'High Performance',
                best: ['Daily drivers', 'Value conscious', 'All vehicles'],
                color: 'var(--auto-warning)'
              },
              {
                title: 'PRIME XR',
                subtitle: 'Extreme Performance',
                best: ['Hot climates', 'Maximum heat rejection', 'Premium vehicles'],
                color: 'var(--auto-plum-neon)'
              },
              {
                title: 'PRIME XR PLUS',
                subtitle: 'Ultimate',
                best: ['Exotic vehicles', 'No compromise', 'Ultimate comfort'],
                color: 'var(--auto-plum-neon)'
              }
            ].map((product, idx) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl border-2 bg-card shadow-sm relative overflow-hidden group"
                style={{ borderColor: `color-mix(in srgb, ${product.color}, transparent 80%)` }}
                whileHover={{ 
                  y: -8,
                  borderColor: product.color,
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

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="mb-1" style={{ color: product.color }}>
                    {product.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{product.subtitle}</p>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Best For:</p>
                    {product.best.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.color }} />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 40px color-mix(in srgb, ${product.color}, transparent 80%)`
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              All XPEL PRIME films include a lifetime manufacturer warranty, professional installation by certified installers, 
              and 99% UV rejection. Prices vary based on vehicle size and package selection. Contact us for exact quote.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
