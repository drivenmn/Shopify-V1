import { motion } from 'motion/react';
import { ArrowRight, Shield, Phone, Calendar, MapPin, Star, Sparkles } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';
import { useBooking } from '~/legacy/components/features/scheduling/BookingContext';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  const { openBooking } = useBooking();

  return (
    <section className="py-32 bg-auto-asphalt relative overflow-hidden" data-section="WindshieldCTA">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-auto-asphalt via-auto-plum-deep/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-auto-plum-neon/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10" data-component="CTAContent">
        <div className="max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-auto-carbon/80 border border-white/10 rounded-[3rem] p-12 md:p-20 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
             {/* Decorative accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-auto-plum-neon to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-auto-plum-deep to-transparent opacity-50" />

            {/* Header */}
            <div className="text-center mb-16 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-neon/10 border border-auto-plum-neon/30 mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-auto-plum-neon" />
                <span className="text-xs font-bold text-auto-plum-neon uppercase tracking-widest font-['Exo_2']">Get Protected</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-['Exo_2'] uppercase tracking-tight leading-none">
                Protect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-auto-plum-mist to-white">Investment</span>
              </h2>
              
              <p className="text-xl text-auto-silver max-w-3xl mx-auto leading-relaxed font-light">
                Don't gamble with rock chips and costly windshield replacements. Get professional XPEL Windshield Protection Film installed by certified technicians.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 relative z-10">
              <Button
                onClick={() => onNavigate('ppf-configurator')}
                className="bg-auto-plum-neon text-black hover:bg-white px-10 h-16 rounded-xl font-bold uppercase tracking-wider text-lg shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Get Instant Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={openBooking}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white px-10 h-16 rounded-xl font-bold uppercase tracking-wider text-lg backdrop-blur-sm"
              >
                <Phone className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-20 relative z-10 border-t border-white/10 pt-16">
              {[
                { value: '2-3', label: 'Hours Install', sublabel: 'Same-day service', icon: Calendar },
                { value: '10+', label: 'Years Protection', sublabel: 'Industry leading', icon: Shield },
                { value: '100%', label: 'Satisfaction', sublabel: 'Certified installation', icon: Star },
                { value: '99%', label: 'Optical Clarity', sublabel: 'Invisible protection', icon: Sparkles }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-4xl font-bold text-white mb-2 font-['Exo_2'] group-hover:text-auto-plum-neon transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-auto-plum-mist uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-auto-silver font-light">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-10 border border-white/5 relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2 font-['Exo_2'] uppercase tracking-wide">Why Choose DrivenMN?</h3>
                <p className="text-auto-silver text-sm">Minnesota's Premier XPEL Certified Facility</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {[
                  { icon: Star, text: 'Certified Experts' },
                  { icon: Shield, text: 'Premium Equipment' },
                  { icon: Calendar, text: 'Fast Turnaround' },
                  { icon: MapPin, text: 'Convenient Location' },
                  { icon: Shield, text: 'Lifetime Support' },
                  { icon: Star, text: '5-Star Reviews' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center gap-3 group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-auto-plum-neon group-hover:bg-auto-plum-neon group-hover:text-black transition-all duration-300">
                        <Icon className="w-5 h-5 text-auto-silver group-hover:text-black transition-colors" />
                      </div>
                      <span className="text-xs font-medium text-white/80 text-center">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
