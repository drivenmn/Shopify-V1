import { ServiceCategoryPage } from '~/legacy/components/ServiceCategoryPage';

interface VehicleWrapsProps {
  onNavigate: (page: string) => void;
}

export function VehicleWraps({ onNavigate }: VehicleWrapsProps) {
  return (
    <ServiceCategoryPage
      title="Vehicle Wraps"
      description="Transform your vehicle with custom color changes, printed graphics, and accent wraps."
      onNavigate={onNavigate}
      breadcrumbSegments={[{ label: 'Services', href: 'services' }, { label: 'Vehicle Wraps' }]}
      cards={[
        { title: 'Color Change Vehicle Wrap', description: 'Custom Color Change Car Wraps In Burnsville, MN', pageKey: 'color-change-vehicle-wrap' },
        { title: 'Graphic Printed Wrap', description: "Burnsville's Best Custom Printed Vehicle Wraps – Bold Designs That Get Noticed", pageKey: 'graphic-printed-wrap' },
        { title: 'Fleet Graphic Wrap', description: 'Commercial Fleet Wraps In Burnsville – Boost Brand Visibility On The Road', pageKey: 'fleet-graphic-wrap' },
        { title: 'Accent Vinyl Wrap', description: 'Vinyl Accent Wraps In Burnsville, MN – Roof, Hood, And Mirror Customization Experts', pageKey: 'accent-vinyl-wrap' },
      ]}
    />
  );
}
