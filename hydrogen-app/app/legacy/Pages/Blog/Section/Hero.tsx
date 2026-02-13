import { Home } from 'lucide-react';

interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface HeroProps {
  onNavigate: (page: string) => void;
  breadcrumbSegments?: BreadcrumbSegment[];
}

export function Hero({ onNavigate, breadcrumbSegments }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/90 py-20" data-section="BlogHero">
      {/* Breadcrumb - Lower Left */}
      {breadcrumbSegments && breadcrumbSegments.length > 0 && (
        <div className="absolute bottom-8 left-8 z-20" data-component="HeroBreadcrumb">
          <div className="flex items-center gap-2 text-sm">
            {/* Home */}
            <button
              onClick={() => onNavigate('home')}
              className="text-primary-foreground/70 hover:text-warning transition-colors flex items-center gap-1.5"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            
            {/* Segments */}
            {breadcrumbSegments.map((segment, index) => {
              const isLast = index === breadcrumbSegments.length - 1;
              return (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {isLast ? (
                    <span className="text-white">{segment.label}</span>
                  ) : (
                    <button
                      onClick={() => onNavigate(segment.href!)}
                      className="text-primary-foreground/70 hover:text-warning transition-colors"
                    >
                      {segment.label}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      <div className="max-w-[1200px] mx-auto px-8 text-center" data-component="HeroContent">
        <h1 className="font-['Agdasima'] text-white mb-4 uppercase" style={{ fontSize: '48px', fontWeight: 700 }}>
          Blog & Resources
        </h1>
        <p className="text-white/90 max-w-2xl mx-auto">
          Expert tips, industry news, and guides for vehicle protection and care.
        </p>
      </div>
    </section>
  );
}
