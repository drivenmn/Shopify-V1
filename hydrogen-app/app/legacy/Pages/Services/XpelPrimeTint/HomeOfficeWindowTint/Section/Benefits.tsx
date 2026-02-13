import { motion } from 'motion/react';
import { Shield, Sun, Eye, Thermometer, Sparkles, DollarSign, Home, Lock } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Energy Efficiency',
      description: 'Lower cooling costs by up to 30% by rejecting solar heat before it enters your building. Reduce HVAC load and carbon footprint.',
      stats: 'Save up to 30%',
      color: 'teal'
    },
    {
      icon: Sun,
      title: 'Fade Protection',
      description: 'Block 99.9% of harmful UV rays that cause fading to expensive hardwood floors, furniture, artwork, and curtains.',
      stats: '99.9% UV Block',
      color: 'yellow'
    },
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: 'Eliminate hot and cold spots in your home or office. Create a consistent, comfortable temperature in every room.',
      stats: 'Consistent Comfort',
      color: 'purple'
    },
    {
      icon: Eye,
      title: 'Glare Reduction',
      description: 'Enjoy natural light without the squinting. Reduce harsh glare on TV screens, computer monitors, and mobile devices.',
      stats: 'Better Visibility',
      color: 'teal'
    },
    {
      icon: Lock,
      title: 'Enhanced Privacy',
      description: 'Increase privacy during the day with reflective films that let you see out while preventing prying eyes from seeing in.',
      stats: 'Daytime Privacy',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Thick security films hold shattered glass together during storms or break-in attempts, protecting occupants from injury.',
      stats: 'Glass Retention',
      color: 'yellow'
    },
    {
      icon: Home,
      title: 'Curb Appeal',
      description: 'Give your property a uniform, modern look. Hide cluttered blinds and curtains for a sleek exterior appearance.',
      stats: 'Modern Aesthetics',
      color: 'teal'
    },
    {
      icon: Sparkles,
      title: 'Lifetime Warranty',
      description: 'XPEL residential films come with a comprehensive lifetime warranty against peeling, bubbling, cracking, and fading.',
      stats: 'Lifetime Protection',
      color: 'purple'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(1,121,116,0.2) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(253,181,33,0.2) 0%, transparent 70%)' }}
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
                Why Tint Your Space?
              </span>
            </div>
          </motion.div>
          <h2 className="mb-6 text-foreground">
            Benefits of Architectural Film
            <span className="block text-primary mt-2">More Than Just Aesthetics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your home or office with professional window film. Discover how XPEL architectural 
            films enhance comfort, protect your investment, and lower energy costs.
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
                  
                  {/* Animated Top Border */}
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
                          Benefit
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
      </div>
    </section>
  );
}
