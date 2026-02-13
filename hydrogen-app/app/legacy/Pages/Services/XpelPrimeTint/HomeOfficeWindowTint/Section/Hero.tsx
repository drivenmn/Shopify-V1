import { motion } from 'motion/react';
import { Shield, Sparkles, ArrowRight, Award, Sun, Building, Home } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface HeroProps {
  onNavigate: (page: string) => void;
  breadcrumbSegments?: BreadcrumbSegment[];
}

export function Hero({ onNavigate, breadcrumbSegments }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black" data-section="ResidentialTintHero">
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
            backgroundImage: `url('https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwd2l0aCUyGxhcmdlJTIwd2luZG93c3xlbnwxfHx8fDE3NjUxOTg1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Subtle Overlay for Readability */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(1,121,116,0.15) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(253,181,33,0.15) 0%, transparent 70%)' }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
        
        {/* Breadcrumbs */}
        <div className="absolute top-0 left-4 md:left-8 flex items-center gap-2 text-sm text-white/50 mb-8">
            <button 
                onClick={() => onNavigate('home')} 
                className="hover:text-[var(--auto-plum-neon)] transition-colors flex items-center gap-1"
            >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
            </button>
            <span className="opacity-50">/</span>
            {breadcrumbSegments?.map((segment, index) => (
                <div key={index} className="flex items-center gap-2">
                {segment.href ? (
                    <button 
                    onClick={() => onNavigate(segment.href!)}
                    className="hover:text-[var(--auto-plum-neon)] transition-colors"
                    >
                    {segment.label}
                    </button>
                ) : (
                    <span className="text-white">{segment.label}</span>
                )}
                {index < breadcrumbSegments.length - 1 && <span className="opacity-50">/</span>}
                </div>
            ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          
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
                  background: 'linear-gradient(135deg, rgba(1,121,116,0.3) 0%, rgba(253,181,33,0.15) 100%)',
                  borderColor: 'rgba(1,121,116,0.3)'
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Building className="w-5 h-5 text-white" />
                <span className="text-white/90 font-medium">Architectural Film Solutions</span>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white mb-3 text-5xl md:text-7xl font-bold leading-tight"
              >
                Residential & <br /> Commercial Tint
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative inline-block mt-2"
              >
                <h2 className="text-[var(--auto-plum-mist)] text-2xl md:text-3xl font-medium">Comfort, Privacy & Efficiency</h2>
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
              Enhance your space with XPEL architectural films. 
              Significantly reduce energy costs, eliminate glare, and protect interiors from UV fading 
              without sacrificing natural light or your view.
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
                { icon: <Sparkles className="w-4 h-4" />, text: 'Energy Efficient', color: '#9D4EDD' }
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
                  onClick={() => onNavigate('contact')}
                  className="relative overflow-hidden px-8 py-6 rounded-xl bg-[#FDB521] text-black hover:bg-[#e5a010] shadow-2xl shadow-[#FDB521]/30 border-0 group transition-all duration-300"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center gap-2 font-bold text-lg">
                    Get Free Estimate
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => {
                    const element = document.getElementById('film-types');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline"
                  className="px-8 py-6 rounded-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white backdrop-blur-md bg-black/20"
                >
                  View Solutions
                </Button>
              </motion.div>
            </motion.div>
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
                value: '30%', 
                label: 'Energy Costs\nReduced', 
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
                value: '80%', 
                label: 'Heat\nReduction', 
                icon: <Sparkles className="w-8 h-8" />,
                color: 'var(--auto-plum-neon)',
                gradient: 'from-[var(--auto-plum-neon)]/20 to-[var(--auto-plum-neon)]/5'
              },
              { 
                value: 'Lifetime', 
                label: 'Residential\nWarranty', 
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
