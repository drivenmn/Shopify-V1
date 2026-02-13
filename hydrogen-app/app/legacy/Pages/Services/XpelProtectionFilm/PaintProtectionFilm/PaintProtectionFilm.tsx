import { SEO } from '~/legacy/components/SEO';
import { Hero } from './Section/Hero';
import { Products } from './Section/Products';
import { Benefits } from './Section/Benefits';
import { Coverage } from './Section/Coverage';
import { Process } from './Section/Process';
import { FAQ } from './Section/FAQ';
import { CTA } from './Section/CTA';

interface PaintProtectionFilmProps {
  onNavigate: (page: string) => void;
}

export function PaintProtectionFilm({ onNavigate }: PaintProtectionFilmProps) {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "XPEL Paint Protection Film Installation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "DrivenMN",
          "image": "https://drivenmn.com/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Minneapolis",
            "addressLocality": "Minneapolis",
            "addressRegion": "MN",
            "postalCode": "55401",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.9778",
            "longitude": "-93.2650"
          },
          "telephone": "(612) 555-0100",
          "priceRange": "$$$$",
          "openingHours": "Mo-Sa 08:00-18:00"
        },
        "serviceType": "Paint Protection Film Installation",
        "areaServed": [
          "Minneapolis",
          "St. Paul",
          "Twin Cities",
          "Minnesota"
        ],
        "description": "Professional XPEL Paint Protection Film installation in Minneapolis, Minnesota. XPEL Certified facility offering Ultimate Plus, Ultimate Plus Fusion, Stealth, and 10 mil PPF with lifetime warranty. Protect your vehicle from rock chips, scratches, and road damage.",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "599",
          "highPrice": "8999",
          "offerCount": "4"
        }
      },
      {
        "@type": "Product",
        "name": "XPEL Ultimate Plus Paint Protection Film",
        "brand": {
          "@type": "Brand",
          "name": "XPEL"
        },
        "description": "Self-healing clear paint protection film with 10-year warranty. Industry-leading protection against rock chips, scratches, and road debris.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "1999",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "347"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does XPEL paint protection film last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "XPEL Ultimate Plus and Ultimate Plus Fusion come with a 10-year manufacturer warranty. With proper care, the film can last the lifetime of your vehicle ownership."
            }
          },
          {
            "@type": "Question",
            "name": "Does paint protection film damage car paint?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, XPEL PPF is designed to protect your paint without causing any damage. When installed by certified professionals, the film can be removed cleanly without affecting the original paint."
            }
          },
          {
            "@type": "Question",
            "name": "What is self-healing paint protection film?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Self-healing PPF has a special top coat that repairs minor scratches and swirl marks when exposed to heat. Simply park in the sun or use warm water, and the scratches disappear."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="XPEL Paint Protection Film Minneapolis | PPF Installation Minnesota - DrivenMN"
        description="Professional XPEL Paint Protection Film installation in Minneapolis, MN. XPEL Certified facility offering Ultimate Plus, Ultimate Plus Fusion, Stealth & 10 mil PPF. Self-healing technology, 10-year warranty. Protect your vehicle from rock chips, scratches & road damage. Serving Twin Cities Metro."
        keywords="paint protection film Minneapolis, PPF installation Minnesota, XPEL Ultimate Plus Minneapolis, XPEL certified installer Minnesota, clear bra Minneapolis, paint protection Twin Cities, XPEL Stealth Minnesota, XPEL Fusion PPF, rock chip protection Minneapolis, car paint protection Minnesota, vehicle PPF Minneapolis, XPEL 10 mil Minnesota, self-healing PPF Twin Cities, paint protection film St Paul, ceramic PPF Minneapolis, matte PPF Minnesota, Tesla PPF Minneapolis, luxury car protection Minnesota, DrivenMN PPF, Minneapolis auto detailing"
        canonicalUrl="https://drivenmn.com/services/paint-protection-film"
        structuredData={structuredData}
      />
      
      {/* Dark Theme Wrapper */}
      <div className="min-h-screen bg-auto-asphalt text-white" data-component="PPFPageWrapper">
        <Hero onNavigate={onNavigate} />
        <Products />
        <Benefits />
        <Coverage onNavigate={onNavigate} />
        <Process />
        <FAQ />
        <CTA onNavigate={onNavigate} />
      </div>
    </>
  );
}
