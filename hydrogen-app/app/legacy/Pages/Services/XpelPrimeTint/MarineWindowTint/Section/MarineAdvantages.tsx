import React from 'react';

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export function MarineAdvantages({ onNavigate }: { onNavigate: (page: string) => void }) {
  const advantages = [
    'Corrosion-resistant adhesive',
    "Won't peel or bubble in humidity",
    'Tested for marine environments',
    'Long-lasting durability',
    'Easy to clean & maintain',
    'Warranty coverage'
  ];

  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Why Choose XPEL Marine
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              SUPERIOR <span className="text-primary">DURABILITY</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Standard automotive window film fails quickly in marine environments. 
              Our marine-grade XPEL Prime film features specialized adhesives and multi-layer construction 
              specifically designed to survive salt, sun, and sea.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{advantage}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold transition-colors shadow-lg hover:shadow-xl"
            >
              Request Marine Quote
            </button>
          </div>

          <div className="relative">
             {/* Image Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx5YWNodCUyMGludGVyaW9yfGVufDF8fHx8MTc2NTEzNjgwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Yacht Interior Tint"
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Float Card */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl border border-border shadow-2xl z-20 hidden md:block">
              <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Starting At</p>
              <p className="text-primary text-4xl font-bold">$599</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
