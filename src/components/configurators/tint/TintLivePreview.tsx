import { Check, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { calculateTintPrice, tintPackages, tintFilms } from '../shared/vehicleData';

interface TintLivePreviewProps {
  year: string;
  make: string;
  model: string;
  trim: string;
  vehicleType: string;
  selectedFilm: string;
  selectedPackage: string;
  vlt: number;
  price: number;
  currentStep: number;
  totalSteps: number;
}

export function TintLivePreview({ 
  year,
  make,
  model,
  trim,
  vehicleType, 
  vlt, 
  currentStep,
  selectedFilm,
  selectedPackage,
  price
}: TintLivePreviewProps) {

  // Get vehicle type display name
  const getVehicleTypeName = () => {
    switch (vehicleType) {
      case 'sedan': return 'Sedan';
      case 'coupe': return 'Coupe';
      case 'small-suv': return 'Small SUV';
      case 'large-suv': return 'Large SUV';
      case 'wagon': return 'Wagon';
      case 'single-cab-truck': return 'Single Cab Truck';
      case 'crew-cab-truck': return 'Crew Cab Truck';
      case 'exotic': return 'Exotic';
      default: return vehicleType;
    }
  };

  const getCoverageAreas = () => {
    const selectedPkg = tintPackages.find(p => p.id === selectedPackage);
    if (!selectedPkg) return [];
    
    const windowMap: { [key: string]: string } = {
      'front-left': 'Front Driver',
      'front-right': 'Front Passenger',
      'rear-left': 'Rear Driver',
      'rear-right': 'Rear Passenger',
      'rear-windshield': 'Rear Glass',
      'windshield': 'Windshield'
    };
    
    return selectedPkg.windows.map(w => windowMap[w] || w);
  };

  // Calculate tint opacity based on VLT percentage
  const tintOpacity = currentStep >= 4 ? (100 - vlt) / 100 : 0;

  // Get selected package and film details
  const selectedPackageData = tintPackages.find(p => p.id === selectedPackage);
  const selectedFilmData = tintFilms.find(f => f.id === selectedFilm);

  // Configuration steps
  const configSteps = [
    { 
      id: 'vehicle', 
      label: 'Vehicle', 
      completed: currentStep > 1,
      detail: year && make && model ? `${year} ${make} ${model}${trim ? ' ' + trim : ''}` : null
    },
    { 
      id: 'type', 
      label: 'Vehicle Type', 
      completed: currentStep > 2,
      detail: vehicleType ? getVehicleTypeName() : null
    },
    { 
      id: 'package', 
      label: 'Package', 
      completed: currentStep > 3,
      detail: selectedPackageData?.name
    },
    { 
      id: 'vlt', 
      label: 'Darkness', 
      completed: currentStep > 4,
      detail: vlt > 0 ? `${vlt}% VLT` : null
    },
    { 
      id: 'film', 
      label: 'Film Type', 
      completed: currentStep > 5,
      detail: selectedFilmData?.name
    }
  ];

  return (
    <div className="relative">
      <div className="bg-card border border-border rounded overflow-hidden shadow-xl">
        {/* Subtle Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-warning/10 rounded blur-xl opacity-20" style={{ zIndex: -1 }} />

        {/* Header */}
        <div className="p-6 border-b border-border bg-muted/30">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3>Live Preview</h3>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Interactive Configuration</p>
              </div>
            </div>
            {vehicleType && (
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 px-4 py-1.5 rounded-full">
                <span className="text-primary uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
                  {getVehicleTypeName()}
                </span>
              </div>
            )}
          </div>
          {year && make && model && (
            <p className="text-warning" style={{ fontSize: '1rem', fontWeight: 600 }}>
              {year} {make} {model}{trim ? ' ' + trim : ''}
            </p>
          )}
        </div>

        {/* Vehicle Preview */}
        <div className="relative bg-muted aspect-video flex items-center justify-center overflow-hidden">
          {/* Base Vehicle Silhouette */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Placeholder car with tint effect */}
            <div className="relative w-4/5 h-3/5 flex items-center justify-center">
              {/* Simple car shape */}
              <div className="relative w-full h-full">
                {/* Car body (simplified) */}
                <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Car body outline */}
                  <path 
                    d="M80 120 L100 80 L140 60 L260 60 L300 80 L320 120 L320 160 L80 160 Z" 
                    fill="var(--muted-foreground)"
                    opacity="0.2"
                    stroke="var(--border)"
                    strokeWidth="2"
                  />
                  
                  {/* Windows with tint overlay */}
                  {selectedPackage && vlt > 0 && (
                    <>
                      {/* Front window */}
                      <motion.rect 
                        x="105" 
                        y="70" 
                        width="50" 
                        height="45" 
                        fill="black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: tintOpacity }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Rear window */}
                      <motion.rect 
                        x="245" 
                        y="70" 
                        width="50" 
                        height="45" 
                        fill="black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: tintOpacity }}
                        transition={{ duration: 0.5 }}
                      />
                    </>
                  )}
                </svg>
              </div>
              
              {/* VLT Indicator Badge */}
              {vlt > 0 && currentStep >= 4 && (
                <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-md px-4 py-3 rounded border border-warning/50 shadow-lg shadow-warning/20">
                  <div className="text-warning uppercase tracking-wider mb-1" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                    {vlt}% VLT
                  </div>
                  <div className="text-muted-foreground" style={{ fontSize: '0.6875rem' }}>Darkness Level</div>
                </div>
              )}
            </div>
          </div>

          {/* Coverage Areas Badges */}
          {selectedPackage && getCoverageAreas().length > 0 && currentStep >= 3 && (
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              <AnimatePresence>
                {getCoverageAreas().slice(0, 6).map((area, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded border border-warning/40 shadow-lg"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-warning" />
                    <span className="text-foreground" style={{ fontSize: '0.75rem', fontWeight: 500 }}>{area}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="p-6 bg-muted/20 border-t border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-warning"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / 6) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
            <motion.div 
              key={currentStep}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: 'spring',
                stiffness: 500,
                damping: 25
              }}
              className="w-6 h-6 rounded-full bg-warning flex-shrink-0"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
              Step {currentStep} of 6
            </span>
            <span className="text-foreground" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              {Math.round((currentStep / 6) * 100)}% Complete
            </span>
          </div>
        </div>

        {/* Configuration Summary - Desktop */}
        <div className="hidden lg:block p-6 border-t border-border">
          <h4 className="text-foreground mb-4 uppercase tracking-wider" style={{ fontSize: '0.875rem' }}>
            Configuration
          </h4>
          <div className="space-y-3">
            {configSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: step.completed ? 1 : 0.5, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded transition-all duration-300 hover:shadow-md cursor-default ${
                  step.completed 
                    ? 'bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30' 
                    : 'bg-muted border border-border'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {step.completed && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 20,
                          delay: index * 0.05
                        }}
                        className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.05 + 0.2 }}
                        >
                          <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                        </motion.div>
                      </motion.div>
                    )}
                    <div>
                      <div className={`uppercase tracking-wider mb-1 ${step.completed ? 'text-primary' : 'text-muted-foreground'}`} style={{ fontSize: '0.6875rem' }}>
                        {step.label}
                      </div>
                      {step.detail && (
                        <div className="text-foreground" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                          {step.detail}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Configuration Summary - Mobile (Compact) */}
        <div className="block lg:hidden p-6 border-t border-border">
          <h4 className="text-foreground mb-4 uppercase tracking-wider" style={{ fontSize: '0.875rem' }}>
            Configuration
          </h4>
          <div className="space-y-3">
            {configSteps.filter(s => s.completed && s.detail).map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded transition-all duration-300 hover:shadow-md cursor-default ${
                  step.completed 
                    ? 'bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30' 
                    : 'bg-muted border border-border'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 20,
                        delay: index * 0.05
                      }}
                      className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                      >
                        <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                      </motion.div>
                    </motion.div>
                    <div>
                      <div className="text-primary uppercase tracking-wider mb-1" style={{ fontSize: '0.6875rem' }}>
                        {step.label}
                      </div>
                      <div className="text-foreground" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Price Summary */}
        {price > 0 && currentStep >= 3 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border-t-2 border-warning/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-muted-foreground uppercase tracking-wider mb-1" style={{ fontSize: '0.75rem' }}>
                  Estimated Total
                </div>
                <div className="text-foreground" style={{ fontSize: '0.875rem' }}>
                  Professional Installation Included
                </div>
              </div>
              <motion.div
                key={price}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="text-warning"
                style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: '1', fontFamily: "'Exo 2', sans-serif" }}
              >
                ${price.toLocaleString()}
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
