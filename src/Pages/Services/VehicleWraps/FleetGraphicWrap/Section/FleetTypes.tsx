import { motion } from 'motion/react';
import { Truck, Car, Package } from 'lucide-react';

const types = [
  {
    title: 'Cargo Vans',
    subtitle: 'Sprinter, Transit, Promaster',
    description: 'The ultimate mobile billboard. Huge flat sides perfect for large logos, service lists, and high-impact imagery.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?auto=format&fit=crop&q=80'
  },
  {
    title: 'Box Trucks',
    subtitle: '10ft - 26ft Trucks',
    description: 'Maximizing visibility on the highway. We handle large format installations that turn delivery routes into marketing campaigns.',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80' // Using a generic truck image if available or placeholder
  },
  {
    title: 'Company Cars',
    subtitle: 'Sedans, SUVs, Pickups',
    description: 'Uniform branding for sales teams and technicians. Partial wraps or simple decals can be effective here too.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80'
  }
];

export function FleetTypes() {
  return (
    <section className="py-24 bg-auto-asphalt relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Exo_2'] uppercase">
            Vehicles We <span className="text-auto-plum-neon">Wrap</span>
          </h2>
          <p className="text-auto-silver max-w-2xl mx-auto">
            Our facility is equipped with large bays to accommodate vehicles of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type, idx) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-auto-carbon rounded-2xl overflow-hidden border border-white/5 hover:border-auto-plum-neon/30 transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-auto-carbon to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-auto-plum-neon/90 text-black p-2 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-1 font-['Exo_2']">{type.title}</h3>
                  <div className="text-sm text-auto-plum-mist font-bold uppercase tracking-wider mb-4">{type.subtitle}</div>
                  <p className="text-auto-silver leading-relaxed text-sm">
                    {type.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
