import { Hero } from './Section/Hero';
import { Services } from './Section/Services';
import { WhyTesla } from './Section/WhyTesla'; // Was WhyUs
import { Process } from './Section/Process';
import { CTA } from './Section/CTA';

interface TeslaHubProps {
  onNavigate: (page: string) => void;
}

export function TeslaHub({ onNavigate }: TeslaHubProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <Hero onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <WhyTesla />
      <Process onNavigate={onNavigate} />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
