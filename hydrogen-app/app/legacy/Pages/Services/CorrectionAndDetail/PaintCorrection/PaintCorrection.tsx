import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { Process } from './Section/Process';
import { Packages } from './Section/Packages';
import { CTA } from './Section/CTA';
import { BeforeAfter } from './Section/BeforeAfter';
import { AddOns } from './Section/AddOns';

interface PaintCorrectionProps {
  onNavigate: (page: string) => void;
}

export function PaintCorrection({ onNavigate }: PaintCorrectionProps) {
  return (
    <div className="min-h-screen bg-auto-asphalt text-white" data-component="PaintCorrectionPageWrapper">
      <Hero 
        onNavigate={onNavigate}
        breadcrumbSegments={[
          { label: 'Services', href: 'services' },
          { label: 'Detailing', href: 'paint-correction-detail' },
          { label: 'Paint Correction' }
        ]}
      />
      <BeforeAfter />
      <Benefits />
      <Process />
      <Packages onNavigate={onNavigate} />
      <AddOns />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
