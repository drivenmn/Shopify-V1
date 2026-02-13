import React from 'react';

const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export function CommercialApplications() {
  const commercialApplications = [
    {
      name: 'Office Buildings',
      description: 'Reduce glare on computer screens and lower HVAC costs.',
      image: 'https://images.unsplash.com/photo-1694702702714-a48c5fabdaf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY1MTM2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Retail Spaces',
      description: 'Protect merchandise from UV damage while showcasing products.',
      image: 'https://images.unsplash.com/photo-1760537766198-947fd4c98b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXRhaWwlMjBzdG9yZSUyMHdpbmRvdyUyMGRpc3BsYXl8ZW58MXx8fHwxNzY1MTM2NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Restaurants',
      description: 'Create comfortable dining atmosphere and reduce heat near windows.',
      image: 'https://images.unsplash.com/photo-1763867641182-9ff4cfbcc389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBsYXJnZSUyMHdpbmRvd3N8ZW58MXx8fHwxNzY1MTM2NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Medical Facilities',
      description: 'HIPAA-compliant privacy film and UV protection for patients.',
      image: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwd2FpdGluZyUyMHJvb218ZW58MXx8fHwxNzY1MTM2NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section className="py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
             <div className="p-2 bg-[#017974]/10 rounded-lg">
                <BuildingIcon className="w-6 h-6 text-[#017974]" />
             </div>
          </div>
          <h2 className="font-['Agdasima'] text-4xl md:text-5xl font-bold mb-4">
            COMMERCIAL <span className="text-[#017974]">SOLUTIONS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional window film installation for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commercialApplications.map((app, index) => (
            <div 
              key={index}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={app.image}
                alt={app.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-['Agdasima'] text-white mb-2 group-hover:text-[#FDB521] transition-colors">
                  {app.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {app.description}
                </p>
                <div className="h-1 w-12 bg-[#017974] mt-4 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
