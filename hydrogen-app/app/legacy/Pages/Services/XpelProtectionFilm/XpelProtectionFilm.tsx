import { Hero } from './Section/Hero';
import { CategoryGrid } from './Section/CategoryGrid';
import { Features } from './Section/Features';
import { CTA } from './Section/CTA';

interface XpelProtectionFilmProps {
  onNavigate: (page: string) => void;
}

export function XpelProtectionFilm({ onNavigate }: XpelProtectionFilmProps) {
  return (
    <div className="min-h-screen bg-auto-asphalt text-white">
      <Hero onNavigate={onNavigate} />
      <CategoryGrid onNavigate={onNavigate} />
      <Features />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
