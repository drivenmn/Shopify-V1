import { SEO } from '~/legacy/components/SEO';
import { BookingProvider } from '~/legacy/components/features/scheduling/BookingContext';
import { BookingManager } from '~/legacy/components/features/scheduling/BookingManager';
import { Hero } from './Section/Hero';
import { WhatIsXPEL } from './Section/WhatIsXPEL';
import { Benefits } from './Section/Benefits';
import { Comparison } from './Section/Comparison';
import { Features } from './Section/Features';
import { Process } from './Section/Process';
import { FAQ } from './Section/FAQ';
import { CTA } from './Section/CTA';

interface WindshieldProtectionFilmProps {
  onNavigate: (page: string) => void;
}

/**
 * Windshield Protection Film Service Page
 */
export function WindshieldProtectionFilm({ onNavigate }: WindshieldProtectionFilmProps) {
  // Comprehensive structured data for maximum SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Professional Windshield Protection Film Installation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "DrivenMN"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="XPEL Windshield Protection Film Minneapolis MN | Rock Chip Prevention | DrivenMN"
        description="Professional XPEL windshield protection film installation in Minneapolis, MN. Prevent rock chips & costly windshield replacement."
        keywords="windshield protection film Minneapolis, XPEL windshield film Minnesota, windshield PPF Twin Cities"
        canonicalUrl="https://drivenmn.com/services/windshield-protection-film"
        structuredData={structuredData}
      />
      
      <BookingProvider>
        <div className="min-h-screen bg-auto-asphalt text-white" data-component="WindshieldPPFPageWrapper">
          <Hero onNavigate={onNavigate} />
          <WhatIsXPEL />
          <Benefits />
          <Features />
          <Comparison />
          <Process />
          <FAQ />
          <CTA onNavigate={onNavigate} />
          <BookingManager />
        </div>
      </BookingProvider>
    </>
  );
}
