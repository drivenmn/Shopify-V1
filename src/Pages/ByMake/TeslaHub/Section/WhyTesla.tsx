import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { teslaReasons } from '../data';

export function WhyTesla() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">
              Why Tesla Owners Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Specialized expertise and premium products designed specifically for Tesla vehicles
            </p>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teslaReasons.map((reason, index) => {
              const Icon = reason.icon;
              
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 text-center text-white"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8" />
              <h3 className="text-2xl font-bold text-white">
                Minnesota's Premier Tesla Protection Specialist
              </h3>
            </div>
            <p className="text-white/90 max-w-3xl mx-auto">
              Trusted by Tesla owners across Minneapolis, St. Paul, and the Twin Cities metro for premium XPEL protection,
              ceramic tint, and professional detailing services. Every installation backed by industry-leading warranties.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
