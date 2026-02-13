import React from 'react';

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

interface CTAProps {
  onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Abstract Background Patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-warning rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black rounded-full opacity-20 blur-3xl" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          PROTECT YOUR <br />
          <span className="text-warning">MARINE INVESTMENT</span>
        </h2>
        
        <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10 font-light">
          Don't let the sun degrade your vessel. Get a professional quote for marine-grade tinting today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => onNavigate?.('contact')}
            className="group bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-warning hover:text-black transition-all duration-300 shadow-xl"
          >
            <span className="flex items-center gap-2">
              Get A Quote
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
