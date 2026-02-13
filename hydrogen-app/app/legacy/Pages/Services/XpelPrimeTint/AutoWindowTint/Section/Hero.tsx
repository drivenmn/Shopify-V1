import { motion } from 'motion/react';
import { Shield, Sparkles, ArrowRight, Award, Sun, Clock } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black" data-section="AutoTintHero">
      {/* Cinematic Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581891525143-c976354f72f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMHRpbnRlZCUyMHdpbmRvd3N8ZW58MXx8fHwxNzY1MTI5MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Subtle Overlay for Readability - No heavy gradients */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(74,20,140,0.15) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(157,78,221,0.15) 0%, transparent 70%)' }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255,214,0,0.1) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <motion.div 
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(74,20,140,0.3) 0%, rgba(157,78,221,0.15) 100%)',
                  borderColor: 'rgba(157,78,221,0.3)'
                }}
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    '0 0 0 rgba(74,20,140,0)',
                    '0 0 30px rgba(74,20,140,0.3)',
                    '0 0 0 rgba(74,20,140,0)'
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 3, repeat: Infinity, repeatDelay: 2 }
                }}
              >
                <Award className="w-5 h-5 text-white" />
                <span className="text-white/90 font-medium">Xpel Certified Installation</span>
              </motion.div>
            </motion.div>

            {/* Main Heading with Staggered Animation */}
            <motion.div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white mb-3"
              >
                Premium Window Tint
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative inline-block"
              >
                <h2 className="text-[var(--auto-plum-mist)]">Minneapolis & Twin Cities</h2>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--auto-plum-neon)] to-[var(--auto-plum-deep)] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-white/80 mb-8 max-w-xl text-lg leading-relaxed"
            >
              Experience the pinnacle of automotive window tinting with XPEL PRIME. 
              Nano-ceramic technology blocks 99% UV rays, reduces heat up to 60%, 
              and enhances your vehicle&apos;s luxury aesthetic with lifetime warranty protection.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                { icon: <Sun className="w-4 h-4" />, text: '99% UV Block', color: '#E0AAFF' },
                { icon: <Shield className="w-4 h-4" />, text: 'Lifetime Warranty', color: '#FFD600' },
                { icon: <Sparkles className="w-4 h-4" />, text: 'Nano-Ceramic', color: '#9D4EDD' }
              ].map((feature, idx) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 + (idx * 0.1) }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-2 bg-white/5"
                >
                  <span style={{ color: feature.color }}>{feature.icon}</span>
                  <span className="text-white/90 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => onNavigate('tint-configurator')}
                  className="relative overflow-hidden px-8 py-6 rounded-xl bg-[var(--auto-plum-deep)] hover:bg-[var(--auto-plum-neon)] text-white shadow-2xl shadow-[var(--auto-plum-deep)]/30 border-0 group transition-all duration-300"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center gap-2 font-bold">
                    Get Instant Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => onNavigate('contact')}
                  variant="outline"
                  className="px-8 py-6 rounded-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white backdrop-blur-md bg-black/20"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Schedule Visit
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-white/60 mt-6 text-sm font-medium"
            >
              Trusted by 5,000+ Twin Cities drivers • Tesla, BMW, Mercedes, Porsche certified
            </motion.p>
          </motion.div>

          {/* Right Column - Premium Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { 
                value: '10+', 
                label: 'Years\nExperience', 
                icon: <Award className="w-8 h-8" />,
                color: 'var(--auto-plum-mist)',
                gradient: 'from-[var(--auto-plum-deep)]/40 to-[var(--auto-plum-deep)]/10'
              },
              { 
                value: '99%', 
                label: 'UV Ray\nRejection', 
                icon: <Sun className="w-8 h-8" />,
                color: 'var(--auto-warning)',
                gradient: 'from-[var(--auto-warning)]/20 to-[var(--auto-warning)]/5'
              },
              { 
                value: '60%', 
                label: 'Heat\nReduction', 
                icon: <Sparkles className="w-8 h-8" />,
                color: 'var(--auto-plum-neon)',
                gradient: 'from-[var(--auto-plum-neon)]/20 to-[var(--auto-plum-neon)]/5'
              },
              { 
                value: 'Lifetime', 
                label: 'Warranty\nProtection', 
                icon: <Shield className="w-8 h-8" />,
                color: '#fff',
                gradient: 'from-white/20 to-white/5'
              }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (idx * 0.15),
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`relative group p-6 rounded-2xl backdrop-blur-xl border border-white/10 bg-gradient-to-br ${stat.gradient} overflow-hidden`}
              >
                {/* Shimmer Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Icon */}
                <motion.div 
                  className="mb-4"
                  style={{ color: stat.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Value */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + (idx * 0.15) }}
                >
                  <div className="text-white mb-2 whitespace-pre-line font-exo font-bold text-3xl">{stat.value}</div>
                  <div className="text-white/70 whitespace-pre-line text-sm font-medium">{stat.label}</div>
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `0 0 40px ${stat.color}`
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-8 text-white/60 font-medium">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[var(--auto-plum-neon)]" />
              <span>XPEL Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[var(--auto-warning)]" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--auto-plum-mist)]" />
              <span>Premium Installation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
