import { Check, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { calculatePPFPrice, ppfPackages, ppfFilms } from '../shared/vehicleData';

interface PPFLivePreviewProps {
  year: string;
  make: string;
  model: string;
  trim: string;
  vehicleType: string;
  packageType: string;
  filmType: string;
  addons: string[];
  currentStep: number;
}

export function PPFLivePreview({
  year,
  make,
  model,
  trim,
  vehicleType,
  packageType,
  filmType,
  addons = [],
  currentStep
}: PPFLivePreviewProps) {

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
    const selectedPkg = ppfPackages.find(p => p.id === packageType);
    if (!selectedPkg) return [];
    return selectedPkg.coverage || [];
  };

  const getVehicleImage = () => {
    return `https://placehold.co/800x600?text=Vehicle+PPF+Preview`;
  };

  // Get selected package and film details
  const selectedPackage = ppfPackages.find(p => p.id === packageType);
  const selectedFilm = ppfFilms.find(f => f.id === filmType);
  
  // Calculate pricing
  const totalPrice = vehicleType && packageType && filmType
    ? calculatePPFPrice(vehicleType, packageType, filmType, addons)
    : 0;

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
      label: 'Type', 
      completed: currentStep > 2,
      detail: getVehicleTypeName()
    },
    { 
      id: 'package', 
      label: 'Package', 
      completed: currentStep > 3,
      detail: selectedPackage?.name
    },
    { 
      id: 'film', 
      label: 'Film', 
      completed: currentStep > 4,
      detail: selectedFilm?.name
    },
    { 
      id: 'addons', 
      label: 'Add-ons', 
      completed: currentStep > 5,
      detail: addons.length > 0 ? `${addons.length} selected` : null
    },
  ];

  return (
    <div className="relative">
      <div className="bg-card border border-border rounded overflow-hidden shadow-xl">
        {/* Subtle Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-warning/10 rounded blur-xl opacity-20" style={{ zIndex: -1 }} />

        {/* Header */}
        <div className="relative border-b border-border p-6 bg-gradient-to-r from-muted to-card">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3>
                Live Preview
              </h3>
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
            <p className="text-warning" style={{ fontSize: '1rem' }}>
              {year} {make} {model}{trim ? ' ' + trim : ''}
            </p>
          )}
        </div>

        {/* Vehicle Image with PPF Coverage Preview */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50">
          <img 
            src={getVehicleImage()} 
            alt="Vehicle Preview" 
            className="w-full h-full object-cover"
          />
          
          {/* PPF Coverage Overlay - Only visible from Step 3 onwards */}
          {currentStep >= 3 && selectedPackage && (
            <>
              {/* Coverage highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
              
              {/* Package Badge */}
              <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-md px-4 py-3 rounded border border-primary/50 shadow-lg shadow-primary/20">
                <div className="text-primary uppercase tracking-wider mb-1" style={{ fontSize: '0.75rem' }}>
                  {selectedPackage.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {selectedPackage.description}
                </div>
              </div>
            </>
          )}

          {/* Coverage Areas Overlay */}
          {currentStep >= 3 && selectedPackage && getCoverageAreas().length > 0 && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-card/98 via-card/95 to-transparent backdrop-blur-md z-10">
              <p className="text-foreground text-xs uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>
                Coverage Areas:
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {getCoverageAreas().map((area, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-card/95 backdrop-blur-sm px-3 py-1.5 rounded border border-primary/40 shadow-lg"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground" style={{ fontSize: '0.75rem' }}>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Configuration Progress */}
        <motion.div 
          className="p-6 border-b border-border bg-card"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div 
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.div 
              className="w-6 h-6 rounded-full bg-warning flex-shrink-0"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(253, 181, 33, 0)",
                  "0 0 0 8px rgba(253, 181, 33, 0.1)",
                  "0 0 0 0 rgba(253, 181, 33, 0)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h3 className="text-foreground uppercase tracking-wider" style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em' }}>
              Configuration Summary
            </h3>
          </motion.div>

          <motion.div 
            className="space-y-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            {/* Vehicle - Full Width */}
            <AnimatePresence mode="wait">
              {configSteps.filter(s => s.id === 'vehicle').map((step, index) => (
                <motion.div 
                  key={step.id}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                        delay: index * 0.08
                      }
                    }
                  }}
                  layout
                  className={`p-4 rounded transition-all duration-300 hover:shadow-md cursor-default ${
                    step.completed 
                      ? 'bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30' 
                      : 'bg-muted border border-border'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: step.completed ? "var(--primary)" : "var(--border)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <AnimatePresence mode="wait">
                      {step.completed ? (
                        <motion.div 
                          key="completed"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ 
                            scale: 1, 
                            rotate: 0,
                            boxShadow: [
                              "0 0 0 0 rgba(1, 121, 116, 0.4)",
                              "0 0 0 6px rgba(1, 121, 116, 0)",
                            ]
                          }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 20,
                            boxShadow: {
                              duration: 0.6,
                              ease: "easeOut"
                            }
                          }}
                          className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
                        >
                          <motion.div
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="incomplete"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="w-5 h-5 rounded-full border-2 border-border flex-shrink-0"
                        />
                      )}
                    </AnimatePresence>
                    <div className="flex-1">
                      <motion.div 
                        className={`text-xs uppercase tracking-wider mb-1 ${step.completed ? 'text-muted-foreground' : 'text-muted-foreground/60'}`} 
                        style={{ fontWeight: 600 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.label}
                      </motion.div>
                      <AnimatePresence mode="wait">
                        {step.completed && step.detail && (
                          <motion.div 
                            key={step.detail}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2 }}
                            className="text-foreground" 
                            style={{ fontWeight: 600, fontSize: '15px' }}
                          >
                            {step.detail}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Other Items - 2 Column Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-3"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.06
                  }
                }
              }}
            >
              {configSteps.filter(s => s.id !== 'vehicle').map((step, index) => (
                <motion.div 
                  key={step.id}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 24
                      }
                    }
                  }}
                  layout
                  className={`p-4 rounded transition-all duration-300 hover:shadow-md cursor-default ${
                    step.completed 
                      ? 'bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30' 
                      : 'bg-muted border border-border'
                  }`}
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: step.completed ? "var(--primary)" : "var(--border)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-start gap-3">
                    <AnimatePresence mode="wait">
                      {step.completed ? (
                        <motion.div 
                          key="completed"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ 
                            scale: 1, 
                            rotate: 0,
                            boxShadow: [
                              "0 0 0 0 rgba(1, 121, 116, 0.4)",
                              "0 0 0 6px rgba(1, 121, 116, 0)",
                            ]
                          }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 20,
                            boxShadow: {
                              duration: 0.6,
                              ease: "easeOut"
                            }
                          }}
                          className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5"
                        >
                          <motion.div
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="incomplete"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="w-5 h-5 rounded-full border-2 border-border flex-shrink-0 mt-0.5"
                        />
                      )}
                    </AnimatePresence>
                    <div className="flex-1">
                      <motion.div 
                        className={`text-xs uppercase tracking-wider mb-1 ${step.completed ? 'text-muted-foreground' : 'text-muted-foreground/60'}`} 
                        style={{ fontWeight: 600 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.label}
                      </motion.div>
                      <AnimatePresence mode="wait">
                        {step.completed && step.detail && (
                          <motion.div 
                            key={step.detail}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2 }}
                            className="text-foreground" 
                            style={{ fontWeight: 600, fontSize: '15px' }}
                          >
                            {step.detail}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Price Summary */}
        {totalPrice > 0 && (
          <div className="p-6 bg-gradient-to-br from-primary/5 to-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground uppercase tracking-wider text-xs" style={{ fontWeight: 600 }}>
                Estimated Investment
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-foreground" style={{ fontSize: '32px', fontWeight: 700 }}>
                ${totalPrice.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-sm">
                Professional installation included
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
