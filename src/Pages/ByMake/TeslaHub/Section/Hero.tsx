import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

interface TeslaPageProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: TeslaPageProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-warning/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.03) 35px, rgba(0,0,0,.03) 70px)`
          }} 
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary tracking-wide text-sm font-semibold">
                TESLA SPECIALIST
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6">
              <span className="flex items-center justify-center gap-3 mb-2">
                <Shield className="w-12 h-12 text-primary" />
                <span>Tesla</span>
              </span>
            </h1>

            <h2 className="text-muted-foreground mb-8">
              Premium Protection & Enhancement Services
            </h2>

            <p className="text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-lg">
              Specialized XPEL protection and enhancement services designed specifically for Tesla vehicles.
              From paint protection to window tinting, ceramic coatings, and custom wraps—we ensure your Tesla
              receives the premium care it deserves with industry-leading products and certified installation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="text-primary mb-2 text-3xl font-bold">500+</div>
                <div className="text-muted-foreground text-sm">Teslas Protected</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="text-primary mb-2 text-3xl font-bold">10-Year</div>
                <div className="text-muted-foreground text-sm">Warranty</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="text-primary mb-2 text-3xl font-bold">XPEL</div>
                <div className="text-muted-foreground text-sm">Certified</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="text-primary mb-2 text-3xl font-bold">5★</div>
                <div className="text-muted-foreground text-sm">Rated Service</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
