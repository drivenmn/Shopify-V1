import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Loader2, Sparkles, Shield, Sun, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import {
  vehicleMakes,
  getYears,
  vehicleTypes,
  tintFilms,
  tintPackages,
  calculateTintPrice,
  getAvailableTintPackages,
  getAvailableTintFilms,
  getAvailableVLT,
  getTintPrice
} from '../shared/vehicleData';
import { useCart } from '../../../utils/cartContext';
import { PageBreadcrumb } from '../../PageBreadcrumb';
import { TintLivePreview } from './TintLivePreview';

interface TintConfiguratorProps {
  onNavigate: (page: string) => void;
}

export function TintConfigurator({ onNavigate }: TintConfiguratorProps = { onNavigate: () => {} }) {
  const { addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form state
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [trim, setTrim] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [selectedFilm, setSelectedFilm] = useState('prime-xr-plus');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedVLT, setSelectedVLT] = useState(35);
  
  const totalSteps = 6;
  const selectedPkg = tintPackages.find(p => p.id === selectedPackage);
  const price = calculateTintPrice(vehicleType, selectedPackage, selectedFilm, selectedVLT, []);
  const availableFilms = getAvailableTintFilms(vehicleType, selectedPackage);
  const availableVLTs = getAvailableVLT(vehicleType, selectedPackage, selectedFilm);

  const canProceed = () => {
    switch (currentStep) {
      case 1: return year.trim() !== '' && make.trim() !== '' && model.trim() !== '';
      case 2: return vehicleType !== '';
      case 3: return selectedPackage !== '';
      case 4: return selectedVLT > 0;
      case 5: return selectedFilm !== '';
      case 6: return true;
      default: return false;
    }
  };

  const handleNext = () => {
    if (canProceed() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAddToCart = () => {
    const selectedFilmData = tintFilms.find(f => f.id === selectedFilm);
    const selectedPkgData = tintPackages.find(p => p.id === selectedPackage);
    const selectedVLTData = availableVLTs.find(v => v.value === selectedVLT);
    const description = `${selectedPkgData?.name || 'Package'} | ${selectedFilmData?.name || 'Film'} | ${selectedVLTData?.name || `${selectedVLT}%`}`;

    addToCart({
      type: 'tint',
      name: `Window Tint - ${year} ${make} ${model}`,
      description,
      price,
      quantity: 1,
      details: {
        vehicle: { year, make, model, trim },
        film: selectedFilmData?.name,
        package: selectedPkgData?.name,
        vlt: selectedVLT,
        vehicleType,
      },
    });

    toast.success('Booking request sent!', {
      description: `${year} ${make} ${model} - $${price.toLocaleString()}`,
    });

    setTimeout(() => {
      setCurrentStep(1);
      setYear('');
      setMake('');
      setModel('');
      setTrim('');
      setVehicleType('');
      setSelectedPackage('');
      setSelectedFilm('prime-xr-plus');
      setSelectedVLT(35);
    }, 1500);
  };

  const handleSubmit = () => {
    handleAddToCart();
  };

  const stepTitles = ['Vehicle', 'Type', 'Package', 'Darkness', 'Film', 'Review'];

  return (
    <div className="min-h-screen bg-background">
      <PageBreadcrumb
        segments={[
          { label: 'Services' },
          { label: 'Window Tint' },
          { label: 'Tint Quote Configurator' }
        ]}
        onNavigate={onNavigate}
      />
      
      <div className="max-w-[1400px] mx-auto px-6 pt-12 pb-20">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary uppercase tracking-wider" style={{ fontSize: '0.875rem' }}>Premium Window Tinting</span>
          </div>
          <h1>
            Build Your Tint Package
          </h1>
          <p className="text-muted-foreground max-w-2xl text-center">
            Customize your window tint with precision. Real-time pricing, live preview.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-16 relative">
          <div className="max-w-5xl mx-auto px-4">
            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute left-0 right-0 top-8 flex items-center px-12" style={{ zIndex: 0 }}>
                {[1, 2, 3, 4, 5].map((lineIndex) => (
                  <div
                    key={lineIndex}
                    className="flex-1 h-0.5 mx-1 transition-all duration-700 ease-in-out"
                    style={{
                      backgroundColor: lineIndex < currentStep ? 'var(--primary)' : 'var(--border)'
                    }}
                  />
                ))}
              </div>

              {/* Step Indicators */}
              <div className="relative flex justify-between items-center" style={{ zIndex: 1 }}>
                {stepTitles.map((title, index) => {
                  const stepNumber = index + 1;
                  const isActive = currentStep === stepNumber;
                  const isCompleted = currentStep > stepNumber;

                  return (
                    <div key={stepNumber} className="flex flex-col items-center">
                      <div className="relative mb-4">
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-warning blur-xl opacity-40 animate-pulse" />
                        )}
                        
                        <button
                          onClick={() => stepNumber < currentStep && setCurrentStep(stepNumber)}
                          disabled={stepNumber > currentStep}
                          className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isCompleted
                              ? 'bg-primary shadow-[0_0_20px] shadow-primary/40'
                              : isActive
                              ? 'bg-warning shadow-[0_0_30px] shadow-warning/50 scale-110'
                              : 'bg-background border-2 border-border'
                          }`}
                        >
                          {isCompleted ? (
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                              <Check className="w-7 h-7 text-primary-foreground" strokeWidth={3} />
                            </div>
                          ) : (
                            <span 
                              className={`${isActive ? 'text-background' : 'text-muted-foreground'} transition-colors`}
                              style={{ fontWeight: 800, fontSize: '20px' }}
                            >
                              {stepNumber}
                            </span>
                          )}
                        </button>
                        
                        {isCompleted && (
                          <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" />
                        )}
                      </div>
                      
                      <div className="text-center">
                        <span 
                          className={`block uppercase tracking-widest transition-all duration-300 ${
                            isActive 
                              ? 'text-warning' 
                              : isCompleted 
                              ? 'text-primary' 
                              : 'text-muted-foreground'
                          }`}
                          style={{ fontSize: '0.75rem' }}
                        >
                          {title}
                        </span>
                        
                        <span 
                          className={`block mt-1 uppercase tracking-wider ${
                            isActive || isCompleted ? 'text-muted-foreground' : 'text-muted-foreground/60'
                          }`}
                          style={{ fontSize: '10px' }}
                        >
                          Step {stepNumber}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="group flex items-center gap-3 px-8 py-4 border-2 border-border rounded text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:bg-transparent"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Previous</span>
          </button>
          
          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-warning to-warning/80 hover:from-warning hover:to-warning rounded text-background transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-warning/30 hover:shadow-warning/50 disabled:shadow-none"
            >
              <span>Next Step</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed() || loading}
              className="group flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary/90 rounded text-primary-foreground transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary/30 hover:shadow-primary/50 disabled:shadow-none"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Check className="w-5 h-5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Form Steps */}
          <div className="relative order-2 lg:order-1">
            <div className="h-full bg-card border border-border rounded p-8 shadow-xl">
              {/* Subtle Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-warning/10 rounded blur-xl opacity-20" style={{ zIndex: -1 }} />

              {/* Step 1: Vehicle Info */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                  <div>
                    <h2>Vehicle Information</h2>
                    <p className="text-muted-foreground">Tell us about your vehicle</p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {/* Year */}
                    <div className="group">
                      <label htmlFor="year" className="block text-foreground mb-2 uppercase tracking-wider">
                        Year <span className="text-warning">*</span>
                      </label>
                      <input
                        id="year"
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="2024"
                        className="w-full bg-input-background border-2 border-border rounded px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-warning focus:shadow-lg focus:shadow-warning/20 transition-all duration-300"
                      />
                    </div>

                    {/* Make */}
                    <div className="group">
                      <label htmlFor="make" className="block text-foreground mb-2 uppercase tracking-wider">
                        Make <span className="text-warning">*</span>
                      </label>
                      <input
                        id="make"
                        type="text"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                        placeholder="Tesla, BMW, Porsche"
                        className="w-full bg-input-background border-2 border-border rounded px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-warning focus:shadow-lg focus:shadow-warning/20 transition-all duration-300"
                      />
                    </div>

                    {/* Model */}
                    <div className="group">
                      <label htmlFor="model" className="block text-foreground mb-2 uppercase tracking-wider">
                        Model <span className="text-warning">*</span>
                      </label>
                      <input
                        id="model"
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="Model 3, X5, 911"
                        className="w-full bg-input-background border-2 border-border rounded px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-warning focus:shadow-lg focus:shadow-warning/20 transition-all duration-300"
                      />
                    </div>

                    {/* Trim (Optional) */}
                    <div className="group">
                      <label htmlFor="trim" className="block text-foreground mb-2 uppercase tracking-wider">
                        Trim <span className="text-muted-foreground">(Optional)</span>
                      </label>
                      <input
                        id="trim"
                        type="text"
                        value={trim}
                        onChange={(e) => setTrim(e.target.value)}
                        placeholder="Performance, M Sport, Carrera S"
                        className="w-full bg-input-background border-2 border-border rounded px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Visual Confirmation */}
                  {year.trim() && make.trim() && model.trim() && (
                    <div className="mt-6 p-5 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 rounded animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-primary uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
                            Vehicle Confirmed
                          </p>
                          <p className="text-foreground">
                            {year} {make} {model} {trim && `(${trim})`}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Vehicle Type */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                  <div>
                    <h2>Vehicle Type</h2>
                    <p className="text-muted-foreground">What type of vehicle are you tinting?</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {vehicleTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setVehicleType(type.id)}
                        className={`group relative p-6 border-2 rounded transition-all duration-300 text-left overflow-hidden ${
                          vehicleType === type.id
                            ? 'border-warning bg-gradient-to-br from-warning/20 to-warning/5 shadow-lg shadow-warning/20'
                            : 'border-border hover:border-primary hover:bg-primary/5'
                        } ${(type as any).requiresContact ? 'opacity-70' : ''}`}
                      >
                        {/* Selection Indicator */}
                        {vehicleType === type.id && (
                          <div className="absolute top-3 right-3">
                            <div className="w-6 h-6 rounded-full bg-warning flex items-center justify-center">
                              <Check className="w-4 h-4 text-background" />
                            </div>
                          </div>
                        )}

                        <div>
                          <div className="text-foreground mb-1">{type.name}</div>
                          <div className={`${vehicleType === type.id ? 'text-warning/90' : 'text-muted-foreground'}`} style={{ fontSize: '0.8125rem' }}>
                            {(type as any).description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Package Selection */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                  <div>
                    <h2>Select Package</h2>
                    <p className="text-muted-foreground">Choose your coverage package</p>
                  </div>

                  <div className="space-y-4">
                    {getAvailableTintPackages(vehicleType).map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
                          selectedPackage === pkg.id
                            ? 'border-2 border-warning bg-gradient-to-br from-warning/10 to-warning/5 shadow-lg shadow-warning/20'
                            : 'border-2 border-border hover:border-primary hover:bg-primary/5'
                        }`}
                      >
                        <div className="p-6 rounded">
                          {selectedPackage === pkg.id && (
                            <div className="absolute top-4 right-4 z-10">
                              <div className="w-6 h-6 rounded-full bg-warning flex items-center justify-center">
                                <Check className="w-4 h-4 text-background" />
                              </div>
                            </div>
                          )}
                          
                          <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                              <h3 className="text-foreground mb-2">
                                {pkg.name}
                              </h3>
                              <p className="text-muted-foreground mb-4">
                                {pkg.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-2">
                                {pkg.coverage.map((area, idx) => (
                                  <div
                                    key={idx}
                                    className="px-3 py-1 bg-muted border border-border rounded"
                                    style={{ fontSize: '0.75rem' }}
                                  >
                                    {area}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: VLT Selection */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                  <div>
                    <h2>Select Darkness</h2>
                    <p className="text-muted-foreground">Choose your VLT (Visible Light Transmission)</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {availableVLTs.map((vlt) => (
                      <button
                        key={vlt.value}
                        onClick={() => setSelectedVLT(vlt.value)}
                        className={`relative p-6 rounded transition-all duration-300 text-center overflow-hidden ${
                          selectedVLT === vlt.value
                            ? 'bg-gradient-to-br from-warning to-warning/80 shadow-xl shadow-warning/30'
                            : 'bg-muted hover:bg-muted/80 border-2 border-border'
                        }`}
                      >
                        <div className="relative z-10">
                          <div 
                            className="w-16 h-16 rounded-full mx-auto mb-3 border-4 transition-colors"
                            style={{
                              backgroundColor: `rgba(0, 0, 0, ${1 - vlt.value / 100})`,
                              borderColor: selectedVLT === vlt.value ? 'var(--background)' : 'var(--border)'
                            }}
                          />
                          <div className="w-full">
                            <div className={`mb-2 ${selectedVLT === vlt.value ? 'text-background' : 'text-foreground'}`} style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                              {vlt.name}
                            </div>
                            
                            {vlt.subtitle && (
                              <div className={`${selectedVLT === vlt.value ? 'text-background/70' : 'text-muted-foreground'}`} style={{ fontSize: '0.8125rem' }}>
                                {vlt.subtitle}
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Film Selection */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                  <div>
                    <h2>Select Film Type</h2>
                    <p className="text-muted-foreground">Choose your XPEL PRIME film</p>
                  </div>

                  <div className="space-y-4">
                    {availableFilms.map((film) => {
                      const basePrice = getTintPrice(vehicleType, selectedPackage);
                      
                      return (
                        <button
                          key={film.id}
                          onClick={() => setSelectedFilm(film.id)}
                          className={`group relative w-full p-6 border-2 rounded transition-all duration-300 text-left overflow-hidden ${
                            selectedFilm === film.id
                              ? 'border-warning bg-gradient-to-br from-warning/20 to-warning/5 shadow-lg shadow-warning/20'
                              : 'border-border hover:border-primary hover:bg-primary/5'
                          }`}
                        >
                          {/* Selection Indicator */}
                          {selectedFilm === film.id && (
                            <div className="absolute top-4 right-4">
                              <div className="w-6 h-6 rounded-full bg-warning flex items-center justify-center">
                                <Check className="w-4 h-4 text-background" />
                              </div>
                            </div>
                          )}

                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1 pr-4">
                              <h3 className="text-foreground mb-2">
                                {film.name}
                              </h3>
                              <p className="text-muted-foreground mb-4">
                                {film.description}
                              </p>
                            </div>
                            
                            {film.priceModifier !== undefined && (
                              <div className="text-right flex-shrink-0">
                                <div className="text-warning" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                                  ${basePrice.toFixed(2)}
                                </div>
                                <div className="text-muted-foreground" style={{ fontSize: '0.75rem' }}>Base Price</div>
                              </div>
                            )}
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-muted p-3 rounded border border-border">
                              <div className="flex items-center gap-2 mb-1">
                                <Sun className="w-3 h-3 text-warning" />
                                <div className="text-muted-foreground uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>Heat</div>
                              </div>
                              <div className="text-warning" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>{film.specs.heatRejection}</div>
                            </div>
                            <div className="bg-muted p-3 rounded border border-border">
                              <div className="flex items-center gap-2 mb-1">
                                <Shield className="w-3 h-3 text-warning" />
                                <div className="text-muted-foreground uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>UV</div>
                              </div>
                              <div className="text-warning" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>{film.specs.uvRejection}</div>
                            </div>
                            <div className="bg-muted p-3 rounded border border-border">
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-3 h-3 text-warning" />
                                <div className="text-muted-foreground uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>Warranty</div>
                              </div>
                              <div className="text-warning" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>{film.specs.warranty}</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 6: Review & Summary */}
              {currentStep === 6 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                  <div>
                    <h2>Review Configuration</h2>
                    <p className="text-muted-foreground">Confirm your selections</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-muted p-5 rounded border border-border">
                      <h4 className="text-foreground mb-3 uppercase tracking-wider" style={{ fontSize: '0.875rem' }}>Vehicle</h4>
                      <p className="text-foreground">
                        {year} {make} {model} {trim && `(${trim})`}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded border border-border">
                        <h4 className="text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>Type</h4>
                        <p className="text-foreground">{vehicleTypes.find(t => t.id === vehicleType)?.name}</p>
                      </div>
                      <div className="bg-muted p-4 rounded border border-border">
                        <h4 className="text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>Package</h4>
                        <p className="text-foreground">{selectedPkg?.name}</p>
                      </div>
                      <div className="bg-muted p-4 rounded border border-border">
                        <h4 className="text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>Darkness</h4>
                        <p className="text-foreground">{selectedVLT}% VLT</p>
                      </div>
                      <div className="bg-muted p-4 rounded border border-border">
                        <h4 className="text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>Film</h4>
                        <p className="text-foreground">{tintFilms.find(f => f.id === selectedFilm)?.name}</p>
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-warning/30 to-transparent" />
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <span className="text-muted-foreground uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>Total Estimate</span>
                      </div>
                      <span className="text-warning" style={{ fontSize: '2.625rem', fontWeight: 700, lineHeight: '1', fontFamily: "'Exo 2', sans-serif" }}>
                        ${price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      disabled={loading}
                      className="group relative w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-primary-foreground px-8 py-6 rounded transition-all duration-300 shadow-2xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    >
                      {/* Animated Background Shine */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      <div className="relative flex items-center justify-center gap-3">
                        {loading ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <Check className="w-6 h-6" />
                            <span>Request Quote</span>
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Live Preview */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <TintLivePreview
              year={year}
              make={make}
              model={model}
              trim={trim}
              vehicleType={vehicleType}
              selectedFilm={selectedFilm}
              selectedPackage={selectedPackage}
              vlt={selectedVLT}
              price={price}
              currentStep={currentStep}
              totalSteps={totalSteps}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
