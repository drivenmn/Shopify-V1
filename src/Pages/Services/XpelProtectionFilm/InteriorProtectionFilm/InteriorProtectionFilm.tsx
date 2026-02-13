import { SEO } from '../../../../../components/SEO';
import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { CoverageAreas } from './Section/CoverageAreas'; // Not in tree, but source has it.
// Tree: Hero, Benefits, CTA.
// Source: Hero, Benefits, CoverageAreas, CTA.
// I will keep CoverageAreas or rename it to something else? No, keeping it is safer.
// I'll add it to Section folder.
import { CTA } from './Section/CTA';

interface InteriorProtectionFilmProps {
  onNavigate: (page: string) => void;
}

export function InteriorProtectionFilm({ onNavigate }: InteriorProtectionFilmProps) {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "XPEL Interior Protection Film Installation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "DrivenMN",
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="XPEL Interior Protection Film Minneapolis | Protect Trim & Surfaces - DrivenMN"
        description="Professional XPEL interior protection film installation in Minneapolis, MN. Protect door sills, trim, center consoles, steering wheels, and touchscreens with invisible self-healing PPF. Prevent scratches and wear in high-traffic areas. Expert installation at Minnesota's premier XPEL certified facility preserves your cabin's luxury appearance."
        keywords="XPEL interior protection Minneapolis, interior PPF Minnesota, door sill protection Minneapolis, trim protection film Twin Cities, center console PPF Minnesota, touchscreen protection Minneapolis, interior film Minnesota, car interior protection Twin Cities, self-healing interior film Minneapolis, carbon fiber protection Minnesota, DrivenMN interior PPF"
        canonicalUrl="https://drivenmn.com/services/interior-protection-film"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-auto-asphalt" data-component="InteriorProtectionPageWrapper">
        <Hero onNavigate={onNavigate} />
        <Benefits />
        <CoverageAreas />
        <CTA onNavigate={onNavigate} />
      </div>
    </>
  );
}
