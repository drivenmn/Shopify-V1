import { SEO } from '../../../../../components/SEO';
import { BookingProvider } from '../../../../../components/features/scheduling/BookingContext';
import { BookingManager } from '../../../../../components/features/scheduling/BookingManager';
import { Hero } from './Section/Hero';
import { AccentFAQ } from './Section/AccentFAQ';
import { CTA } from './Section/CTA';
import { ChromeDeleteExplainer } from './Section/ChromeDeleteExplainer';
import { InteriorOptions } from './Section/InteriorOptions';
import { Options } from './Section/Options';
import { RoofAndHood } from './Section/RoofAndHood';

interface AccentVinylWrapProps {
  onNavigate: (page: string) => void;
}

export function AccentVinylWrap({ onNavigate }: AccentVinylWrapProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Chrome Delete & Accent Wraps",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DrivenMN"
    },
    "description": "Chrome delete, roof wraps, and interior trim wrapping in Minneapolis. Customize your vehicle with premium 3M and Avery vinyl accents.",
    "areaServed": "Minneapolis, MN"
  };

  return (
    <>
      <SEO
        title="Chrome Delete & Accent Wraps Minneapolis | Custom Car Trim | DrivenMN"
        description="Customize your vehicle with chrome delete, roof wraps, and interior trim wrapping in Minneapolis. Premium 3M & Avery vinyl. Expert installation for a sleek, modern look."
        keywords="chrome delete Minneapolis, roof wrap, interior trim wrap, car accent wrap, blackout package, vinyl chrome delete, custom car accents"
        canonicalUrl="https://drivenmn.com/services/vehicle-wraps/accent-vinyl-wrap"
        structuredData={structuredData}
      />
      
      <BookingProvider>
        <div className="min-h-screen bg-auto-asphalt text-white" data-component="AccentWrapsPage">
          <Hero onNavigate={onNavigate} />
          <ChromeDeleteExplainer />
          <Options />
          <RoofAndHood />
          <InteriorOptions />
          <AccentFAQ />
          <CTA onNavigate={onNavigate} />
          <BookingManager />
        </div>
      </BookingProvider>
    </>
  );
}
