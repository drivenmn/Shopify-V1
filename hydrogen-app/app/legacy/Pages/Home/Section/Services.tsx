import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "~/legacy/components/figma/ImageWithFallback";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

interface Service {
  image: string;
  title: string;
  description: string;
  features: string[];
  page: string;
  badge?: string;
}

export function Services({ onNavigate }: ServicesProps) {
  const services: Service[] = [
    {
      image: 'https://images.unsplash.com/photo-1657658452796-f400daeba3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Paint Protection Film',
      description: 'The ultimate shield for your vehicle. Self-healing XPEL Ultimate Plus & Stealth PPF protects against rock chips, scratches, and road debris.',
      features: ['Self-Healing Technology', '10-Year Warranty', 'Invisible Protection', 'XPEL Certified Installers'],
      page: 'ppf-configurator',
      badge: 'Best Seller'
    },
    {
      image: 'https://images.unsplash.com/photo-1667689495500-338176870de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Ceramic Window Tint',
      description: 'Experience superior heat rejection and UV protection with XPEL PRIME ceramic window film. Enhance privacy and comfort in Burnsville, MN.',
      features: ['99% UV Rejection', 'Infrared Heat Block', 'Lifetime Warranty', 'Glare Reduction'],
      page: 'tint-configurator',
      badge: 'Summer Essential'
    },
    {
      image: 'https://images.unsplash.com/photo-1763076247891-f20b35fcfc9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Ceramic Coating',
      description: 'Lock in that showroom shine. Our hydrophobic nano-ceramic coatings make cleaning effortless and protect paint from environmental damage.',
      features: ['Extreme Gloss', 'Hydrophobic Finish', 'Chemical Resistance', 'Easy Maintenance'],
      page: 'ceramic-coating'
    },
    {
      image: 'https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Paint Correction',
      description: 'Restore your paint to perfection. We remove swirls, scratches, and oxidation to reveal a mirror-like finish before protection.',
      features: ['Swirl Removal', 'Defect Correction', 'Gloss Enhancement', 'Surface Preparation'],
      page: 'paint-correction'
    },
    {
      image: 'https://images.unsplash.com/photo-1558958806-4c25af35d413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Vinyl Wraps',
      description: 'Transform your vehicle\'s look completely. Custom color change wraps and chrome deletes for a unique aesthetic.',
      features: ['Custom Colors', 'Satin & Matte Finishes', 'Chrome Delete', 'Removable'],
      page: 'vinyl-wraps'
    },
    {
      image: 'https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Premium Detailing',
      description: 'Comprehensive interior and exterior detailing packages to maintain your vehicle\'s value and aesthetics.',
      features: ['Deep Interior Clean', 'Leather Conditioning', 'Engine Bay Detail', 'Maintenance Wash'],
      page: 'detailing'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-auto-plum-deep/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-auto-plum-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-auto-plum-mist font-medium tracking-[0.2em] text-sm uppercase mb-3">
              Our Expertise
            </h2>
            <h3 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
              Automotive Perfection <span className="text-auto-plum-neon">Redefined</span>
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              We specialize in protecting and enhancing the world's finest vehicles. 
              From Burnsville to Minneapolis, DrivenMN is your trusted partner for premium automotive care.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onNavigate(service.page)}
              className="group cursor-pointer rounded-2xl bg-[#111] border border-white/5 hover:border-auto-plum-deep/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-auto-plum-deep/10"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={`${service.title} - DrivenMN Burnsville`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
                
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-auto-plum-deep/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-white/10">
                    {service.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 relative -mt-12">
                <h4 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-auto-plum-mist transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 border-b border-white/5 pb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-auto-plum-neon shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-white font-bold text-sm tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 ml-2 text-auto-plum-neon" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
