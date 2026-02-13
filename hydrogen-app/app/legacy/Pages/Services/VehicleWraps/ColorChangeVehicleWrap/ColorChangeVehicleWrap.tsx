import { SEO } from '~/legacy/components/SEO';
import { BookingProvider } from '~/legacy/components/features/scheduling/BookingContext';
import { BookingManager } from '~/legacy/components/features/scheduling/BookingManager';
import { Hero } from './Section/Hero';
import { FinishTypes } from './Section/FinishTypes';
import { Benefits } from './Section/Benefits';
import { CoverageLevels } from './Section/CoverageLevels';
import { BrandSpotlight } from './Section/BrandSpotlight';
import { FAQ } from './Section/FAQ';
import { CTA } from './Section/CTA';

interface ColorChangeVehicleWrapProps {
  onNavigate: (page: string) => void;
}

export function ColorChangeVehicleWrap({ onNavigate }: ColorChangeVehicleWrapProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Color Change Vehicle Wraps",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DrivenMN"
    },
    "description": "Premium color change vehicle wraps in Minneapolis. Matte, satin, gloss, and color-shift finishes from 3M and Avery Dennison.",
    "areaServed": "Minneapolis, MN"
  };

  return (
    <>
      <SEO
        title="Color Change Vehicle Wraps Minneapolis | Custom Car Wraps | DrivenMN"
        description="Transform your vehicle with premium color change wraps in Minneapolis. Matte, satin, gloss, & chrome finishes. 3M & Avery Dennison certified installers. Protect your paint & change your look."
        keywords="vehicle wraps Minneapolis, car wrap color change, matte black car wrap, 3M vehicle wrap, Avery Dennison installer, vinyl car wrap Minnesota, custom car wraps Twin Cities"
        canonicalUrl="https://drivenmn.com/services/vehicle-wraps/color-change-vehicle-wrap"
        structuredData={structuredData}
      />
      
      <BookingProvider>
        <div className="min-h-screen bg-auto-asphalt text-white" data-component="ColorChangePage">
          <Hero onNavigate={onNavigate} />
          <FinishTypes />
          <Benefits />
          <CoverageLevels />
          <BrandSpotlight />
          <FAQ />
          <CTA onNavigate={onNavigate} />
          <BookingManager />
        </div>
      </BookingProvider>
    </>
  );
}
