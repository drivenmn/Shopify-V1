import React from 'react';

interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface HeroProps {
  onNavigate: (page: string) => void;
  breadcrumbSegments?: BreadcrumbSegment[];
}

// Inline SVGs
const AnchorIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="5" r="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5v9.5a2 2 0 01-2 2h-5v-6h-4v6H5a2 2 0 01-2-2V9.5z" />
  </svg>
);

export function Hero({ onNavigate, breadcrumbSegments }: HeroProps) {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden marine-hero">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(1, 121, 116, 0.2); }
          50% { box-shadow: 0 0 40px rgba(253, 181, 33, 0.4); }
        }
        .marine-hero .animate-fade-in-1 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .marine-hero .animate-fade-in-2 { animation: fadeInUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .marine-hero .animate-fade-in-3 { animation: fadeInUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        .marine-hero .btn-glow { animation: glow 3s infinite; }
      `}</style>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580422666359-7160890d8c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMG9jZWFuJTIwc3Vuc2V0fGVufDF8fHx8MTc2NTEzNjI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Yacht Marine Tint"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Breadcrumbs */}
      <div className="absolute top-24 left-0 w-full px-4 sm:px-8 z-20">
        <div className="container mx-auto">
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <HomeIcon className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <span className="opacity-50">/</span>
                {breadcrumbSegments?.map((segment, index) => (
                  <div key={index} className="contents">
                    {segment.href ? (
                      <button 
                        onClick={() => onNavigate(segment.href!)}
                        className="hover:text-primary transition-colors"
                      >
                        {segment.label}
                      </button>
                    ) : (
                      <span className="text-foreground">{segment.label}</span>
                    )}
                    {index < breadcrumbSegments.length - 1 && <span className="opacity-50">/</span>}
                  </div>
                ))}
             </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-in-1 inline-flex items-center gap-2 mb-6 bg-primary/20 border border-primary/40 backdrop-blur-md rounded-full px-4 py-1.5">
            <AnchorIcon className="w-4 h-4 text-warning" />
            <span className="text-warning text-sm font-semibold tracking-wider uppercase">
              Marine-Grade Protection
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-2 text-white text-6xl md:text-8xl font-bold leading-tight mb-6">
            ELEVATE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary">
              MARINE EXPERIENCE
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in-3 text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Specialized marine window film designed to withstand harsh saltwater environments. 
            Reduce glare, block heat, and protect your vessel's interior from UV damage.
          </p>

          {/* Buttons */}
          <div className="animate-fade-in-3 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-glow flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors"
            >
              Get Marine Quote
              <ArrowRightIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('benefits');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Explore Benefits
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
