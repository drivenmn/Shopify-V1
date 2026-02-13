export interface VehicleMake {
  id: string;
  name: string;
  models: VehicleModel[];
}

export interface VehicleModel {
  id: string;
  name: string;
  trims: string[];
}

export const vehicleMakes: VehicleMake[] = [
  {
    id: 'tesla',
    name: 'Tesla',
    models: [
      {
        id: 'model-3',
        name: 'Model 3',
        trims: ['Standard Range Plus', 'Long Range', 'Performance']
      },
      {
        id: 'model-y',
        name: 'Model Y',
        trims: ['Long Range', 'Performance']
      },
      {
        id: 'model-s',
        name: 'Model S',
        trims: ['Long Range', 'Plaid']
      },
      {
        id: 'model-x',
        name: 'Model X',
        trims: ['Long Range', 'Plaid']
      }
    ]
  },
  {
    id: 'rivian',
    name: 'Rivian',
    models: [
      {
        id: 'r1t',
        name: 'R1T',
        trims: ['Adventure', 'Explore', 'Performance']
      },
      {
        id: 'r1s',
        name: 'R1S',
        trims: ['Adventure', 'Explore', 'Performance']
      }
    ]
  },
  {
    id: 'bmw',
    name: 'BMW',
    models: [
      { id: 'm3', name: 'M3', trims: ['Base', 'Competition'] },
      { id: 'm4', name: 'M4', trims: ['Base', 'Competition'] },
      { id: 'm5', name: 'M5', trims: ['Base', 'Competition'] }
    ]
  },
  {
    id: 'porsche',
    name: 'Porsche',
    models: [
      { id: '911', name: '911', trims: ['Carrera', 'Carrera S', 'Turbo', 'GT3'] },
      { id: 'taycan', name: 'Taycan', trims: ['Base', '4S', 'Turbo'] }
    ]
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    models: [
      { id: 'c-class', name: 'C-Class', trims: ['C300', 'AMG C43', 'AMG C63'] },
      { id: 'e-class', name: 'E-Class', trims: ['E300', 'E450', 'AMG E53'] }
    ]
  }
];

export const vehicleTypes = [
  { id: 'coupe', name: 'Car (Coupe)', description: '(2) Full Size & (1) Rear Window', priceMultiplier: 0.95 },
  { id: 'sedan', name: 'Car (Sedan)', description: '(4) Full Size & (1) Rear Window', priceMultiplier: 1.0 },
  { id: 'single-cab-truck', name: 'Truck (Single Cab)', description: '(2) Full Size (1) Rear', priceMultiplier: 0.9 },
  { id: 'crew-cab-truck', name: 'Truck (Crew Cab)', description: '(4) Full Size & (1) or (3) Rear Window', priceMultiplier: 1.3 },
  { id: 'wagon', name: 'Wagon/Small SUV', description: '(4) Full Size, (2) Large Triangle (1) Rear', priceMultiplier: 1.15 },
  { id: 'large-suv', name: 'Full-Size SUV', description: '(4) Full Size, (2) Large Triangle (2) Small Triangle (1) Rear', priceMultiplier: 1.4 },
  { id: 'exotic', name: 'Exotic/Sports/Classic Car', description: 'Please fill out contact form', priceMultiplier: 1.0, requiresContact: true }
];

export const ppfPackages = [
  {
    id: 'partial-front',
    name: 'Partial Front',
    description: 'Essential front-end protection for daily driving',
    basePrice: 1299,
    coverage: ['Front Bumper', 'Partial Hood (12")', 'Side Mirrors', 'Headlights']
  },
  {
    id: 'full-front',
    name: 'Full Front',
    description: 'Complete front coverage for maximum protection',
    basePrice: 2499,
    coverage: ['Full Front Bumper', 'Full Hood', 'Fenders', 'Side Mirrors', 'Headlights', 'Front Fascia']
  },
  {
    id: 'full-body',
    name: 'Full Body',
    description: 'Complete vehicle protection with color change option',
    basePrice: 7999,
    coverage: ['All Exterior Panels', 'Hood', 'Fenders', 'Doors', 'Bumpers', 'Mirrors', 'Trunk', 'Roof', 'Pillars']
  },
  {
    id: 'track-pack',
    name: 'Track Pack',
    description: 'High-performance coverage for track enthusiasts',
    basePrice: 3999,
    coverage: ['Full Hood', 'Full Fenders', 'Front Bumper', 'Rocker Panels', 'Side Mirrors', 'A-Pillars', 'Headlights']
  }
];

