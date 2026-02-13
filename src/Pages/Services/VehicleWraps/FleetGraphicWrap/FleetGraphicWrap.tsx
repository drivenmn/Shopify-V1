import { SEO } from '../../../../../components/SEO';
import { BookingProvider } from '../../../../../components/features/scheduling/BookingContext';
import { BookingManager } from '../../../../../components/features/scheduling/BookingManager';
import { Hero } from './Section/Hero';
import { FleetTypes } from './Section/FleetTypes';
import { BusinessBenefits } from './Section/BusinessBenefits';
import { FleetProcess } from './Section/FleetProcess';
import { ROIBreakdown } from './Section/ROIBreakdown';
import { FleetFAQ } from './Section/FleetFAQ';
import { CTA } from './Section/CTA';

interface FleetGraphicWrapProps {
  onNavigate: (page: string) => void;
}

export function FleetGraphicWrap({ onNavigate }: FleetGraphicWrapProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Fleet Graphics",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DrivenMN"
    },
    "description": "Commercial fleet vehicle wraps and graphics in Minneapolis. Branding for vans, trucks, and company cars with volume discounts.",
    "areaServed": "Minneapolis, MN"
  };

  return (
    <>
      <SEO
        title="Fleet Vehicle Wraps Minneapolis | Commercial Truck Graphics | DrivenMN"
        description="Maximize your brand visibility with professional fleet wraps in Minneapolis. Cargo vans, box trucks, and company cars. Durable 3M vinyl, volume discounts, and expert installation."
        keywords="fleet wraps Minneapolis, commercial vehicle graphics, van wraps, truck lettering, company car branding, fleet graphics installation Minnesota"
        canonicalUrl="https://drivenmn.com/services/vehicle-wraps/fleet-graphic-wrap"
        structuredData={structuredData}
      />
      
      <BookingProvider>
        <div className="min-h-screen bg-auto-asphalt text-white" data-component="FleetWrapsPage">
          <Hero onNavigate={onNavigate} />
          <FleetTypes />
          <BusinessBenefits />
          <FleetProcess />
          <ROIBreakdown />
          <FleetFAQ />
          <CTA onNavigate={onNavigate} />
          <BookingManager />
        </div>
      </BookingProvider>
    </>
  );
}
