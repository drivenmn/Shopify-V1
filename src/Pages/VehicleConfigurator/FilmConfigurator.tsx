import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, Shield, ShoppingCart, Loader2, Info, Car, Sun, 
  ChevronDown, ArrowRight, Zap, Award, Scan, Eye,
  Sparkles, ChevronUp
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from '../../components/ui/select';
import { toast } from 'sonner@2.0.3';
import { useCart } from '../../utils/cartContext';
import { BookingModal } from '../../components/BookingModal';
import { createShopifyCheckout } from '../../utils/shopify';
import { Calendar as CalendarIcon, CreditCard } from 'lucide-react';

// ===================================
// FILM CONFIGURATOR
// ===================================

// Types
export type ServiceType = 'clear-ppf' | 'color-ppf' | 'tint' | '';
export type PPFFinish = 'clear-gloss' | 'clear-satin' | 'gloss' | 'satin' | '';
export type VehicleTypeId = 'sedan' | 'suv' | 'large-suv' | 'truck' | 'coupe' | 'exotic' | '';

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  finish: 'gloss' | 'satin';
  price: number;
  overlayColor: string;
  overlayOpacity: number;
}

export interface FilmOption {
  id: string;
  name: string;
  description: string;
  icon: any;
  features: string[];
  modifier: number;
}

export interface PPFPackage {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  coverage: string[];
}

export interface TintFilm {
  id: string;
  name: string;
  description: string;
  heatRejection: string;
  uvRejection: string;
  warranty: string;
  basePrice: number;
}

export interface TintPackage {
  id: string;
  name: string;
  description: string;
  windows: string[];
  vehicleTypes: string[];
}

// Data
const POPULAR_MAKES = [
  'Tesla', 'Toyota', 'Ford', 'Chevrolet', 'Honda', 'Nissan', 'Jeep', 
  'Hyundai', 'Kia', 'Subaru', 'GMC', 'Ram', 'Volkswagen', 'BMW', 
  'Mercedes-Benz', 'Mazda', 'Lexus', 'Dodge', 'Audi', 'Cadillac', 
  'Volvo', 'Porsche', 'Rivian', 'Lucid'
].sort();

const YEARS = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() + 1 - i).toString());

const vehicleTypeOptions = [
  { id: 'sedan', label: 'Sedan', icon: '🚗', description: 'Compact to full-size sedans', multiplier: 1.0 },
  { id: 'suv', label: 'SUV/Crossover', icon: '🚙', description: 'Standard SUVs and crossovers', multiplier: 1.15 },
  { id: 'large-suv', label: 'Large SUV', icon: '🚐', description: 'Full-size SUVs and vans', multiplier: 1.4 },
  { id: 'truck', label: 'Pickup Truck', icon: '🛻', description: 'Full-size and mid-size trucks', multiplier: 1.25 },
  { id: 'coupe', label: 'Coupe/Sports', icon: '🏎️', description: 'Two-door coupes and sports cars', multiplier: 0.95 },
  { id: 'exotic', label: 'Exotic/Luxury', icon: '✨', description: 'High-end exotic vehicles', multiplier: 1.5 },
];

const clearFilms: FilmOption[] = [
  {
    id: 'ultimate-plus',
    name: 'XPEL Ultimate Plus',
    description: 'Industry-leading self-healing clear paint protection film with hydrophobic topcoat',
    icon: Shield,
    features: ['Self-healing topcoat', 'Hydrophobic surface', '10-year warranty'],
    modifier: 0
  },
  {
    id: 'fusion-plus',
    name: 'XPEL Fusion Plus',
    description: 'Advanced anti-contamination technology with superior gloss retention',
    icon: Sparkles,
    features: ['Anti-contamination coating', 'Superior gloss', '10-year warranty'],
    modifier: 800
  }
];

const stealthFilm: FilmOption = {
  id: 'stealth',
  name: 'XPEL Stealth',
  description: 'Matte finish paint protection film with self-healing properties',
  icon: Eye,
  features: ['Matte finish', 'Self-healing', '10-year warranty'],
  modifier: 500
};

const ppfPackages: PPFPackage[] = [
  {
    id: 'partial-front',
    name: 'Partial Front',
    description: 'Essential front-end protection',
    basePrice: 1299,
    coverage: ['Front Bumper', 'Partial Hood (12")', 'Side Mirrors', 'Headlights']
  },
  {
    id: 'full-front',
    name: 'Full Front',
    description: 'Complete front coverage',
    basePrice: 1899,
    coverage: ['Full Hood', 'Front Bumper', 'Fenders', 'Side Mirrors', 'Headlights', 'Fog Lights']
  },
  {
    id: 'track-pack',
    name: 'Track Pack',
    description: 'Performance coverage',
    basePrice: 2599,
    coverage: ['Full Hood', 'Front Bumper', 'Fenders', 'Mirrors', 'Rockers', 'A-Pillars', 'Headlights']
  },
  {
    id: 'full-body',
    name: 'Full Body',
    description: 'Complete vehicle protection',
    basePrice: 5999,
    coverage: ['All Painted Surfaces', 'Hood', 'Fenders', 'Doors', 'Trunk', 'Roof', 'Mirrors']
  }
];

