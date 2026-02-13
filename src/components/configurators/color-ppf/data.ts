import { ColorOption } from './types';
import defaultOverlay from 'figma:asset/0a3bd25dffed8e38a93b0538ff25f05d8318ec1b.png';
import moltenOrangeImg from 'figma:asset/cd2a39e37e4bb4e08713faa5dc4d9383174cce54.png';
import southBeachBlueImg from 'figma:asset/989afde7bba952b2894d08c399c2354b7197ddcd.png';

// TODO: Replace defaultOverlay with specific color assets when available
export const colors: ColorOption[] = [
  // Gloss Colors
  { 
    id: 'molten-orange', 
    name: 'Molten Orange', 
    hex: '#FF6600', 
    type: 'custom', 
    price: 2500, 
    finish: 'gloss', 
    overlayColor: '#FF6600', 
    overlayOpacity: 0.75,
    asset: moltenOrangeImg
  },
  { 
    id: 'monza-red', 
    name: 'Monza Red', 
    hex: '#C8102E', 
    type: 'custom', 
    price: 2500, 
    finish: 'gloss', 
    overlayColor: '#C8102E', 
    overlayOpacity: 0.75,
    asset: defaultOverlay
  },
  { 
    id: 'south-beach-blue', 
    name: 'South Beach Blue', 
    hex: '#00A3E0', 
    type: 'custom', 
    price: 2500, 
    finish: 'gloss', 
    overlayColor: '#00A3E0', 
    overlayOpacity: 0.75,
    asset: southBeachBlueImg
  },
  { 
    id: 'ultra-plum', 
    name: 'Ultra Plum', 
    hex: '#6B2C91', 
    type: 'custom', 
    price: 2500, 
    finish: 'gloss', 
    overlayColor: '#6B2C91', 
    overlayOpacity: 0.75,
    // Placeholder for missing Figma asset
    asset: "https://images.unsplash.com/photo-1678026039241-75a1becd25e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB0ZXNsYSUyMG1vZGVsJTIweSUyMG1hdHRlJTIwdWx0cmElMjBwbHVtfGVufDF8fHx8MTc2NDM0OTc0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    id: 'bond-silver', 
    name: 'Bond Silver', 
    hex: '#C0C0C0', 
    type: 'custom', 
    price: 2500, 
    finish: 'gloss', 
    overlayColor: '#C0C0C0', 
    overlayOpacity: 0.75,
    asset: defaultOverlay
  },
  { 
    id: 'obsidian-black', 
    name: 'Obsidian Black', 
    hex: '#0A0A0A', 
    type: 'custom', 
    price: 2500, 
    finish: 'gloss', 
    overlayColor: '#0A0A0A', 
    overlayOpacity: 0.85,
    asset: defaultOverlay
  },
  { 
    id: 'pearl-white', 
    name: 'Pearl White', 
    hex: '#F8F8FF', 
    type: 'custom', 
    price: 2500, 
    finish: 'gloss', 
    overlayColor: '#F8F8FF', 
    overlayOpacity: 0.5,
    asset: defaultOverlay
  },

  // Satin Colors
  { 
    id: 'satin-black', 
    name: 'Satin Black', 
    hex: '#1A1A1A', 
    type: 'custom', 
    price: 2800, 
    finish: 'satin', 
    overlayColor: '#1A1A1A', 
    overlayOpacity: 0.85,
    asset: defaultOverlay
  },
  { 
    id: 'satin-white', 
    name: 'Satin White', 
    hex: '#E8E8E8', 
    type: 'custom', 
    price: 2800, 
    finish: 'satin', 
    overlayColor: '#E8E8E8', 
    overlayOpacity: 0.5,
    asset: defaultOverlay
  },
  { 
    id: 'satin-perfect-blue', 
    name: 'Satin Perfect Blue', 
    hex: '#2B5F8F', 
    type: 'custom', 
    price: 2800, 
    finish: 'satin', 
    overlayColor: '#2B5F8F', 
    overlayOpacity: 0.75,
    asset: defaultOverlay
  },
  { 
    id: 'satin-burnt-orange', 
    name: 'Satin Burnt Orange', 
    hex: '#CC5500', 
    type: 'custom', 
    price: 2800, 
    finish: 'satin', 
    overlayColor: '#CC5500', 
    overlayOpacity: 0.75,
    asset: defaultOverlay
  },
  { 
    id: 'satin-tropic-teal', 
    name: 'Satin Tropic Teal', 
    hex: '#008B8B', 
    type: 'custom', 
    price: 2800, 
    finish: 'satin', 
    overlayColor: '#008B8B', 
    overlayOpacity: 0.75,
    asset: defaultOverlay
  },
  { 
    id: 'satin-racing-red', 
    name: 'Satin Racing Red', 
    hex: '#8B0000', 
    type: 'custom', 
    price: 2800, 
    finish: 'satin', 
    overlayColor: '#8B0000', 
    overlayOpacity: 0.75,
    asset: defaultOverlay
  },
  { 
    id: 'satin-dark-gray', 
    name: 'Satin Dark Gray', 
    hex: '#4A4A4A', 
    type: 'custom', 
    price: 2800, 
    finish: 'satin', 
    overlayColor: '#4A4A4A', 
    overlayOpacity: 0.8,
    asset: defaultOverlay
  },
  
  // Clear Films
  { 
    id: 'ultimate-plus', 
    name: 'Ultimate Plus', 
    hex: '#FFFFFF', 
    type: 'clear', 
    price: 2000, 
    finish: 'gloss', 
    overlayColor: '#FFFFFF', 
    overlayOpacity: 0.1,
    asset: defaultOverlay
  },
  { 
    id: 'stealth', 
    name: 'Stealth', 
    hex: '#E8E8E8', 
    type: 'clear', 
    price: 2200, 
    finish: 'satin', 
    overlayColor: '#E8E8E8', 
    overlayOpacity: 0.5,
    asset: defaultOverlay
  }
];

export const features = [
  { title: 'Self-Healing', desc: 'Heat activated self-healing top coat repairs scratches.' },
  { title: 'Stain Resistance', desc: 'High resistance to road grime, bird droppings, and bugs.' },
  { title: '10-Year Warranty', desc: 'Guaranteed against yellowing, cracking, peeling, and hazing.' },
  { title: 'Precision Fit', desc: 'Computer cut patterns for exact fitment without cutting on paint.' }
];
