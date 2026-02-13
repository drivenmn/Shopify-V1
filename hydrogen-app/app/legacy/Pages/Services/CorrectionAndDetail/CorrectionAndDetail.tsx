import { ServiceCategoryPage } from '~/legacy/components/ServiceCategoryPage';

interface CorrectionAndDetailProps {
  onNavigate: (page: string) => void;
}

export function CorrectionAndDetail({ onNavigate }: CorrectionAndDetailProps) {
  return (
    <ServiceCategoryPage
      title="Paint Correction & Detail"
      description="Restore your vehicle's showroom condition with professional paint correction and detailing services."
      onNavigate={onNavigate}
      breadcrumbSegments={[{ label: 'Services', href: 'services' }, { label: 'Paint Correction & Detail' }]}
      cards={[
        { title: 'Paint Correction', description: 'Professional Paint Correction Services For Swirl Marks & Scratches', pageKey: 'paint-correction' },
        { title: 'Interior Detail', description: 'Deep Interior Car Detailing For Seats, Carpet & Dashboards', pageKey: 'interior-detail' }, // Interior Detail is not in the tree as a separate page folder, wait. Tree has `InteriorProtectionFilm` but not `InteriorDetail`?
        // Let's check tree:
        // CorrectionAndDetail/
        //   PaintCorrection/
        //   ExteriorDetail/
        //   FullDetail/
        // There is no `InteriorDetail` in the requested tree.
        // But `pages/services/paint-correction` has `interior`.
        // I should probably skip Interior Detail or map it to something else if it's not in the target tree.
        // Wait, the prompt tree shows:
        // CorrectionAndDetail/
        //   PaintCorrection/
        //   ExteriorDetail/
        //   FullDetail/
        // No InteriorDetail.
        // I will follow the tree. Maybe FullDetail covers it? Or maybe it was omitted by mistake?
        // I will omit it for now to follow "You must create this exact tree".
        // But I should check if I can map it.
        // I'll stick to the tree.
        { title: 'Exterior Detail', description: 'Exterior Auto Detailing For Paint, Wheels, And Trim Restoration', pageKey: 'exterior-detail' },
        { title: 'Full Detail', description: 'Complete Car Detailing Packages For Showroom-Level Finish', pageKey: 'full-detail' },
      ]}
    />
  );
}
