import { Hero } from './Section/Hero';
import { Configurators } from './Section/Configurators';
import { Services } from './Section/Services';
import { WhyChooseUs } from './Section/WhyChooseUs';
import { Testimonials } from './Section/Testimonials';
import { FinalCTA } from './Section/FinalCTA';
import { SEO, drivenMNStructuredData } from '../../../components/SEO';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <SEO 
        title="DrivenMN - Premium Window Tint & PPF Burnsville, MN | XPEL Certified"
        description="DrivenMN is Burnsville & Minneapolis's premier automotive protection studio. Expert Window Tinting, Paint Protection Film (PPF), and Ceramic Coating for Tesla, Rivian & luxury vehicles."
        keywords="Window Tint Burnsville MN, Paint Protection Film Burnsville, PPF Minneapolis, XPEL Certified MN, Ceramic Coating Twin Cities, Tesla Tint MN, Auto Detailing Burnsville, Car Window Tinting Minnesota"
        canonicalUrl="https://drivenmn.com"
        structuredData={drivenMNStructuredData}
      />
      <noscript>
        <div style={{ padding: '20px', backgroundColor: '#4A148C', color: '#fff', textAlign: 'center' }}>
          <strong>DrivenMN - Burnsville's XPEL Certified Facility</strong>
          <p>Paint Protection Film | Window Tinting | Ceramic Coating | Minneapolis, St. Paul & Twin Cities</p>
          <p>Please enable JavaScript for the full interactive experience.</p>
        </div>
      </noscript>
      <div className="min-h-screen bg-[#050505]" data-component="HomePageWrapper">
        <Hero onNavigate={onNavigate} />
        <Configurators onNavigate={onNavigate} />
        <Services onNavigate={onNavigate} />
        <WhyChooseUs />
        <Testimonials />
        <FinalCTA onNavigate={onNavigate} />
      </div>
    </>
  );
}
