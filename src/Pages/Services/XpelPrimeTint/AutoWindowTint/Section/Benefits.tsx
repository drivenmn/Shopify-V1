import { motion } from 'motion/react';
import { Shield, Sun, Eye, Thermometer, Sparkles, DollarSign, Car, Heart } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Sun,
      title: 'Superior Heat Rejection',
      description: 'Block up to 98% of infrared heat with advanced nano-ceramic technology. Keep your vehicle cooler and reduce AC usage for better fuel efficiency.',
      stats: 'Up to 98% IR Blocked',
      keywords: 'heat rejection, infrared blocking, vehicle cooling',
      color: 'teal'
    },
    {
      icon: Shield,
      title: 'Complete UV Protection',
      description: 'Block 99% of harmful UVA and UVB rays that cause skin damage and interior fading. Protect your health and preserve your vehicle\'s interior.',
      stats: '99% UV Protection',
      keywords: 'UV protection, sun protection, interior preservation',
      color: 'yellow'
    },
    {
      icon: Eye,
      title: 'Enhanced Privacy & Security',
      description: 'Multiple VLT (Visible Light Transmission) options provide customized privacy while maintaining safe visibility. Deter theft and protect valuables.',
      stats: 'Multiple VLT Options',
      keywords: 'privacy tint, security window film, theft deterrent',
      color: 'purple'
    },
    {
      icon: Thermometer,
      title: 'Improved Comfort',
      description: 'Reduce cabin temperature by up to 60°F in direct sunlight. Eliminate hot spots and maintain consistent comfort for all passengers.',
      stats: 'Up to 60°F Reduction',
      keywords: 'comfort, temperature reduction, cabin cooling',
      color: 'teal'
    },
    {
      icon: Sparkles,
      title: 'Glare Reduction',
      description: 'Minimize eye strain and improve visibility by reducing harsh glare from sunlight, headlights, and reflective surfaces. Enhanced driving safety.',
      stats: 'Reduced Eye Strain',
      keywords: 'glare reduction, driving safety, visibility improvement',
      color: 'purple'
    },
    {
      icon: DollarSign,
      title: 'Energy Savings',
      description: 'Lower AC usage means less fuel consumption and reduced wear on your vehicle\'s cooling system. Save money while staying comfortable.',
      stats: 'Lower Fuel Costs',
      keywords: 'fuel savings, energy efficiency, cost reduction',
      color: 'yellow'
    },
    {
      icon: Car,
      title: 'Interior Protection',
      description: 'Prevent cracking, fading, and deterioration of dashboard, seats, and trim. Maintain your vehicle\'s resale value and showroom appearance.',
      stats: 'Prevents Fading',
      keywords: 'interior protection, fade prevention, resale value',
      color: 'teal'
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Reduce skin cancer risk and premature aging caused by UV exposure. Protect yourself and your passengers during every drive.',
      stats: 'Skin Protection',
      keywords: 'health benefits, skin protection, UV safety',
      color: 'purple'
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(74,20,140,0.2) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255,214,0,0.2) 0%, transparent 70%)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-3 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                Premium Benefits
              </span>
            </div>
          </motion.div>
          <h2 className="mb-6 text-foreground">
            Why Choose Professional Window Tinting?
            <span className="block text-primary mt-2">8 Powerful Benefits</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional automotive window tinting offers far more than aesthetics. Discover how premium XPEL 
            window film protects your vehicle, enhances comfort, and provides long-term value.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const colorMap: Record<string, string> = {
              teal: 'var(--auto-plum-deep)',
              yellow: 'var(--auto-warning)',
              purple: 'var(--auto-plum-neon)'
            };
            const accentColor = colorMap[benefit.color as keyof typeof colorMap] || 'var(--primary)';

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", bounce: 0.4 }}
                className="h-full"
              >
                <div 
                  className="group relative h-full overflow-hidden rounded-2xl bg-card/50 border border-border p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-opacity-50"
                  style={{
                    ['--hover-accent' as any]: accentColor
                  }}
                >
                  {/* Subtle Border Glow on Hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ 
                      boxShadow: `inset 0 0 20px ${accentColor}15`,
                      border: `1px solid ${accentColor}30`
                    }}
                  />

                  {/* Hover Gradient Background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `radial-gradient(circle at top right, ${accentColor}10, transparent 70%)` 
                    }} 
                  />
                  
                  {/* Animated Top Border - Faster */}
                  <div 
                    className="absolute top-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ 
                      background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` 
                    }} 
                  />

                  {/* Corner Accent */}
                  <div 
                    className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ background: accentColor }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
                        style={{ 
                          background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}05)`,
                          border: `1px solid ${accentColor}30`,
                          boxShadow: `0 8px 16px -4px ${accentColor}20`
                        }}
                      >
                        <benefit.icon 
                          className="w-7 h-7 transition-colors duration-300" 
                          style={{ color: accentColor }} 
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow group-hover:text-card-foreground/80 transition-colors duration-200">
                      {benefit.description}
                    </p>

                    {/* Stats Badge */}
                    <div className="pt-4 mt-auto border-t border-border/50 group-hover:border-border transition-colors duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                          Impact
                        </span>
                        <span 
                          className="text-xs font-bold px-2.5 py-1 rounded-md bg-background border transition-colors duration-300"
                          style={{ 
                            color: accentColor,
                            borderColor: `${accentColor}30`
                          }}
                        >
                          {benefit.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SEO Content Block - Hidden but crawlable */}
        <div className="mt-16 text-center max-w-4xl mx-auto opacity-70">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Professional auto window tinting services provide heat rejection, UV protection, privacy enhancement, 
            and interior preservation for cars, trucks, and SUVs. XPEL ceramic window films offer superior 
            performance with lifetime warranty coverage. Available in multiple VLT options including 5%, 15%, 
            20%, 35%, 50%, and 70% for customized darkness levels. Nano-ceramic technology blocks infrared heat 
            while maintaining optical clarity and signal transparency.
          </p>
        </div>
      </div>
    </section>
  );
}
