interface HeroProps {
  onNavigate: (page: string) => void;
}

// Inline SVG Icons
const ConfigureIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const CarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1-1V4a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6 0a1 1 0 001 1h2a1 1 0 001-1m0 0h1a2 2 0 002-2v-1" />
  </svg>
);

const LayersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const DollarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShoppingCartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export function Hero({ onNavigate }: HeroProps) {
  const scrollToConfigurator = () => {
    const configuratorElement = document.getElementById('vehicle-configurator');
    if (configuratorElement) {
      configuratorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const steps = [
    {
      number: '01',
      icon: CarIcon,
      title: 'Enter Vehicle',
      description: 'Select your year, make, model, and trim for accurate pricing'
    },
    {
      number: '02',
      icon: LayersIcon,
      title: 'Choose Service',
      description: 'Pick from PPF, window tint, or color change film with options'
    },
    {
      number: '03',
      icon: DollarIcon,
      title: 'See Live Price',
      description: 'Watch pricing update in real-time as you customize'
    },
    {
      number: '04',
      icon: ShoppingCartIcon,
      title: 'Add to Cart',
      description: 'Review, approve, and schedule your installation instantly'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#017974]/20" data-section="Hero">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          from { transform: translateX(-200%); }
          to { transform: translateX(200%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes scroll {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .hero-section .fade-in-1 {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .hero-section .fade-in-2 {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .hero-section .fade-in-3 {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        .hero-section .fade-in-4 {
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
        .hero-section .fade-in-5 {
          animation: fadeInUp 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }
        .hero-section .fade-in-6 {
          animation: fadeInUp 1s ease-out 1s forwards;
          opacity: 0;
        }
        .hero-section .fade-in-7 {
          animation: fadeInUp 1s ease-out 1.5s forwards;
          opacity: 0;
        }
        .step-card {
          transition: all 0.3s ease;
        }
        .step-card:hover {
          transform: translateY(-8px);
        }
        .step-card-bg {
          transition: all 0.3s ease;
        }
        .step-card:hover .step-card-bg {
          background: linear-gradient(135deg, rgba(74, 20, 140, 0.15), rgba(157, 78, 221, 0.15));
        }
        .step-number {
          transition: all 0.3s ease;
        }
        .step-card:hover .step-number {
          color: var(--auto-plum-neon);
        }
        .scroll-dot {
          animation: scroll 1.5s ease-in-out infinite;
        }
        .btn-configure {
          transition: all 0.3s ease;
        }
        .btn-configure:hover {
          box-shadow: 0 25px 50px -12px rgba(157, 78, 221, 0.5);
          transform: translateY(-2px);
        }
        .floating-icon {
          animation: float 6s ease-in-out infinite;
        }
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" data-component="HeroBackground">
        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1642880866616-37e865423996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZXJuJTIwbHV4dXJ5JTIwZ2FyYWdlJTIwY2FyJTIwZGV0YWlsfGVufDF8fHx8MTc2NTgxMDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
          />
          {/* Gradient removed */}
        </div>
        

      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center" data-component="HeroContent">
        {/* Badge */}
        <div className="fade-in-1 inline-flex items-center gap-2 mb-8 backdrop-blur-md border px-6 py-3 rounded-full" style={{ background: 'linear-gradient(to right, rgba(74, 20, 140, 0.2), rgba(157, 78, 221, 0.2))', borderColor: 'rgba(157, 78, 221, 0.3)' }}>
          <ConfigureIcon className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--auto-plum-neon)' }} />
          <span className="uppercase tracking-widest" style={{ color: 'var(--auto-plum-neon)', fontSize: '12px', fontWeight: 700 }}>
            Interactive Vehicle Configurator
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="fade-in-2 text-white mb-6 leading-none"
          style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 'clamp(48px, 10vw, 96px)', fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          BUILD YOUR CUSTOM
          <br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, var(--auto-plum-deep), var(--auto-plum-neon))' }}>
            PROTECTION PACKAGE
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="fade-in-3 max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 400 }}
        >
          Our smart configurator guides you through every step—from selecting your vehicle to choosing the perfect protection package. Get instant, transparent pricing with no hidden fees, no surprises.
        </p>

        {/* How It Works - Step Cards */}
        <div className="fade-in-4 mb-12">
          <div className="mb-8">
            <h2 className="text-white mb-2" style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700 }}>How It Works</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '16px' }}>Four simple steps to protect your investment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isTeal = index % 2 === 0;
              // Teal-400 (#2DD4BF) vs Yellow-400 (#FACC15)
              const accentColor = isTeal ? '#2DD4BF' : '#FACC15'; 
              const accentRgba = isTeal ? '45, 212, 191' : '250, 204, 21';
              const hoverTextColor = isTeal ? 'group-hover:text-teal-400' : 'group-hover:text-yellow-400';
              const hoverBorderColor = isTeal ? 'group-hover:border-teal-400/30' : 'group-hover:border-yellow-400/30';

              return (
                <div
                  key={index}
                  className={`group relative backdrop-blur-md border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 ${hoverBorderColor}`}
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {/* Hover Glow Effect - Solid Color */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `radial-gradient(circle at center, rgba(${accentRgba}, 0.15) 0%, transparent 70%)`,
                      boxShadow: `inset 0 0 20px rgba(${accentRgba}, 0.05)`
                    }} 
                  />
                  
                  <div className="relative z-10">
                    {/* Step Number & Line */}
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className={`text-4xl font-bold transition-colors duration-500 ${hoverTextColor}`}
                        style={{ 
                          fontFamily: "'Exo 2', sans-serif", 
                          color: 'rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        {step.number}
                      </div>
                      <div 
                        className="h-[1px] w-12 bg-white/10 group-hover:w-20 transition-all duration-500"
                        style={{ background: `linear-gradient(to right, ${accentColor}80, transparent)` }} 
                      />
                    </div>
                    
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${hoverTextColor}`} style={{ color: 'var(--auto-plum-neon)' }} />
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className={`text-white mb-3 transition-colors duration-300 ${hoverTextColor}`} 
                      style={{ fontWeight: 700, fontSize: '18px' }}
                    >
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="transition-colors duration-300 group-hover:text-white/80"
                      style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px', lineHeight: '1.6' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Features */}
        <div className="fade-in-5 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {[
            { label: 'Live Pricing', value: 'See costs update as you configure' },
            { label: 'Vehicle Database', value: 'Accurate sizing for 1000s of models' },
            { label: 'Expert Guidance', value: 'Built-in recommendations & tips' }
          ].map((feature, index) => (
            <div key={index} className="backdrop-blur-xl border rounded-xl p-4" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="text-white mb-1" style={{ fontWeight: 700, fontSize: '14px' }}>{feature.label}</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px' }}>{feature.value}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="fade-in-6">
          <button
            onClick={scrollToConfigurator}
            className="btn-configure group relative px-10 py-5 rounded-xl shadow-2xl overflow-hidden"
            style={{ background: 'linear-gradient(to right, var(--auto-plum-deep), var(--auto-plum-neon))', color: 'white', fontWeight: 700, fontSize: '18px' }}
          >
            <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" style={{ background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)' }} />
            <span className="relative flex items-center justify-center gap-2">
              Start Configuring Now
              <ChevronDownIcon className="w-5 h-5 scroll-dot" />
            </span>
          </button>
          <p className="mt-4" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px' }}>No account required • Get instant quote • Save & compare options</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fade-in-7 absolute bottom-10 left-1/2 -translate-x-1/2" data-component="ScrollIndicator">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center p-2" style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}>
          <div className="scroll-dot w-1.5 h-1.5 rounded-full" style={{ background: 'var(--auto-plum-neon)' }} />
        </div>
      </div>
    </section>
  );
}
