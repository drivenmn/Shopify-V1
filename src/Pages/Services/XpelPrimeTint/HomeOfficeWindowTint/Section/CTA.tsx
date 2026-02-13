import { GoogleReviews } from '../../../../../../components/GoogleReviews';
import { motion } from 'motion/react';
import { ChevronRight, Phone, MapPin, Clock, Award, ArrowRight } from 'lucide-react';
import { Button } from '../../../../../../components/ui/button';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--auto-asphalt)] via-[var(--auto-carbon)] to-[var(--auto-asphalt)] relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(1, 121, 116, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(1,121,116,0.15) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(253,181,33,0.15) 0%, transparent 70%)' }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Left Column - Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--auto-plum-deep)]/10 border border-[var(--auto-plum-deep)]/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-4 h-4 text-[var(--auto-plum-neon)]" />
                <span className="text-sm font-medium text-[var(--auto-plum-neon)]">Authorized XPEL Dealer</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-exo text-white leading-[1.1]">
                Ready to Upgrade <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--auto-plum-neon)] to-[#FDB521]">
                  Your Space?
                </span>
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Experience the difference of professional XPEL architectural window tinting. Superior heat rejection, 
                enhanced privacy, and energy savings installed by certified experts.
              </p>

              <div className="space-y-4">
                {[
                  'Free On-Site Consultations',
                  'Energy Efficiency Analysis',
                  'Lifetime Residential Warranty',
                  'Professional Installation Team'
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3 text-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--auto-plum-deep)]/20 flex items-center justify-center text-[var(--auto-plum-neon)] shrink-0 border border-[var(--auto-plum-deep)]/30">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group relative overflow-hidden rounded-xl border-0 py-4 px-8 min-w-[200px] text-black shadow-[0_0_20px_rgba(253,181,33,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(253,181,33,0.5)]"
                  style={{ background: '#FDB521' }}
                >
                  <div className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] bg-white/20" />
                  <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-base font-bold uppercase tracking-wider">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
                
                <Button
                  variant="outline"
                  onClick={() => onNavigate('contact')}
                  className="h-auto py-4 px-8 bg-transparent border-white/10 hover:bg-white/5 text-white hover:text-[var(--auto-plum-neon)] hover:border-[var(--auto-plum-neon)]/50 transition-all duration-300 rounded-xl uppercase tracking-wide font-semibold min-w-[160px]"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Info Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[var(--auto-plum-neon)]/30 transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--auto-plum-deep)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[var(--auto-plum-neon)]" />
                      Visit Our Studio
                    </h3>
                    <div className="pl-7 space-y-1 text-gray-300">
                      <p>123 Main Street</p>
                      <p>Minneapolis, MN 55401</p>
                      <p className="text-sm text-[var(--auto-plum-neon)] mt-2 hover:underline cursor-pointer">Get Directions →</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[var(--auto-plum-neon)]" />
                        Contact
                      </h4>
                      <p className="pl-6 text-xl font-bold text-white">(612) 555-0100</p>
                      <p className="pl-6 text-sm text-gray-400">Call or Text Us</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[var(--auto-plum-neon)]" />
                        Hours
                      </h4>
                      <div className="pl-6 text-sm text-gray-300 space-y-1">
                        <p><span className="text-white font-medium">Mon-Fri:</span> 8am - 6pm</p>
                        <p><span className="text-white font-medium">Sat:</span> Appointment Only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: 'Homes Protected', value: '2,500+' },
                   { label: 'Google Reviews', value: '150+' }
                 ].map((stat, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 + (i * 0.1) }}
                     className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center group hover:bg-white/10 transition-colors"
                   >
                     <div className="text-3xl font-bold text-white mb-1 group-hover:text-[var(--auto-plum-neon)] transition-colors">{stat.value}</div>
                     <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                   </motion.div>
                 ))}
              </div>
            </div>
          </div>

          {/* Reviews Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden mb-16"
          >
            <div className="p-8 md:p-12">
              <GoogleReviews />
            </div>
          </motion.div>

          {/* SEO Footer */}
          <div className="text-center border-t border-white/5 pt-12">
            <p className="text-xs text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Professional residential and commercial window tinting services in Minneapolis and Twin Cities. 
              XPEL authorized dealer specializing in architectural window film installation for homes, offices, 
              storefronts, and commercial buildings. Solar control, security film, and decorative privacy film options. 
              Lifetime warranty. Energy saving analysis available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
