import { Shield, Sparkles, ArrowRight, Award, Sun, Eye, Zap, Lock, Layers } from 'lucide-react';

interface FilmTypesProps {
  onNavigate?: (page: string) => void;
}

const products = [
  {
    name: 'Vision™ Solar',
    tier: 'Solar Control',
    description: 'Premier solar control series designed to reject heat without altering the appearance of your glass.',
    price: 'Best Seller',
    specs: [
      { label: 'Heat Rejection', value: '98%' },
      { label: 'UV Protection', value: '99%' },
      { label: 'Glare Reduction', value: '85%' },
      { label: 'Warranty', value: 'Lifetime' }
    ],
    features: [
      'Nano-ceramic technology',
      'Neutral appearance',
      'Lowers cooling costs',
      'Preserves views',
      'Fade protection',
      'Lifetime warranty'
    ],
    badge: 'Popular',
    technology: 'Nano-Ceramic',
    icon: Sun
  },
  {
    name: 'Safety & Security',
    tier: 'Protection',
    description: 'Heavy-duty protection films that hold shattered glass together against break-ins and severe weather.',
    price: 'Fortify',
    specs: [
      { label: 'Impact Resist', value: 'High' },
      { label: 'UV Protection', value: '99%' },
      { label: 'Thickness', value: '8-14mil' },
      { label: 'Warranty', value: 'Lifetime' }
    ],
    features: [
      'Deters forced entry',
      'Mitigates blast hazards',
      'Holds glass together',
      'Clear & tinted options',
      '24/7 Protection',
      'Peace of mind'
    ],
    badge: 'Security',
    technology: 'Multi-Layer',
    icon: Shield
  },
  {
    name: 'Energy Saver',
    tier: 'Efficiency',
    description: 'Low-E window film that insulates your windows. Keeps heat out in summer and reflects heat back in winter.',
    price: 'Eco-Friendly',
    specs: [
      { label: 'Insulation', value: '92%' },
      { label: 'Heat Retention', value: '88%' },
      { label: 'UV Protection', value: '99%' },
      { label: 'Warranty', value: 'Lifetime' }
    ],
    features: [
      'All-season performance',
      'Reduces HVAC load',
      'Quick ROI',
      'Carbon footprint reduction',
      'Improved comfort',
      'Lifetime warranty'
    ],
    badge: 'Efficient',
    technology: 'Low-E',
    icon: Zap
  },
  {
    name: 'Deco Privacy',
    tier: 'Decorative',
    description: 'Transform plain glass into custom features. From frosted opacity to patterned designs for privacy.',
    price: 'Custom',
    specs: [
      { label: 'Privacy', value: '100%' },
      { label: 'Light Trans.', value: '60%' },
      { label: 'Style', value: 'Custom' },
      { label: 'Warranty', value: '5-Year' }
    ],
    features: [
      'Frosted / Matte / Textured',
      'Custom branding capable',
      'Removable',
      'Cost-effective privacy',
      'Natural light flow',
      'Unique aesthetics'
    ],
    badge: null,
    technology: 'Decorative',
    icon: Layers
  },
  {
    name: 'Anti-Glare',
    tier: 'Comfort',
    description: 'Specifically engineered to diffuse harsh sunlight and eliminate reflection on screens and monitors.',
    price: 'Comfort',
    specs: [
      { label: 'Glare Redux', value: '94%' },
      { label: 'Clarity', value: '90%' },
      { label: 'UV Protection', value: '99%' },
      { label: 'Warranty', value: 'Lifetime' }
    ],
    features: [
      'Matte finish options',
      'Improves readability',
      'Softens lighting',
      'Reduces eye strain',
      'Increases productivity',
      'Lifetime warranty'
    ],
    badge: null,
    technology: 'Anti-Reflective',
    icon: Eye
  }
];

