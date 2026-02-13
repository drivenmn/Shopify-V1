import { Hero } from './Section/Hero';
import { Footer } from './Section/Footer';
import { FilmConfigurator } from './FilmConfigurator';

interface VehicleConfiguratorProps {
  onNavigate: (page: string) => void;
}

export function VehicleConfigurator({ onNavigate }: VehicleConfiguratorProps) {
  return (
    <div className="min-h-screen bg-background text-foreground" data-page="VehicleConfigurator">
      {/* Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* Configurator Section - FILM */}
      <FilmConfigurator />

      {/* Footer Section */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