export const ppfFilms = [
  // STANDARD FILMS (Available for ALL packages)
  {
    id: 'ultimate-plus',
    name: 'Ultimate Plus',
    category: 'standard',
    description: 'Industry-leading self-healing clear PPF with 10-year warranty. Crystal clear, non-yellowing protection.',
    priceModifier: 0,
    features: ['Self-healing topcoat', 'Hydrophobic surface', '10-year warranty', 'Crystal clear']
  },
  {
    id: 'ultimate-plus-fusion',
    name: 'Ultimate Plus Fusion',
    category: 'standard',
    description: 'Ceramic-infused PPF with enhanced hydrophobic properties and brilliant gloss. 10-year warranty.',
    priceModifier: 800,
    features: ['Ceramic coating embedded', 'Enhanced hydrophobic', '10-year warranty', 'Superior gloss']
  },
  {
    id: 'stealth',
    name: 'Stealth',
    category: 'standard',
    description: 'Premium satin matte finish with same protection as Ultimate Plus. 10-year warranty.',
    priceModifier: 500,
    features: ['Satin matte finish', 'Self-healing technology', '10-year warranty', 'Unique appearance']
  },
  
  // COLOR PPF - GLOSS FINISH (Only available for Full Body package)
  {
    id: 'molten-orange',
    name: 'Molten Orange',
    category: 'color-gloss',
    description: 'Vibrant orange gloss finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2500,
    colorHex: '#FF6600',
    features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change']
  },
  {
    id: 'monza-red',
    name: 'Monza Red',
    category: 'color-gloss',
    description: 'Racing-inspired red gloss finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2500,
    colorHex: '#C8102E',
    features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change']
  },
  {
    id: 'south-beach-blue',
    name: 'South Beach Blue',
    category: 'color-gloss',
    description: 'Electric blue gloss finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2500,
    colorHex: '#00A3E0',
    features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change']
  },
  {
    id: 'ultra-plum',
    name: 'Ultra Plum',
    category: 'color-gloss',
    description: 'Deep purple gloss finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2500,
    colorHex: '#6B2C91',
    features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change']
  },
  {
    id: 'bond-silver',
    name: 'Bond Silver',
    category: 'color-gloss',
    description: 'Metallic silver gloss finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2500,
    colorHex: '#C0C0C0',
    features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change']
  },
  {
    id: 'obsidian-black',
    name: 'Obsidian Black',
    category: 'color-gloss',
    description: 'Deep black gloss finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2500,
    colorHex: '#0A0A0A',
    features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change']
  },
  {
    id: 'pearl-white',
    name: 'Pearl White',
    category: 'color-gloss',
    description: 'Pearlescent white gloss finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2500,
    colorHex: '#F8F8FF',
    features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change']
  },
  
  // COLOR PPF - SATIN/MATTE FINISH (Only available for Full Body package)
  {
    id: 'satin-thermal-beige',
    name: 'Satin Thermal Beige',
    category: 'color-satin',
    description: 'Warm beige satin finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2800,
    colorHex: '#C9A88A',
    features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change']
  },
  {
    id: 'satin-battle-green',
    name: 'Satin Battle Green',
    category: 'color-satin',
    description: 'Military-inspired green satin finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2800,
    colorHex: '#4C5E3F',
    features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change']
  },
  {
    id: 'moss-green',
    name: 'Moss Green',
    category: 'color-satin',
    description: 'Natural moss green satin finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2800,
    colorHex: '#8A9A5B',
    features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change']
  },
  {
    id: 'satin-abyss-blue',
    name: 'Satin Abyss Blue',
    category: 'color-satin',
    description: 'Deep ocean blue satin finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2800,
    colorHex: '#1B3A52',
    features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change']
  },
  {
    id: 'satin-tarmac',
    name: 'Satin Tarmac',
    category: 'color-satin',
    description: 'Dark gray satin finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2800,
    colorHex: '#36454F',
    features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change']
  },
  {
    id: 'satin-midnight-black',
    name: 'Satin Midnight Black',
    category: 'color-satin',
    description: 'Rich black satin finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2800,
    colorHex: '#1C1C1C',
    features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change']
  },
  {
    id: 'grey-black',
    name: 'Grey Black',
    category: 'color-satin',
    description: 'Dark charcoal satin finish with self-healing PPF protection. 7-year warranty.',
    priceModifier: 2800,
    colorHex: '#2F2F2F',
    features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change']
  }
];

