import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, Shield, ShoppingCart, Loader2, Info, Car, Sun, 
  ChevronRight, ChevronDown, ArrowRight, Zap, Award, Scan, Eye,
  Sparkles, Package, ChevronUp
} from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { toast } from 'sonner@2.0.3';
import { useCart } from '../../../utils/cartContext';

// ==================== TYPES ====================

type ServiceType = 'clear-ppf' | 'color-ppf' | 'tint' | '';
type PPFFinish = 'clear-gloss' | 'clear-satin' | 'gloss' | 'satin' | '';
type VehicleTypeId = 'sedan' | 'suv' | 'large-suv' | 'truck' | 'coupe' | 'exotic' | '';

interface ColorOption {
  id: string;
  name: string;
  hex: string;
  finish: 'gloss' | 'satin';
  price: number;
  overlayColor: string;
  overlayOpacity: number;
}

interface FilmOption {
  id: string;
  name: string;
  description: string;
  icon: any;
  features: string[];
  modifier: number; // Price modifier
}

interface PPFPackage {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  coverage: string[];
}

interface TintFilm {
  id: string;
  name: string;
  description: string;
  heatRejection: string;
  uvRejection: string;
  warranty: string;
  basePrice: number;
}

interface TintPackage {
  id: string;
  name: string;
  description: string;
  windows: string[];
  vehicleTypes: string[];
}

// ==================== DATA ====================

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

// ==================== HELPER FUNCTIONS ====================

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

// ==================== MAIN COMPONENT ====================