const colors: ColorOption[] = [
  { id: 'molten-orange', name: 'Molten Orange', hex: '#FF6600', finish: 'gloss', price: 7500, overlayColor: '#FF6600', overlayOpacity: 0.75 },
  { id: 'monza-red', name: 'Monza Red', hex: '#CC0000', finish: 'gloss', price: 7500, overlayColor: '#CC0000', overlayOpacity: 0.75 },
  { id: 'south-beach-blue', name: 'South Beach Blue', hex: '#0099FF', finish: 'gloss', price: 7500, overlayColor: '#0099FF', overlayOpacity: 0.75 },
  { id: 'ultra-plum', name: 'Ultra Plum', hex: '#8B5CF6', finish: 'gloss', price: 7500, overlayColor: '#8B5CF6', overlayOpacity: 0.75 },
  { id: 'bond-silver', name: 'Bond Silver', hex: '#C0C0C0', finish: 'gloss', price: 7500, overlayColor: '#C0C0C0', overlayOpacity: 0.75 },
  { id: 'obsidian-black', name: 'Obsidian Black', hex: '#1A1A1A', finish: 'gloss', price: 7500, overlayColor: '#1A1A1A', overlayOpacity: 0.8 },
  { id: 'pearl-white', name: 'Pearl White', hex: '#FFFFFF', finish: 'gloss', price: 7500, overlayColor: '#FFFFFF', overlayOpacity: 0.85 },
  { id: 'satin-black', name: 'Satin Black', hex: '#2A2A2A', finish: 'satin', price: 7800, overlayColor: '#2A2A2A', overlayOpacity: 0.8 },
  { id: 'satin-dark-gray', name: 'Satin Dark Gray', hex: '#4A4A4A', finish: 'satin', price: 7800, overlayColor: '#4A4A4A', overlayOpacity: 0.75 },
  { id: 'satin-nardo-gray', name: 'Satin Nardo Gray', hex: '#7A7A7A', finish: 'satin', price: 7800, overlayColor: '#7A7A7A', overlayOpacity: 0.75 },
  { id: 'satin-white', name: 'Satin White', hex: '#F0F0F0', finish: 'satin', price: 7800, overlayColor: '#F0F0F0', overlayOpacity: 0.85 },
];

const tintFilms: TintFilm[] = [
  {
    id: 'prime-xr-plus',
    name: 'XPEL Prime XR Plus',
    description: 'Premium ceramic film with superior heat rejection',
    heatRejection: '60%',
    uvRejection: '99%',
    warranty: 'Lifetime',
    basePrice: 599
  },
  {
    id: 'prime-cs',
    name: 'XPEL Prime CS',
    description: 'Advanced ceramic series with excellent performance',
    heatRejection: '55%',
    uvRejection: '99%',
    warranty: 'Lifetime',
    basePrice: 449
  },
  {
    id: 'prime-xr',
    name: 'XPEL Prime XR',
    description: 'Nano-ceramic technology for superior comfort',
    heatRejection: '47%',
    uvRejection: '99%',
    warranty: 'Lifetime',
    basePrice: 549
  }
];

const tintPackages: TintPackage[] = [
  {
    id: 'full-sedan',
    name: 'Full Tint',
    description: 'Complete window coverage',
    windows: ['Front Windows (2)', 'Rear Windows (2)', 'Rear Windshield'],
    vehicleTypes: ['sedan', 'coupe']
  },
  {
    id: 'front-sedan',
    name: 'Front Only',
    description: 'Front window tinting',
    windows: ['Front Driver', 'Front Passenger'],
    vehicleTypes: ['sedan', 'coupe']
  },
  {
    id: 'full-suv',
    name: 'Full Tint',
    description: 'Complete SUV coverage',
    windows: ['Front Windows (2)', 'Rear Windows (2)', 'Triangle Windows (2)', 'Rear Windshield'],
    vehicleTypes: ['suv', 'large-suv']
  },
  {
    id: 'front-suv',
    name: 'Front Only',
    description: 'Front window tinting',
    windows: ['Front Driver', 'Front Passenger'],
    vehicleTypes: ['suv', 'large-suv']
  },
  {
    id: 'full-truck',
    name: 'Full Tint',
    description: 'Complete truck coverage',
    windows: ['Front Windows (2)', 'Rear Windows (2)', 'Rear Windshield'],
    vehicleTypes: ['truck']
  },
  {
    id: 'front-truck',
    name: 'Front Only',
    description: 'Front window tinting',
    windows: ['Front Driver', 'Front Passenger'],
    vehicleTypes: ['truck']
  }
];

const vltOptions = [
  { value: 5, label: 'Limo Dark', description: 'Maximum privacy' },
  { value: 20, label: 'Dark', description: 'Strong privacy' },
  { value: 35, label: 'Medium', description: 'Balanced visibility' },
  { value: 50, label: 'Light', description: 'Subtle tint' },
  { value: 70, label: 'Very Light', description: 'Nearly clear' }
];

// Helper Functions
function calculatePPFPrice(vehicleType: VehicleTypeId, packageId: string, filmId: string): number {
  const pkg = ppfPackages.find(p => p.id === packageId);
  if (!pkg) return 0;
  
  const typeMultiplier = vehicleTypeOptions.find(v => v.id === vehicleType)?.multiplier || 1.0;
  const film = [...clearFilms, stealthFilm].find(f => f.id === filmId);
  const filmModifier = film?.modifier || 0;
  
  return Math.round((pkg.basePrice * typeMultiplier) + filmModifier);
}

