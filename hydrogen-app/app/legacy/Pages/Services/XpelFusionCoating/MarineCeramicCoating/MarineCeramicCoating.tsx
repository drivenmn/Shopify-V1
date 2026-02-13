import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { Process } from './Section/Process';
import { Applications } from './Section/Applications';
import { CTA } from './Section/CTA';

interface MarineCeramicCoatingProps {
  onNavigate: (page: string) => void;
}

export function MarineCeramicCoating({ onNavigate }: MarineCeramicCoatingProps) {
  return (
    <div className="min-h-screen bg-auto-asphalt text-white" data-component="MarineCeramicCoatingPageWrapper">
      <Hero 
        onNavigate={onNavigate}
        breadcrumbSegments={[
          { label: 'Services', href: 'services' },
          { label: 'Ceramic Coating', href: 'xpel-fusion-ceramic-coating' },
          { label: 'Marine Coating' }
        ]}
      />
      <Benefits />
      <Process />
      <Applications />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
