import { Hero } from './Section/Hero';
import { CategoryGrid } from './Section/CategoryGrid';
import { CTA } from './Section/CTA';
import { PageBreadcrumb } from '../../../components/PageBreadcrumb'; // Assuming this exists or I need to update import path

interface XpelPrimeTintProps {
  onNavigate: (page: string) => void;
}

export function XpelPrimeTint({ onNavigate }: XpelPrimeTintProps) {
  return (
    <div className="min-h-screen bg-[#050505] pt-20">
      <PageBreadcrumb segments={[{ label: 'Services', href: 'services' }, { label: 'XPEL Prime Window Tint' }]} />
      <Hero 
        title="XPEL Prime Window Tint"
        description="Experience superior heat rejection, UV protection, and privacy with our XPEL Prime window tint technologies."
      />
      <CategoryGrid 
        onNavigate={onNavigate}
        cards={[
          { title: 'Auto Window Tint', description: 'Xpel Professional Car Window Tinting For UV, Heat & Privacy', pageKey: 'auto-window-tint' },
          { title: 'Marine Window Tint', description: 'Xpel Boat & Yacht Window Tint For UV Protection And Glare Reduction', pageKey: 'marine-window-tint' },
          { title: 'Home & Office Window Tint', description: 'Xpel Residential & Commercial Window Film For Energy Efficiency & Privacy', pageKey: 'home-office-window-tint' },
        ]}
      />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
