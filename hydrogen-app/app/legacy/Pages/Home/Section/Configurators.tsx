import { ArrowRight, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '~/legacy/components/figma/ImageWithFallback';

interface ConfiguratorsProps {
  onNavigate: (page: string) => void;
}

export function Configurators({ onNavigate }: ConfiguratorsProps) {
  const configurators = [
    {
      title: 'XPEL Paint Protection',
      subtitle: 'Shield Your Investment',
      description: 'Build your custom PPF package with coverage options for every budget.',
      image: 'https://images.unsplash.com/photo-1657658452796-f400daeba3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      page: 'ppf-configurator',
    },
    {
      title: 'Color Change PPF',
      subtitle: 'Restyle & Protect',
      description: 'Visualize your vehicle in stunning new colors with matte and satin finishes.',
      image: 'https://images.unsplash.com/photo-1760839722821-e55bd0df9785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      page: 'color-ppf-configurator',
    },
    {
      title: 'Window Tint Quote',
      subtitle: 'Privacy & Comfort',
      description: 'Select your vehicle type and tint shade to get an instant quote.',
      image: 'https://images.unsplash.com/photo-1667689495500-338176870de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      page: 'tint-configurator',
    },
    {
      title: 'Tesla Packages',
      subtitle: 'Model 3 / Y / S / X',
      description: 'Exclusive protection bundles designed specifically for Tesla owners.',
      image: 'https://images.unsplash.com/photo-1697825965458-8c6d14141a61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      page: 'tesla-package',
    },
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0529] via-[#050505] to-[#050505] opacity-60" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-auto-plum-deep to-transparent opacity-50" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-auto-plum-deep to-transparent opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-auto-plum-deep/30 bg-auto-plum-deep/10 backdrop-blur-sm mb-6"
          >
            <Settings className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-medium text-auto-plum-mist uppercase tracking-widest">Interactive Studio</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-mist to-auto-plum-neon">Protection Package</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Select a service below to get an instant estimate and book your appointment in Burnsville.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {configurators.map((config, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onNavigate(config.page)}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-auto-plum-deep/50 transition-colors duration-300"
            >
              <ImageWithFallback
                src={config.image}
                alt={config.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-auto-plum-neon text-xs font-bold uppercase tracking-widest mb-2 block">
                    {config.subtitle}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {config.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {config.description}
                  </p>
                  
                  <button className="flex items-center gap-2 text-white font-bold text-sm tracking-wide group-hover:gap-3 transition-all">
                    START BUILD
                    <ArrowRight className="w-4 h-4 text-auto-plum-neon" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
