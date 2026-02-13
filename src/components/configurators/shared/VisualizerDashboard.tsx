import { Check, Shield, ShoppingCart, Loader2, Info, ExternalLink, Car, Sun } from 'lucide-react';
import { Button } from '../../ui/button';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import baseCarImage from 'figma:asset/6f2dc65f01fde49b06e4bb9f70dbeecf443dce72.png';
import defaultOverlayImage from 'figma:asset/0a3bd25dffed8e38a93b0538ff25f05d8318ec1b.png';
import { ColorOption } from '../color-ppf/types';
import { 
  vehicleMakes, 
  getAvailableTintPackages, 
  getAvailableTintFilms,
  getAvailableVLT,
  tintFilms,
  ppfPackages,
  getYears
} from './vehicleData';
import { clearFilms } from './filmData';

export type ServiceType = 'ppf' | 'tint';
export type PPFFinish = 'clear' | 'gloss' | 'satin';

export interface Feature {
  title: string;
  desc: string;
}

interface VisualizerDashboardProps {
  year: string;
  setYear: (val: string) => void;
  make: string;
  setMake: (val: string) => void;
  model: string;
  setModel: (val: string) => void;
  subModel: string;
  setSubModel: (val: string) => void;
  availableModels: { id: string; name: string }[];
  serviceType: ServiceType;
  setServiceType: (val: ServiceType) => void;
  ppfFinish: PPFFinish;
  setPpfFinish: (val: PPFFinish) => void;
  selectedItem: string;
  setSelectedItem: (val: string) => void;
  selectedColor: ColorOption;
  setSelectedColor: (val: ColorOption) => void;
  colors: ColorOption[];
  ppfPackage: string;
  setPpfPackage: (val: string) => void;
  tintPackage: string;
  setTintPackage: (val: string) => void;
  vehicleType: string;
  tintVLT: number;
  setTintVLT: (val: number) => void;
  price: number;
  loading: boolean;
  handleAddToCart: () => void;
  features: Feature[];
}

