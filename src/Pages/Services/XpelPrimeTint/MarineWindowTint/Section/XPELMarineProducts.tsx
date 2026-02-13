interface XPELMarineProductsProps {
  onNavigate: (page: string) => void;
}

const products = [
  {
    name: 'PRIME XR',
    tier: 'Premium',
    description: 'Nano-ceramic technology for superior heat rejection and durability',
    price: 'Contact for Quote',
    vltOptions: ['5%', '15%', '20%', '30%', '35%', '50%', '70%'],
    features: [
      'Nano-ceramic technology',
      'Blocks 88% infrared heat',
      '99% UV rejection',
      'Non-conductive / Non-corrosive',
      'Superior optical clarity',
      'Salt water resistant'
    ],
    warranty: 'Lifetime Transferable Warranty',
    heatRejection: '88%',
    uvRejection: '99%',
    technology: 'Nano-Ceramic',
    badge: 'Best Value',
    color: 'purple'
  },
  {
    name: 'PRIME XR PLUS',
    tier: 'Ultimate',
    description: 'Maximum heat rejection for the coolest cabin experience',
    price: 'Contact for Quote',
    vltOptions: ['5%', '15%', '20%', '30%', '35%', '50%', '70%'],
    features: [
      'Multi-layer nano-ceramic technology',
      'Blocks 98% infrared heat',
      '99% UV rejection',
      'Non-conductive / Non-corrosive',
      'Maximum heat control',
      'Exceptional optical clarity'
    ],
    warranty: 'Lifetime Transferable Warranty',
    heatRejection: '98%',
    uvRejection: '99%',
    technology: 'Multi-Layer Nano-Ceramic',
    badge: 'Ultimate Performance',
    color: 'purple'
  }
];

