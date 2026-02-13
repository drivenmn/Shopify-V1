import { Hero, Benefits, Process, Packages, CTA } from './Section';

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
