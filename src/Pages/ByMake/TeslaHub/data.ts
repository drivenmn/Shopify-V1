import { 
  Shield, 
  Sun, 
  Sparkles, 
  Palette, 
  Battery, 
  Zap, 
  Award, 
  Users,
  MessageSquare,
  Calendar,
  Star
} from 'lucide-react';
import { ServiceItem, ReasonItem, ProcessStep } from './types';

export const teslaServices: ServiceItem[] = [
  {
    icon: Shield,
    title: 'Xpel Paint Protection Film',
    subtitle: 'Premium Clear Bra Installation',
    description: 'Protect your Tesla\'s paint from chips, scratches, and road damage with industry-leading XPEL Ultimate Plus self-healing technology.',
    features: [
      'Self-healing topcoat technology',
      'Superior impact & scratch resistance',
      'Hydrophobic & stain resistant',
      '10-year manufacturer warranty',
      'Crystal clear, non-yellowing finish',
      'Maintains original paint color'
    ],
    benefits: [
      'Preserve resale value',
      'Invisible protection',
      'Easy to maintain'
    ],
    page: 'ppf-configurator',
    gradient: 'from-primary to-primary/90',
    accentColor: 'primary'
  },
  {
    icon: Sun,
    title: 'Xpel Prime Window Tint',
    subtitle: 'Professional Tesla Window Tinting',
    description: 'Superior UV protection, heat rejection, and privacy with XPEL Prime XR Plus ceramic tint—specifically optimized for Tesla\'s all-glass design.',
    features: [
      'Up to 98% IR heat rejection',
      '99.9% UV protection',
      'No signal interference',
      'Lifetime manufacturer warranty',
      'Non-metallic nano-ceramic',
      'Maintains GPS & connectivity'
    ],
    benefits: [
      'Reduce cabin heat by 60%',
      'Lower energy consumption',
      'Enhanced privacy'
    ],
    page: 'tint-configurator',
    gradient: 'from-primary to-primary/80',
    accentColor: 'primary'
  },
  {
    icon: Sparkles,
    title: 'Ceramic Coating',
    subtitle: 'Advanced Nano-Ceramic Coating',
    description: 'Long-lasting paint protection and showroom shine with professional-grade ceramic coating—creates a permanent bond with your Tesla\'s paint.',
    features: [
      '9H hardness protection',
      'Extreme hydrophobic effect',
      'Chemical & UV resistance',
      '3-5 year durability',
      'Enhanced gloss & depth',
      'Self-cleaning properties'
    ],
    benefits: [
      'Easier maintenance',
      'Enhanced paint depth',
      'Long-term protection'
    ],
    page: 'contact',
    gradient: 'from-warning to-warning/90',
    accentColor: 'warning'
  },
  {
    icon: Palette,
    title: 'Vinyl Wraps',
    subtitle: 'Custom Tesla Vehicle Wraps',
    description: 'Full color change, accents, and protective vinyl solutions—transform your Tesla\'s appearance while adding a layer of paint protection.',
    features: [
      'Full or partial coverage',
      'Premium 3M & Avery films',
      'Matte, gloss, or satin finishes',
      '5-7 year durability',
      'Removable & reversible',
      'Protects original paint'
    ],
    benefits: [
      'Unique custom look',
      'Protect while styling',
      'Fully reversible'
    ],
    page: 'contact',
    gradient: 'from-gray-700 to-gray-900',
    accentColor: 'primary'
  }
];

export const teslaReasons: ReasonItem[] = [
  {
    icon: Battery,
    title: 'EV Optimization',
    description: 'Our ceramic tint reduces cabin heat by up to 60%, decreasing AC usage and extending your Tesla\'s range by 3-5%.'
  },
  {
    icon: Sun,
    title: 'Glass Protection',
    description: 'Tesla\'s expansive glass surfaces need specialized care. We protect every inch with precision-cut XPEL films.'
  },
  {
    icon: Zap,
    title: 'No Signal Interference',
    description: 'Non-metallic nano-ceramic films maintain your Tesla\'s GPS, cellular, and connectivity performance.'
  },
  {
    icon: Shield,
    title: 'Paint Preservation',
    description: 'Tesla\'s unique paint finishes require expert protection. Our PPF prevents rock chips and maintains resale value.'
  },
  {
    icon: Award,
    title: 'XPEL Certified',
    description: 'As an XPEL Certified installer, we meet the highest standards for Tesla protection and installation quality.'
  },
  {
    icon: Users,
    title: 'Tesla Specialists',
    description: 'We\'ve protected over 500 Teslas—from Model 3 to Cybertruck. We know every curve and contour.'
  }
];

export const processSteps: ProcessStep[] = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Get Your Quote',
    description: 'Use our instant online configurators or contact us directly. Select your Tesla model and desired services for an immediate price estimate.',
    action: 'Start Configurator',
    page: 'tesla-package'
  },
  {
    icon: Calendar,
    number: '02',
    title: 'Schedule Installation',
    description: 'Choose a convenient appointment time. Most installations are completed in 1-3 days depending on services selected.',
    action: 'View Availability',
    page: 'contact'
  },
  {
    icon: Shield,
    number: '03',
    title: 'Expert Installation',
    description: 'Our XPEL-certified technicians perform precision installation in a climate-controlled environment using computer-cut patterns.',
    action: null
  },
  {
    icon: Star,
    number: '04',
    title: 'Enjoy & Protect',
    description: 'Drive with confidence knowing your Tesla is protected by industry-leading products backed by comprehensive warranties.',
    action: null
  }
];
