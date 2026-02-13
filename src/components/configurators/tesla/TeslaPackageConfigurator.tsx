import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Loader2, 
  Shield, 
  Zap, 
  Info,
  Car,
  Droplets,
  Sun,
  Palette
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { useCart } from '../../../utils/cartContext';
import { TeslaPackageLivePreview } from './TeslaPackageLivePreview';
import { 
  vehicleMakes, 
  ppfPackages as sharedPPFPackages, 
  ppfFilms as sharedPPFFilms,
  tintPackages as sharedTintPackages,
  tintFilms as sharedTintFilms,
  getAvailableTintPackages,
  getAvailableVLT
} from '../shared/vehicleData';
import { TeslaConfigState, CeramicOption, AddonOption } from './types';

const STEPS = [
  { id: 1, title: 'Select Model', description: 'Choose your Tesla model' },
  { id: 2, title: 'PPF Coverage', description: 'Select paint protection level' },
  { id: 3, title: 'PPF Film', description: 'Choose film finish & color' },
  { id: 4, title: 'Window Tint', description: 'Choose tint package' },
  { id: 5, title: 'Tint Details', description: 'Film type & darkness' },
  { id: 6, title: 'Ceramic & Add-ons', description: 'Final touches' },
];

const MODEL_TYPE_MAP: Record<string, string> = {
  'model-3': 'sedan',
  'model-s': 'sedan',
  'model-y': 'suv',
  'model-x': 'large-suv'
};

// Custom Ceramic Options
const CERAMIC_OPTIONS: CeramicOption[] = [
  { id: 'none', name: 'No Ceramic Coating', description: 'Standard finish', price: 0 },
  { id: 'standard', name: '5-Year Ceramic', description: 'High gloss & hydrophobicity', price: 999 },
  { id: 'premium', name: 'Lifetime Graphene', description: 'Ultimate durability & depth', price: 1499 },
];

const ADDONS_OPTIONS: AddonOption[] = [
  { id: 'screen-protector', name: 'Screen Protector', price: 50 },
  { id: 'console-wrap', name: 'Center Console Wrap', price: 80 },
  { id: 'caliper-paint', name: 'Caliper Painting', price: 400 },
];

