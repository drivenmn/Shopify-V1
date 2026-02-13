import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { Process } from './Section/Process';
import { Packages } from './Section/Packages';
import { CTA } from './Section/CTA';

interface FullDetailProps {
  onNavigate: (page: string) => void;
}

export function FullDetail({ onNavigate }: FullDetailProps) {
  return (
    <div className="min-h-screen bg-auto-asphalt text-white" data-component="FullDetailPageWrapper">
      <Hero 
        onNavigate={onNavigate}
        breadcrumbSegments={[
          { label: 'Services', href: 'services' },
          { label: 'Detailing', href: 'paint-correction-detail' },
          { label: 'Full Detail' }
        ]}
      />
      <Benefits />
      <Process />
      <Packages onNavigate={onNavigate} />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
