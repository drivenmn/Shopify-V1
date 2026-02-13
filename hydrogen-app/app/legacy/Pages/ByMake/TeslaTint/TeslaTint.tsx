import { SEO } from '~/legacy/components/SEO';
import { BookingProvider } from '~/legacy/components/features/scheduling/BookingContext';
import { BookingManager } from '~/legacy/components/features/scheduling/BookingManager';
import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { Comparison } from './Section/Comparison';
import { CTA } from './Section/CTA';

interface TeslaTintProps {
  onNavigate: (page: string) => void;
}

export function TeslaTint({ onNavigate }: TeslaTintProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tesla Window Tinting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DrivenMN"
    },
    "description": "Professional Tesla window tinting in Minneapolis. XPEL Prime XR Plus nano-ceramic tint for maximum heat rejection and UV protection.",
    "areaServed": "Minneapolis, MN"
  };

  return (
    <>
      <SEO
        title="Tesla Window Tint Minneapolis | Model 3 Y S X Ceramic Tint | DrivenMN"
        description="Premium Tesla window tinting in Minneapolis. XPEL Prime XR Plus ceramic tint blocks 98% heat. Specialized installation for Model 3 rear glass and full panoramic roofs."
        keywords="Tesla window tint Minneapolis, Model 3 tint, Model Y tint, ceramic tint Tesla, heat rejection tint, XPEL Prime XR Plus"
        canonicalUrl="https://drivenmn.com/tesla/tint"
        structuredData={structuredData}
      />
      
      <BookingProvider>
        <div className="min-h-screen bg-auto-asphalt text-white" data-component="TeslaTintPage">
          <Hero onNavigate={onNavigate} />
          <Benefits />
          <Comparison />
          <CTA onNavigate={onNavigate} />
          <BookingManager />
        </div>
      </BookingProvider>
    </>
  );
}
