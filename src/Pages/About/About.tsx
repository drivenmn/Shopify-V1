import { Introduction } from './Section/Introduction';
import { Team } from './Section/Team';
import { PageBreadcrumb } from '../../../components/PageBreadcrumb';
import { CTA } from './Section/CTA';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen bg-white">
      <PageBreadcrumb
        segments={[{ label: 'About Us' }]}
        onNavigate={onNavigate}
      />
      <Introduction />
      <Team />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
