import { motion } from 'motion/react';
import { CheckCircle2, Car, Shield, Info } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface CoverageProps {
  onNavigate: (page: string) => void;
}

export function Coverage({ onNavigate }: CoverageProps) {
  const packages = [
    {
      name: 'Partial Front',
      description: 'Essential protection for the most vulnerable leading edges.',
      coverage: [
        'Partial Hood (18-24")',
        'Partial Fenders',
        'Front Bumper',
        'Side Mirrors'
      ],
      price: 'From $995',
      ideal: 'Leased vehicles, budget conscious',
      highlight: false
    },
    {
      name: 'Full Front',
      description: 'Complete protection for the entire front end. No visible seams on hood.',
      coverage: [
        'Full Hood',
        'Full Fenders',
        'Front Bumper',
        'Side Mirrors',
        'Headlights'
      ],
      price: 'From $1,995',
      ideal: 'Daily drivers, highway commuters',
      highlight: true
    },
    {
      name: 'Track Package',
      description: 'Full front protection plus high-impact rocker panels.',
      coverage: [
        'Full Front Package',
        'Rocker Panels',
        'Behind Rear Wheels',
        'A-Pillars',
        'Roof Leading Edge'
      ],
      price: 'From $2,495',
      ideal: 'Sports cars, track enthusiasts',
      highlight: false
    },
    {
      name: 'Full Body',
      description: 'Ultimate bumper-to-bumper protection for every painted surface.',
      coverage: [
        'Every Painted Surface',
        'Headlights & Taillights',
        'Carbon Fiber Trim',
        'Piano Black Pillars'
      ],
      price: 'From $5,995',
      ideal: 'Exotics, matte finishes, total peace of mind',
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-auto-carbon border-t border-white/5" data-section="PPFCoverage">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Car className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold text-white uppercase tracking-widest font-['Exo_2']">Coverage Options</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Exo_2']">
            TAILORED <span className="text-auto-plum-neon">PACKAGES</span>
          </h2>
          <p className="text-xl text-auto-silver max-w-3xl mx-auto font-light leading-relaxed">
            From essential front-end defense to complete full-body armor. We precision-cut every kit to fit your specific make and model perfectly.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`
                relative flex flex-col p-8 rounded-2xl border transition-all duration-300
                ${pkg.highlight 
                  ? 'bg-auto-plum-deep/10 border-auto-plum-neon shadow-[0_0_30px_rgba(157,78,221,0.15)]' 
                  : 'bg-auto-asphalt border-white/5 hover:border-white/20'}
              `}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-auto-plum-neon text-black text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2 font-['Exo_2']">{pkg.name}</h3>
              <p className="text-sm text-auto-silver mb-6 font-light min-h-[40px]">{pkg.description}</p>
              
              <div className="mb-6 pb-6 border-b border-white/5">
                <p className="text-xs text-auto-silver uppercase tracking-wider mb-1">Starting At</p>
                <div className="text-3xl font-bold text-white font-['Exo_2']">{pkg.price}</div>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {pkg.coverage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? 'text-auto-plum-neon' : 'text-white/40'}`} />
                    <span className="text-sm text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-lg p-3 mb-6">
                <p className="text-[10px] text-auto-silver uppercase tracking-wider mb-1 font-bold">Best For:</p>
                <p className="text-xs text-white">{pkg.ideal}</p>
              </div>

              <Button 
                onClick={() => onNavigate('ppf-configurator')}
                variant={pkg.highlight ? 'default' : 'outline'}
                className={`w-full ${pkg.highlight ? 'bg-auto-plum-neon text-black hover:bg-white' : 'border-white/20 text-white hover:bg-white hover:text-black'}`}
              >
                Get Quote
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Custom Info Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-auto-plum-deep/20 to-transparent border border-auto-plum-neon/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
           <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-auto-plum-neon/20 flex items-center justify-center shrink-0">
                 <Info className="w-6 h-6 text-auto-plum-neon" />
              </div>
              <div>
                 <h4 className="text-xl font-bold text-white font-['Exo_2'] mb-2">Need Custom Coverage?</h4>
                 <p className="text-auto-silver font-light max-w-xl">
                    We can protect any painted surface on your vehicle. From interior trim and screens to door sills and luggage areas.
                 </p>
              </div>
           </div>
           <Button onClick={() => onNavigate('contact')} className="shrink-0 bg-white text-black hover:bg-auto-plum-mist px-8">
              Contact Us
           </Button>
        </motion.div>
      </div>
    </section>
  );
}
