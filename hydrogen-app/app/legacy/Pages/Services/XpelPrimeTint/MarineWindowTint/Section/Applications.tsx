import React from 'react';

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function Applications() {
  const applications = [
    {
      name: 'Yachts & Cruisers',
      description: 'Full cabin window tinting for luxury vessels.',
      features: ['Pilothouse Windows', 'Salon Windows', 'Stateroom Windows', 'Windshield Tinting']
    },
    {
      name: 'Sport Fishing Boats',
      description: 'Performance tinting for serious anglers.',
      features: ['Tower Windows', 'Helm Windows', 'Cabin Windows', 'T-Top Protection']
    },
    {
      name: 'Pontoon & Deck Boats',
      description: 'UV protection for family entertainment.',
      features: ['Enclosure Windows', 'Bimini Protection', 'Windshield Film', 'Side Windows']
    }
  ];

  return (
    <section className="py-24 bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4">
        <div className="mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
              MARINE <span className="text-primary">APPLICATIONS</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Professional installation for all types of watercraft. We customize our tinting solutions to fit your specific vessel needs.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 border border-border bg-background/50 rounded-2xl h-full backdrop-blur-sm group-hover:border-primary/50 transition-colors">
                <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {app.name}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm uppercase tracking-wider font-semibold">
                  {app.description}
                </p>
                
                <ul className="space-y-4">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckIcon className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
