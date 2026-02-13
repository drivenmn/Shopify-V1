import React from 'react';

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

export function ResidentialApplications() {
  const residentialApplications = [
    {
      name: 'Living Spaces',
      items: ['Living Rooms', 'Bedrooms', 'Home Offices', 'Sunrooms']
    },
    {
      name: 'High-Heat Areas',
      items: ['South-Facing Windows', 'West-Facing Windows', 'Skylights', 'Glass Doors']
    },
    {
      name: 'Privacy Zones',
      items: ['Bathrooms', 'Ground Floor Windows', 'Street-Facing Rooms', 'Entrance Ways']
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white border-t border-white/5 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
             <div className="p-2 bg-[#FDB521]/10 rounded-lg">
                <CheckCircleIcon className="w-6 h-6 text-[#FDB521]" />
             </div>
          </div>
          <h2 className="font-['Agdasima'] text-4xl md:text-5xl font-bold mb-4">
            RESIDENTIAL <span className="text-[#FDB521]">APPLICATIONS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transform your home with energy-efficient window film. Improve comfort and protect your family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {residentialApplications.map((app, index) => (
            <div 
                key={index} 
                className="bg-[#121212] border border-white/5 rounded-2xl p-8 hover:border-[#017974]/30 hover:bg-[#151515] transition-all duration-300 group"
            >
              <h3 className="text-2xl font-['Agdasima'] text-white mb-6 group-hover:text-[#FDB521] transition-colors">
                {app.name}
              </h3>
              
              <ul className="space-y-4">
                {app.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-[#017974] shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