export function TeslaPackageConfigurator() {
  const { addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filmCategory, setFilmCategory] = useState<'standard' | 'color'>('standard');
  
  const [config, setConfig] = useState<TeslaConfigState>({
    modelId: '',
    ppfPackageId: '',
    ppfFilmId: '', // 'ultimate-plus', 'stealth', etc.
    tintPackageId: '',
    tintFilmId: 'prime-xr-plus',
    tintVLT: 35,
    ceramicId: '',
    addons: [],
  });

  // Derived State
  const selectedModel = useMemo(() => {
    const tesla = vehicleMakes.find(m => m.id === 'tesla');
    return tesla?.models.find(m => m.id === config.modelId);
  }, [config.modelId]);

  const vehicleType = useMemo(() => 
    config.modelId ? MODEL_TYPE_MAP[config.modelId] : 'sedan', 
  [config.modelId]);

  const selectedPPF = useMemo(() => 
    sharedPPFPackages.find(p => p.id === config.ppfPackageId), 
  [config.ppfPackageId]);

  const selectedTintPackage = useMemo(() => 
    sharedTintPackages.find(p => p.id === config.tintPackageId), 
  [config.tintPackageId]);

  const selectedTintFilm = useMemo(() => 
    sharedTintFilms.find(f => f.id === config.tintFilmId), 
  [config.tintFilmId]);

  const availablePPFFilms = useMemo(() => {
     if (config.ppfPackageId === 'full-body') {
         if (filmCategory === 'color') {
             return sharedPPFFilms.filter(f => f.category.startsWith('color'));
         }
         return sharedPPFFilms.filter(f => f.category === 'standard');
     }
     // Otherwise only show standard (clear/stealth)
     return sharedPPFFilms.filter(f => f.category === 'standard');
  }, [config.ppfPackageId, filmCategory]);

  const availableTintPackages = useMemo(() => 
     getAvailableTintPackages(vehicleType), 
  [vehicleType]);

  const availableVLTs = useMemo(() => 
      getAvailableVLT(vehicleType, config.tintPackageId, config.tintFilmId),
  [vehicleType, config.tintPackageId, config.tintFilmId]);

  // Validation
  const canProceed = useMemo(() => {
    switch (currentStep) {
      case 1: return !!config.modelId;
      case 2: return !!config.ppfPackageId;
      case 3: return !!config.ppfFilmId;
      case 4: return !!config.tintPackageId; // Tint selection required (or 'none' if we implement it)
      case 5: return !!config.tintFilmId && config.tintVLT > 0;
      case 6: return !!config.ceramicId;
      default: return false;
    }
  }, [currentStep, config]);

  const handleNext = () => {
    if (canProceed && currentStep < STEPS.length) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const selectedPPFFilm = sharedPPFFilms.find(f => f.id === config.ppfFilmId);

    const configuration = {
      id: `tesla-${Date.now()}`,
      type: 'Tesla Protection Package',
      model: selectedModel?.name || 'Unknown Model',
      ppfPackage: selectedPPF?.name || 'None',
      ppfFilm: selectedPPFFilm?.name || 'Standard',
      tintPackage: selectedTintPackage?.name || 'None',
      tintFilm: selectedTintFilm?.name || 'Standard',
      tintVLT: config.tintVLT,
      ceramic: CERAMIC_OPTIONS.find(c => c.id === config.ceramicId)?.name || 'None',
      addons: config.addons.map(id => ADDONS_OPTIONS.find(a => a.id === id)?.name).join(', '),
      price: 0, 
      quantity: 1
    };

    addToCart(configuration);
    
    toast.success('Configuration Saved', {
      description: `${selectedModel?.name} package added to cart.`,
    });
    
    setIsSubmitting(false);
  };

  // Render Helpers
  const renderStepIndicator = () => (
    <div className="flex items-center justify-between mb-12 relative px-4 overflow-x-auto pb-4 hide-scrollbar">
      {/* Background Line */}
      <div className="absolute left-0 right-0 top-[20px] h-0.5 bg-auto-gunmetal -z-10 min-w-[600px]" />
      
      {STEPS.map((step) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;

        return (
          <div key={step.id} className="flex flex-col items-center bg-auto-asphalt px-2 min-w-[80px]">
            <div 
              className={`
                w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                ${isActive ? 'border-auto-plum-neon bg-auto-plum-deep/20 text-auto-plum-neon scale-110 shadow-[0_0_15px_rgba(157,78,221,0.5)]' : ''}
                ${isCompleted ? 'border-auto-success bg-auto-success/10 text-auto-success' : ''}
                ${!isActive && !isCompleted ? 'border-auto-chrome text-auto-chrome bg-auto-carbon' : ''}
              `}
            >
              {isCompleted ? <Check className="w-5 h-5" /> : <span className="font-bold font-exo">{step.id}</span>}
            </div>
            <span className={`mt-2 text-[10px] md:text-xs uppercase tracking-wider font-semibold text-center whitespace-nowrap ${isActive ? 'text-auto-plum-neon' : 'text-auto-silver'}`}>
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-auto-asphalt text-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-exo mb-4 uppercase tracking-tight">
            Tesla <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-neon to-auto-plum-mist">Protection Studio</span>
          </h1>
          <p className="text-auto-silver max-w-2xl mx-auto">
            Configure the ultimate protection package for your Tesla. 
            Tailored PPF, Tint, and Ceramic Coating options.
          </p>
        </div>

        {renderStepIndicator()}

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-auto-carbon border border-auto-gunmetal rounded-2xl p-6 md:p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold font-exo mb-2">{STEPS[currentStep - 1].title}</h2>
                        <p className="text-auto-silver">{STEPS[currentStep - 1].description}</p>
                    </div>
                    <div className="text-auto-plum-neon bg-auto-plum-deep/10 px-3 py-1 rounded text-xs uppercase font-bold tracking-wider">
                        Step {currentStep} of {STEPS.length}
                    </div>
                </div>

                {/* STEP 1: MODEL */}
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {vehicleMakes.find(m => m.id === 'tesla')?.models.map(model => (
                      <button
                        key={model.id}
                        onClick={() => setConfig({ ...config, modelId: model.id })}
                        className={`
                          group relative p-6 rounded-xl border-2 text-left transition-all duration-300
                          ${config.modelId === model.id 
                            ? 'border-auto-plum-neon bg-auto-plum-deep/10 shadow-[0_0_20px_rgba(157,78,221,0.15)]' 
                            : 'border-auto-gunmetal bg-auto-asphalt hover:border-auto-chrome hover:bg-auto-gunmetal'}
                        `}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <Car className={`w-8 h-8 ${config.modelId === model.id ? 'text-auto-plum-neon' : 'text-auto-chrome group-hover:text-auto-silver'}`} />
                          {config.modelId === model.id && (
                            <div className="bg-auto-plum-neon text-auto-asphalt text-xs font-bold px-2 py-1 rounded">SELECTED</div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold font-exo mb-1">{model.name}</h3>
                        <div className="text-sm text-auto-silver">
                          {model.trims.join(' • ')}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* STEP 2: PPF COVERAGE */}
                {currentStep === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sharedPPFPackages.map(pkg => (
                      <button
                        key={pkg.id}
                        onClick={() => {
                            setConfig({ ...config, ppfPackageId: pkg.id, ppfFilmId: '' });
                            if (pkg.id !== 'full-body') {
                                setFilmCategory('standard');
                            }
                        }} 
                        className={`
                          group flex flex-col justify-between p-6 rounded-xl border-2 text-left transition-all duration-300 h-full
                          ${config.ppfPackageId === pkg.id 
                            ? 'border-auto-plum-neon bg-auto-plum-deep/10 shadow-[0_0_20px_rgba(157,78,221,0.15)]' 
                            : 'border-auto-gunmetal bg-auto-asphalt hover:border-auto-chrome hover:bg-auto-gunmetal'}
                        `}
                      >
                        <div className="w-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`
                                  w-12 h-12 rounded-full flex items-center justify-center shrink-0
                                  ${config.ppfPackageId === pkg.id ? 'bg-auto-plum-neon text-auto-asphalt' : 'bg-auto-gunmetal text-auto-chrome'}
                                `}>
                                  <Shield className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-bold font-exo text-auto-plum-mist">
                                    From ${pkg.basePrice}
                                </span>
                            </div>
                            
                            <div className="mb-4">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <h3 className="text-xl font-bold font-exo">{pkg.name}</h3>
                                    {pkg.id === 'full-front' && (
                                      <span className="text-[10px] uppercase font-bold bg-auto-plum-deep text-white px-2 py-0.5 rounded border border-auto-plum-neon/50">
                                        Popular
                                      </span>
                                    )}
                                </div>
                                <p className="text-auto-silver text-sm">{pkg.description}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {pkg.coverage.slice(0, 4).map((item, idx) => (
                              <span key={idx} className={`
                                text-xs px-2 py-1 rounded border
                                ${config.ppfPackageId === pkg.id
                                    ? 'bg-auto-plum-neon/20 text-auto-plum-neon border-auto-plum-neon/30'
                                    : 'bg-auto-gunmetal text-auto-silver border-auto-chrome/30'}
                              `}>
                                {item}
                              </span>
                            ))}
                            {pkg.coverage.length > 4 && (
                              <span className={`
                                text-xs px-2 py-1 rounded border
                                ${config.ppfPackageId === pkg.id
                                    ? 'bg-auto-plum-neon/20 text-auto-plum-neon border-auto-plum-neon/30'
                                    : 'bg-auto-gunmetal text-auto-silver border-auto-chrome/30'}
                              `}>
                                +{pkg.coverage.length - 4} more
                              </span>
                            )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* STEP 3: PPF FILM (TYPE & COLOR) */}
                {currentStep === 3 && (
                   <div className="space-y-6">
                       {/* Categories for Full Body */}
                       {config.ppfPackageId === 'full-body' && (
                           <div className="flex gap-4 mb-6">
                               <button
                                   onClick={() => setFilmCategory('standard')}
                                   className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                                       filmCategory === 'standard'
                                           ? 'border-auto-plum-neon bg-auto-plum-deep/20 text-auto-plum-neon shadow-lg'
                                           : 'border-auto-gunmetal bg-auto-asphalt text-auto-silver hover:border-auto-chrome hover:bg-auto-gunmetal'
                                   }`}
                               >
                                   <Shield className="w-8 h-8" />
                                   <div className="text-center">
                                       <span className="block font-bold font-exo text-lg">Clear Protection</span>
                                       <span className="text-xs opacity-70">Gloss & Stealth (Satin)</span>
                                   </div>
                               </button>
                               <button
                                   onClick={() => setFilmCategory('color')}
                                   className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                                       filmCategory === 'color'
                                           ? 'border-auto-plum-neon bg-auto-plum-deep/20 text-auto-plum-neon shadow-lg'
                                           : 'border-auto-gunmetal bg-auto-asphalt text-auto-silver hover:border-auto-chrome hover:bg-auto-gunmetal'
                                   }`}
                               >
                                   <Palette className="w-8 h-8" />
                                   <div className="text-center">
                                       <span className="block font-bold font-exo text-lg">Color Change</span>
                                       <span className="text-xs opacity-70">Premium Colored PPF</span>
                                   </div>
                               </button>
                           </div>
                       )}

                       {/* Pro Tip (Only for color) */}
                       {config.ppfPackageId === 'full-body' && filmCategory === 'color' && (
                           <div className="p-4 bg-auto-plum-deep/10 border border-auto-plum-deep/30 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                               <Info className="text-auto-plum-neon w-5 h-5" />
                               <p className="text-sm text-auto-silver">
                                   <span className="text-white font-bold">Premium Option:</span> Select from our exclusive color-changing PPF lineup below.
                               </p>
                           </div>
                       )}

                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {availablePPFFilms.map(film => {
                               const isSelected = config.ppfFilmId === film.id;
                               const isColorFilm = film.category.includes('color') && film.colorHex;

                               return (
                                   <button
                                       key={film.id}
                                       onClick={() => setConfig({ ...config, ppfFilmId: film.id })}
                                       style={{
                                           backgroundColor: isColorFilm ? film.colorHex : undefined,
                                           borderColor: isSelected && isColorFilm ? '#ffffff' : (isColorFilm ? 'transparent' : undefined),
                                           boxShadow: isSelected && isColorFilm ? `0 0 20px ${film.colorHex}80` : undefined
                                       }}
                                       className={`
                                         relative group p-4 rounded-xl border-2 text-left transition-all duration-300 overflow-hidden
                                         ${isSelected && !isColorFilm
                                           ? 'border-auto-plum-neon bg-auto-plum-deep/10 shadow-[0_0_15px_rgba(157,78,221,0.2)]'
                                           : ''}
                                         ${!isSelected && !isColorFilm
                                           ? 'border-auto-gunmetal bg-auto-asphalt hover:border-auto-chrome hover:bg-auto-gunmetal'
                                           : ''}
                                       `}
                                   >
                                       {/* Dark Overlay for text readability on bright colors */}
                                       {isColorFilm && (
                                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                                       )}
                                       
                                       <div className="flex justify-between items-start mb-2 relative z-10">
                                           <div className="flex items-center gap-3">
                                               <h3 className={`font-bold font-exo text-lg ${isColorFilm ? 'text-white' : ''}`}>
                                                    {film.name}
                                               </h3>
                                           </div>
                                           {isSelected && (
                                                <div className={`rounded-full p-0.5 ${isColorFilm ? 'bg-white/20' : ''}`}>
                                                    <Check className={`w-5 h-5 ${isColorFilm ? 'text-white' : 'text-auto-plum-neon'}`} />
                                                </div>
                                           )}
                                       </div>
                                       
                                       <p className={`text-xs mb-3 relative z-10 min-h-[40px] ${isColorFilm ? 'text-white/90' : 'text-auto-silver'}`}>
                                           {film.description}
                                       </p>
                                       
                                       <div className={`flex items-center justify-between border-t pt-3 relative z-10 ${isColorFilm ? 'border-white/30' : 'border-auto-gunmetal'}`}>
                                            <span className={`text-[10px] uppercase tracking-wider font-bold ${isColorFilm ? 'text-white/80' : 'text-auto-chrome'}`}>
                                                {film.category === 'standard' ? 'Clear Protection' : 'Color Change'}
                                            </span>
                                            {film.priceModifier > 0 && (
                                                <span className={`text-xs font-bold ${isColorFilm ? 'text-white' : 'text-auto-plum-mist'}`}>
                                                    +${film.priceModifier}
                                                </span>
                                            )}
                                       </div>
                                   </button>
                               );
                           })}
                       </div>
                   </div>
                )}

                {/* STEP 4: TINT PACKAGE */}
                {currentStep === 4 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availableTintPackages.map(pkg => (
                      <button
                        key={pkg.id}
                        onClick={() => setConfig({ ...config, tintPackageId: pkg.id })}
                        className={`
                          flex flex-col justify-between p-6 rounded-xl border-2 text-left transition-all duration-300 h-full
                          ${config.tintPackageId === pkg.id 
                            ? 'border-auto-plum-neon bg-auto-plum-deep/10 shadow-[0_0_20px_rgba(157,78,221,0.15)]' 
                            : 'border-auto-gunmetal bg-auto-asphalt hover:border-auto-chrome hover:bg-auto-gunmetal'}
                        `}
                      >
                         <div className="w-full">
                             <div className="flex justify-between items-center mb-4">
                               <h3 className="font-bold font-exo text-xl">{pkg.name}</h3>
                               {config.tintPackageId === pkg.id && (
                                    <div className="bg-auto-plum-neon text-auto-asphalt text-xs font-bold px-2 py-1 rounded">SELECTED</div>
                               )}
                             </div>
                             <p className="text-auto-silver text-sm mb-4">{pkg.description}</p>
                         </div>
                         <div className="flex flex-wrap gap-2 mt-auto">
                            {pkg.windows.map((w, i) => (
                                <span key={i} className={`
                                    text-[10px] px-2 py-1 rounded border
                                    ${config.tintPackageId === pkg.id 
                                        ? 'bg-auto-plum-neon/20 text-auto-plum-neon border-auto-plum-neon/30' 
                                        : 'bg-auto-gunmetal text-auto-silver border-auto-chrome/30'}
                                `}>
                                    {w}
                                </span>
                            ))}
                         </div>
                      </button>
                    ))}
                    <button
                        onClick={() => setConfig({ ...config, tintPackageId: 'none' })}
                        className={`
                          flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed transition-all duration-300 h-full min-h-[200px]
                          ${config.tintPackageId === 'none' 
                            ? 'border-auto-silver bg-auto-gunmetal' 
                            : 'border-auto-gunmetal hover:border-auto-silver hover:bg-auto-gunmetal/50'}
                        `}
                      >
                         <span className="text-auto-silver font-bold text-lg">Skip Window Tint</span>
                      </button>
                  </div>
                )}

                {/* STEP 5: TINT DETAILS (FILM & VLT) */}
                {currentStep === 5 && (
                    <div className="space-y-8">
                        {/* Film Selection */}
                        <div>
                            <h3 className="text-lg font-bold font-exo mb-4 flex items-center gap-2">
                                <Droplets className="text-auto-plum-neon w-5 h-5" /> 
                                Select Film Line
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {sharedTintFilms.map(film => (
                                    <button
                                        key={film.id}
                                        onClick={() => setConfig({ ...config, tintFilmId: film.id })}
                                        className={`
                                          group flex items-center justify-between p-4 rounded-xl border-2 text-left transition-all duration-300
                                          ${config.tintFilmId === film.id 
                                            ? 'border-auto-plum-neon bg-auto-plum-deep/10' 
                                            : 'border-auto-gunmetal bg-auto-asphalt hover:border-auto-chrome'}
                                        `}
                                    >
                                        <div>
                                            <h4 className="font-bold font-exo text-base">{film.name}</h4>
                                            <p className="text-xs text-auto-silver">{film.description}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-auto-plum-mist font-bold">
                                                Heat Rejection: {film.specs.heatRejection}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* VLT Selection */}
                        <div>
                            <h3 className="text-lg font-bold font-exo mb-4 flex items-center gap-2">
                                <Sun className="text-auto-plum-neon w-5 h-5" /> 
                                Select Darkness (VLT)
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                                {availableVLTs.length > 0 ? availableVLTs.map(vlt => (
                                    <button
                                        key={vlt.value}
                                        onClick={() => setConfig({ ...config, tintVLT: vlt.value })}
                                        className={`
                                          flex flex-col items-center p-3 rounded-lg border-2 transition-all duration-300
                                          ${config.tintVLT === vlt.value 
                                            ? 'border-auto-plum-neon bg-auto-plum-deep/20' 
                                            : 'border-auto-gunmetal bg-auto-asphalt hover:border-auto-chrome'}
                                        `}
                                    >
                                        <div 
                                            className="w-8 h-8 rounded-full border border-white/20 mb-2"
                                            style={{ backgroundColor: `rgba(0,0,0,${1 - (vlt.value / 100)})` }} 
                                        />
                                        <span className="font-bold text-sm">{vlt.name}</span>
                                        <span className="text-[10px] text-auto-silver text-center leading-tight mt-1">{vlt.subtitle}</span>
                                    </button>
                                )) : (
                                    <p className="col-span-full text-auto-silver text-sm italic">
                                        Select a film line above to see available darkness levels.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 6: CERAMIC & ADDONS */}
                {currentStep === 6 && (
                  <div className="space-y-8">
                    {/* Ceramic Section */}
                    <div>
                      <h3 className="text-lg font-bold font-exo mb-4 flex items-center gap-2">
                        <Zap className="text-auto-plum-neon w-5 h-5" /> 
                        Ceramic Coating
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {CERAMIC_OPTIONS.map(opt => (
                           <button
                             key={opt.id}
                             onClick={() => setConfig({ ...config, ceramicId: opt.id })}
                             className={`
                               p-4 rounded-xl border-2 text-left transition-all duration-300 h-full flex flex-col justify-between
                               ${config.ceramicId === opt.id 
                                 ? 'border-auto-plum-neon bg-auto-plum-deep/10' 
                                 : 'border-auto-gunmetal bg-auto-asphalt hover:border-auto-chrome'}
                             `}
                           >
                             <div>
                               <div className="font-bold font-exo mb-1">{opt.name}</div>
                               <div className="text-xs text-auto-silver mb-3">{opt.description}</div>
                             </div>
                             <div className="font-bold text-auto-plum-mist">
                               {opt.price === 0 ? 'Included' : `+$${opt.price}`}
                             </div>
                           </button>
                        ))}
                      </div>
                    </div>

                    {/* Addons Section */}
                    <div>
                      <h3 className="text-lg font-bold font-exo mb-4 flex items-center gap-2">
                        <Info className="text-auto-plum-neon w-5 h-5" /> 
                        Additional Protection
                      </h3>
                      <div className="space-y-3">
                        {ADDONS_OPTIONS.map(addon => (
                          <button
                            key={addon.id}
                            onClick={() => {
                              const exists = config.addons.includes(addon.id);
                              setConfig({
                                ...config,
                                addons: exists 
                                  ? config.addons.filter(a => a !== addon.id)
                                  : [...config.addons, addon.id]
                              });
                            }}
                            className={`
                              w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300
                              ${config.addons.includes(addon.id)
                                ? 'border-auto-plum-neon bg-auto-plum-deep/10' 
                                : 'border-auto-gunmetal bg-auto-asphalt hover:border-auto-chrome'}
                            `}
                          >
                             <div className="flex items-center gap-3">
                               <div className={`
                                 w-5 h-5 rounded border flex items-center justify-center
                                 ${config.addons.includes(addon.id) ? 'bg-auto-plum-neon border-auto-plum-neon' : 'border-auto-silver'}
                               `}>
                                 {config.addons.includes(addon.id) && <Check className="w-3 h-3 text-black" />}
                               </div>
                               <span className="font-medium">{addon.name}</span>
                             </div>
                             <span className="text-auto-plum-mist font-bold">+${addon.price}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Actions */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className="
                  px-6 py-3 rounded-lg font-bold text-auto-silver border border-auto-gunmetal 
                  hover:text-white hover:border-auto-silver transition-colors
                  disabled:opacity-30 disabled:cursor-not-allowed
                "
              >
                Back
              </button>

              {currentStep < STEPS.length ? (
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="
                    flex items-center gap-2 px-8 py-3 rounded-lg font-bold bg-auto-plum-neon text-black
                    hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
                  "
                >
                  Next Step <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleAddToCart}
                  disabled={isSubmitting || !canProceed}
                  className="
                    flex items-center gap-2 px-8 py-3 rounded-lg font-bold bg-auto-success text-black
                    hover:bg-white hover:shadow-[0_0_20px_rgba(0,200,83,0.4)] transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
                  "
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Check className="w-5 h-5" />}
                  Add to Cart
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Live Preview */}
          <div className="lg:col-span-4 hidden lg:block h-full">
            <TeslaPackageLivePreview 
              model={selectedModel?.name}
              ppfCoverage={selectedPPF?.name}
              ppfFilm={sharedPPFFilms.find(f => f.id === config.ppfFilmId)?.name}
              ppfColor={sharedPPFFilms.find(f => f.id === config.ppfFilmId)?.colorHex}
              tintPackage={selectedTintPackage?.name}
              tintFilm={selectedTintFilm?.name}
              tintVLT={config.tintVLT}
              ceramicCoating={config.ceramicId !== 'none' && !!config.ceramicId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
