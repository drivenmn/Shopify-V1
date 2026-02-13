import React from 'react';

const SunIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const DropletIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ThermometerIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 4v10.54a4 4 0 11-4 0V4a2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 14l-4-4" />
  </svg>
);

export function Benefits() {
  const benefits = [
    {
      title: "Heat Rejection",
      description: "Keep your cabin cool and comfortable. Our advanced ceramic films block up to 98% of infrared heat, reducing reliance on AC.",
      icon: ThermometerIcon,
    },
    {
      title: "Saltwater Resistant",
      description: "Engineered specifically for marine environments. Resists corrosion and degradation from saltwater spray and humidity.",
      icon: DropletIcon,
    },
    {
      title: "UV Protection",
      description: "Block 99% of harmful UV rays. Protects your skin and prevents interior upholstery, wood, and electronics from fading.",
      icon: SunIcon,
    },
    {
      title: "Glare Reduction",
      description: "Navigate safely by significantly reducing sun glare off the water. Improves visibility and reduces eye fatigue for the captain.",
      icon: ShieldIcon,
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-background text-foreground overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-warning/5 blur-[80px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ENGINEERED FOR THE <span className="text-primary">OPEN WATER</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Marine environments demand specialized protection. XPEL Prime Marine films delivers superior performance where it matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="group p-8 bg-card border border-border rounded-2xl hover:bg-accent/5 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
