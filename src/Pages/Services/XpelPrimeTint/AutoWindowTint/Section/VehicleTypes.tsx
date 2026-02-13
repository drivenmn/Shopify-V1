import { motion } from 'motion/react';
import { Car, Truck, Zap, Bus } from 'lucide-react';

export function VehicleTypes() {
  const vehicleTypes = [
    { 
      name: 'Sedans', 
      description: 'Compact to full-size sedans', 
      image: 'https://images.unsplash.com/photo-1764605206511-7a649d9df63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjQ5NjE4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    { 
      name: 'SUVs', 
      description: 'Crossovers and full-size SUVs', 
      image: 'https://images.unsplash.com/photo-1758411897897-970d1cacccaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBTVVYlMjBjcm9zc292ZXJ8ZW58MXx8fHwxNzY1MDM2ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    { 
      name: 'Trucks', 
      description: 'Light-duty and heavy-duty trucks', 
      image: 'https://images.unsplash.com/photo-1700619402419-190a01c22047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNrdXAlMjB0cnVjayUyMHZlaGljbGV8ZW58MXx8fHwxNzY0OTUwNzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    { 
      name: 'Luxury', 
      description: 'Premium and exotic vehicles', 
      image: 'https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY0OTMxNDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    { 
      name: 'Electric', 
      description: 'Tesla, Rivian, and EVs', 
      image: 'https://images.unsplash.com/photo-1698653223273-2201a1904713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjB0ZXNsYXxlbnwxfHx8fDE3NjUwMzY4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    { 
      name: 'Vans', 
      description: 'Minivans and cargo vans', 
      image: 'https://images.unsplash.com/photo-1744287970928-b12cd6429439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pdmFuJTIwZmFtaWx5JTIwdmFufGVufDF8fHx8MTc2NTAzNjgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" data-section="VehicleTypes">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255,214,0,0.2) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10" data-component="VehicleTypesContent">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Car className="w-4 h-4 text-warning" />
            <span className="text-sm text-warning">All Vehicle Types</span>
          </motion.div>
          <h2 className="mb-6 text-foreground">
            We Tint All Vehicle Types
            <span className="block text-primary mt-2">Expert Installation for Every Make & Model</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional window tinting services for sedans, SUVs, trucks, luxury vehicles, electric cars, and more. 
            Every installation backed by XPEL&apos;s lifetime warranty.
          </p>
        </motion.div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-component="VehicleGrid">
          {vehicleTypes.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
              data-component="VehicleCard"
            >
              <motion.div 
                className="h-full rounded-2xl bg-card border-2 border-border shadow-sm overflow-hidden relative"
                whileHover={{ 
                  y: -8,
                  borderColor: 'var(--auto-warning)',
                  boxShadow: '0 20px 40px rgba(255,214,0,0.2)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Vehicle Photo Background */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <motion.img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  {/* Content */}
                  <motion.h3 
                    className="mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] transition-colors"
                    whileHover={{ color: 'var(--auto-warning)' }}
                  >
                    {vehicle.name}
                  </motion.h3>
                  <p className="text-sm text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {vehicle.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div 
                    className="mt-4 flex items-center gap-2 text-sm text-warning drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Professional tinting available</span>
                    <span>→</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Popular Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20"
        >
          <h3 className="mb-4 text-foreground text-center">Popular Brands We Service</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {[
              'Tesla', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus', 'Porsche',
              'Rivian', 'Ford', 'Chevrolet', 'Toyota', 'Honda', 'Nissan',
              'Ram', 'GMC', 'Jeep', 'Volkswagen', 'Mazda', 'Subaru'
            ].map((brand, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1.5 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
