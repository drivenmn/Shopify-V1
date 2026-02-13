import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { FAQ } from './Section/FAQ';
import { CTA } from './Section/CTA';
// Additional content sections
import { Applications } from './Section/Applications';
import { MarineAdvantages } from './Section/MarineAdvantages';
import { MarineVLTOptions } from './Section/MarineVLTOptions';
import { XPELMarineProducts } from './Section/XPELMarineProducts';

interface MarineWindowTintProps {
  onNavigate: (page: string) => void;
}

export function MarineWindowTint({ onNavigate }: MarineWindowTintProps) {
  return (
    <div className="bg-background min-h-screen">
      <Hero 
        onNavigate={onNavigate}
        breadcrumbSegments={[
          { label: 'Services', href: 'services' },
          { label: 'Marine Window Tint' }
        ]}
      />
      <Benefits />
      <Applications />
      <MarineAdvantages onNavigate={onNavigate} />
      <XPELMarineProducts onNavigate={onNavigate} />
      <MarineVLTOptions />
      <FAQ />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
