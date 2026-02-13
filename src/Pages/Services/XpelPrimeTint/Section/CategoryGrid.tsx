import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Card {
  title: string;
  description: string;
  pageKey: string;
}

interface CategoryGridProps {
  cards: Card[];
  onNavigate: (page: string) => void;
}

export function CategoryGrid({ cards, onNavigate }: CategoryGridProps) {
  return (
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
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
