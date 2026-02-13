import { SEO } from '~/legacy/components/SEO';
import { BookingProvider } from '~/legacy/components/features/scheduling/BookingContext';
import { BookingManager } from '~/legacy/components/features/scheduling/BookingManager';
import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { Process } from './Section/Process';
import { GraphicFAQ } from './Section/GraphicFAQ';
import { CTA } from './Section/CTA';
import { MaterialTech } from './Section/MaterialTech';
import { StyleShowcase } from './Section/StyleShowcase';

interface GraphicPrintedWrapProps {
  onNavigate: (page: string) => void;
}

export function GraphicPrintedWrap({ onNavigate }: GraphicPrintedWrapProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Graphic Printed Vehicle Wraps",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DrivenMN"
    },
    "description": "Custom graphic vehicle wraps in Minneapolis. Design, print, and installation for racing liveries, commercial branding, and custom art.",
    "areaServed": "Minneapolis, MN"
  };

  return (
    <>
      <SEO
        title="Custom Graphic Wraps Minneapolis | Printed Car Wraps | DrivenMN"
        description="Turn heads with custom printed vehicle wraps in Minneapolis. In-house design, high-res printing, and expert installation. Commercial branding, racing liveries, and unique art."
        keywords="graphic vehicle wraps, custom car wraps Minneapolis, printed vinyl wrap, commercial vehicle graphics, racing livery design, Minneapolis wrap shop"
        canonicalUrl="https://drivenmn.com/services/vehicle-wraps/graphic-printed-wrap"
        structuredData={structuredData}
      />
      
      <BookingProvider>
        <div className="min-h-screen bg-auto-asphalt text-white" data-component="GraphicWrapsPage">
          <Hero onNavigate={onNavigate} />
          <MaterialTech />
          <StyleShowcase />
          <Benefits />
          <Process />
          <GraphicFAQ />
          <CTA onNavigate={onNavigate} />
          <BookingManager />
        </div>
      </BookingProvider>
    </>
  );
}
