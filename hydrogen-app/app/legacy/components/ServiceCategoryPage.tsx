import { ArrowRight, Shield, CheckCircle2, Droplets, Sun, Layers, Gem, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PageBreadcrumb } from './PageBreadcrumb';

interface ServiceCard {
  title: string;
  description: string;
  pageKey: string; // The page key to navigate to
  image?: string; // Optional image
}

interface ServiceCategoryPageProps {
  title: string;
  description: string;
  cards: ServiceCard[];
  onNavigate: (page: string) => void;
  breadcrumbSegments: { label: string; href?: string }[];
}

export function ServiceCategoryPage({ 
  title, 
  description, 
  cards, 
  onNavigate,
  breadcrumbSegments
}: ServiceCategoryPageProps) {
  return (
    <div className="min-h-screen bg-[#050505] pt-20">
      <PageBreadcrumb segments={breadcrumbSegments} />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-[#050505] z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-['Agdasima'] text-warning text-6xl md:text-7xl font-bold mb-6 uppercase tracking-tight"
            >
              {title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="font-['Agdasima'] text-3xl font-bold text-white mb-3 group-hover:text-warning transition-colors">
                      {card.title}
                    </h3>
                    <div className="w-12 h-1 bg-primary rounded-full group-hover:w-20 transition-all duration-300" />
                  </div>
                  
                  <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                    {card.description}
                  </p>
                  
                  <button
                    onClick={() => onNavigate(card.pageKey)}
                    className="inline-flex items-center gap-2 text-warning font-semibold uppercase tracking-wider text-sm hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}