export function VisualizerDashboard({
  year,
  setYear,
  make,
  setMake,
  model,
  setModel,
  subModel,
  setSubModel,
  availableModels,
  serviceType,
  setServiceType,
  ppfFinish,
  setPpfFinish,
  selectedItem,
  setSelectedItem,
  selectedColor,
  setSelectedColor,
  colors,
  ppfPackage,
  setPpfPackage,
  tintPackage,
  setTintPackage,
  vehicleType,
  tintVLT,
  setTintVLT,
  price,
  loading,
  handleAddToCart,
  features
}: VisualizerDashboardProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center text-center gap-6 pb-10 border-b border-border/40">
         <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded border border-primary/30 bg-primary/5 text-primary shadow-sm backdrop-blur-sm">
            <Shield className="w-3.5 h-3.5 fill-current" />
            <span className="uppercase tracking-[0.2em]" style={{ fontSize: '10px' }}>Interactive Studio</span>
         </div>
         
         <div className="space-y-3 max-w-3xl">
            <h1>
               Vehicle Configurator
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
               Experience our premium protection products on your vehicle. Customize coverage, explore finishes, and get an instant estimate with <span className="text-primary">live preview</span>.
            </p>
         </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
      
      {/* Left Column: Configuration */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        
        {!year || !make || !model || !subModel ? (
            <div className="bg-card rounded border border-border overflow-hidden p-8 shadow-xl">
                <h2>Vehicle Details</h2>
                <p className="text-muted-foreground mb-6">Enter your vehicle details to get started</p>
                
                <div className="space-y-4">
                    {/* Year */}
                    <div className="space-y-2">
                        <label>Year</label>
                        <Select value={year || undefined} onValueChange={setYear}>
                            <SelectTrigger className="h-11 bg-input-background border-input text-foreground"><SelectValue placeholder="Year" /></SelectTrigger>
                            <SelectContent>
                                {getYears().map(y => <SelectItem key={y} value={y.toString()}>{y}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Make */}
                    <div className="space-y-2">
                            <label>Make</label>
                            <Select value={make || undefined} onValueChange={(val) => { setMake(val); setModel(''); setSubModel(''); }}>
                            <SelectTrigger className="h-11 bg-input-background border-input text-foreground"><SelectValue placeholder="Make" /></SelectTrigger>
                            <SelectContent>
                                {vehicleMakes.map(m => <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>)}
                            </SelectContent>
                            </Select>
                    </div>
                    
                    {/* Model */}
                    <div className="space-y-2">
                            <label>Model</label>
                            <Select value={model || undefined} onValueChange={(val) => { setModel(val); setSubModel(''); }} disabled={!make}>
                            <SelectTrigger className="h-11 bg-input-background border-input text-foreground"><SelectValue placeholder="Model" /></SelectTrigger>
                            <SelectContent>
                                {availableModels.map(m => <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>)}
                            </SelectContent>
                            </Select>
                    </div>

                    {/* Sub Model */}
                    <div className="space-y-2">
                            <label>Sub Model</label>
                            <Select value={subModel || undefined} onValueChange={setSubModel} disabled={!model}>
                            <SelectTrigger className="h-11 bg-input-background border-input text-foreground"><SelectValue placeholder="Trim" /></SelectTrigger>
                            <SelectContent>
                                {availableModels.find(m => m.id === model)?.trims.map(t => (
                                    <SelectItem key={t} value={t}>{t}</SelectItem>
                                ))}
                            </SelectContent>
                            </Select>
                    </div>
                </div>
            </div>
        ) : (
           <>
             {/* Vehicle Selector Header */}
             <div className="bg-card rounded border border-border p-4 flex justify-between items-center shadow-sm">
                 <div className="flex items-center gap-3">
                     <div className="p-2 bg-primary/10 rounded text-primary">
                        <Car className="w-5 h-5" />
                     </div>
                     <div>
                        <h4>{year} {vehicleMakes.find(m => m.id === make)?.name} {availableModels.find(m => m.id === model)?.name}</h4>
                        <p className="text-muted-foreground" style={{ fontSize: '0.75rem' }}>{subModel}</p>
                     </div>
                 </div>
                 <Button variant="ghost" size="sm" onClick={() => { setYear(''); setSubModel(''); }} className="text-primary hover:bg-primary/10">
                    Change
                 </Button>
             </div>

        {/* Main Card */}
        <div className="bg-card rounded shadow-xl border border-border overflow-hidden">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-border">
            <h2>Select Your Finish</h2>
            <p className="text-muted-foreground">Choose a option to preview pricing and details</p>
          </div>

          {/* Service Tabs */}
          <div className="px-6 pt-4">
             <div className="bg-muted p-1 rounded flex h-12 relative">
                <button 
                  onClick={() => {
                    setServiceType('ppf');
                    setSelectedItem('');
                    setPpfPackage('');
                    setTintPackage('');
                  }}
                  className={`flex-1 rounded uppercase tracking-wide transition-all z-10 ${
                    serviceType === 'ppf' 
                      ? 'bg-card text-primary shadow-sm ring-1 ring-black/5' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  style={{ fontSize: '0.875rem' }}
                >
                  XPEL Paint Protection
                </button>
                <button 
                  onClick={() => {
                    setServiceType('tint');
                    setSelectedItem('');
                    setPpfPackage('');
                    setTintPackage('');
                  }}
                  className={`flex-1 rounded uppercase tracking-wide transition-all z-10 ${
                    serviceType === 'tint' 
                      ? 'bg-card text-primary shadow-sm ring-1 ring-black/5' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  style={{ fontSize: '0.875rem' }}
                >
                  XPEL Window Tint
                </button>
             </div>
          </div>

          {/* Sub Tabs (Finish) - Only for PPF */}
          {serviceType === 'ppf' && (
            <div className="px-6 pt-4">
               <div className="bg-muted/50 p-1 rounded border border-border flex">
                  {(['clear', 'gloss', 'satin'] as const).map((finish) => (
                    <button
                      key={finish}
                      onClick={() => setPpfFinish(finish)}
                      className={`flex-1 py-2 uppercase tracking-wider rounded transition-all ${
                         ppfFinish === finish 
                           ? 'bg-card text-card-foreground shadow-sm border border-border' 
                           : 'text-muted-foreground hover:text-foreground'
                      }`}
                      style={{ fontSize: '0.75rem' }}
                    >
                      {finish === 'clear' ? 'Clear Films' : `${finish} Finish`}
                    </button>
                  ))}
               </div>
            </div>
          )}

          {/* Content Area */}
          <div className="p-6 space-y-4 min-h-[300px]">
             
             {/* PPF CONTENT */}
             {serviceType === 'ppf' && ppfFinish === 'clear' && (
                <div className="space-y-6">
                  {/* 1. Select Film - Show Grid only if no film selected */}
                  {!selectedItem && (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 animate-in fade-in slide-in-from-left-4 duration-300">
                      {clearFilms.map((film) => {
                        const Icon = film.icon;
                        const isSelected = selectedItem === film.name;
                        return (
                          <div 
                            key={film.name}
                            onClick={() => setSelectedItem(film.name)}
                            className={`relative p-4 rounded border-2 transition-all cursor-pointer flex flex-col gap-3 group ${
                               isSelected 
                                 ? 'border-warning bg-warning/5 shadow-md ring-1 ring-warning/20' 
                                 : 'border-border hover:border-warning/30 hover:shadow-lg bg-card'
                            }`}
                          >
                             {/* Header */}
                             <div className="flex justify-between items-start">
                               <div className="flex items-center gap-2">
                                  <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 shadow-sm transition-colors ${
                                    isSelected ? 'bg-warning text-background' : 'bg-muted text-muted-foreground group-hover:bg-warning group-hover:text-background'
                                  }`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                     <h4 className={`${isSelected ? 'text-warning' : 'text-card-foreground'}`}>
                                       {film.name}
                                     </h4>
                                     <span className="uppercase tracking-wider text-primary" style={{ fontSize: '10px' }}>
                                       10-Year Warranty
                                     </span>
                                  </div>
                               </div>
                               {isSelected && (
                                 <div className="bg-warning rounded-full p-1 shadow-sm">
                                   <Check className="w-3 h-3 text-background" strokeWidth={3} />
                                 </div>
                               )}
                             </div>

                             {/* Description */}
                             <p className="text-muted-foreground leading-relaxed min-h-[2.5em]" style={{ fontSize: '0.75rem' }}>
                               {film.description}
                             </p>

                             {/* Benefits / Features List (Mini) */}
                             <div className="mt-auto pt-3 border-t border-border space-y-1">
                                {film.features.slice(0, 2).map((feat, i) => (
                                   <div key={i} className="flex items-center gap-1.5">
                                      <div className="w-1 h-1 rounded-full bg-warning" />
                                      <span className="text-muted-foreground" style={{ fontSize: '10px' }}>{feat}</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* 2. Select Coverage Package (Shown after Film Selection) */}
                  {selectedItem && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center justify-between bg-muted/50 p-3 rounded border border-border">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-warning flex items-center justify-center text-background shadow-sm">
                               <Shield className="w-5 h-5" />
                            </div>
                            <div>
                               <p className="uppercase tracking-wider text-muted-foreground" style={{ fontSize: '0.75rem' }}>Selected Film</p>
                               <h4>{selectedItem}</h4>
                            </div>
                         </div>
                         <Button 
                           variant="ghost" 
                           size="sm" 
                           onClick={() => { setSelectedItem(''); setPpfPackage(''); }}
                           className="text-warning hover:bg-warning/10 hover:text-warning"
                         >
                           Change Film
                         </Button>
                      </div>

                      <div className="space-y-2">
                        <label>Select Coverage</label>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                           {ppfPackages.map(pkg => {
                             const isSelected = ppfPackage === pkg.id;
                             return (
                               <div
                                 key={pkg.id}
                                 onClick={() => setPpfPackage(pkg.id)}
                                 className={`relative p-3 rounded border-2 transition-all cursor-pointer flex flex-col gap-2 group ${
                                   isSelected
                                     ? 'border-warning bg-warning/5 shadow-md ring-1 ring-warning/20'
                                     : 'border-border hover:border-warning/30 hover:shadow-lg bg-card'
                                 }`}
                               >
                                 {/* Header */}
                                 <div className="flex justify-between items-start">
                                   <div className="flex items-center gap-2">
                                      <div className={`w-7 h-7 rounded flex items-center justify-center shrink-0 shadow-sm transition-colors ${
                                        isSelected ? 'bg-warning text-background' : 'bg-muted text-muted-foreground group-hover:bg-warning group-hover:text-background'
                                      }`}>
                                        <Shield className="w-3.5 h-3.5" />
                                      </div>
                                      <div>
                                         <h4 className={`${isSelected ? 'text-warning' : 'text-card-foreground'}`}>
                                           {pkg.name}
                                         </h4>
                                         {pkg.id === 'full-front' && (
                                           <span className="uppercase tracking-wider text-primary" style={{ fontSize: '10px' }}>
                                             Most Popular
                                           </span>
                                         )}
                                      </div>
                                   </div>
                                   {isSelected && (
                                     <div className="bg-warning rounded-full p-1 shadow-sm">
                                       <Check className="w-3 h-3 text-background" strokeWidth={3} />
                                     </div>
                                   )}
                                 </div>

                                 {/* Description */}
                                 <p className="text-muted-foreground leading-tight line-clamp-2" style={{ fontSize: '0.75rem' }}>
                                   {pkg.description}
                                 </p>

                                 {/* Coverage Badges */}
                                 <div className="mt-auto pt-2 border-t border-border">
                                     <span className="uppercase tracking-wider text-muted-foreground" style={{ fontSize: '10px' }}>
                                        Includes {pkg.coverage.length} Coverage Areas
                                     </span>
                                 </div>
                               </div>
                             );
                           })}
                        </div>
                      </div>
                  </div>
                  )}
                </div>
             )}

             {serviceType === 'ppf' && (ppfFinish === 'gloss' || ppfFinish === 'satin') && (
                <div className="grid grid-cols-3 gap-3">
                  {colors.filter(c => c.finish === ppfFinish && c.type !== 'clear').map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`relative aspect-square rounded overflow-hidden border transition-all group ${
                         selectedColor.id === color.id 
                           ? 'border-primary ring-2 ring-primary ring-offset-2' 
                           : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="absolute inset-0" style={{ backgroundColor: color.hex }} />
                      {ppfFinish === 'gloss' && (
                         <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-white/30 to-transparent transform -skew-y-12 origin-top-left" />
                      )}
                      <div className="absolute inset-x-0 bottom-0 p-2 bg-black/50 backdrop-blur-sm text-white truncate text-center" style={{ fontSize: '10px' }}>
                         {color.name}
                      </div>
                    </button>
                  ))}
                </div>
             )}

             {/* TINT CONTENT */}
             {serviceType === 'tint' && (
               <div className="space-y-6">
                  {/* 1. Select Film (Show only if no film selected) */}
                  {!selectedItem && (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 animate-in fade-in slide-in-from-left-4 duration-300">
                      {tintFilms.map(film => {
                        const isSelected = selectedItem === film.id;
                        return (
                          <div 
                            key={film.id}
                            onClick={() => setSelectedItem(film.id)}
                            className={`relative p-5 rounded border-2 transition-all cursor-pointer group flex flex-col gap-4 ${
                              isSelected
                                ? 'border-primary bg-primary/5 shadow-md ring-1 ring-primary/20'
                                : 'border-border hover:border-primary/30 hover:shadow-lg bg-card'
                            }`}
                          >
                             {/* Header */}
                             <div className="flex justify-between items-start">
                               <div>
                                 <h4 className={isSelected ? 'text-primary' : 'text-card-foreground'}>
                                   {film.name}
                                 </h4>
                                 <span className="uppercase tracking-wider text-warning mt-1 block" style={{ fontSize: '10px' }}>
                                   {film.specs?.warranty} Warranty
                                 </span>
                               </div>
                               {isSelected && (
                                 <div className="bg-primary rounded-full p-1 shadow-sm">
                                   <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                                 </div>
                               )}
                             </div>
                             
                             {/* Description */}
                             <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.75rem' }}>
                               {film.description}
                             </p>

                             {/* Specs Grid */}
                             <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-border">
                                <div className="text-center">
                                  <span className="block uppercase tracking-tight mb-0.5 text-muted-foreground" style={{ fontSize: '10px' }}>Heat Rej.</span>
                                  <span className="block text-card-foreground">{film.specs?.heatRejection}</span>
                                </div>
                                <div className="text-center border-l border-border">
                                  <span className="block uppercase tracking-tight mb-0.5 text-muted-foreground" style={{ fontSize: '10px' }}>UV Block</span>
                                  <span className="block text-card-foreground">{film.specs?.uvRejection}</span>
                                </div>
                             </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* 2. Selected State (Summary + Options) */}
                  {selectedItem && (
                     <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                        
                        {/* Selected Film Summary */}
                        <div className="flex items-center justify-between bg-muted/50 p-3 rounded border border-border">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
                                 <Sun className="w-5 h-5" />
                              </div>
                              <div>
                                 <p className="uppercase tracking-wider text-muted-foreground" style={{ fontSize: '0.75rem' }}>Selected Film</p>
                                 <h4>{tintFilms.find(f => f.id === selectedItem)?.name || selectedItem}</h4>
                              </div>
                           </div>
                           <Button 
                             variant="ghost" 
                             size="sm" 
                             onClick={() => { setSelectedItem(''); setTintPackage(''); }}
                             className="text-primary hover:bg-primary/10 hover:text-primary"
                           >
                             Change Film
                           </Button>
                        </div>

                        {/* Package Selector (Pills) */}
                        <div className="space-y-3">
                           <label>Select Package</label>
                           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {getAvailableTintPackages(vehicleType).map(pkg => {
                                const isPkgSelected = tintPackage === pkg.id;
                                return (
                                  <div
                                    key={pkg.id}
                                    onClick={() => setTintPackage(pkg.id)}
                                    className={`cursor-pointer rounded border p-4 flex flex-col gap-3 transition-all group ${
                                      isPkgSelected
                                        ? 'bg-primary border-primary text-primary-foreground shadow-md'
                                        : 'bg-card border-border hover:border-primary text-muted-foreground hover:text-card-foreground'
                                    }`}
                                  >
                                    <div className="flex justify-between items-start">
                                      <h4 className={isPkgSelected ? 'text-primary-foreground' : 'text-card-foreground'}>
                                        {pkg.name}
                                      </h4>
                                      {isPkgSelected && (
                                        <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
                                      )}
                                    </div>
                                    <p className={`${isPkgSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`} style={{ fontSize: '0.75rem' }}>
                                      {pkg.description}
                                    </p>
                                  </div>
                                );
                              })}
                           </div>
                        </div>

                        {/* VLT Selector */}
                        {tintPackage && (
                          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <label>Select VLT (Visibility Light Transmission)</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              {getAvailableVLT(vehicleType).map(vltOption => {
                                const isVLTSelected = tintVLT === vltOption.value;
                                return (
                                  <button
                                    key={vltOption.value}
                                    onClick={() => setTintVLT(vltOption.value)}
                                    className={`p-4 rounded border transition-all ${
                                      isVLTSelected
                                        ? 'bg-warning border-warning text-background shadow-md'
                                        : 'bg-muted border-border hover:bg-muted/80 text-muted-foreground'
                                    }`}
                                  >
                                    <div className={isVLTSelected ? 'text-background' : 'text-foreground'}>
                                      {vltOption.name}
                                    </div>
                                    {vltOption.subtitle && (
                                      <div className={isVLTSelected ? 'text-background/70' : 'text-muted-foreground'} style={{ fontSize: '0.8125rem' }}>
                                        {vltOption.subtitle}
                                      </div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                     </div>
                  )}
               </div>
             )}
          </div>
        </div>
        </>
        )}
      </div>

      {/* Right Column: Preview & Summary */}
      <div className="lg:col-span-7 lg:sticky lg:top-24 space-y-6">
        
        {/* Vehicle Preview */}
        <div className="bg-card rounded border border-border overflow-hidden shadow-xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3>Live Preview</h3>
              {serviceType && (
                <div className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
                  <span className="text-primary uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
                    {serviceType === 'ppf' ? 'Paint Protection' : 'Window Tint'}
                  </span>
                </div>
              )}
            </div>

            {/* Car Image */}
            <div className="relative aspect-[16/9] bg-muted rounded overflow-hidden">
              <ImageWithFallback 
                src={baseCarImage} 
                alt="Vehicle Preview" 
                className="w-full h-full object-contain"
              />
              
              {/* PPF Coverage Badges */}
              {serviceType === 'ppf' && ppfPackage && ppfPackages.find(p => p.id === ppfPackage) && (
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {ppfPackages.find(p => p.id === ppfPackage)!.coverage.slice(0, 5).map((area, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded border border-warning/40 shadow-lg"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-warning" />
                      <span className="text-foreground" style={{ fontSize: '0.75rem' }}>{area}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features & Summary */}
        {(selectedItem || selectedColor.id) && (
          <div className="bg-card rounded border border-border p-6 shadow-xl">
            <h3 className="mb-4">Configuration Summary</h3>
            
            <div className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <h4>{feature.title}</h4>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>Estimated Total</span>
                <span className="text-warning" style={{ fontSize: '2.5rem', lineHeight: '1', fontFamily: "'Exo 2', sans-serif" }}>
                  ${price.toLocaleString()}
                </span>
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
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
        )}
      </div>
      </div>
    </div>
  );
}