// Inline SVG Icons
const CheckIcon = () => (
  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const AwardIcon = () => (
  <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 arrow-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export function XPELMarineProducts({ onNavigate }: XPELMarineProductsProps) {
  return (
    <section id="xpel-marine-products" className="py-20 bg-background relative overflow-hidden">
      <style>{`
        @keyframes float-glow-1 {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.3); opacity: 0.4; }
        }
        @keyframes float-glow-2 {
          0%, 100% { transform: scale(1.3); opacity: 0.4; }
          50% { transform: scale(1); opacity: 0.2; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        @keyframes arrow-bounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        @keyframes pulse-shadow {
          0%, 100% { box-shadow: 0 0 0 rgba(74,20,140,0); }
          50% { box-shadow: 0 0 30px rgba(74,20,140,0.5); }
        }
        @keyframes button-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .glow-1 {
          animation: float-glow-1 10s ease-in-out infinite;
        }
        .glow-2 {
          animation: float-glow-2 10s ease-in-out infinite 2s;
        }
        .product-card {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-style: preserve-3d;
        }
        .product-card:hover {
          transform: translateY(-16px) scale(1.03) rotateX(2deg) rotateY(2deg);
          border-color: rgba(74,20,140,0.8);
          box-shadow: 0 30px 80px rgba(74,20,140,0.4), 0 0 0 1px rgba(74,20,140,0.2);
        }
        .gradient-border {
          background: linear-gradient(45deg, rgba(74,20,140,0.2), rgba(255,214,0,0.2), rgba(157,78,221,0.2), rgba(74,20,140,0.2));
          background-size: 300% 300%;
          animation: gradient-shift 3s linear infinite;
        }
        .shimmer {
          animation: shimmer 1.2s ease-in-out;
        }
        .product-card:hover .shimmer-trigger {
          animation: shimmer 1.2s ease-in-out;
        }
        .badge-glow {
          animation: pulse-shadow 2s ease-in-out infinite 3s;
        }
        .badge:hover {
          transform: scale(1.1) rotate(5deg);
        }
        .arrow-icon {
          animation: arrow-bounce 1.5s ease-in-out infinite;
        }
        .btn-shimmer {
          animation: button-shimmer 0.8s ease-in-out;
        }
        .cta-button:hover .btn-shimmer {
          animation: button-shimmer 0.8s ease-in-out;
        }
        .feature-item:hover {
          transform: translateX(4px);
        }
        .vlt-badge {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .vlt-badge:hover {
          transform: translateY(-2px) scale(1.15);
          background-color: rgba(74,20,140,0.2);
          border-color: rgba(74,20,140,0.5);
          color: var(--auto-warning);
          box-shadow: 0 5px 15px rgba(74,20,140,0.3);
        }
        .spec-card {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .spec-card:hover {
          transform: scale(1.03);
          border-color: rgba(74,20,140,0.3);
          box-shadow: 0 10px 30px rgba(74,20,140,0.2);
        }
        .price-text:hover {
          transform: scale(1.05);
          color: var(--auto-warning);
        }
        .title-text:hover {
          transform: translateX(4px);
        }
        .cta-button {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .cta-button:hover {
          transform: scale(1.03) translateY(-2px);
        }
        .cta-button:active {
          transform: scale(0.97);
        }
        .warranty-card {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .warranty-card:hover {
          transform: scale(1.02);
        }
        .warranty-shimmer {
          animation: button-shimmer 1s ease-in-out;
        }
        .warranty-card:hover .warranty-shimmer {
          animation: button-shimmer 1s ease-in-out;
        }
      `}</style>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[image:radial-gradient(circle_at_2px_2px,_var(--primary)_1px,_transparent_0)] bg-[length:50px_50px] opacity-50" />
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-20 w-64 h-64 rounded-full blur-3xl glow-1"
          style={{ background: 'radial-gradient(circle, rgba(255,214,0,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-20 w-64 h-64 rounded-full blur-3xl glow-2"
          style={{ background: 'radial-gradient(circle, rgba(157,78,221,0.15) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-transform duration-300 hover:scale-105">
            <StarIcon />
            <span className="text-sm text-primary">Premium XPEL Marine Films</span>
          </div>
          <h2 className="mb-6 text-foreground">
            Top-Tier Marine Protection
            <span className="block text-primary mt-2">Nano-Ceramic Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our marine-specific installations use XPEL PRIME nano-ceramic films, guaranteeing corrosion resistance, 
            maximum heat rejection, and crystal-clear visibility on the water.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-12 max-w-5xl mx-auto mb-12">
          {products.map((product, idx) => (
            <div
              key={product.name}
              className="relative group"
              style={{ perspective: '1000px' }}
            >
              <div className="product-card h-full rounded-3xl bg-card border-2 border-border overflow-hidden relative">
                {/* Animated Gradient Border Overlay */}
                <div className="gradient-border absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="badge badge-glow px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs shadow-xl transition-all duration-300">
                      {product.badge}
                    </div>
                  </div>
                )}

                {/* Enhanced Shimmer Effect */}
                <div className="shimmer-trigger absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />

                {/* Radial Glow from Center */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(74,20,140,0.15) 0%, transparent 70%)',
                  }}
                />

                {/* Header */}
                <div className="p-6 xl:p-8 border-b border-border bg-gradient-to-br from-primary/5 to-transparent relative">
                  <h3 className="title-text mb-2 text-foreground transition-transform duration-300">
                    {product.name}
                  </h3>
                  <p className="text-primary mb-2">{product.tier}</p>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="price-text text-xl text-foreground transition-all duration-300 font-semibold">
                    {product.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 xl:p-8 space-y-6 xl:space-y-8">
                  {/* Key Features */}
                  <div>
                    <h4 className="mb-4 text-foreground flex items-center gap-2">
                      <ShieldIcon />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIdx) => (
                        <li 
                          key={featureIdx} 
                          className="feature-item flex items-start gap-3 transition-transform duration-300"
                        >
                          <CheckIcon />
                          <span className="text-sm leading-relaxed text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Specs */}
                  <div className="spec-card p-5 rounded-2xl bg-muted/30 border border-border relative overflow-hidden group/spec">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/spec:opacity-100 transition-opacity duration-300"
                    />
                    <h5 className="mb-4 text-foreground relative z-10">Technical Specifications</h5>
                    <div className="grid grid-cols-2 gap-3 relative z-10">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                          Construction
                        </div>
                        <div className="text-sm font-medium text-foreground">{product.technology}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                          Heat Rejection
                        </div>
                        <div className="text-sm font-medium text-foreground">{product.heatRejection}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                          UV Rejection
                        </div>
                        <div className="text-sm font-medium text-foreground">{product.uvRejection}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                          Warranty
                        </div>
                        <div className="text-sm font-medium text-foreground">Lifetime</div>
                      </div>
                    </div>
                  </div>

                  {/* Available VLT Options */}
                  <div>
                    <h5 className="mb-3 text-foreground">Available Tint Levels (VLT)</h5>
                    <div className="flex flex-wrap gap-2">
                      {product.vltOptions.map((level) => (
                        <div
                          key={level}
                          className="vlt-badge px-2.5 py-1 rounded-md bg-muted border border-border text-xs font-medium text-muted-foreground"
                        >
                          {level}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="group relative w-full overflow-hidden rounded-xl border-0 py-5 text-black shadow-[0_0_20px_rgba(253,181,33,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(253,181,33,0.6)]"
                      style={{ background: '#FDB521' }}
                    >
                      {/* Continuous Attention Animation */}
                      <div className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] bg-white/20" />
                      
                      {/* Hover Shine Effect */}
                      <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-2 text-base font-bold uppercase tracking-wider">
                        Request Marine Quote
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Enhanced Multi-Layer Glow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    boxShadow: '0 0 60px rgba(74,20,140,0.4), 0 0 120px rgba(74,20,140,0.2), inset 0 0 60px rgba(74,20,140,0.1)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Warranty Callout */}
        <div className="warranty-card p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/20 text-center relative overflow-hidden group">
          <div className="warranty-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none" />
          <AwardIcon />
          <h3 className="mb-3 text-foreground relative z-10">Lifetime Manufacturer Warranty on Marine Tint</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto relative z-10">
            Enjoy peace of mind with XPEL's comprehensive lifetime warranty. Our marine window films are guaranteed 
            against peeling, bubbling, and color change, even in harsh marine environments.
          </p>
        </div>
      </div>
    </section>
  );
}
