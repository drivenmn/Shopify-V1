import { motion } from "motion/react";
import { ArrowRight, Shield, Star, Award, Users, MapPin } from "lucide-react";
import img2020ChevyCorvetteC8FullFrontUltimatePlusPpf4 from "figma:asset/9163b60b2689dae011479294cab99fadc2483211.png";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const stats = [
    { label: 'Years Experience', value: '10+', icon: Award },
    { label: 'Vehicles Protected', value: '5k+', icon: Users },
    { label: '5-Star Reviews', value: '500+', icon: Star },
    { label: 'Warranty', value: 'Lifetime', icon: Shield },
  ];

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Parallax/Zoom effect could go here, for now static high quality image */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={img2020ChevyCorvetteC8FullFrontUltimatePlusPpf4}
            alt="DrivenMN - Premium Window Tint and PPF in Burnsville MN"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        
        {/* Modern Gradient Overlay using Brand Colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-auto-plum-deep/20 via-transparent to-auto-plum-neon/10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-left"
          >
            {/* Location Badge */}
            <motion.div variants={itemVariants} className="flex justify-start mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-auto-plum-deep/30 bg-auto-plum-deep/10 backdrop-blur-md shadow-[0_0_30px_rgba(74,20,140,0.2)]">
                <MapPin className="w-4 h-4 text-auto-plum-neon" />
                <span className="text-sm font-medium text-gray-200 tracking-wide">
                  Burnsville, MN • Serving the Twin Cities
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-2">
                ELITE AUTOMOTIVE
              </h1>
              <div className="relative inline-block">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-auto-plum-mist to-auto-plum-neon tracking-tight leading-[1.1]">
                  PROTECTION
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-auto-plum-neon to-auto-plum-deep rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </motion.div>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants} 
              className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
            >
              Minnesota's premier destination for XPEL Paint Protection Film, Ceramic Window Tint, and high-end detailing.
            </motion.p>

            {/* Feature Pills - Optional, adding for consistency with Tint page feel */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                { text: 'XPEL Certified', color: 'text-auto-plum-mist', border: 'border-auto-plum-deep/30' },
                { text: 'Lifetime Warranty', color: 'text-yellow-400', border: 'border-yellow-400/30' },
                { text: 'Tesla Experts', color: 'text-auto-plum-neon', border: 'border-auto-plum-neon/30' }
              ].map((pill) => (
                <div key={pill.text} className={`px-4 py-1.5 rounded-full backdrop-blur-md border ${pill.border} bg-white/5 flex items-center gap-2`}>
                  <span className={`text-sm font-medium ${pill.color}`}>{pill.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('ppf-configurator')}
                className="group relative px-8 py-5 bg-auto-plum-deep hover:bg-auto-plum-neon text-white rounded-xl overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-auto-plum-neon/40 shadow-auto-plum-deep/20 w-full sm:w-auto min-w-[200px]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center font-bold tracking-wide text-lg">
                  GET PPF QUOTE
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={() => onNavigate('tint-configurator')}
                className="group px-8 py-5 bg-transparent border-2 border-white/20 hover:border-auto-plum-mist text-white hover:text-auto-plum-mist rounded-xl transition-all duration-300 w-full sm:w-auto min-w-[200px] backdrop-blur-sm hover:bg-white/5"
              >
                <span className="flex items-center justify-center font-bold tracking-wide text-lg">
                  TINT QUOTE
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Stats Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 mt-12 lg:mt-0"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (idx * 0.15),
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative group p-6 rounded-2xl backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden text-center hover:border-auto-plum-neon/30"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-auto-plum-deep/10 blur-xl" />

                <div className="relative z-10">
                  <div className="flex justify-center mb-3 text-auto-plum-mist group-hover:text-auto-plum-neon transition-colors duration-300 transform group-hover:scale-110">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-auto-plum-neon to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
