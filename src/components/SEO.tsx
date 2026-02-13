import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: object;
}

export function SEO({
  title = 'DrivenMN - XPEL Certified Paint Protection & Window Tint | Minnesota',
  description = 'Minnesota\'s exclusive XPEL Certified Facility for paint protection film (PPF), window tint, ceramic coating, and vehicle wraps. Serving Minneapolis, St. Paul & Twin Cities. Premium protection for Tesla, Rivian & luxury vehicles.',
  keywords = 'paint protection film Minnesota, PPF Minneapolis, XPEL certified Minnesota, window tint Minneapolis, ceramic coating Twin Cities, Tesla PPF Minnesota, vehicle wraps St Paul, paint correction Minnesota, DrivenMN, luxury car detailing Minneapolis',
  canonicalUrl = 'https://drivenmn.com',
  ogType = 'website',
  ogImage = 'https://placehold.co/1200x630?text=DrivenMN+OG+Image',
  structuredData
}: SEOProps) {
  
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.content = content;
    };

    // Set basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // Set Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'DrivenMN', true);
    setMetaTag('og:locale', 'en_US', true);

    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Set additional SEO tags
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow');
    setMetaTag('author', 'DrivenMN');
    setMetaTag('geo.region', 'US-MN');
    setMetaTag('geo.placename', 'Minneapolis, Minnesota');
    setMetaTag('geo.position', '44.977753;-93.265011'); // Minneapolis coordinates

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Set viewport meta tag
    let viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    viewport.content = 'width=device-width, initial-scale=1, maximum-scale=5';

    // Set charset
    let charset = document.querySelector('meta[charset]') as HTMLMetaElement;
    if (!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Add language attribute to html tag
    document.documentElement.lang = 'en';

    // Add DNS prefetch and preconnect for performance
    const addResourceHint = (rel: string, href: string) => {
      const existing = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
      if (!existing) {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      }
    };

    // Preconnect to common domains for faster loading
    addResourceHint('preconnect', 'https://fonts.googleapis.com');
    addResourceHint('preconnect', 'https://fonts.gstatic.com');
    addResourceHint('dns-prefetch', 'https://placehold.co');

    // Add structured data if provided
    if (structuredData) {
      let structuredDataScript = document.getElementById('structured-data');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.id = 'structured-data';
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, structuredData]);

  return null;
}

// Default structured data for DrivenMN
export const drivenMNStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://drivenmn.com/#organization',
      name: 'DrivenMN',
      alternateName: 'Driven Minnesota',
      url: 'https://drivenmn.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://placehold.co/600x200?text=DrivenMN+Logo',
        width: 600,
        height: 200
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://placehold.co/1200x630?text=DrivenMN+OG+Image'
      },
      description: 'Minnesota\'s exclusive XPEL Certified Facility specializing in paint protection film (PPF), window tinting, ceramic coating, vehicle wraps, and paint correction for Tesla, Rivian, and luxury vehicles.',
      telephone: '+1-XXX-XXX-XXXX',
      email: 'info@drivenmn.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Your Street Address',
        addressLocality: 'Minneapolis',
        addressRegion: 'MN',
        postalCode: 'XXXXX',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 44.977753,
        longitude: -93.265011
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Minneapolis',
          '@id': 'https://en.wikipedia.org/wiki/Minneapolis'
        },
        {
          '@type': 'City',
          name: 'St. Paul',
          '@id': 'https://en.wikipedia.org/wiki/Saint_Paul,_Minnesota'
        },
        {
          '@type': 'Place',
          name: 'Twin Cities Metro Area'
        },
        {
          '@type': 'State',
          name: 'Minnesota',
          '@id': 'https://en.wikipedia.org/wiki/Minnesota'
        }
      ],
      priceRange: '$$-$$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '16:00'
        }
      ],
      sameAs: [
        'https://www.facebook.com/drivenmn',
        'https://www.instagram.com/drivenmn',
        'https://www.youtube.com/drivenmn'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Vehicle Protection Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Paint Protection Film (PPF)',
              description: 'XPEL Ultimate Plus and Stealth PPF installation with 10-year warranty',
              provider: {
                '@id': 'https://drivenmn.com/#organization'
              }
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Window Tinting',
              description: 'XPEL PRIME ceramic window film with lifetime warranty',
              provider: {
                '@id': 'https://drivenmn.com/#organization'
              }
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Ceramic Coating',
              description: 'Professional-grade nano-ceramic coating with 5-year protection',
              provider: {
                '@id': 'https://drivenmn.com/#organization'
              }
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Paint Correction',
              description: 'Multi-stage paint correction for flawless finish',
              provider: {
                '@id': 'https://drivenmn.com/#organization'
              }
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Vehicle Wraps',
              description: 'Custom color change and graphic wraps',
              provider: {
                '@id': 'https://drivenmn.com/#organization'
              }
            }
          }
        ]
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://drivenmn.com/#website',
      url: 'https://drivenmn.com',
      name: 'DrivenMN',
      description: 'Minnesota\'s Exclusive XPEL Certified Facility',
      publisher: {
        '@id': 'https://drivenmn.com/#organization'
      },
      inLanguage: 'en-US'
    },
    {
      '@type': 'WebPage',
      '@id': 'https://drivenmn.com/#webpage',
      url: 'https://drivenmn.com',
      name: 'DrivenMN - XPEL Certified Paint Protection & Window Tint | Minnesota',
      description: 'Minnesota\'s exclusive XPEL Certified Facility for paint protection film (PPF), window tint, ceramic coating, and vehicle wraps. Premium protection for Tesla, Rivian & luxury vehicles.',
      isPartOf: {
        '@id': 'https://drivenmn.com/#website'
      },
      about: {
        '@id': 'https://drivenmn.com/#organization'
      },
      inLanguage: 'en-US'
    }
  ]
};