export function VehicleServiceConfigurator() {
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
    // Reset downstream selections
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4">
            <Shield className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-600">Interactive Studio</span>
          </div>
          <h1 className="mb-4 text-gray-900">Vehicle Configurator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Configure your perfect XPEL protection package with live preview and instant pricing
          </p>
        </motion.div>

        {!vehicleEntered ? (
          // VEHICLE ENTRY SCREEN
          <VehicleEntryScreen
            vin={vin}
            setVin={setVin}
            vinLoading={vinLoading}
            vinError={vinError}
            decodeVIN={decodeVIN}
            year={year}
            setYear={setYear}
            make={make}
            setMake={setMake}
            model={model}
            setModel={setModel}
            subModel={subModel}
            setSubModel={setSubModel}
            onContinue={handleContinueWithVehicle}
          />
        ) : (
          // MAIN CONFIGURATOR
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column - Configuration */}
            <div className="lg:col-span-6 space-y-6">
              {/* Vehicle Summary */}
              <VehicleSummaryCard
                year={year}
                make={make}
                model={model}
                subModel={subModel}
                onReset={() => setVehicleEntered(false)}
              />

              {/* Main Configuration Card - Accordion Style */}
              <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4">
                {/* Step 1: Service Selection - Always visible */}
                <AccordionSection
                  title="Service Type"
                  stepNumber={1}
                  isExpanded={isServiceExpanded}
                  isCompleted={!!serviceType}
                  isDisabled={false}
                  onToggle={() => setIsServiceExpanded(!isServiceExpanded)}
                >
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: 'clear-ppf', name: 'Clear PPF', fullName: 'XPEL Paint Protection Film (Clear)', icon: Shield },
                      { id: 'color-ppf', name: 'Color PPF', fullName: 'XPEL Color Paint Protection Film', icon: Sparkles },
                      { id: 'tint', name: 'Window Tint', fullName: 'XPEL Automotive Window Tint', icon: Sun }
                    ].map((service) => (
                      <button
                        key={service.id}
                        onClick={() => {
                          handleServiceChange(service.id as ServiceType);
                          setIsServiceExpanded(false);
                          setIsVehicleTypeExpanded(true);
                        }}
                        className={`p-4 rounded-xl border-2 text-left flex items-center gap-3 transition-all duration-200 ${
                          serviceType === service.id 
                            ? 'border-[#017974] bg-[#017974]/5 shadow-sm' 
                            : 'border-gray-200 hover:border-[#017974]/50 hover:bg-gray-50'
                        }`}
                      >
                        <service.icon className={`w-5 h-5 ${serviceType === service.id ? 'text-[#017974]' : 'text-gray-500'}`} />
                        <span className={`font-medium ${serviceType === service.id ? 'text-[#017974]' : 'text-gray-900'}`}>
                          {service.fullName}
                        </span>
                        {serviceType === service.id && <Check className="w-5 h-5 text-[#017974] ml-auto" />}
                      </button>
                    ))}
                  </div>
                </AccordionSection>

                {/* Step 2: Vehicle Type Selection - Always visible, disabled until service selected */}
                <AccordionSection
                  title="Vehicle Type"
                  stepNumber={2}
                  isExpanded={isVehicleTypeExpanded}
                  isCompleted={!!vehicleType}
                  isDisabled={!serviceType}
                  onToggle={() => !serviceType ? null : setIsVehicleTypeExpanded(!isVehicleTypeExpanded)}
                >
                  <div className="grid grid-cols-2 gap-3">
                    {vehicleTypeOptions.map((type) => {
                      // Map vehicle types to vector icons
                      const VehicleIcon = 
                        type.id === 'sedan' ? Car :
                        type.id === 'suv' || type.id === 'large-suv' ? Car :
                        type.id === 'truck' ? Car :
                        type.id === 'coupe' ? Zap :
                        type.id === 'exotic' ? Sparkles :
                        Car;
                      
                      return (
                        <button
                          key={type.id}
                          onClick={() => {
                            setVehicleType(type.id as VehicleTypeId);
                            setIsVehicleTypeExpanded(false);
                            if (serviceType !== 'tint') {
                              setIsFinishExpanded(true);
                            } else {
                              setIsPackageExpanded(true);
                            }
                          }}
                          className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                            vehicleType === type.id 
                              ? 'border-[#017974] bg-[#017974]/5 shadow-sm' 
                              : 'border-gray-200 hover:border-[#017974]/50 hover:bg-gray-50'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${
                            vehicleType === type.id ? 'bg-[#017974]/10' : 'bg-gray-100'
                          }`}>
                            <VehicleIcon className={`w-5 h-5 ${vehicleType === type.id ? 'text-[#017974]' : 'text-gray-500'}`} />
                          </div>
                          <div className={`text-sm font-medium ${vehicleType === type.id ? 'text-[#017974]' : 'text-gray-900'}`}>
                            {type.label}
                          </div>
                          {vehicleType === type.id && <Check className="w-4 h-4 text-[#017974] mt-1" />}
                        </button>
                      );
                    })}
                  </div>
                </AccordionSection>

                {/* Step 3: PPF Finish Selection - For PPF only */}
                {serviceType !== 'tint' && serviceType && (
                  <AccordionSection
                    title="Film Finish"
                    stepNumber={3}
                    isExpanded={isFinishExpanded}
                    isCompleted={!!ppfFinish}
                    isDisabled={!vehicleType}
                    onToggle={() => !vehicleType ? null : setIsFinishExpanded(!isFinishExpanded)}
                  >
                    <div className="flex gap-3 p-2 bg-gray-100 rounded-xl">
                      {(serviceType === 'clear-ppf' 
                        ? [{ value: 'clear-gloss', label: 'Clear Gloss' }, { value: 'clear-satin', label: 'Clear Satin' }]
                        : [{ value: 'gloss', label: 'Gloss' }, { value: 'satin', label: 'Satin' }]
                      ).map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setPpfFinish(option.value as PPFFinish);
                            setIsFinishExpanded(false);
                            if (serviceType === 'color-ppf') {
                              setIsColorExpanded(true);
                            } else {
                              setIsFilmExpanded(true);
                            }
                          }}
                          className={`flex-1 py-2 px-3 rounded-lg transition-all font-medium ${
                            ppfFinish === option.value 
                              ? 'bg-white shadow-md text-[#017974]' 
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </AccordionSection>
                )}

                {/* Step 4a: Color Selection - For color PPF only */}
                {serviceType === 'color-ppf' && (
                  <AccordionSection
                    title="Color Selection"
                    stepNumber={4}
                    isExpanded={isColorExpanded}
                    isCompleted={!!selectedColor}
                    isDisabled={!ppfFinish}
                    onToggle={() => !ppfFinish ? null : setIsColorExpanded(!isColorExpanded)}
                  >
                    <ColorSelection
                      colors={availableColors}
                      selectedColor={selectedColor}
                      isExpanded={true}
                      ppfFinish={ppfFinish}
                      onExpand={() => {}}
                      onChange={(color) => {
                        setSelectedColor(color);
                        setIsColorExpanded(false);
                      }}
                    />
                  </AccordionSection>
                )}

                {/* Step 4b: Clear PPF Film Selection */}
                {serviceType === 'clear-ppf' && (
                  <AccordionSection
                    title="Film Selection"
                    stepNumber={4}
                    isExpanded={isFilmExpanded}
                    isCompleted={!!selectedFilm}
                    isDisabled={!ppfFinish}
                    onToggle={() => !ppfFinish ? null : setIsFilmExpanded(!isFilmExpanded)}
                  >
                    <FilmSelection
                      films={availableClearFilms}
                      selectedFilm={selectedFilm}
                      isExpanded={true}
                      onExpand={() => {}}
                      onChange={(film) => {
                        setSelectedFilm(film);
                        setIsFilmExpanded(false);
                        setIsPackageExpanded(true);
                      }}
                    />
                  </AccordionSection>
                )}

                {/* Step 5: Clear PPF Package Selection */}
                {serviceType === 'clear-ppf' && (
                  <AccordionSection
                    title="Coverage Package"
                    stepNumber={5}
                    isExpanded={isPackageExpanded}
                    isCompleted={!!ppfPackage}
                    isDisabled={!selectedFilm}
                    onToggle={() => !selectedFilm ? null : setIsPackageExpanded(!isPackageExpanded)}
                  >
                    <PPFPackageSelection
                      packages={ppfPackages}
                      selectedPackage={ppfPackage}
                      isExpanded={true}
                      onExpand={() => {}}
                      onChange={(pkg) => {
                        setPpfPackage(pkg);
                        setIsPackageExpanded(false);
                      }}
                    />
                  </AccordionSection>
                )}

                {/* Step 3: Tint Package Selection */}
                {serviceType === 'tint' && (
                  <AccordionSection
                    title="Tint Package"
                    stepNumber={3}
                    isExpanded={isPackageExpanded}
                    isCompleted={!!tintPackage}
                    isDisabled={!vehicleType}
                    onToggle={() => !vehicleType ? null : setIsPackageExpanded(!isPackageExpanded)}
                  >
                    <TintPackageSelection
                      packages={getAvailableTintPackages(vehicleType)}
                      selectedPackage={tintPackage}
                      isExpanded={true}
                      onExpand={() => {}}
                      onChange={(pkg) => {
                        setTintPackage(pkg);
                        setIsPackageExpanded(false);
                        setIsTintFilmExpanded(true);
                      }}
                    />
                  </AccordionSection>
                )}

                {/* Step 4: Tint Film Selection */}
                {serviceType === 'tint' && (
                  <AccordionSection
                    title="Film Type"
                    stepNumber={4}
                    isExpanded={isTintFilmExpanded}
                    isCompleted={!!tintFilm}
                    isDisabled={!tintPackage}
                    onToggle={() => !tintPackage ? null : setIsTintFilmExpanded(!isTintFilmExpanded)}
                  >
                    <TintFilmSelection
                      films={tintFilms}
                      selectedFilm={tintFilm}
                      isExpanded={true}
                      onExpand={() => {}}
                      onChange={(film) => {
                        setTintFilm(film);
                        setIsTintFilmExpanded(false);
                        setIsVLTExpanded(true);
                      }}
                    />
                  </AccordionSection>
                )}

                {/* Step 5: VLT Selection */}
                {serviceType === 'tint' && (
                  <AccordionSection
                    title="Darkness Level (VLT)"
                    stepNumber={5}
                    isExpanded={isVLTExpanded}
                    isCompleted={!!tintVLT}
                    isDisabled={!tintFilm}
                    onToggle={() => !tintFilm ? null : setIsVLTExpanded(!isVLTExpanded)}
                  >
                    <VLTSelection
                      vltOptions={vltOptions}
                      selectedVLT={tintVLT}
                      isExpanded={true}
                      onExpand={() => {}}
                      onChange={(vlt) => {
                        setTintVLT(vlt);
                        setIsVLTExpanded(false);
                      }}
                    />
                  </AccordionSection>
                )}
              </div>
            </div>

            {/* Right Column - Preview & Summary */}
            <div className="lg:col-span-6">
              <div className="lg:sticky lg:top-24">
                <LivePreview
                  serviceType={serviceType}
                  ppfFinish={ppfFinish}
                  selectedColor={selectedColor}
                  tintVLT={tintVLT}
                  year={year}
                  make={make}
                  model={model}
                  price={price}
                  onAddToCart={handleAddToCart}
                  loading={loading}
                  ppfPackage={ppfPackages.find(p => p.id === ppfPackage)}
                  tintPackage={getAvailableTintPackages(vehicleType).find(p => p.id === tintPackage)}
                  selectedFilm={[...clearFilms, stealthFilm].find(f => f.id === selectedFilm)?.name || tintFilms.find(f => f.id === tintFilm)?.name}
                />
              </div>
            </div>

            {/* Bottom Section - Dynamic Features */}
            <div className="lg:col-span-12 mt-4 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(
                  serviceType === 'tint' ? [
                    { title: "Heat Rejection", desc: "Blocks up to 98% of infrared heat for a cooler cabin.", icon: Sun },
                    { title: "UV Protection", desc: "SPF 1000 protection blocks 99% of harmful UV rays.", icon: Shield },
                    { title: "Crystal Clear", desc: "Nano-ceramic technology ensures zero signal interference.", icon: Zap },
                    { title: "Lifetime Warranty", desc: "Guaranteed against fading, peeling, and bubbling.", icon: Award }
                  ] :
                  serviceType === 'color-ppf' ? [
                    { title: "Instant Color Change", desc: "Transform your vehicle's look instantly without paint.", icon: Sparkles },
                    { title: "Real Protection", desc: "Thicker than vinyl for genuine rock chip protection.", icon: Shield },
                    { title: "Self-Healing", desc: "Heat-activated top coat repairs minor swirls & scratches.", icon: Zap },
                    { title: "10-Year Warranty", desc: "Backed by XPEL's comprehensive manufacturer warranty.", icon: Award }
                  ] :
                  // Default / Clear PPF
                  [
                    { title: "Invisible Shield", desc: "Virtually invisible protection for your factory paint.", icon: Eye },
                    { title: "Self-Healing", desc: "Swirls and light scratches disappear with heat.", icon: Sparkles },
                    { title: "Stain Resistant", desc: "Hydrophobic properties repel dirt and road grime.", icon: Shield },
                    { title: "10-Year Warranty", desc: "Nationwide coverage against yellowing and defects.", icon: Award }
                  ]
                ).map((feature, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-[#017974]/10 flex items-center justify-center mb-4 group-hover:bg-[#017974] transition-colors">
                      <feature.icon className="w-6 h-6 text-[#017974] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ==================== SUB-COMPONENTS ====================

// Accordion Section Wrapper
function AccordionSection({ title, stepNumber, isExpanded, isCompleted, isDisabled, onToggle, children }: any) {
  return (
    <div className={`border-2 rounded-2xl overflow-hidden transition-all ${
      isDisabled ? 'border-gray-200 opacity-50' : 
      isCompleted ? 'border-purple-300 bg-purple-50/30' : 
      'border-gray-200 hover:border-purple-200'
    }`}>
      <button
        onClick={onToggle}
        disabled={isDisabled}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors disabled:cursor-not-allowed"
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
            isCompleted ? 'bg-purple-600 text-white' :
            isDisabled ? 'bg-gray-200 text-gray-400' :
            'bg-purple-100 text-purple-600'
          }`}>
            {isCompleted ? <Check className="w-4 h-4" /> : stepNumber}
          </div>
          <span className={`font-medium ${isDisabled ? 'text-gray-400' : 'text-gray-900'}`}>
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isCompleted && !isExpanded && (
            <span className="text-sm text-purple-600">Completed</span>
          )}
          {isExpanded ? (
            <ChevronUp className={`w-5 h-5 ${isDisabled ? 'text-gray-400' : 'text-gray-600'}`} />
          ) : (
            <ChevronDown className={`w-5 h-5 ${isDisabled ? 'text-gray-400' : 'text-gray-600'}`} />
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
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Vehicle Entry Screen Component
function VehicleEntryScreen({ vin, setVin, vinLoading, vinError, decodeVIN, year, setYear, make, setMake, model, setModel, subModel, setSubModel, onContinue }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Car className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="mb-2 text-gray-900">Enter Your Vehicle Details</h2>
          <p className="text-gray-600">Start by decoding your VIN or entering manually</p>
        </div>

        {/* VIN Decoder Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Scan className="w-5 h-5 text-purple-600" />
            <h3 className="text-gray-900">VIN Decoder</h3>
          </div>
          <div className="flex gap-3">
            <Input
              value={vin}
              onChange={(e) => setVin(e.target.value.toUpperCase())}
              placeholder="Enter 17-character VIN"
              maxLength={17}
              className="flex-1"
            />
            <Button
              onClick={decodeVIN}
              disabled={vinLoading || vin.length !== 17}
              className="bg-purple-600 hover:bg-purple-700 text-white"
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
            <p className="text-sm text-red-600 mt-2">{vinError}</p>
          )}
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or enter manually</span>
          </div>
        </div>

        {/* Manual Entry */}
        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Year</label>
            <Input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="e.g. 2024"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Make</label>
            <Input
              value={make}
              onChange={(e) => setMake(e.target.value)}
              placeholder="e.g. Tesla"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Model</label>
            <Input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="e.g. Model Y"
              disabled={!make}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Trim / Sub Model (Optional)</label>
            <Input
              value={subModel}
              onChange={(e) => setSubModel(e.target.value)}
              placeholder="e.g. Long Range AWD"
              disabled={!model}
            />
          </div>
        </div>

        <Button
          onClick={onContinue}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6"
        >
          Continue to Configuration
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
}

// Vehicle Summary Card
function VehicleSummaryCard({ year, make, model, subModel, onReset }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <Car className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <div className="text-gray-900">
            {year} {make} {model}
          </div>
          {subModel && (
            <div className="text-sm text-gray-600">{subModel}</div>
          )}
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={onReset}
        className="border-gray-300"
      >
        Change
      </Button>
    </motion.div>
  );
}

// Service Selection Component
function ServiceSelection({ serviceType, isExpanded, onExpand, onChange }: any) {
  const services = [
    {
      id: 'clear-ppf',
      name: 'Clear PPF',
      fullName: 'XPEL Paint Protection Film (Clear)',
      icon: Shield,
      theme: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 'color-ppf',
      name: 'Color PPF',
      fullName: 'XPEL Color Paint Protection Film',
      icon: Sparkles,
      theme: 'gradient',
      gradient: 'from-purple-500 via-pink-500 to-orange-500'
    },
    {
      id: 'tint',
      name: 'Window Tint',
      fullName: 'XPEL Automotive Window Tint',
      icon: Sun,
      theme: 'yellow',
      gradient: 'from-yellow-400 to-yellow-500'
    }
  ];

  if (serviceType && !isExpanded) {
    const selected = services.find(s => s.id === serviceType);
    return (
      <div>
        <h3 className="mb-4 text-gray-900 flex items-center gap-2">
          <Package className="w-5 h-5 text-gray-700" />
          Service Type
        </h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            {selected && <selected.icon className="w-5 h-5 text-purple-600" />}
            <span className="text-gray-900">{selected?.name}</span>
          </div>
          <Button variant="outline" size="sm" onClick={onExpand}>
            Change
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-4 text-gray-900 flex items-center gap-2">
        <Package className="w-5 h-5 text-gray-700" />
        Select Service Type
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {services.map((service) => (
          <motion.button
            key={service.id}
            onClick={() => onChange(service.id)}
            className={`relative p-6 rounded-2xl border-2 text-left overflow-hidden group ${
              serviceType === service.id
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200 bg-white hover:border-purple-300'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {service.theme === 'gradient' && (
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10`} />
            )}
            <div className="relative flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                service.theme === 'yellow' ? 'bg-yellow-100' : 
                service.theme === 'gradient' ? 'bg-gradient-to-r from-purple-100 to-pink-100' :
                'bg-purple-100'
              }`}>
                <service.icon className={`w-6 h-6 ${
                  service.theme === 'yellow' ? 'text-yellow-600' : 'text-purple-600'
                }`} />
              </div>
              <div className="flex-1">
                <div className="text-gray-900">{service.fullName}</div>
              </div>
              {serviceType === service.id && (
                <Check className="w-6 h-6 text-purple-600" />
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// Vehicle Type Selection Component  
function VehicleTypeSelection({ vehicleType, isExpanded, serviceType, onExpand, onChange }: any) {
  const themeColor = serviceType === 'tint' ? 'yellow' : 'purple';

  if (vehicleType && !isExpanded) {
    const selected = vehicleTypeOptions.find(v => v.id === vehicleType);
    return (
      <div>
        <h3 className="mb-4 text-gray-900">Vehicle Type</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{selected?.icon}</span>
            <span className="text-gray-900">{selected?.label}</span>
          </div>
          <Button variant="outline" size="sm" onClick={onExpand}>
            Change
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-4 text-gray-900">Select Vehicle Type</h3>
      <div className="grid grid-cols-2 gap-4">
        {vehicleTypeOptions.map((type) => (
          <motion.button
            key={type.id}
            onClick={() => onChange(type.id)}
            className={`p-4 rounded-xl border-2 text-left ${
              vehicleType === type.id
                ? themeColor === 'yellow'
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-purple-600 bg-purple-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-3xl mb-2">{type.icon}</div>
            <div className="text-gray-900 mb-1">{type.label}</div>
            <div className="text-xs text-gray-600">{type.description}</div>
            {vehicleType === type.id && (
              <Check className={`w-5 h-5 mt-2 ${themeColor === 'yellow' ? 'text-yellow-600' : 'text-purple-600'}`} />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// Film Finish Selection Component
function FilmFinishSelection({ serviceType, ppfFinish, isExpanded, onExpand, onChange }: any) {
  const options = serviceType === 'clear-ppf'
    ? [{ value: 'clear-gloss', label: 'Clear Gloss' }, { value: 'clear-satin', label: 'Clear Satin' }]
    : [{ value: 'gloss', label: 'Gloss' }, { value: 'satin', label: 'Satin' }];

  if (ppfFinish && !isExpanded) {
    const selected = options.find(o => o.value === ppfFinish);
    return (
      <div>
        <h3 className="mb-4 text-gray-900">Film Finish</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-gray-900">{selected?.label}</span>
          </div>
          <Button variant="outline" size="sm" onClick={onExpand}>
            Change
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-4 text-gray-900">Select Film Finish</h3>
      <div className="flex gap-3 p-2 bg-gray-100 rounded-xl">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex-1 py-3 px-4 rounded-lg transition-all ${
              ppfFinish === option.value
                ? 'bg-white shadow-md text-purple-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// Color Selection Component
function ColorSelection({ colors, selectedColor, isExpanded, ppfFinish, onExpand, onChange }: any) {
  if (selectedColor && !isExpanded) {
    return (
      <div>
        <h3 className="mb-4 text-gray-900">Color Selection</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg border-2 border-gray-200"
              style={{ backgroundColor: selectedColor.hex }}
            />
            <span className="text-gray-900">{selectedColor.name}</span>
          </div>
          <Button variant="outline" size="sm" onClick={onExpand}>
            Change
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-4 text-gray-900">
        Select Color {ppfFinish === 'satin' ? '(Satin Finish)' : '(Gloss Finish)'}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {colors.map((color: ColorOption) => (
          <motion.button
            key={color.id}
            onClick={() => onChange(color)}
            className="relative aspect-square rounded-2xl overflow-hidden border-2 group"
            style={{
              backgroundColor: color.hex,
              borderColor: selectedColor?.id === color.id ? '#8B5CF6' : '#E5E7EB'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gloss Effect */}
            {ppfFinish === 'gloss' && (
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 60%)',
                  transform: 'skewX(-20deg)'
                }}
              />
            )}

            {/* Color Name */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <div className="text-white text-sm">{color.name}</div>
            </div>

            {/* Selected Check */}
            {selectedColor?.id === color.id && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-purple-600" />
              </div>
            )}
          </motion.button>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-4">
        <Info className="w-4 h-4 inline mr-1" />
        Full body color change includes all painted surfaces
      </p>
    </div>
  );
}

// Film Selection Component (Clear PPF)
function FilmSelection({ films, selectedFilm, isExpanded, onExpand, onChange }: any) {
  if (selectedFilm && !isExpanded) {
    const selected = films.find((f: FilmOption) => f.id === selectedFilm);
    return (
      <div>
        <h3 className="mb-4 text-gray-900">Film Selection</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            {selected && <selected.icon className="w-5 h-5 text-purple-600" />}
            <span className="text-gray-900">{selected?.name}</span>
          </div>
          <Button variant="outline" size="sm" onClick={onExpand}>
            Change
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-4 text-gray-900">Select Film</h3>
      <div className="grid grid-cols-2 gap-3">
        {films.map((film: FilmOption) => (
          <motion.button
            key={film.id}
            onClick={() => onChange(film.id)}
            className={`p-4 rounded-xl border-2 text-left relative ${
              selectedFilm === film.id
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200 bg-white hover:border-purple-300'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {selectedFilm === film.id && (
              <div className="absolute top-2 right-2">
                <Check className="w-4 h-4 text-purple-600" />
              </div>
            )}
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
              <film.icon className="w-5 h-5 text-purple-600" />
            </div>
            <div className="mb-2">
              <span className="text-sm text-gray-900 block mb-1">{film.name}</span>
              <span className="px-2 py-0.5 bg-purple-100 text-purple-600 text-xs rounded-full inline-block">
                10-Year
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">{film.description}</p>
            <div className="flex flex-wrap gap-1">
              {film.features.map((feature: string, idx: number) => (
                <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// PPF Package Selection Component
function PPFPackageSelection({ packages, selectedPackage, isExpanded, onExpand, onChange }: any) {
  if (selectedPackage && !isExpanded) {
    const selected = packages.find((p: PPFPackage) => p.id === selectedPackage);
    return (
      <div>
        <h3 className="mb-4 text-gray-900">Coverage Package</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-purple-600" />
            <span className="text-gray-900">{selected?.name}</span>
          </div>
          <Button variant="outline" size="sm" onClick={onExpand}>
            Change
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-4 text-gray-900">Select Coverage Package</h3>
      <div className="grid grid-cols-2 gap-3">
        {packages.map((pkg: PPFPackage) => (
          <motion.button
            key={pkg.id}
            onClick={() => onChange(pkg.id)}
            className={`p-3 rounded-xl border-2 text-left flex flex-col h-full transition-all duration-200 ${
              selectedPackage === pkg.id
                ? 'border-[#017974] bg-[#017974]/5 shadow-sm'
                : 'border-gray-200 bg-white hover:border-[#017974]/50 hover:bg-gray-50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start justify-between w-full mb-2">
              <div className={`font-bold text-sm ${selectedPackage === pkg.id ? 'text-[#017974]' : 'text-gray-900'}`}>
                {pkg.name}
              </div>
              {selectedPackage === pkg.id && (
                <Check className="w-4 h-4 text-[#017974] flex-shrink-0 ml-2" />
              )}
            </div>
            
            <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">
              {pkg.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5">
              {pkg.coverage.map((area, idx) => (
                <span key={idx} className="text-[10px] font-medium bg-[#017974]/10 text-[#017974] px-2 py-0.5 rounded">
                  {area}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// Tint Package Selection Component
function TintPackageSelection({ packages, selectedPackage, isExpanded, onExpand, onChange }: any) {
  if (selectedPackage && !isExpanded) {
    const selected = packages.find((p: TintPackage) => p.id === selectedPackage);
    return (
      <div>
        <h3 className="mb-4 text-gray-900">Coverage Package</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <Sun className="w-5 h-5 text-yellow-600" />
            <span className="text-gray-900">{selected?.name}</span>
          </div>
          <Button variant="outline" size="sm" onClick={onExpand}>
            Change
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-4 text-gray-900">Select Tint Package</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {packages.map((pkg: TintPackage) => (
          <motion.button
            key={pkg.id}
            onClick={() => onChange(pkg.id)}
            className={`p-6 rounded-2xl border-2 text-left ${
              selectedPackage === pkg.id
                ? 'border-yellow-500 bg-yellow-50'
                : 'border-gray-200 bg-white hover:border-yellow-300'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="mb-3">
              <div className="text-gray-900 mb-1">{pkg.name}</div>
              <p className="text-sm text-gray-600">{pkg.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {pkg.windows.slice(0, 2).map((window, idx) => (
                <span key={idx} className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
                  {window}
                </span>
              ))}
              {pkg.windows.length > 2 && (
                <span className="text-xs text-gray-500 px-2 py-1">
                  +{pkg.windows.length - 2} more
                </span>
              )}
            </div>
            {selectedPackage === pkg.id && (
              <Check className="w-5 h-5 text-yellow-600 mt-3" />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// Tint Film Selection Component
function TintFilmSelection({ films, selectedFilm, isExpanded, onExpand, onChange }: any) {
  if (selectedFilm && !isExpanded) {
    const selected = films.find((f: TintFilm) => f.id === selectedFilm);
    return (
      <div>
        <h3 className="mb-4 text-gray-900">Film Selection</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-600" />
            <span className="text-gray-900">{selected?.name}</span>
          </div>
          <Button variant="outline" size="sm" onClick={onExpand}>
            Change
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-4 text-gray-900">Select Film Type</h3>
      <div className="space-y-4">
        {films.map((film: TintFilm) => (
          <motion.button
            key={film.id}
            onClick={() => onChange(film.id)}
            className={`w-full p-6 rounded-2xl border-2 text-left relative overflow-hidden group ${
              selectedFilm === film.id
                ? 'border-yellow-500 bg-yellow-50'
                : 'border-gray-200 bg-white hover:border-yellow-300'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-900">{film.name}</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">
                    {film.heatRejection} Heat Rejection
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{film.description}</p>
                <div className="flex gap-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    {film.uvRejection} UV Block
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {film.warranty} Warranty
                  </div>
                </div>
              </div>
              {selectedFilm === film.id && (
                <Check className="w-6 h-6 text-yellow-600 flex-shrink-0" />
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// VLT Selection Component
function VLTSelection({ vltOptions, selectedVLT, isExpanded, onExpand, onChange }: any) {
  if (selectedVLT && !isExpanded) {
    const selected = vltOptions.find((v: any) => v.value === selectedVLT);
    return (
      <div>
        <h3 className="mb-4 text-gray-900">Darkness Level (VLT)</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <Eye className="w-5 h-5 text-yellow-600" />
            <span className="text-gray-900">{selectedVLT}% - {selected?.label}</span>
          </div>
          <Button variant="outline" size="sm" onClick={onExpand}>
            Change
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-4 text-gray-900">Select Darkness Level (VLT %)</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {vltOptions.map((vlt: any) => (
          <motion.button
            key={vlt.value}
            onClick={() => onChange(vlt.value)}
            className={`p-4 rounded-xl border-2 text-center ${
              selectedVLT === vlt.value
                ? 'border-yellow-500 bg-yellow-50'
                : 'border-gray-200 bg-white hover:border-yellow-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-2xl text-gray-900 mb-2">{vlt.value}%</div>
            <div className="text-xs text-gray-600 mb-2">{vlt.label}</div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-500 rounded-full"
                style={{ width: `${100 - vlt.value}%` }}
              />
            </div>
            {selectedVLT === vlt.value && (
              <Check className="w-4 h-4 text-yellow-600 mx-auto mt-2" />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// Live Preview Component
function LivePreview({ serviceType, ppfFinish, selectedColor, tintVLT, year, make, model, price, onAddToCart, loading, ppfPackage, tintPackage, selectedFilm }: any) {
  const themeColor = serviceType === 'tint' ? 'yellow' : 'purple';

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Preview Image */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Car Silhouette Base */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-full h-full">
            {/* Base Car Shape */}
            <svg viewBox="0 0 800 400" className="w-full h-full opacity-50">
              <path
                d="M100 250 L150 200 L300 180 L400 180 L500 200 L700 250 L700 320 L650 320 L650 280 L150 280 L150 320 L100 320 Z"
                fill="#374151"
                stroke="#1F2937"
                strokeWidth="2"
              />
              <circle cx="200" cy="320" r="30" fill="#1F2937" />
              <circle cx="600" cy="320" r="30" fill="#1F2937" />
              <path d="M200 200 L250 190 L350 190 L380 200 L380 250 L200 250 Z" fill="#9CA3AF" opacity="0.3" />
            </svg>

            {/* Color Overlay for Color PPF */}
            {serviceType === 'color-ppf' && selectedColor && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: selectedColor.overlayColor,
                  opacity: selectedColor.overlayOpacity,
                  mixBlendMode: 'overlay',
                  ...(ppfFinish === 'satin' ? { backdropFilter: 'blur(1px)' } : {})
                }}
              />
            )}

            {/* Tint Overlay */}
            {serviceType === 'tint' && tintVLT && (
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: (100 - tintVLT) / 150 }}
              />
            )}
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-6 right-6 space-y-2">
          <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
            <div className="text-xs text-gray-600">
              {serviceType === 'color-ppf' ? 'Full Body Color Change' : 
               serviceType === 'clear-ppf' ? 'Paint Protection' : 
               'Window Tint'}
            </div>
          </div>
          {(year || make || model) && (
            <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="text-sm text-gray-900">
                {year} {make} {model}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Summary & Pricing */}
      <div className="p-8">
        {/* Summary Details */}
        {price > 0 && (
          <div className="mb-6 p-6 bg-gray-50 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Service</span>
              <span className="text-gray-900">
                {serviceType === 'color-ppf' ? 'Color PPF' :
                 serviceType === 'clear-ppf' ? 'Clear PPF' :
                 'Window Tint'}
              </span>
            </div>
            
            {ppfPackage && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Package</span>
                  <span className="text-gray-900">{ppfPackage.name}</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-600 mb-2">Coverage Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    {ppfPackage.coverage.map((area: string, idx: number) => (
                      <span key={idx} className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {tintPackage && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Package</span>
                  <span className="text-gray-900">{tintPackage.name}</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-600 mb-2">Windows:</div>
                  <div className="flex flex-wrap gap-2">
                    {tintPackage.windows.map((window: string, idx: number) => (
                      <span key={idx} className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
                        {window}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {selectedFilm && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Film</span>
                <span className="text-gray-900">{selectedFilm}</span>
              </div>
            )}

            {selectedColor && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Color</span>
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded border border-gray-200"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  <span className="text-gray-900">{selectedColor.name}</span>
                </div>
              </div>
            )}

            {serviceType === 'tint' && tintVLT && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Darkness</span>
                <span className="text-gray-900">{tintVLT}% VLT</span>
              </div>
            )}
          </div>
        )}

        {/* Price */}
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-2">Estimated Total</div>
          <div className="text-4xl text-gray-900">
            ${price > 0 ? price.toLocaleString() : '---'}
            <span className="text-lg text-gray-600 ml-2">USD</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={onAddToCart}
          disabled={price === 0 || loading}
          className={`w-full py-6 text-lg ${
            themeColor === 'yellow'
              ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Adding to Cart...
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