function calculateTintPrice(vehicleType: VehicleTypeId, packageId: string, filmId: string): number {
  const film = tintFilms.find(f => f.id === filmId);
  if (!film) return 0;
  
  const typeMultiplier = vehicleTypeOptions.find(v => v.id === vehicleType)?.multiplier || 1.0;
  const isFullPackage = packageId.includes('full');
  const packageMultiplier = isFullPackage ? 1.0 : 0.4;
  
  return Math.round(film.basePrice * typeMultiplier * packageMultiplier);
}

function getAvailableTintPackages(vehicleType: VehicleTypeId): TintPackage[] {
  return tintPackages.filter(pkg => pkg.vehicleTypes.includes(vehicleType));
}

// Main Component
export function FilmConfigurator() {
  const { addToCart } = useCart();

  // Core State
  const [serviceType, setServiceType] = useState<ServiceType>('');
  const [ppfFinish, setPpfFinish] = useState<PPFFinish>('');

  // Vehicle State
  const [year, setYear] = useState<string>('');
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [subModel, setSubModel] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<VehicleTypeId>('');
  const [vehicleEntered, setVehicleEntered] = useState(false);

  // NHTSA API State
  const [modelOptions, setModelOptions] = useState<string[]>([]);
  const [loadingModels, setLoadingModels] = useState(false);

  // Fetch Models
  useEffect(() => {
    const fetchModels = async () => {
      if (!year || !make) {
        setModelOptions([]);
        return;
      }
      setLoadingModels(true);
      try {
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`
        );
        const data = await response.json();
        if (data.Results) {
          const models = data.Results
            .map((item: any) => item.Model_Name)
            .filter((v: any, i: any, a: any) => a.indexOf(v) === i)
            .sort();
          setModelOptions(models);
        }
      } catch (err) {
        console.error('Error fetching models:', err);
      } finally {
        setLoadingModels(false);
      }
    };
    fetchModels();
  }, [year, make]);

  // VIN Decoder
  const [vin, setVin] = useState<string>('');
  const [vinLoading, setVinLoading] = useState<boolean>(false);
  const [vinError, setVinError] = useState<string>('');

  // Selection State
  const [selectedFilm, setSelectedFilm] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [ppfPackage, setPpfPackage] = useState<string>('');
  const [tintPackage, setTintPackage] = useState<string>('');
  const [tintFilm, setTintFilm] = useState<string>('');
  const [tintVLT, setTintVLT] = useState<number>(35);

  // UI Collapse State
  const [isServiceExpanded, setIsServiceExpanded] = useState<boolean>(true);
  const [isVehicleTypeExpanded, setIsVehicleTypeExpanded] = useState<boolean>(false);
  const [isFinishExpanded, setIsFinishExpanded] = useState<boolean>(false);
  const [isFilmExpanded, setIsFilmExpanded] = useState<boolean>(false);
  const [isPackageExpanded, setIsPackageExpanded] = useState<boolean>(false);
  const [isTintFilmExpanded, setIsTintFilmExpanded] = useState<boolean>(false);
  const [isVLTExpanded, setIsVLTExpanded] = useState<boolean>(false);
  const [isColorExpanded, setIsColorExpanded] = useState<boolean>(false);

  // Cart Loading
  const [loading, setLoading] = useState(false);
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Calculate Price
  const price = useMemo(() => {
    if (!vehicleType) return 0;

    if (serviceType === 'color-ppf') {
      return selectedColor?.price || 0;
    } else if (serviceType === 'clear-ppf') {
      if (!ppfPackage || !selectedFilm) return 0;
      return calculatePPFPrice(vehicleType, ppfPackage, selectedFilm);
    } else if (serviceType === 'tint') {
      if (!tintPackage || !tintFilm) return 0;
      return calculateTintPrice(vehicleType, tintPackage, tintFilm);
    }
    return 0;
  }, [serviceType, vehicleType, ppfPackage, selectedFilm, selectedColor, tintPackage, tintFilm]);

  // VIN Decoder
  const decodeVIN = async () => {
    if (!vin || vin.length !== 17) {
      setVinError('Please enter a valid 17-character VIN');
      return;
    }

    setVinLoading(true);
    setVinError('');

    try {
      const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`);
      const data = await response.json();

      if (data.Results) {
        const results = data.Results;
        const getVariable = (varName: string) => {
          const item = results.find((r: any) => r.Variable === varName);
          return item?.Value || '';
        };

        const decodedYear = getVariable('Model Year');
        const decodedMake = getVariable('Make');
        const decodedModel = getVariable('Model');
        const decodedTrim = getVariable('Trim');

        if (decodedYear && decodedMake) {
          setYear(decodedYear);
          setMake(decodedMake);
          setModel(decodedModel || '');
          setSubModel(decodedTrim || '');
          setVehicleEntered(true);
          toast.success('VIN Decoded Successfully');
        } else {
          setVinError('Could not decode vehicle details. Please enter manually.');
        }
      }
    } catch (error) {
      setVinError('Failed to decode VIN. Please try again or enter details manually.');
      console.error('VIN decode error:', error);
    } finally {
      setVinLoading(false);
    }
  };

  // Manual Vehicle Entry
  const handleContinueWithVehicle = () => {
    if (!make) {
      setYear('2024');
      setMake('Tesla');
      setModel('Model Y');
      setSubModel('Long Range AWD');
    }
    setVehicleEntered(true);
  };

  // Handle Service Type Change
  const handleServiceChange = (newService: ServiceType) => {
    setServiceType(newService);
    setIsServiceExpanded(false);
    setIsVehicleTypeExpanded(true);
    setPpfFinish('');
    setSelectedFilm('');
    setSelectedColor(null);
    setPpfPackage('');
    setTintPackage('');
    setTintFilm('');
  };

  // Add to Cart
  const handleAddToCart = () => {
    setLoading(true);

    setTimeout(() => {
      const vehicleString = `${year} ${make} ${model}${subModel ? ' ' + subModel : ''}`.trim() || 'Vehicle';

      let item: any = {
        type: serviceType === 'tint' ? 'tint' : 'ppf',
        price: price,
        quantity: 1,
        details: {
          vehicle: { year, make, model, trim: subModel }
        }
      };

      if (serviceType === 'color-ppf') {
        item.name = `Color PPF - Full Body`;
        item.description = `${selectedColor?.name} ${ppfFinish === 'satin' ? 'Satin' : 'Gloss'} - Full Body for ${vehicleString}`;
        item.details.package = 'Full Body Color Change';
        item.details.color = selectedColor?.name;
        item.details.finish = ppfFinish;
      } else if (serviceType === 'clear-ppf') {
        const pkg = ppfPackages.find(p => p.id === ppfPackage);
        const film = [...clearFilms, stealthFilm].find(f => f.id === selectedFilm);
        item.name = `PPF - ${pkg?.name}`;
        item.description = `${film?.name} (${ppfFinish.includes('satin') ? 'Satin' : 'Gloss'}) - ${pkg?.name} for ${vehicleString}`;
        item.details.package = pkg?.name;
        item.details.film = film?.name;
        item.details.finish = ppfFinish;
      } else if (serviceType === 'tint') {
        const pkg = getAvailableTintPackages(vehicleType).find(p => p.id === tintPackage);
        const film = tintFilms.find(f => f.id === tintFilm);
        item.name = `Window Tint - ${pkg?.name}`;
        item.description = `${film?.name} (${tintVLT}% VLT) - ${pkg?.name} for ${vehicleString}`;
        item.details.package = pkg?.name;
        item.details.film = film?.name;
        item.details.vlt = tintVLT;
      }

      addToCart(item);
      
      toast.success(`${item.name} Added to Cart`, {
        description: 'Your configuration has been saved.'
      });
      setLoading(false);
    }, 800);
  };

  // Shopify Checkout Handler
  const handleShopifyBuy = async () => {
    setLoadingCheckout(true);
    
    // Create item for checkout
    const vehicleString = `${year} ${make} ${model}${subModel ? ' ' + subModel : ''}`.trim();
    let itemName = '';
    
    if (serviceType === 'color-ppf') {
      itemName = `Color PPF - ${selectedColor?.name} (${ppfFinish})`;
    } else if (serviceType === 'clear-ppf') {
      itemName = `PPF - ${ppfPackages.find(p => p.id === ppfPackage)?.name}`;
    } else if (serviceType === 'tint') {
      itemName = `Window Tint - ${getAvailableTintPackages(vehicleType).find(p => p.id === tintPackage)?.name}`;
    }

    try {
      // Create checkout using util
      const { webUrl } = await createShopifyCheckout([
        {
          variantId: 'gid://shopify/ProductVariant/123456789', // Mock variant ID
          quantity: 1,
          customAttributes: [
            { key: 'Vehicle', value: vehicleString },
            { key: 'Service', value: itemName }
          ]
        }
      ]);

      // Redirect or show success
      // window.location.href = webUrl; 
      toast.success('Redirecting to Checkout...', {
        description: 'Proceeding to secure Shopify checkout'
      });
      
    } catch (error) {
      toast.error('Checkout Failed', { description: 'Please try again' });
    } finally {
      setLoadingCheckout(false);
    }
  };

  // Get filtered colors based on finish
  const availableColors = useMemo(() => {
    if (!ppfFinish) return [];
    const finish = ppfFinish === 'gloss' ? 'gloss' : 'satin';
    return colors.filter(c => c.finish === finish);
  }, [ppfFinish]);

  // Get clear films based on finish
  const availableClearFilms = useMemo(() => {
    if (ppfFinish === 'clear-satin') return [stealthFilm];
    return clearFilms;
  }, [ppfFinish]);

  // Sub-component: Accordion Section
  const AccordionSection = ({ title, stepNumber, isExpanded, isCompleted, isDisabled, onToggle, children }: any) => {
    return (
      <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isDisabled ? 'border-border opacity-50 bg-muted/30' : 
        isCompleted ? 'border-primary/50 bg-primary/5' : 
        'border-border hover:border-primary/30 bg-card'
      }`}>
        <button
          type="button"
          onClick={() => {
            onToggle();
            if (isCompleted) {
              // Dispatch event to ensure live preview updates/scrolls into view on mobile
              window.dispatchEvent(new CustomEvent('update-live-preview'));
            }
          }}
          disabled={isDisabled}
          data-completed={isCompleted}
          className="w-full px-6 py-4 flex items-center justify-between bg-transparent hover:bg-muted/30 transition-colors disabled:cursor-not-allowed group"
        >
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
              isCompleted ? 'bg-primary text-primary-foreground shadow-md' :
              isDisabled ? 'bg-muted text-muted-foreground' :
              'bg-primary/10 text-primary'
            }`}>
              {isCompleted ? <Check className="w-4 h-4" /> : stepNumber}
            </div>
            <span className={`text-base font-semibold ${isDisabled ? 'text-muted-foreground' : 'text-card-foreground'}`}>
              {title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {isCompleted && !isExpanded && (
              <span className="text-sm text-primary font-medium animate-pulse">Completed</span>
            )}
            {isExpanded ? (
              <ChevronUp className={`w-5 h-5 ${isDisabled ? 'text-muted-foreground' : 'text-primary'}`} />
            ) : (
              <ChevronDown className={`w-5 h-5 ${isDisabled ? 'text-muted-foreground' : 'text-primary'}`} />
            )}
          </div>
        </button>
        
        <AnimatePresence>
          {isExpanded && !isDisabled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 py-4 bg-card border-t border-border [&_.service-btn::before]:hidden">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  // Sub-component: Vehicle Entry Screen
  const VehicleEntryScreen = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-card border border-border rounded-3xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
            <Car className="w-8 h-8 text-primary" />
          </div>
          <h2 className="mb-2 text-card-foreground font-bold text-2xl">Enter Your Vehicle Details</h2>
          <p className="text-muted-foreground">Start by decoding your VIN or entering manually</p>
        </div>

        {/* VIN Decoder Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Scan className="w-5 h-5 text-primary" />
            <h3 className="text-card-foreground font-semibold">VIN Decoder</h3>
          </div>
          <div className="flex gap-3">
            <Input
              value={vin}
              onChange={(e) => setVin(e.target.value.toUpperCase())}
              placeholder="Enter 17-character VIN"
              maxLength={17}
              className="flex-1 bg-background border-input text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary"
            />
            <Button
              onClick={decodeVIN}
              disabled={vinLoading || vin.length !== 17}
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-0"
            >
              {vinLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Decoding...
                </>
              ) : (
                'Decode'
              )}
            </Button>
          </div>
          {vinError && (
            <p className="text-sm text-destructive mt-2">{vinError}</p>
          )}
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-card text-muted-foreground">or enter manually</span>
          </div>
        </div>

        {/* Manual Entry */}
        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-2 font-medium">Year</label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="bg-background border-input text-foreground">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {YEARS.map((y) => (
                    <SelectItem key={y} value={y}>{y}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2 font-medium">Make</label>
              <Select value={make} onValueChange={(val) => {
                setMake(val);
                setModel('');
                setSubModel('');
              }}>
                <SelectTrigger className="bg-background border-input text-foreground">
                  <SelectValue placeholder="Select Make" />
                </SelectTrigger>
                <SelectContent>
                  {POPULAR_MAKES.map((m) => (
                    <SelectItem key={m} value={m}>{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2 font-medium">Model</label>
            <Select 
              value={model} 
              onValueChange={setModel} 
              disabled={!make || !year || loadingModels}
            >
              <SelectTrigger className="bg-background border-input text-foreground disabled:opacity-50">
                <SelectValue placeholder={loadingModels ? "Loading models..." : "Select Model"} />
              </SelectTrigger>
              <SelectContent>
                {modelOptions.map((m) => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2 font-medium">Trim / Sub Model (Optional)</label>
            <Input
              value={subModel}
              onChange={(e) => setSubModel(e.target.value)}
              placeholder="e.g. Long Range AWD"
              disabled={!model}
              className="bg-background border-input text-foreground placeholder:text-muted-foreground/50 disabled:opacity-50"
            />
          </div>
        </div>

        <Button
          onClick={handleContinueWithVehicle}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-bold"
          disabled={!make || !model}
        >
          Start Configuration <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </motion.div>
  );

  return (
    <div id="vehicle-configurator" className="min-h-screen bg-background py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!vehicleEntered ? (
            <VehicleEntryScreen key="vehicle-entry" />
          ) : (
            <motion.div 
              key="configurator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Column: Configuration Steps */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-3xl font-bold text-card-foreground">Customize Your Protection</h1>
                  <Button 
                    variant="outline" 
                    onClick={() => setVehicleEntered(false)}
                    className="text-sm border-border text-muted-foreground hover:bg-muted/50"
                  >
                    Change Vehicle
                  </Button>
                </div>
                
                {/* 1. Service Type */}
                <AccordionSection 
                  title="Select Service" 
                  stepNumber="1"
                  isExpanded={isServiceExpanded} 
                  isCompleted={!!serviceType}
                  isDisabled={false}
                  onToggle={() => setIsServiceExpanded(!isServiceExpanded)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { id: 'clear-ppf', name: 'Clear PPF', icon: Shield, desc: 'Invisible Paint Protection' },
                      { id: 'color-ppf', name: 'Color Change PPF', icon: Sparkles, desc: 'Restyle & Protect' },
                      { id: 'tint', name: 'Window Tint', icon: Sun, desc: 'Heat & UV Rejection' }
                    ].map((service) => {
                      const Icon = service.icon;
                      return (
                        <button
                          key={service.id}
                          onClick={() => handleServiceChange(service.id as ServiceType)}
                          className={`relative p-4 rounded-xl border text-left transition-all service-btn ${
                            serviceType === service.id 
                              ? 'border-primary bg-primary/10 ring-1 ring-primary' 
                              : 'border-border bg-card hover:border-primary/50'
                          }`}
                        >
                          <Icon className={`w-8 h-8 mb-3 ${serviceType === service.id ? 'text-primary' : 'text-muted-foreground'}`} />
                          <div className="font-bold text-lg mb-1">{service.name}</div>
                          <div className="text-sm text-muted-foreground">{service.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </AccordionSection>

                {/* 2. Vehicle Type (Pricing) */}
                <AccordionSection 
                  title="Vehicle Type" 
                  stepNumber="2"
                  isExpanded={isVehicleTypeExpanded} 
                  isCompleted={!!vehicleType}
                  isDisabled={!serviceType}
                  onToggle={() => setIsVehicleTypeExpanded(!isVehicleTypeExpanded)}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {vehicleTypeOptions.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => {
                          setVehicleType(type.id as VehicleTypeId);
                          setIsVehicleTypeExpanded(false);
                          if (serviceType === 'tint') {
                            setIsPackageExpanded(true); // Skip finish/film for tint
                          } else {
                            setIsFinishExpanded(true);
                          }
                        }}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          vehicleType === type.id 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border bg-card hover:border-primary/50'
                        }`}
                      >
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className="font-semibold">{type.label}</div>
                        <div className="text-xs text-muted-foreground">{type.description}</div>
                      </button>
                    ))}
                  </div>
                </AccordionSection>

                {/* 3. Finish / Options (PPF Only) */}
                {serviceType !== 'tint' && (
                  <AccordionSection 
                    title="Finish & Style" 
                    stepNumber="3"
                    isExpanded={isFinishExpanded} 
                    isCompleted={!!ppfFinish}
                    isDisabled={!vehicleType}
                    onToggle={() => setIsFinishExpanded(!isFinishExpanded)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {serviceType === 'clear-ppf' ? (
                        <>
                          <button
                            onClick={() => {
                              setPpfFinish('clear-gloss');
                              setIsFinishExpanded(false);
                              setIsFilmExpanded(true);
                            }}
                            className={`p-4 rounded-xl border flex items-center gap-4 transition-all ${
                              ppfFinish === 'clear-gloss' ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/50'
                            }`}
                          >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-200 to-white shadow-inner" />
                            <div className="text-left">
                              <div className="font-bold">Gloss Finish</div>
                              <div className="text-sm text-muted-foreground">Invisible, showroom shine</div>
                            </div>
                          </button>
                          <button
                            onClick={() => {
                              setPpfFinish('clear-satin');
                              setIsFinishExpanded(false);
                              setIsFilmExpanded(true);
                            }}
                            className={`p-4 rounded-xl border flex items-center gap-4 transition-all ${
                              ppfFinish === 'clear-satin' ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/50'
                            }`}
                          >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-400 to-gray-200 shadow-inner opacity-80" />
                            <div className="text-left">
                              <div className="font-bold">Satin / Matte</div>
                              <div className="text-sm text-muted-foreground">Frozen look, satin texture</div>
                            </div>
                          </button>
                        </>
                      ) : (
                        /* Color PPF Finishes */
                        <>
                          <button
                            onClick={() => {
                              setPpfFinish('gloss');
                              setIsFinishExpanded(false);
                              setIsColorExpanded(true);
                            }}
                            className={`p-4 rounded-xl border flex items-center gap-4 transition-all ${
                              ppfFinish === 'gloss' ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/50'
                            }`}
                          >
                            <Sparkles className="w-6 h-6 text-yellow-500" />
                            <div className="text-left">
                              <div className="font-bold">Gloss Color</div>
                              <div className="text-sm text-muted-foreground">High gloss paint-like finish</div>
                            </div>
                          </button>
                          <button
                            onClick={() => {
                              setPpfFinish('satin');
                              setIsFinishExpanded(false);
                              setIsColorExpanded(true);
                            }}
                            className={`p-4 rounded-xl border flex items-center gap-4 transition-all ${
                              ppfFinish === 'satin' ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/50'
                            }`}
                          >
                            <Eye className="w-6 h-6 text-gray-500" />
                            <div className="text-left">
                              <div className="font-bold">Satin Color</div>
                              <div className="text-sm text-muted-foreground">Matte/Frozen color finish</div>
                            </div>
                          </button>
                        </>
                      )}
                    </div>
                  </AccordionSection>
                )}

                {/* 4. Specific Selection (Film/Color/Tint) */}
                <AccordionSection 
                  title={serviceType === 'color-ppf' ? 'Select Color' : serviceType === 'tint' ? 'Tint Package' : 'Select Film'} 
                  stepNumber={serviceType === 'tint' ? '3' : '4'}
                  isExpanded={serviceType === 'tint' ? isPackageExpanded : serviceType === 'color-ppf' ? isColorExpanded : isFilmExpanded} 
                  isCompleted={serviceType === 'color-ppf' ? !!selectedColor : serviceType === 'tint' ? !!tintPackage : !!selectedFilm}
                  isDisabled={serviceType === 'tint' ? !vehicleType : !ppfFinish}
                  onToggle={() => {
                     if (serviceType === 'tint') setIsPackageExpanded(!isPackageExpanded);
                     else if (serviceType === 'color-ppf') setIsColorExpanded(!isColorExpanded);
                     else setIsFilmExpanded(!isFilmExpanded);
                  }}
                >
                  {serviceType === 'clear-ppf' && (
                    <div className="grid grid-cols-1 gap-4">
                      {availableClearFilms.map((film) => (
                        <div 
                          key={film.id}
                          onClick={() => {
                            setSelectedFilm(film.id);
                            setIsFilmExpanded(false);
                            setIsPackageExpanded(true);
                          }}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            selectedFilm === film.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="font-bold text-lg mb-1">{film.name}</div>
                              <p className="text-sm text-muted-foreground mb-3">{film.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {film.features.map((f, i) => (
                                  <span key={i} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">{f}</span>
                                ))}
                              </div>
                            </div>
                            {selectedFilm === film.id && <Check className="text-primary w-6 h-6" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {serviceType === 'color-ppf' && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {availableColors.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => {
                            setSelectedColor(color);
                            setIsColorExpanded(false);
                            setIsPackageExpanded(true); // Technically done for color, but maybe just finish?
                          }}
                          className={`group p-2 rounded-xl border transition-all ${
                            selectedColor?.id === color.id ? 'border-primary ring-1 ring-primary' : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div 
                            className="w-full h-20 rounded-lg mb-2 shadow-sm"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="text-sm font-medium text-center">{color.name}</div>
                        </button>
                      ))}
                    </div>
                  )}

                  {serviceType === 'tint' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getAvailableTintPackages(vehicleType).map((pkg) => (
                         <button
                           key={pkg.id}
                           onClick={() => {
                             setTintPackage(pkg.id);
                             setIsPackageExpanded(false);
                             setIsTintFilmExpanded(true);
                           }}
                           className={`p-4 rounded-xl border text-left transition-all ${
                             tintPackage === pkg.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                           }`}
                         >
                           <div className="font-bold mb-1">{pkg.name}</div>
                           <div className="text-sm text-muted-foreground mb-3">{pkg.description}</div>
                           <div className="flex flex-wrap gap-1">
                              {pkg.windows.map((w, i) => (
                                <span key={i} className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">{w}</span>
                              ))}
                           </div>
                         </button>
                      ))}
                    </div>
                  )}
                </AccordionSection>

                {/* 5. Package / Film (Depends on flow) */}
                {serviceType !== 'color-ppf' && (
                  <AccordionSection 
                    title={serviceType === 'tint' ? 'Select Tint Film' : 'Select Coverage Package'} 
                    stepNumber={serviceType === 'tint' ? '4' : '5'}
                    isExpanded={serviceType === 'tint' ? isTintFilmExpanded : isPackageExpanded} 
                    isCompleted={serviceType === 'tint' ? !!tintFilm : !!ppfPackage}
                    isDisabled={serviceType === 'tint' ? !tintPackage : !selectedFilm}
                    onToggle={() => {
                      if (serviceType === 'tint') setIsTintFilmExpanded(!isTintFilmExpanded);
                      else setIsPackageExpanded(!isPackageExpanded);
                    }}
                  >
                    {serviceType === 'clear-ppf' && (
                       <div className="grid grid-cols-1 gap-4">
                         {ppfPackages.map((pkg) => (
                           <button
                             key={pkg.id}
                             onClick={() => {
                               setPpfPackage(pkg.id);
                               setIsPackageExpanded(false);
                             }}
                             className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                               ppfPackage === pkg.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                             }`}
                           >
                             <div className="flex justify-between items-start mb-2 relative z-10">
                               <div>
                                 <div className="font-bold text-lg">{pkg.name}</div>
                                 <div className="text-sm text-muted-foreground">{pkg.description}</div>
                               </div>
                               <div className="font-bold text-primary">
                                  ${calculatePPFPrice(vehicleType, pkg.id, selectedFilm).toLocaleString()}
                               </div>
                             </div>
                             <div className="flex flex-wrap gap-2 relative z-10">
                               {pkg.coverage.map((item, i) => (
                                 <span key={i} className="text-xs flex items-center gap-1 text-muted-foreground">
                                   <Check className="w-3 h-3 text-green-500" /> {item}
                                 </span>
                               ))}
                             </div>
                           </button>
                         ))}
                       </div>
                    )}

                    {serviceType === 'tint' && (
                       <div className="grid grid-cols-1 gap-4">
                         {tintFilms.map((film) => (
                           <button
                             key={film.id}
                             onClick={() => {
                               setTintFilm(film.id);
                               setIsTintFilmExpanded(false);
                               setIsVLTExpanded(true);
                             }}
                             className={`p-4 rounded-xl border text-left transition-all ${
                               tintFilm === film.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                             }`}
                           >
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                   <div className="font-bold text-lg">{film.name}</div>
                                   <div className="text-sm text-muted-foreground">{film.description}</div>
                                </div>
                                <div className="font-bold text-primary">
                                  ${calculateTintPrice(vehicleType, tintPackage, film.id).toLocaleString()}
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                                <div className="bg-muted p-2 rounded">
                                  <div className="font-bold">{film.heatRejection}</div>
                                  <div className="text-xs text-muted-foreground">Heat Reject</div>
                                </div>
                                <div className="bg-muted p-2 rounded">
                                  <div className="font-bold">{film.uvRejection}</div>
                                  <div className="text-xs text-muted-foreground">UV Reject</div>
                                </div>
                                <div className="bg-muted p-2 rounded">
                                  <div className="font-bold">{film.warranty}</div>
                                  <div className="text-xs text-muted-foreground">Warranty</div>
                                </div>
                              </div>
                           </button>
                         ))}
                       </div>
                    )}
                  </AccordionSection>
                )}

                {/* 6. Tint Shade (VLT) - Tint Only */}
                {serviceType === 'tint' && (
                   <AccordionSection
                     title="Select Darkness (VLT)"
                     stepNumber="5"
                     isExpanded={isVLTExpanded}
                     isCompleted={!!tintVLT}
                     isDisabled={!tintFilm}
                     onToggle={() => setIsVLTExpanded(!isVLTExpanded)}
                   >
                     <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                       {vltOptions.map((opt) => (
                         <button
                           key={opt.value}
                           onClick={() => {
                             setTintVLT(opt.value);
                             setIsVLTExpanded(false);
                           }}
                           className={`p-3 rounded-xl border text-center transition-all ${
                             tintVLT === opt.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                           }`}
                         >
                           <div 
                             className="w-12 h-12 rounded-full border border-gray-300 mx-auto mb-2 shadow-inner"
                             style={{ backgroundColor: `rgba(0,0,0,${1 - (opt.value / 100)})` }}
                           />
                           <div className="font-bold">{opt.value}%</div>
                           <div className="text-xs text-muted-foreground">{opt.label}</div>
                         </button>
                       ))}
                     </div>
                     <p className="text-xs text-muted-foreground mt-4 text-center">
                       *VLT (Visible Light Transmission) refers to the amount of light that passes through the film. Lower number = Darker tint.
                     </p>
                   </AccordionSection>
                )}
              </div>

              {/* Right Column: Live Summary & Preview */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                  {/* Vehicle Card */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Car className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">{year} {make}</div>
                        <div className="text-muted-foreground">{model} {subModel}</div>
                      </div>
                    </div>
                    
                    {/* Selected Options Summary */}
                    <div className="space-y-3 mb-6">
                      {serviceType && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Service</span>
                          <span className="font-medium">
                            {serviceType === 'clear-ppf' ? 'Clear PPF' : 
                             serviceType === 'color-ppf' ? 'Color Change' : 'Window Tint'}
                          </span>
                        </div>
                      )}
                      
                      {(selectedFilm || selectedColor || tintFilm) && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Film / Material</span>
                          <span className="font-medium text-right">
                             {serviceType === 'clear-ppf' ? clearFilms.concat(stealthFilm).find(f => f.id === selectedFilm)?.name :
                              serviceType === 'color-ppf' ? `${selectedColor?.name} (${ppfFinish})` :
                              tintFilms.find(f => f.id === tintFilm)?.name}
                          </span>
                        </div>
                      )}

                      {(ppfPackage || tintPackage) && (
                        <div className="flex justify-between text-sm">
                           <span className="text-muted-foreground">Coverage</span>
                           <span className="font-medium text-right">
                             {serviceType === 'tint' ? tintPackages.find(p => p.id === tintPackage)?.name :
                              ppfPackages.find(p => p.id === ppfPackage)?.name}
                           </span>
                        </div>
                      )}

                      {tintVLT && serviceType === 'tint' && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Shade</span>
                          <span className="font-medium">{tintVLT}% VLT</span>
                        </div>
                      )}
                    </div>

                    {/* Total Price */}
                    <div className="pt-4 border-t border-border mb-6">
                      <div className="flex justify-between items-end">
                        <span className="text-muted-foreground">Estimated Total</span>
                        <div className="text-3xl font-bold text-primary">
                          ${price.toLocaleString()}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-right">
                        *Final price confirmed at inspection
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Button 
                        onClick={handleAddToCart}
                        disabled={!price || loading}
                        className="w-full bg-primary hover:bg-primary/90 h-12 font-bold"
                      >
                         {loading ? <Loader2 className="animate-spin" /> : 'Add to Cart'}
                      </Button>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <Button 
                          variant="outline" 
                          onClick={() => setIsBookingModalOpen(true)}
                          disabled={!price}
                          className="w-full"
                        >
                          <CalendarIcon className="w-4 h-4 mr-2" /> Book Now
                        </Button>
                        <Button 
                          variant="secondary"
                          onClick={handleShopifyBuy}
                          disabled={!price || loadingCheckout}
                          className="w-full bg-[#96bf48] hover:bg-[#85ab3d] text-white border-0"
                        >
                          {loadingCheckout ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                            <><span className="mr-1">Buy</span> w/ Shop</>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground">
                    <div className="bg-card border rounded-lg p-2 flex flex-col items-center gap-1">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Warranty Included</span>
                    </div>
                    <div className="bg-card border rounded-lg p-2 flex flex-col items-center gap-1">
                      <Award className="w-4 h-4 text-primary" />
                      <span>Certified Installers</span>
                    </div>
                    <div className="bg-card border rounded-lg p-2 flex flex-col items-center gap-1">
                      <Zap className="w-4 h-4 text-primary" />
                      <span>Fast Turnaround</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceType={serviceType || 'general'}
        vehicleInfo={{ year, make, model }}
      />
    </div>
  );
}
