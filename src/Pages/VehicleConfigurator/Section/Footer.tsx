import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Info, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle 
} from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-[var(--auto-plum-deep)]/10" data-section="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" data-component="FooterContent">
        {/* Top Section - Why Use Our Configurator */}
        <div className="mb-20 text-center">
          <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold font-exo leading-tight">
            Why Use Our Configurator?
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg text-white/70 leading-relaxed">
            Unlike traditional quote forms that require phone calls and waiting, our configurator gives you instant, accurate pricing with full transparency. No sales pressure, no hidden costs—just honest pricing and expert guidance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Zap, 
                title: 'Instant Results', 
                description: 'Get accurate pricing in real-time as you build your package. No waiting for callbacks or email quotes.',
                color: 'var(--auto-plum-neon)'
              },
              { 
                icon: ShieldCheck, 
                title: 'Verified Pricing', 
                description: 'Our database includes exact measurements for thousands of vehicles. What you see is what you pay.',
                color: 'var(--auto-plum-deep)'
              },
              { 
                icon: TrendingUp, 
                title: 'Compare Options', 
                description: 'Toggle between packages and films to see exactly how different choices affect your total investment.',
                color: 'var(--auto-plum-neon)'
              },
              { 
                icon: Info, 
                title: 'Expert Tips', 
                description: 'Built-in guidance explains each option, helping you make informed decisions without a sales pitch.',
                color: 'var(--auto-plum-deep)'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--auto-plum-neon)]/30 hover:shadow-2xl hover:shadow-[var(--auto-plum-deep)]/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--auto-plum-deep)]/10 via-[var(--auto-plum-neon)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--auto-plum-deep)]/20 group-hover:ring-[var(--auto-plum-neon)]/50">
                      <Icon className="h-6 w-6 transition-colors duration-300" style={{ color: benefit.color }} />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-white group-hover:text-[var(--auto-plum-neon)] transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Middle Section - Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: MapPin, title: 'Location', info: 'Minneapolis, MN', subinfo: 'Serving Twin Cities Metro & Beyond' },
            { icon: Phone, title: 'Contact', info: '(612) 555-0100', subinfo: 'Text or Call for Quick Questions' },
            { icon: Clock, title: 'Hours', info: 'Mon-Sat 8AM-6PM', subinfo: 'Installations by Appointment Only' }
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--auto-plum-neon)]/30 hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--auto-plum-deep)]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-[var(--auto-plum-neon)]/50">
                    <Icon className="h-6 w-6 text-[var(--auto-plum-neon)]" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-bold uppercase tracking-wider text-white/50 group-hover:text-[var(--auto-plum-neon)] transition-colors duration-300">{contact.title}</div>
                    <div className="mb-1 text-lg font-bold text-white">{contact.info}</div>
                    <div className="text-sm text-white/60">{contact.subinfo}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Configurator Tips Section */}
        <div className="mb-16 rounded-2xl border border-[var(--auto-plum-neon)]/20 bg-[var(--auto-plum-neon)]/5 p-8 backdrop-blur-sm">
          <h3 className="text-white mb-8 text-2xl font-bold">
            Configurator Tips & Tricks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <h4 className="text-white mb-2 flex items-center gap-2 text-base font-bold">
                <CheckCircle className="w-5 h-5 text-[var(--auto-plum-neon)]" />
                Save Multiple Configurations
              </h4>
              <p className="text-sm leading-relaxed text-white/70 pl-7">
                Not ready to decide? Add different packages to your cart to compare side-by-side. You can save multiple options and review them later without any commitment.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-2 flex items-center gap-2 text-base font-bold">
                <CheckCircle className="w-5 h-5 text-[var(--auto-plum-neon)]" />
                Live Preview Updates
              </h4>
              <p className="text-sm leading-relaxed text-white/70 pl-7">
                Watch the right panel update in real-time as you select options. The preview shows exactly what you&apos;re getting with full package details and warranty information.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-2 flex items-center gap-2 text-base font-bold">
                <CheckCircle className="w-5 h-5 text-[var(--auto-plum-neon)]" />
                Need Help Choosing?
              </h4>
              <p className="text-sm leading-relaxed text-white/70 pl-7">
                Every film type and package includes detailed descriptions. Click the info icons throughout the configurator for expert recommendations based on your needs.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-2 flex items-center gap-2 text-base font-bold">
                <CheckCircle className="w-5 h-5 text-[var(--auto-plum-neon)]" />
                No Hidden Fees
              </h4>
              <p className="text-sm leading-relaxed text-white/70 pl-7">
                The price you see includes everything: materials, labor, warranty, and aftercare kit. Complex installations may require inspection—we&apos;ll let you know upfront.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--auto-plum-neon)] to-transparent opacity-50" />
      </div>
    </footer>
  );
}
