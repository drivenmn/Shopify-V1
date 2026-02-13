import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { Process } from './Section/Process';
import { Packages } from './Section/Packages';
import { CTA } from './Section/CTA';

interface AutomotiveCeramicCoatingProps {
  onNavigate: (page: string) => void;
}

export function AutomotiveCeramicCoating({ onNavigate }: AutomotiveCeramicCoatingProps) {
  return (
    <div className="min-h-screen bg-auto-asphalt text-white" data-component="CeramicCoatingPageWrapper">
      <Hero 
        onNavigate={onNavigate}
        breadcrumbSegments={[
          { label: 'Services', href: 'services' },
          { label: 'Ceramic Coating' }
        ]}
      />
      <Benefits />
      <Process />
      <Packages onNavigate={onNavigate} />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