export const ppfAddons = [
  { id: 'headlights', name: 'Headlight Protection', price: 199 },
  { id: 'door-cups', name: 'Door Cup Protection', price: 149 },
  { id: 'rocker-panels', name: 'Rocker Panel Protection', price: 299 },
  { id: 'door-edges', name: 'Door Edge Protection', price: 179 },
  { id: 'rear-bumper', name: 'Rear Bumper Protection', price: 399 }
];

export const tintFilms = [
  {
    id: 'prime-hp',
    name: 'XPEL Prime HP',
    description: 'High-performance hybrid film',
    specs: {
      heatRejection: '54%',
      uvRejection: '99%',
      warranty: 'Lifetime'
    }
  },
  {
    id: 'prime-xr',
    name: 'XPEL Prime XR',
    description: 'Advanced ceramic film with excellent clarity',
    specs: {
      heatRejection: '77%',
      uvRejection: '99%',
      warranty: 'Lifetime'
    }
  },
  {
    id: 'prime-xr-plus',
    name: 'XPEL Prime XR Plus',
    description: 'Premium ceramic IR rejection with superior heat control',
    specs: {
      heatRejection: '88%',
      uvRejection: '99%',
      warranty: 'Lifetime'
    }
  }
];

export const tintPackages = [
  {
    id: 'full',
    name: 'Full Vehicle',
    description: 'All side windows plus rear windshield',
    windows: ['front-left', 'front-right', 'rear-left', 'rear-right', 'rear-windshield'],
    availableFor: ['coupe', 'sedan', 'single-cab-truck', 'crew-cab-truck', 'wagon', 'large-suv', 'exotic']
  },
  {
    id: 'front-windshield',
    name: 'Windshield',
    description: 'Front windshield only',
    windows: ['windshield'],
    availableFor: ['coupe', 'sedan', 'single-cab-truck', 'crew-cab-truck', 'wagon', 'large-suv', 'exotic']
  },
  {
    id: 'visor-strip',
    name: 'Visor Strip',
    description: 'Windshield visor strip',
    windows: ['visor'],
    availableFor: ['coupe', 'sedan', 'single-cab-truck', 'crew-cab-truck', 'wagon', 'large-suv', 'exotic']
  },
  {
    id: 'sunroof',
    name: 'Sunroof',
    description: 'Sunroof tint',
    windows: ['sunroof'],
    availableFor: ['coupe', 'sedan', 'single-cab-truck', 'crew-cab-truck', 'wagon', 'large-suv', 'exotic']
  },
  {
    id: 'panoramic-sunroof',
    name: 'Panoramic Sunroof',
    description: 'Panoramic sunroof tint',
    windows: ['panoramic-sunroof'],
    availableFor: ['coupe', 'sedan', 'single-cab-truck', 'crew-cab-truck', 'wagon', 'large-suv', 'exotic']
  },
  {
    id: 'front-match',
    name: 'Front Match',
    description: 'Match front windows to factory rear tint',
    windows: ['front-left', 'front-right'],
    availableFor: ['crew-cab-truck', 'wagon', 'large-suv']
  }
];

