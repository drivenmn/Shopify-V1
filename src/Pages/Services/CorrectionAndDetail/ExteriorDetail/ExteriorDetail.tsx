import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { Process } from './Section/Process';
import { Packages } from './Section/Packages';
import { CTA } from './Section/CTA';

interface ExteriorDetailProps {
  onNavigate: (page: string) => void;
}

export function ExteriorDetail({ onNavigate }: ExteriorDetailProps) {
  return (
    <div className="min-h-screen bg-auto-asphalt text-white" data-component="ExteriorDetailPageWrapper">
      <Hero 
        onNavigate={onNavigate}
        breadcrumbSegments={[
          { label: 'Services', href: 'services' },
          { label: 'Detailing', href: 'paint-correction-detail' },
          { label: 'Exterior Detail' }
        ]}
      />
      <Benefits />
      <Process />
      <Packages onNavigate={onNavigate} />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
