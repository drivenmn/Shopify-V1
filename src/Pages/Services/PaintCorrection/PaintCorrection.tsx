import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { BeforeAfter } from './Section/BeforeAfter';
import { Process } from './Section/Process';
import { Packages } from './Section/Packages';
import { AddOns } from './Section/AddOns';
import { CTA } from './Section/CTA';

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
          { label: 'Paint Correction & Detail' }
        ]}
      />
      <Benefits />
      <BeforeAfter />
      <Process />
      <Packages onNavigate={onNavigate} />
      <AddOns />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
