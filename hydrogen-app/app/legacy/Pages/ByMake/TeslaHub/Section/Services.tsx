import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';
import { teslaServices } from '../data';
import { TeslaPageProps } from '../types';

export function Services({ onNavigate }: TeslaPageProps) {
  return (
    <section className="py-20 bg-background">
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
              Tesla Protection Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Complete protection and enhancement solutions designed specifically for Tesla vehicles
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-8">
            {teslaServices.map((service, index) => {
              const Icon = service.icon;
              const isWarning = service.accentColor === 'warning';
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-card rounded-2xl border-2 border-border hover:border-primary hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Left: Content */}
                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-1">
                            {service.title}
                          </h3>
                          <p className={`font-semibold ${isWarning ? 'text-warning' : 'text-primary'}`}>
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Quick Benefits */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${
                              isWarning 
                                ? 'bg-warning/10 text-warning border border-warning/20' 
                                : 'bg-primary/10 text-primary border border-primary/20'
                            }`}
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        onClick={() => onNavigate(service.page)}
                        className={`group/btn w-full sm:w-auto px-8 py-6 rounded-xl transition-all ${
                          isWarning
                            ? 'bg-warning hover:bg-warning/90'
                            : 'bg-primary hover:bg-primary/90'
                        } text-white`}
                      >
                        {service.page.includes('configurator') ? 'Get Instant Quote' : 'Contact Us'}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    {/* Right: Features */}
                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h4 className="text-lg font-bold mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isWarning ? 'text-warning' : 'text-primary'}`} />
                            <span className="text-muted-foreground text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
