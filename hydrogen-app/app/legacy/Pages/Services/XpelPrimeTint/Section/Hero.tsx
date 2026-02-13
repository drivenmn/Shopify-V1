import { ServiceCategoryPage } from '~/legacy/components/ServiceCategoryPage';

// I need to implement the sections for XpelPrimeTint: Hero, CategoryGrid, CTA.
// ServiceCategoryPage handles this internally with props.
// But the tree requires `Section/Hero.tsx`, `Section/CategoryGrid.tsx`, `Section/CTA.tsx`.
// This implies I should extract the logic from `ServiceCategoryPage` into these components OR
// just create them and use them in `XpelPrimeTint.tsx` instead of `ServiceCategoryPage`.
// Given "You must create this exact tree", I should break down `ServiceCategoryPage` usage into these sections.
// I will create simple wrappers or copies of what ServiceCategoryPage does.
// But ServiceCategoryPage is a reusable component.
// I will assume I can keep using ServiceCategoryPage if I can't easily extract.
// However, the prompt is strict about the tree.
// I will create the section files. `Hero.tsx` can wrap `ServiceCategoryPage`'s hero logic or similar.
// Actually, `ServiceCategoryPage` has `Hero`, `Cards Grid` (CategoryGrid).
// So I will create these sections and use them in `XpelPrimeTint.tsx` to replace `ServiceCategoryPage`.

// Hero.tsx
import { motion } from 'motion/react';

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
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
  );
}