// VLT options mapping: vehicleType -> packageType -> filmType -> available VLT percentages and prices
// Based on XPEL Auto Window Tint pricing sheet
export const tintVLTOptions: any = {
  'coupe': {
    'full': {
      'prime-hp': { vlt: [20, 35, 55], price: 199.99 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 299.99 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 399.99 }
    },
    'front-windshield': {
      'prime-hp': { vlt: [55], price: 199.99 },
      'prime-xr': { vlt: [55], price: 299.99 },
      'prime-xr-plus': { vlt: [45, 70], price: 399.99 }
    },
    'visor-strip': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 79.00 }
    },
    'sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 149.00 }
    },
    'panoramic-sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 249.00 }
    }
  },
  'sedan': {
    'full': {
      'prime-hp': { vlt: [20, 35, 55], price: 249.99 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 349.99 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 449.99 }
    },
    'front-windshield': {
      'prime-hp': { vlt: [55], price: 199.99 },
      'prime-xr': { vlt: [55], price: 299.99 },
      'prime-xr-plus': { vlt: [45, 70], price: 399.99 }
    },
    'visor-strip': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 79.00 }
    },
    'sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 149.00 }
    },
    'panoramic-sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 249.00 }
    }
  },
  'wagon': {
    'full': {
      'prime-hp': { vlt: [20, 35, 55], price: 349.99 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 449.99 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 549.99 }
    },
    'front-windshield': {
      'prime-hp': { vlt: [55], price: 199.99 },
      'prime-xr': { vlt: [55], price: 299.99 },
      'prime-xr-plus': { vlt: [45, 70], price: 399.99 }
    },
    'visor-strip': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 79.00 }
    },
    'sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 149.00 }
    },
    'panoramic-sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 249.00 }
    },
    'front-match': {
      'prime-hp': { vlt: [20, 35, 55], price: 149.99 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 249.99 },
      'prime-xr-plus': { vlt: [20, 35, 70], price: 349.99 }
    }
  },
  'large-suv': {
    'full': {
      'prime-hp': { vlt: [20, 35, 55], price: 449.99 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 549.99 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 649.99 }
    },
    'front-windshield': {
      'prime-hp': { vlt: [55], price: 199.99 },
      'prime-xr': { vlt: [55], price: 299.99 },
      'prime-xr-plus': { vlt: [45, 70], price: 399.99 }
    },
    'visor-strip': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 79.00 }
    },
    'sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 149.00 }
    },
    'panoramic-sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 249.00 }
    },
    'front-match': {
      'prime-hp': { vlt: [20, 35, 55], price: 149.99 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 249.99 },
      'prime-xr-plus': { vlt: [20, 35, 70], price: 349.99 }
    }
  },
  'single-cab-truck': {
    'full': {
      'prime-hp': { vlt: [20, 35, 55], price: 249.99 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 349.99 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 449.99 }
    },
    'front-windshield': {
      'prime-hp': { vlt: [55], price: 199.99 },
      'prime-xr': { vlt: [55], price: 299.99 },
      'prime-xr-plus': { vlt: [45, 70], price: 399.99 }
    },
    'visor-strip': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 79.00 }
    },
    'sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 149.00 }
    },
    'panoramic-sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 249.00 }
    }
  },
  'crew-cab-truck': {
    'full': {
      'prime-hp': { vlt: [20, 35, 55], price: 349.99 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 449.99 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 549.99 }
    },
    'front-windshield': {
      'prime-hp': { vlt: [55], price: 199.99 },
      'prime-xr': { vlt: [55], price: 299.99 },
      'prime-xr-plus': { vlt: [45, 70], price: 399.99 }
    },
    'visor-strip': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 79.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 79.00 }
    },
    'sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 149.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 149.00 }
    },
    'panoramic-sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 249.00 },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 249.00 }
    },
    'front-match': {
      'prime-hp': { vlt: [20, 35, 55], price: 149.99 },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 249.99 },
      'prime-xr-plus': { vlt: [20, 35, 70], price: 349.99 }
    }
  },
  'exotic': {
    'full': {
      'prime-hp': { vlt: [20, 35, 55], price: 0, requiresQuote: true },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 0, requiresQuote: true },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 0, requiresQuote: true }
    },
    'front-windshield': {
      'prime-hp': { vlt: [55], price: 0, requiresQuote: true },
      'prime-xr': { vlt: [55], price: 0, requiresQuote: true },
      'prime-xr-plus': { vlt: [45, 70], price: 0, requiresQuote: true }
    },
    'visor-strip': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 0, requiresQuote: true },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 0, requiresQuote: true },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 0, requiresQuote: true }
    },
    'sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 0, requiresQuote: true },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 0, requiresQuote: true },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 0, requiresQuote: true }
    },
    'panoramic-sunroof': {
      'prime-hp': { vlt: [5, 20, 35, 55], price: 0, requiresQuote: true },
      'prime-xr': { vlt: [5, 20, 35, 55], price: 0, requiresQuote: true },
      'prime-xr-plus': { vlt: [5, 20, 35, 70], price: 0, requiresQuote: true }
    }
  }
};

