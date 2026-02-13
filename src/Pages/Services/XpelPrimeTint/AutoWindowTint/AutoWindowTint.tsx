import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { XPELProducts } from './Section/XPELProducts';
import { Comparison } from './Section/Comparison';
import { VLTOptions } from './Section/VLTOptions';
import { TintCareProducts } from './Section/TintCareProducts';
import { VehicleTypes } from './Section/VehicleTypes';
import { FAQ } from './Section/FAQ';
import { CTA } from './Section/CTA';

interface AutoWindowTintProps {
  onNavigate: (page: string) => void;
}

/**
 * Auto Window Tint Service Page
 * 
 * SEO-optimized landing page for automotive window tinting services featuring:
 * - XPEL PRIME CS, HP, XR, and XR PLUS product information
 * - Comprehensive benefits and features
 * - VLT options and legal compliance
 * - FAQ section for common questions
 * - Strong CTAs for conversions
 * 
 * Design: Alternating light/dark sections for visual interest
 * - Dark: Hero, XPELProducts, VLTOptions, CTA
 * - Light: Benefits, Comparison, VehicleTypes, FAQ
 * 
 * Keywords: auto window tint, car window tinting, XPEL ceramic tint, 
 * heat rejection, UV protection, window film installation
 */
export function AutoWindowTint({ onNavigate }: AutoWindowTintProps) {
  return (
    <div className="min-h-screen bg-background" data-component="AutoWindowTintPageWrapper">
      {/* Hero - Dark theme with dramatic opening */}
      <Hero onNavigate={onNavigate} />

      {/* Benefits - Light theme with 8 key benefits */}
      <Benefits />

      {/* XPEL Products - Dark theme with detailed product cards */}
      <XPELProducts onNavigate={onNavigate} />

      {/* Comparison - Light theme with spec comparison table */}
      <Comparison />

      {/* VLT Options - Dark theme with darkness level visualizations */}
      <VLTOptions />

      {/* Tint Care Products - Light theme with shop items */}
      <TintCareProducts onNavigate={onNavigate} />

      {/* Vehicle Types - Light theme with vehicle coverage */}
      <VehicleTypes />

      {/* FAQ - Light theme for easy reading */}
      <FAQ />

      {/* CTA - Dark theme for strong closing conversion */}
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
