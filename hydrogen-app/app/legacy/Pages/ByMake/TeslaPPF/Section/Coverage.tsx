import { motion } from 'motion/react';
import { CheckCircle2, Car, ArrowRight } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface CoverageProps {
  onNavigate: (page: string) => void;
}

export function Coverage({ onNavigate }: CoverageProps) {
  const packages = [
    {
      name: 'Partial Front',
      description: 'Essential protection for the leading edge',
      coverage: [
        'Full Front Bumper',
        'Partial Hood (18"-24")',
        'Partial Fenders',
        'Side Mirrors',
        'Headlights'
      ],
      price: 'From $1,299',
      ideal: 'Leased vehicles, budget conscious'
    },
    {
      name: 'Full Front',
      description: 'Complete seamless frontal protection',
      coverage: [
        'Full Front Bumper',
        'Full Hood (Wrapped Edges)',
        'Full Fenders',
        'Side Mirrors',
        'Headlights',
        'Fog Lights'
      ],
      price: 'From $1,999',
      ideal: 'Most popular option for daily drivers',
      popular: true
    },
    {
      name: 'Full Body',
      description: 'Ultimate bumper-to-bumper defense',
      coverage: [
        'All Painted Surfaces',
        'Full Hood & Fenders',
        'All Doors & Rockers',
        'Rear Bumper & Trunk',
        'Headlights & Tail Lights',
        'Wrapped Edges Everywhere'
      ],
      price: 'From $5,999',
      ideal: 'Model S Plaid, Model X, Matte Conversions'
    }
  ];

  return (
    <section className="py-24 bg-auto-asphalt relative" data-section="TeslaPPFCoverage">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Car className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold uppercase tracking-widest text-auto-silver font-['Exo_2']">Coverage Packages</span>
          </div>
          
          <h2 className="text-white mb-6 text-4xl md:text-5xl font-['Exo_2'] font-bold uppercase tracking-tight">
            Choose Your <span className="text-auto-plum-neon">Protection</span>
          </h2>
          <p className="text-lg text-auto-silver max-w-3xl mx-auto font-['Inter'] font-light leading-relaxed">
            From essential front-end coverage to complete vehicle protection. All packages include our signature wrapped edges for a seamless finish.
          </p>
        </motion.div>
        
        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-auto-plum-deep/10 border border-auto-plum-neon shadow-[0_0_30px_rgba(157,78,221,0.15)] scale-105 z-10' 
                  : 'bg-auto-carbon border border-white/10 hover:border-auto-plum-neon/30'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-auto-plum-neon text-black px-6 py-1.5 rounded-full text-xs font-['Exo_2'] font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-8 text-center pb-8 border-b border-white/5">
                <h3 className="text-2xl font-['Exo_2'] font-bold text-white mb-2 uppercase tracking-wide">{pkg.name}</h3>
                <p className="text-auto-silver text-sm font-['Inter'] font-light mb-6">{pkg.description}</p>
                <div className="text-4xl font-['Exo_2'] font-bold text-auto-plum-neon">
                  {pkg.price}
                </div>
              </div>

              {/* Coverage List */}
              <div className="space-y-4 mb-8 flex-grow">
                <h4 className="text-xs font-bold text-auto-plum-mist uppercase tracking-widest mb-4 font-['Exo_2']">What's Included:</h4>
                {pkg.coverage.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-auto-plum-neon shrink-0" />
                    <span className="text-sm text-white/90 font-['Inter']">{item}</span>
                  </div>
                ))}
              </div>

              {/* Ideal For */}
               <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                 <span className="block text-xs font-bold text-auto-plum-mist uppercase tracking-wider mb-1 font-['Exo_2']">Best For:</span>
                 <span className="text-sm text-white/80 font-['Inter']">{pkg.ideal}</span>
               </div>

              {/* CTA */}
              <Button 
                onClick={() => onNavigate('tesla-package')}
                className={`w-full py-7 rounded-xl font-['Exo_2'] font-bold uppercase tracking-widest transition-all ${
                  pkg.popular 
                    ? 'bg-auto-plum-neon hover:bg-white text-black shadow-lg shadow-auto-plum-neon/20' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Configure
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
