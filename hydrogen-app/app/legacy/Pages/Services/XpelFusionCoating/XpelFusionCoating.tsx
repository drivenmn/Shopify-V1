import { ServiceCategoryPage } from '~/legacy/components/ServiceCategoryPage';

interface XpelFusionCoatingProps {
  onNavigate: (page: string) => void;
}

export function XpelFusionCoating({ onNavigate }: XpelFusionCoatingProps) {
  return (
    <ServiceCategoryPage
      title="XPEL Fusion Ceramic Coating"
      description="Hydrophobic protection that seals your paint, enhances gloss, and makes maintenance a breeze."
      onNavigate={onNavigate}
      breadcrumbSegments={[{ label: 'Services', href: 'services' }, { label: 'XPEL Fusion Ceramic Coating' }]}
      cards={[
        { title: 'Automotive Ceramic Coating', description: 'Xpel Professional Car Ceramic Coating For Paint Protection & Gloss', pageKey: 'automotive-ceramic-coating' },
        { title: 'Marine Ceramic Coating', description: 'Boat Ceramic Coating For UV, Salt, And Water Resistance', pageKey: 'marine-ceramic-coating' },
      ]}
    />
  );
}