export function FilmTypes({ onNavigate }: FilmTypesProps) {
  return (
    <section id="film-types" className="py-20 bg-background relative overflow-hidden">
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
        @keyframes pulse-shadow {
          0%, 100% { box-shadow: 0 0 0 rgba(1,121,116,0); }
          50% { box-shadow: 0 0 30px rgba(1,121,116,0.5); }
        }
        .glow-1 { animation: float-glow-1 10s ease-in-out infinite; }
        .glow-2 { animation: float-glow-2 10s ease-in-out infinite 2s; }
        .product-card {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-style: preserve-3d;
        }
        .product-card:hover {
          transform: translateY(-16px) scale(1.03) rotateX(2deg) rotateY(2deg);
          border-color: rgba(1,121,116,0.8);
          box-shadow: 0 30px 80px rgba(1,121,116,0.4), 0 0 0 1px rgba(1,121,116,0.2);
        }
        .gradient-border {
          background: linear-gradient(45deg, rgba(1,121,116,0.2), rgba(253,181,33,0.2), rgba(1,121,116,0.2));
          background-size: 300% 300%;
          animation: gradient-shift 3s linear infinite;
        }
        .shimmer-trigger { animation: shimmer 1.2s ease-in-out; }
        .badge-glow { animation: pulse-shadow 2s ease-in-out infinite 3s; }
        .feature-item:hover { transform: translateX(4px); }
        .spec-card:hover {
          transform: scale(1.03);
          border-color: rgba(1,121,116,0.3);
          box-shadow: 0 10px 30px rgba(1,121,116,0.2);
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
          style={{ background: 'radial-gradient(circle, rgba(253,181,33,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-20 w-64 h-64 rounded-full blur-3xl glow-2"
          style={{ background: 'radial-gradient(circle, rgba(1,121,116,0.15) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-transform duration-300 hover:scale-105">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Architectural Solutions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Specialized Film Series
            <span className="block text-primary mt-2">Engineered for Your Needs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you need maximum heat rejection, enhanced security, or decorative privacy, 
            XPEL offers a specialized film solution for every residential and commercial application.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-12">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className="relative group"
                style={{ perspective: '1000px' }}
              >
                <div className="product-card h-full rounded-3xl bg-card border-2 border-border overflow-hidden relative flex flex-col">
                  {/* Animated Gradient Border Overlay */}
                  <div className="gradient-border absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-6 right-6 z-10">
                      <div className="badge badge-glow px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs shadow-xl transition-all duration-300 font-bold uppercase tracking-wider">
                        {product.badge}
                      </div>
                    </div>
                  )}

                  {/* Enhanced Shimmer Effect */}
                  <div className="shimmer-trigger absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />

                  {/* Header */}
                  <div className="p-6 xl:p-8 border-b border-border bg-gradient-to-br from-primary/5 to-transparent relative">
                    <div className="mb-4 text-primary bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground transition-transform duration-300 group-hover:translate-x-1">
                      {product.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{product.tier}</p>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6 xl:p-8 space-y-6 flex-1 flex flex-col">
                    {/* Key Features */}
                    <div className="flex-1">
                      <h4 className="mb-4 text-foreground flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
                        <Award className="w-4 h-4 text-primary" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, featureIdx) => (
                          <li 
                            key={featureIdx} 
                            className="feature-item flex items-start gap-3 transition-transform duration-300"
                          >
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-sm leading-relaxed text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Specs */}
                    <div className="spec-card p-4 rounded-xl bg-muted/30 border border-border relative overflow-hidden group/spec">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/spec:opacity-100 transition-opacity duration-300"
                      />
                      <div className="grid grid-cols-2 gap-3 relative z-10">
                        {product.specs.map((spec, i) => (
                            <div key={i}>
                                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                                {spec.label}
                                </div>
                                <div className="text-sm font-bold text-foreground">{spec.value}</div>
                            </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <button
                        onClick={() => onNavigate && onNavigate('contact')}
                        className="group/btn relative w-full overflow-hidden rounded-xl bg-primary py-4 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-primary/90"
                      >
                        <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
                        <span className="relative z-10 flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-sm">
                          Get Quote
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warranty Callout */}
        <div className="warranty-card p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-[shimmer_2s_infinite] pointer-events-none" />
          <Award className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3 text-foreground relative z-10">Backed by XPEL's Comprehensive Warranty</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto relative z-10">
            Enjoy peace of mind knowing your investment is protected. XPEL architectural films come with extensive warranties 
            covering bubbling, peeling, cracking, and delamination for the life of the film.
          </p>
        </div>
      </div>
    </section>
  );
}
