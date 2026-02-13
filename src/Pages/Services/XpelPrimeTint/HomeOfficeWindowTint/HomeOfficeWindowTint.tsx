import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { FAQ } from './Section/FAQ';
import { CTA } from './Section/CTA';
// Additional content sections
import { FilmTypes } from './Section/FilmTypes';
import { ResidentialApplications } from './Section/ResidentialApplications';
import { CommercialApplications } from './Section/CommercialApplications';

interface HomeOfficeWindowTintProps {
  onNavigate: (page: string) => void;
}

/**
 * Residential & Commercial Tint Service Page
 * 
 * SEO-optimized landing page for architectural window tinting services featuring:
 * - XPEL Vision, Security, and Decorative film information
 * - Comprehensive benefits (Energy savings, UV protection)
 * - Detailed residential and commercial application use cases
 * - FAQ section for common questions
 * - Strong CTAs for estimates
 * 
 * Design: Alternating light/dark sections for visual interest
 * - Dark: Hero, FilmTypes, CTA
 * - Light: Benefits, Applications, FAQ
 */
export function HomeOfficeWindowTint({ onNavigate }: HomeOfficeWindowTintProps) {
  return (
    <div className="min-h-screen bg-background" data-component="ResidentialCommercialTintPageWrapper">
      {/* Hero - Dark theme with dramatic opening */}
      <Hero 
        onNavigate={onNavigate}
        breadcrumbSegments={[
          { label: 'Services', href: 'services' },
          { label: 'Home & Office Window Tint' }
        ]}
      />

      {/* Benefits - Light theme with 8 key benefits */}
      <Benefits />

      {/* Film Types (Products) - Dark theme with detailed product cards (Grid Layout) */}
      <FilmTypes onNavigate={onNavigate} />

      {/* Residential Applications - Light theme with use cases */}
      <ResidentialApplications />

      {/* Commercial Applications - Light theme with use cases */}
      <CommercialApplications />

      {/* FAQ - Light theme for easy reading */}
      <FAQ />

      {/* CTA - Dark theme for strong closing conversion */}
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
