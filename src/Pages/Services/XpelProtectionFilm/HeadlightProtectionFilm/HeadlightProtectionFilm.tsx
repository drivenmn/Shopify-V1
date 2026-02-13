import { SEO } from '../../../../../components/SEO';
import { Hero } from './Section/Hero';
import { Benefits } from './Section/Benefits';
import { CTA } from './Section/CTA'; // Options is not in the tree for HeadlightProtectionFilm, but was in source.
// The tree says: Hero, Benefits, CTA.
// Source has: Hero, Benefits, Options, CTA.
// "Sections must match the tags shown in the PDF". Since I can't see the PDF, I follow the prompt's tree.
// Prompt tree: Hero, Benefits, CTA.
// I will omit Options to strictly follow the tree, BUT R-02 says "Preserve content".
// Maybe I should merge Options into Benefits or CTA?
// Or maybe I should just add it because losing content is bad.
// The prompt says "REQUIRED CANONICAL FILE TREE (THE DELIVERABLE)". "You must create this exact tree".
// This implies I should NOT create files not in the tree.
// However, the prompt also says "Sections must match the tags shown in the PDF".
// If Options is content, I should probably keep it.
// I will verify if I can add it. The tree is "The Deliverable".
// I'll stick to the tree. If content is missing, I might merge it into another section if logical.
// Options in Headlight usually refers to Tint shades (Clear, Smoke).
// Maybe it fits in Benefits or I can just append it to Benefits file?
// Or maybe I should assume the tree is illustrative? "The section filenames above are structure placeholders... If a page has more sections, create more section files".
// Ah! "If a page has more sections, create more section files using the same XSection.tsx pattern."
// AND "The section filenames above are structure placeholders, not design directives."
// THIS IS KEY. The tree example in prompt section 2.1 said "NOTE: The section filenames above are structure placeholders".
// BUT section 3 says "REQUIRED CANONICAL FILE TREE (THE DELIVERABLE)... You must create this exact tree".
// This is contradictory.
// Section 3 seems more specific to this task.
// Section 3 lists specific files like `VLTOptions` for Tint.
// For Headlight, it lists `Hero`, `Benefits`, `CTA`.
// I will follow the explicit tree in Section 3 as "THE DELIVERABLE".
// I will try to merge content if I can, or just drop it if it's redundant.
// Actually, looking at `Options.tsx` in source (from file list), it likely contains the tint options.
// I will double check `Options.tsx`.

// Wait, I see `Options.tsx` in the source file list.
// I will read it.

import { Options } from './Section/Options';

interface HeadlightProtectionFilmProps {
  onNavigate: (page: string) => void;
}

export function HeadlightProtectionFilm({ onNavigate }: HeadlightProtectionFilmProps) {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "XPEL Headlight Protection Film Installation",
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
        title="XPEL Headlight Protection Film Minneapolis | Prevent Yellowing - DrivenMN"
        description="Professional XPEL headlight protection film installation in Minneapolis, MN. Protect lenses from yellowing, pitting, and scratches with crystal-clear PPF. Self-healing technology, 100% optical clarity, and expert installation at Minnesota's premier XPEL certified facility. Maintain optimal light output and prevent expensive lens replacements."
        keywords="XPEL headlight protection Minneapolis, headlight PPF Minnesota, prevent headlight yellowing Minneapolis, headlight film Twin Cities, clear headlight protection Minnesota, headlight lens protection Minneapolis, self-healing headlight film Minnesota, automotive headlight protection Twin Cities, car headlight PPF Minneapolis, DrivenMN headlight protection"
        canonicalUrl="https://drivenmn.com/services/headlight-protection-film"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-auto-asphalt" data-component="HeadlightProtectionPageWrapper">
        <Hero onNavigate={onNavigate} />
        <Benefits />
        <Options />
        <CTA onNavigate={onNavigate} />
      </div>
    </>
  );
}
