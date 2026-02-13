import { motion } from 'motion/react';
import { CheckCircle2, Car, Shield, Info } from 'lucide-react';
import { Button } from '../../../../components/ui/button';

interface PackagesProps {
  onNavigate: (page: string) => void;
}

export function Packages({ onNavigate }: PackagesProps) {
  const packages = [
    {
      name: 'Stage 1 Enhancement',
      description: 'Single-step polish to remove light swirls and enhance gloss.',
      coverage: [
        'Thorough Hand Wash & Decon',
        'Clay Bar Treatment',
        'Single Step Machine Polish',
        'Removes 50-60% of Defects',
        '6 Month Silica Sealant',
        'Wheel & Tire Detail'
      ],
      price: 'From $599',
      ideal: 'New cars, budget conscious',
      highlight: false
    },
    {
      name: 'Stage 2 Correction',
      description: 'Compound and polish to remove moderate scratches and swirls.',
      coverage: [
        'Thorough Hand Wash & Decon',
        'Iron Fallout Removal',
        'Heavy Cut Compound Step',
        'Fine Polish Step',
        'Removes 85-90% of Defects',
        '1 Year Ceramic Sealant',
        'Wheel & Tire Detail'
      ],
      price: 'From $1,199',
      ideal: 'Dark colored vehicles, enthusiasts',
      highlight: true
    },
    {
      name: 'Stage 3 Restoration',
      description: 'Multi-step correction for neglected paint or showroom goals.',
      coverage: [
        'Complete Decontamination',
        'Wet Sanding (Spot Correction)',
        'Heavy Compound Step',
        'Medium Polish Step',
        'Jeweling Polish Step',
        'Removes 95%+ of Defects',
        'Full Detail Included'
      ],
      price: 'Custom Quote',
      ideal: 'Show cars, restoration projects',
      highlight: false
    }
  ];

  return (
    <section id="packages" className="py-24 bg-auto-carbon border-t border-white/5" data-section="PaintCorrectionPackages">
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
            <span className="text-xs font-bold text-white uppercase tracking-widest font-['Exo_2']">Restoration Packages</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Exo_2']">
            CHOOSE YOUR <span className="text-auto-plum-neon">LEVEL</span>
          </h2>
          <p className="text-xl text-auto-silver max-w-3xl mx-auto font-light leading-relaxed font-['Inter']">
            From a quick gloss enhancement to a complete multi-stage restoration. We have a package to suit every vehicle's needs.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`
                group relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2
                ${pkg.highlight 
                  ? 'bg-auto-plum-deep/10 border-auto-plum-neon shadow-[0_0_30px_rgba(157,78,221,0.15)] hover:shadow-[0_0_50px_rgba(157,78,221,0.3)]' 
                  : 'bg-auto-asphalt border-white/5 hover:border-auto-plum-neon/30 hover:shadow-[0_0_30px_rgba(157,78,221,0.1)]'}
              `}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-auto-plum-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-auto-plum-neon text-black text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg font-['Exo_2'] z-20">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2 font-['Exo_2'] uppercase relative z-10 group-hover:text-auto-plum-neon transition-colors duration-300">{pkg.name}</h3>
              <p className="text-sm text-auto-silver mb-6 font-light min-h-[40px] font-['Inter'] relative z-10">{pkg.description}</p>
              
              <div className="mb-6 pb-6 border-b border-white/5 relative z-10">
                <p className="text-xs text-auto-silver uppercase tracking-wider mb-1">Starting At</p>
                <div className="text-3xl font-bold text-white font-['Exo_2'] group-hover:text-auto-plum-mist transition-colors duration-300">{pkg.price}</div>
              </div>

              <div className="space-y-3 mb-8 flex-grow relative z-10">
                {pkg.coverage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-300 ${pkg.highlight ? 'text-auto-plum-neon' : 'text-white/40 group-hover:text-auto-plum-neon'}`} />
                    <span className="text-sm text-white/90 font-['Inter']">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-lg p-3 mb-6 relative z-10 border border-transparent group-hover:border-white/10 transition-colors duration-300">
                <p className="text-[10px] text-auto-silver uppercase tracking-wider mb-1 font-bold">Best For:</p>
                <p className="text-xs text-white font-['Inter']">{pkg.ideal}</p>
              </div>

              <Button 
                onClick={() => onNavigate('contact')}
                variant={pkg.highlight ? 'default' : 'outline'}
                className={`w-full font-bold font-['Exo_2'] tracking-wide relative z-10 transition-all duration-300 ${pkg.highlight ? 'bg-auto-plum-neon text-black hover:bg-white hover:scale-[1.02] shadow-[0_0_20px_rgba(157,78,221,0.4)]' : 'border-white/20 text-white hover:bg-white hover:text-black hover:border-white hover:scale-[1.02]'}`}
              >
                Book Now
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
                 <Shield className="w-6 h-6 text-auto-plum-neon" />
              </div>
              <div>
                 <h4 className="text-xl font-bold text-white font-['Exo_2'] mb-2">Not Sure Which Level You Need?</h4>
                 <p className="text-auto-silver font-light max-w-xl font-['Inter']">
                    Bring your vehicle in for a free paint inspection. We'll measure your clear coat thickness and recommend the safest correction level.
                 </p>
              </div>
           </div>
           <Button onClick={() => onNavigate('contact')} className="shrink-0 bg-white text-black hover:bg-auto-plum-mist px-8 font-bold font-['Exo_2']">
              Schedule Inspection
           </Button>
        </motion.div>
      </div>
    </section>
  );
}
