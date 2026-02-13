import { SEO } from '~/legacy/components/SEO';
import { BookingProvider } from '~/legacy/components/features/scheduling/BookingContext';
import { BookingManager } from '~/legacy/components/features/scheduling/BookingManager';
import { Hero } from './Section/Hero';
import { ColorFilms } from './Section/ColorFilms';
import { Benefits } from './Section/Benefits';
import { Coverage } from './Section/Coverage';
import { CTA } from './Section/CTA';

interface TeslaPPFProps {
  onNavigate: (page: string) => void;
}

export function TeslaPPF({ onNavigate }: TeslaPPFProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tesla Paint Protection Film Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DrivenMN"
    },
    "description": "Premium XPEL Paint Protection Film installation for Tesla Model S, 3, X, Y, and Cybertruck in Minneapolis. Self-healing, invisible protection against rock chips.",
    "areaServed": "Minneapolis, MN"
  };

  return (
    <>
      <SEO
        title="Tesla PPF Minneapolis | Model 3, Y, S, X Paint Protection | DrivenMN"
        description="Expert XPEL paint protection film installation for Tesla vehicles in Minneapolis. Protect your Model S, 3, X, Y or Cybertruck from rock chips and road debris. Certified installers."
        keywords="Tesla PPF Minneapolis, Tesla paint protection film, Model 3 PPF, Model Y PPF, Cybertruck PPF, XPEL Tesla installation"
        canonicalUrl="https://drivenmn.com/tesla/ppf"
        structuredData={structuredData}
      />
      
      <BookingProvider>
        <div className="min-h-screen bg-auto-asphalt text-white" data-component="TeslaPPFPage">
          <Hero onNavigate={onNavigate} />
          <ColorFilms onNavigate={onNavigate} />
          <Benefits />
          <Coverage onNavigate={onNavigate} />
          <CTA onNavigate={onNavigate} />
          <BookingManager />
        </div>
      </BookingProvider>
    </>
  );
}