export const tintAddons = [
  { id: 'windshield', name: 'Windshield', price: 299 },
  { id: 'visor-strip', name: 'Visor Strip', price: 79 },
  { id: 'sunroof', name: 'Sunroof', price: 149 },
  { id: 'panoramic-sunroof', name: 'Panoramic Sunroof', price: 249 }
];

export function getYears(): number[] {
  const currentYear = new Date().getFullYear();
  const years: number[] = [];
  for (let year = currentYear + 1; year >= 1990; year--) {
    years.push(year);
  }
  return years;
}

export function calculatePPFPrice(
  vehicleType: string,
  packageId: string,
  filmId: string,
  addons: string[]
): number {
  const typeMultiplier = vehicleTypes.find(t => t.id === vehicleType)?.priceMultiplier || 1.0;
  const pkg = ppfPackages.find(p => p.id === packageId);
  const film = ppfFilms.find(f => f.id === filmId);
  
  if (!pkg || !film) return 0;
  
  let total = pkg.basePrice * typeMultiplier;
  total += film.priceModifier;
  
  addons.forEach(addonId => {
    const addon = ppfAddons.find(a => a.id === addonId);
    if (addon) total += addon.price;
  });
  
  return Math.round(total);
}

export function getAvailableTintPackages(vehicleType: string) {
  if (!vehicleType) return tintPackages;
  return tintPackages.filter(pkg => 
    (pkg as any).availableFor?.includes(vehicleType)
  );
}

export function getAvailableTintFilms(vehicleType: string, packageType: string) {
  if (!vehicleType || !packageType) return tintFilms;
  const options = tintVLTOptions[vehicleType]?.[packageType];
  if (!options) return tintFilms;
  
  return tintFilms.filter(film => options[film.id]);
}

// VLT darkness level descriptions
export const vltDescriptions: Record<number, { name: string; subtitle: string }> = {
  5: { name: '5%', subtitle: 'Midnight Black - Maximum Privacy' },
  20: { name: '20%', subtitle: 'Dark Limo - High Privacy & Style' },
  35: { name: '35%', subtitle: 'Deep Shade - Perfect Balance' },
  45: { name: '45%', subtitle: 'Cool Comfort - Moderate Tint' },
  55: { name: '55%', subtitle: 'Subtle Shield - Light Protection' },
  70: { name: '70%', subtitle: 'Clear Guard - Maximum Clarity' }
};

export function getAvailableVLT(vehicleType: string, packageType: string, filmType: string) {
  const options = tintVLTOptions[vehicleType]?.[packageType]?.[filmType];
  if (!options) return [];
  
  return options.vlt.map((vlt: number) => ({
    value: vlt,
    name: vltDescriptions[vlt]?.name || `${vlt}%`,
    subtitle: vltDescriptions[vlt]?.subtitle || ''
  }));
}

export function getTintPrice(vehicleType: string, packageType: string, filmType: string, vlt: number) {
  const options = tintVLTOptions[vehicleType]?.[packageType]?.[filmType];
  if (!options) return 0;
  
  // Check if the VLT is available for this combination
  if (!options.vlt.includes(vlt)) return 0;
  
  let price = options.price;
  
  // Apply 15% multiplier for 5% VLT
  if (vlt === 5) {
    price = price * 1.15;
  }
  
  return price;
}

export function calculateTintPrice(
  vehicleType: string,
  packageId: string,
  filmId: string,
  vlt: number,
  addons: string[] = []
): number {
  // Get base price from the VLT options mapping
  let total = getTintPrice(vehicleType, packageId, filmId, vlt);
  
  // Add addon prices
  if (Array.isArray(addons)) {
    addons.forEach(addonId => {
      const addon = tintAddons.find(a => a.id === addonId);
      if (addon) total += addon.price;
    });
  }
  
  return Math.round(total);
}
