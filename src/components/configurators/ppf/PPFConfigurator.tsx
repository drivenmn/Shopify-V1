import { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, Loader2, Sparkles, Shield, Car, Star, FileText } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import {
  getYears,
  vehicleTypes,
  ppfPackages,
  ppfFilms,
  ppfAddons,
  calculatePPFPrice
} from '../shared/vehicleData';
import { useCart } from '../../../utils/cartContext';
import { PageBreadcrumb } from '../../PageBreadcrumb';
import { PPFLivePreview } from './PPFLivePreview';
import { Button } from '../../ui/button'; // Updated Button import
import { motion, AnimatePresence } from 'motion/react';

interface PPFConfiguratorProps {
  onNavigate: (page: string) => void;
}

export function PPFConfigurator({ onNavigate }: PPFConfiguratorProps = { onNavigate: () => {} }) {
  const { addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Step 1: Vehicle Info
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [trim, setTrim] = useState('');
  const [notes, setNotes] = useState('');

  // Step 2: Vehicle Type
  const [vehicleType, setVehicleType] = useState('');

  // Step 3: PPF Package
  const [selectedPackage, setSelectedPackage] = useState('');

  // Step 4: Film Selection (Standard vs Color)
  const [filmCategory, setFilmCategory] = useState<'standard' | 'color'>('standard');
  const [selectedFilm, setSelectedFilm] = useState('ultimate-plus');

  // Step 5: Add-ons (optional)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  const totalSteps = 5;
  const stepTitles = ['Vehicle', 'Type', 'Package', 'Film', 'Review'];

  const price = useMemo(() => 
    calculatePPFPrice(vehicleType, selectedPackage, selectedFilm, selectedAddons),
    [vehicleType, selectedPackage, selectedFilm, selectedAddons]
  );

  // Filter films based on package selection
  const availableFilms = useMemo(() => {
    const standardFilms = ppfFilms.filter(f => f.category === 'standard');
    
    if (selectedPackage === 'full-body') {
      const colorFilms = ppfFilms.filter(f => 
        f.category === 'color-gloss' || f.category === 'color-satin'
      );
      return {
        standard: standardFilms,
        color: colorFilms
      };
    } else {
      return {
        standard: standardFilms,
        color: []
      };
    }
  }, [selectedPackage]);

  // Reset film selection when package changes
  useEffect(() => {
    if (selectedPackage && selectedPackage !== 'full-body') {
      setFilmCategory('standard');
      setSelectedFilm('ultimate-plus');
    }
  }, [selectedPackage]);

  // Reset film selection when category changes
  useEffect(() => {
    if (filmCategory === 'standard') {
      setSelectedFilm('ultimate-plus');
    } else if (filmCategory === 'color' && availableFilms.color.length > 0) {
      setSelectedFilm(availableFilms.color[0].id);
    }
  }, [filmCategory, availableFilms.color]);

  const canProceed = () => {
    switch (currentStep) {
      case 1: return year.trim() !== '' && make.trim() !== '' && model.trim() !== '';
      case 2: return vehicleType !== '';
      case 3: return selectedPackage !== '';
      case 4: return selectedFilm !== '';
      case 5: return true;
      default: return false;
    }
  };

  const handleNext = () => {
    if (canProceed() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAddToCart = () => {
    setLoading(true);
    const selectedFilmData = ppfFilms.find(f => f.id === selectedFilm);
    const selectedPkgData = ppfPackages.find(p => p.id === selectedPackage);
    const addonsText = selectedAddons.length > 0 
      ? ` + ${selectedAddons.length} add-on${selectedAddons.length > 1 ? 's' : ''}`
      : '';
    
    const description = `${selectedPkgData?.name || 'Package'} | ${selectedFilmData?.name || 'Film'}${addonsText}`;

    addToCart({
      type: 'ppf',
      name: `Paint Protection Film - ${year} ${make} ${model}`,
      description,
      price,
      quantity: 1,
      details: {
        vehicle: { year, make, model, trim, notes },
        package: selectedPkgData?.name,
        film: selectedFilmData?.name,
        filmCategory,
        addons: selectedAddons,
        vehicleType,
      },
    });

    toast.success('Configuration Saved', {
      description: `${year} ${make} ${model} package added to cart.`,
    });

    setTimeout(() => {
      setLoading(false);
      // Reset logic could go here if we wanted to auto-reset
      onNavigate('cart'); // Redirect to cart or stay
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-auto-asphalt pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 mb-6 backdrop-blur-md">
             <Shield className="w-4 h-4 text-auto-plum-neon" />
             <span className="text-xs font-bold text-auto-plum-mist uppercase tracking-widest font-['Exo_2']">Build Your Package</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Exo_2']">
            PPF <span className="text-auto-plum-neon">CONFIGURATOR</span>
          </h1>
          <p className="text-auto-silver max-w-2xl mx-auto font-light">
            Customize your protection package with real-time pricing and live visualizer.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative flex justify-between">
             {/* Background Line */}
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 -z-10" />
             
             {stepTitles.map((title, idx) => {
                const stepNum = idx + 1;
                const isActive = stepNum === currentStep;
                const isCompleted = stepNum < currentStep;

                return (
                   <div key={idx} className="flex flex-col items-center gap-3 bg-auto-asphalt px-4">
                      <div className={`
                         w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                         ${isActive ? 'border-auto-plum-neon bg-auto-plum-neon text-black shadow-[0_0_20px_rgba(157,78,221,0.5)]' : ''}
                         ${isCompleted ? 'border-auto-plum-neon bg-auto-asphalt text-auto-plum-neon' : ''}
                         ${!isActive && !isCompleted ? 'border-white/10 bg-auto-asphalt text-white/30' : ''}
                      `}>
                         {isCompleted ? <Check className="w-5 h-5" /> : <span className="font-bold font-['Exo_2']">{stepNum}</span>}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-white/30'}`}>
                         {title}
                      </span>
                   </div>
                );
             })}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
             <motion.div
               key={currentStep}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
               className="bg-auto-carbon/80 border border-white/5 rounded-3xl p-8 backdrop-blur-sm"
             >
                <div className="mb-8 border-b border-white/5 pb-4">
                   <h2 className="text-2xl font-bold text-white font-['Exo_2'] mb-1">{stepTitles[currentStep - 1]}</h2>
                   <p className="text-auto-silver text-sm">Step {currentStep} of {totalSteps}</p>
                </div>

                {/* STEP 1: VEHICLE INFO */}
                {currentStep === 1 && (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-auto-silver uppercase tracking-wider">Year</label>
                         <input 
                           value={year}
                           onChange={(e) => setYear(e.target.value)}
                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-auto-plum-neon focus:outline-none transition-colors"
                           placeholder="e.g. 2024"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-auto-silver uppercase tracking-wider">Make</label>
                         <input 
                           value={make}
                           onChange={(e) => setMake(e.target.value)}
                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-auto-plum-neon focus:outline-none transition-colors"
                           placeholder="e.g. Porsche"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-auto-silver uppercase tracking-wider">Model</label>
                         <input 
                           value={model}
                           onChange={(e) => setModel(e.target.value)}
                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-auto-plum-neon focus:outline-none transition-colors"
                           placeholder="e.g. 911 GT3"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-auto-silver uppercase tracking-wider">Trim (Optional)</label>
                         <input 
                           value={trim}
                           onChange={(e) => setTrim(e.target.value)}
                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-auto-plum-neon focus:outline-none transition-colors"
                           placeholder="e.g. Touring"
                         />
                      </div>
                   </div>
                )}

                {/* STEP 2: VEHICLE TYPE */}
                {currentStep === 2 && (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {vehicleTypes.map(type => (
                         <button
                           key={type.id}
                           onClick={() => setVehicleType(type.id)}
                           className={`
                             p-6 rounded-xl border-2 text-left transition-all duration-300
                             ${vehicleType === type.id 
                               ? 'border-auto-plum-neon bg-auto-plum-deep/10 shadow-[0_0_15px_rgba(157,78,221,0.2)]' 
                               : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10'}
                           `}
                         >
                            <div className="flex justify-between items-start mb-2">
                               <h3 className="font-bold text-white font-['Exo_2']">{type.name}</h3>
                               {vehicleType === type.id && <Check className="w-5 h-5 text-auto-plum-neon" />}
                            </div>
                            <p className="text-sm text-auto-silver">{(type as any).description}</p>
                         </button>
                      ))}
                   </div>
                )}

                {/* STEP 3: PACKAGE */}
                {currentStep === 3 && (
                   <div className="space-y-4">
                      {ppfPackages.map(pkg => (
                         <button
                           key={pkg.id}
                           onClick={() => setSelectedPackage(pkg.id)}
                           className={`
                             w-full p-6 rounded-xl border-2 text-left transition-all duration-300
                             ${selectedPackage === pkg.id 
                               ? 'border-auto-plum-neon bg-auto-plum-deep/10 shadow-[0_0_15px_rgba(157,78,221,0.2)]' 
                               : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10'}
                           `}
                         >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                               <div>
                                  <h3 className="text-xl font-bold text-white font-['Exo_2']">{pkg.name}</h3>
                                  <p className="text-auto-silver text-sm mt-1">{pkg.description}</p>
                               </div>
                               <div className="text-right">
                                  <div className="text-2xl font-bold text-auto-plum-neon font-['Exo_2']">${pkg.basePrice.toLocaleString()}</div>
                                  <div className="text-xs text-auto-silver uppercase tracking-wider">Starting At</div>
                               </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                               {pkg.coverage.map((item, i) => (
                                  <span key={i} className="text-xs font-bold text-white/70 bg-white/5 px-2 py-1 rounded border border-white/5">
                                     {item}
                                  </span>
                               ))}
                            </div>
                         </button>
                      ))}
                   </div>
                )}

                {/* STEP 4: FILM */}
                {currentStep === 4 && (
                   <div className="space-y-6">
                      {/* Film Category Toggle (If Full Body) */}
                      {selectedPackage === 'full-body' && (
                         <div className="flex p-1 bg-white/5 rounded-lg mb-6">
                            <button 
                               onClick={() => setFilmCategory('standard')}
                               className={`flex-1 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all ${filmCategory === 'standard' ? 'bg-auto-plum-neon text-black' : 'text-white/50 hover:text-white'}`}
                            >
                               Standard
                            </button>
                            <button 
                               onClick={() => setFilmCategory('color')}
                               className={`flex-1 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all ${filmCategory === 'color' ? 'bg-auto-plum-neon text-black' : 'text-white/50 hover:text-white'}`}
                            >
                               Color Change
                            </button>
                         </div>
                      )}

                      <div className="grid grid-cols-1 gap-4">
                         {(filmCategory === 'standard' ? availableFilms.standard : availableFilms.color).map(film => (
                            <button
                               key={film.id}
                               onClick={() => setSelectedFilm(film.id)}
                               className={`
                                 w-full p-5 rounded-xl border-2 text-left transition-all duration-300
                                 ${selectedFilm === film.id 
                                   ? 'border-auto-plum-neon bg-auto-plum-deep/10 shadow-[0_0_15px_rgba(157,78,221,0.2)]' 
                                   : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10'}
                               `}
                            >
                               <div className="flex items-center justify-between mb-2">
                                  <h3 className="font-bold text-white font-['Exo_2']">{film.name}</h3>
                                  {selectedFilm === film.id && <Check className="w-5 h-5 text-auto-plum-neon" />}
                               </div>
                               <p className="text-sm text-auto-silver mb-3">{film.description}</p>
                               {film.priceModifier > 0 && (
                                  <span className="text-xs font-bold text-auto-plum-mist">
                                     +${film.priceModifier} to base package
                                  </span>
                               )}
                            </button>
                         ))}
                      </div>
                   </div>
                )}

                {/* STEP 5: REVIEW & ADDONS */}
                {currentStep === 5 && (
                   <div className="space-y-8">
                      {/* Summary Card */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                         <h3 className="text-lg font-bold text-white mb-4 font-['Exo_2'] border-b border-white/10 pb-2">Configuration Summary</h3>
                         <div className="grid grid-cols-2 gap-y-4 text-sm">
                            <div className="text-auto-silver">Vehicle</div>
                            <div className="text-white font-bold text-right">{year} {make} {model} {trim}</div>
                            
                            <div className="text-auto-silver">Package</div>
                            <div className="text-white font-bold text-right">{ppfPackages.find(p => p.id === selectedPackage)?.name}</div>
                            
                            <div className="text-auto-silver">Film</div>
                            <div className="text-white font-bold text-right">{ppfFilms.find(f => f.id === selectedFilm)?.name}</div>
                         </div>
                      </div>

                      {/* Addons */}
                      <div>
                         <h3 className="text-lg font-bold text-white mb-4 font-['Exo_2']">Recommended Add-ons</h3>
                         <div className="space-y-3">
                            {ppfAddons.map(addon => {
                               const isSelected = selectedAddons.includes(addon.id);
                               return (
                                  <button
                                    key={addon.id}
                                    onClick={() => {
                                       setSelectedAddons(prev => 
                                          isSelected ? prev.filter(id => id !== addon.id) : [...prev, addon.id]
                                       );
                                    }}
                                    className={`
                                      w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300
                                      ${isSelected 
                                        ? 'border-auto-plum-neon bg-auto-plum-deep/10' 
                                        : 'border-white/5 bg-white/5 hover:border-white/20'}
                                    `}
                                  >
                                     <div className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${isSelected ? 'bg-auto-plum-neon border-auto-plum-neon' : 'border-white/30'}`}>
                                           {isSelected && <Check className="w-3 h-3 text-black" />}
                                        </div>
                                        <span className="text-white font-medium">{addon.name}</span>
                                     </div>
                                     <span className="text-auto-plum-mist font-bold">+${addon.price}</span>
                                  </button>
                               );
                            })}
                         </div>
                      </div>
                   </div>
                )}

                {/* ACTIONS */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
                   <Button 
                      variant="outline" 
                      onClick={handleBack}
                      disabled={currentStep === 1}
                      className="border-white/10 text-white hover:bg-white/10 h-12 px-8"
                   >
                      Back
                   </Button>

                   {currentStep < totalSteps ? (
                      <Button 
                         onClick={handleNext}
                         disabled={!canProceed()}
                         className="bg-auto-plum-neon text-black hover:bg-white h-12 px-8 font-bold"
                      >
                         Continue <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                   ) : (
                      <Button 
                         onClick={handleAddToCart}
                         disabled={loading}
                         className="bg-auto-plum-neon text-black hover:bg-white h-12 px-10 font-bold shadow-[0_0_20px_rgba(157,78,221,0.4)]"
                      >
                         {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Add to Cart'}
                      </Button>
                   )}
                </div>
             </motion.div>
          </div>

          {/* Right Column: Live Preview */}
          <div className="lg:col-span-4 hidden lg:block">
             <div className="sticky top-24">
                <PPFLivePreview 
                   vehicleType={vehicleType}
                   packageId={selectedPackage}
                   filmId={selectedFilm}
                   showAddons={selectedAddons}
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
