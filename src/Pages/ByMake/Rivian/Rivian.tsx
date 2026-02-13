import { Hero } from './Section/Hero';
import { Content } from './Section/Content';
import { CTA } from './Section/CTA';

interface RivianProps {
  onNavigate: (page: string) => void;
}

export function Rivian({ onNavigate }: RivianProps) {
  return (
    <div className="min-h-screen bg-auto-asphalt text-white">
      <Hero onNavigate={onNavigate} />
      <Content onNavigate={onNavigate} />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
