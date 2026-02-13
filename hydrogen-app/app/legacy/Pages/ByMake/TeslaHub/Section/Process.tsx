import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';
import { processSteps } from '../data';
import { TeslaPageProps } from '../types';

export function Process({ onNavigate }: TeslaPageProps) {
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
              Simple 4-Step Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From quote to completion—protecting your Tesla has never been easier
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector Line (Desktop only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
                  )}

                  <div className="bg-card rounded-xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Step Number */}
                    <div className="text-primary/20 mb-4 text-5xl font-extrabold leading-none">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 flex-grow text-sm">
                      {step.description}
                    </p>

                    {/* Action Button */}
                    {step.action && step.page && (
                      <Button
                        onClick={() => onNavigate(step.page!)}
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
                      >
                        {step.action}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 text-center"
          >
            <p className="font-semibold text-foreground">
              ⚡ Most Tesla installations completed in <span className="text-primary">1-3 business days</span> depending on services selected
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
