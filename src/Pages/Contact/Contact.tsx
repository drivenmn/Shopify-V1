import { Hero } from './Section/Hero';
import { ContactInfo } from './Section/ContactInfo';
import { ContactFormSteps } from './Section/ContactFormSteps';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="min-h-screen bg-auto-asphalt" data-component="ContactPageWrapper">
      <Hero 
        onNavigate={onNavigate}
        breadcrumbSegments={[
          { label: 'Contact Us' }
        ]}
      />
      
      <section className="py-20 bg-auto-asphalt" data-section="ContactMainContent">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>

            {/* Right Column - Multi-step Form */}
            <div className="lg:col-span-3">
              <ContactFormSteps />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
