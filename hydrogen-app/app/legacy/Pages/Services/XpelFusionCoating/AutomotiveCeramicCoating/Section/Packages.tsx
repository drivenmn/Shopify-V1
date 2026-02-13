import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface PackagesProps {
  onNavigate?: (page: string) => void;
}

export function Packages({ onNavigate }: PackagesProps) {
  const packages = [
    {
      name: 'XPEL Fusion Plus',
      duration: '5 Years',
      price: '$899',
      features: [
        'Single Layer Ceramic Coating',
        '5-Year Warranty',
        'Paint Decontamination',
        'Light Paint Correction',
        'Hydrophobic Top Coat',
        'Professional Application'
      ]
    },
    {
      name: 'XPEL Fusion Plus +',
      duration: '7 Years',
      price: '$1,499',
      features: [
        'Dual Layer Ceramic Coating',
        '7-Year Warranty',
        'Complete Paint Decontamination',
        'Full Paint Correction',
        'Hydrophobic Top Coat',
        'Wheel & Trim Coating',
        'Professional Application'
      ],
      featured: true
    },
    {
      name: 'Full Protection Package',
      duration: '10 Years',
      price: '$2,499',
      features: [
        'Triple Layer Ceramic Coating',
        '10-Year Warranty',
        'Complete Paint Decontamination',
        'Multi-Stage Paint Correction',
        'Hydrophobic Top Coat',
        'Wheel, Trim & Glass Coating',
        'Interior Ceramic Protection',
        'Premium Application'
      ]
    }
  ];

  return (
    <section className="py-20" data-section="CeramicCoatingPackages">
      <div className="max-w-7xl mx-auto px-8" data-component="PackagesContent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-['Agdasima'] text-foreground mb-6">
            Ceramic Coating Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect level of protection for your Tesla investment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8" data-component="PackagesGrid">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card border-2 rounded-2xl p-8 ${
                pkg.featured
                  ? 'border-[#FDB521] shadow-[0_0_30px_rgba(253,181,33,0.3)]'
                  : 'border-border'
              }`}
              data-component="PackageCard"
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FDB521] text-black px-6 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-['Agdasima'] text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-[#017974] mb-4">{pkg.duration} Protection</p>
                <p className="text-5xl font-['Agdasima'] text-[#FDB521]">
                  {pkg.price}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#017974] shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => onNavigate && onNavigate('contact')}
                className={`w-full py-6 rounded-lg ${
                  pkg.featured
                    ? 'bg-[#FDB521] hover:bg-[#FDB521]/90 text-black'
                    : 'bg-[#017974] hover:bg-[#017974]/90 text-white'
                }`}
              >
                Select Package
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
