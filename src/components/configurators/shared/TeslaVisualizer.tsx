import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo, useEffect } from 'react';
import { Check, Shield, ShoppingCart, Loader2, Info, ExternalLink, Car, Sun, ChevronDown } from 'lucide-react';
import { Button } from '../../ui/button';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import baseCarImage from 'figma:asset/6f2dc65f01fde49b06e4bb9f70dbeecf443dce72.png';
import defaultOverlayImage from 'figma:asset/0a3bd25dffed8e38a93b0538ff25f05d8318ec1b.png';
import { ColorOption } from '../color-ppf/types';

// Import shared data
import { 
  vehicleMakes, 
  vehicleTypes, 
  ppfPackages, 
  ppfFilms, 
  tintPackages, 
  tintFilms, 
  getYears,
  calculatePPFPrice,
  calculateTintPrice,
  getAvailableVLT,
  getAvailableTintPackages,
  getAvailableTintFilms
} from './vehicleData';

import { clearFilms } from './filmData';
import { VisualizerDashboard } from './VisualizerDashboard';

interface Feature {
  title: string;
  desc: string;
}

interface TeslaVisualizerProps {
  colors: ColorOption[];
  selectedColor: ColorOption;
  setSelectedColor: (color: ColorOption) => void;
  loading: boolean;
  handleAddToCart: () => void;
  features: Feature[];
}

type ServiceType = 'ppf' | 'tint';
type PPFFinish = 'clear' | 'gloss' | 'satin';

export function TeslaVisualizer({
  colors,
  selectedColor,
  setSelectedColor,
  loading,
  handleAddToCart: parentHandleAddToCart,
  features
}: TeslaVisualizerProps) {
  // Core State
  const [serviceType, setServiceType] = useState<ServiceType>('ppf');
  const [ppfFinish, setPpfFinish] = useState<PPFFinish>('clear');
  
  // Vehicle State
  const [year, setYear] = useState<string>('');
  const [make, setMake] = useState<string>(''); 
  const [model, setModel] = useState<string>('');
  const [subModel, setSubModel] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('large-suv'); // Default logic needed based on selection

  // Selection State
  const [selectedItem, setSelectedItem] = useState<string>(''); // ID or Name of selected film/package
  const [ppfPackage, setPpfPackage] = useState<string>('');
  const [tintPackage, setTintPackage] = useState<string>('full');
  const [tintVLT, setTintVLT] = useState<number>(35);

  // Calculated Price
  const [price, setPrice] = useState<number>(0);

  // Update price when selections change
  useEffect(() => {
    let calculated = 0;
    if (serviceType === 'ppf') {
        // Calculate PPF Price
        // Logic: Base Package (Full Front is most common) + Film Modifier
        // For this visualizer, we are selecting the FILM primarily.
        // We'll assume "Full Front" package as the baseline for the displayed price 
        // unless we add a package selector. The Figma design shows "Select Your Finish".
        // We'll default to Full Body if Color Change, Full Front if Clear (common use case).
        
        const packageId = (ppfFinish === 'gloss' || ppfFinish === 'satin') ? 'full-body' : ppfPackage;
        
        if (ppfFinish === 'gloss' || ppfFinish === 'satin') {
             // Use the selected color price if available (it usually comes from vehicleData with modifiers)
             if (selectedColor && selectedColor.price) {
                 calculated = selectedColor.price; 
             } else {
                 // Fallback calculation
                 calculated = calculatePPFPrice(vehicleType, 'full-body', 'color-gloss', []);
             }
        } else {
             // Clear Films
             // Map the selected item name to an ID if needed
             const filmIdMap: Record<string, string> = {
                'XPEL Ultimate Plus': 'ultimate-plus',
                'XPEL Stealth': 'stealth',
                'XPEL Fusion Plus': 'ultimate-plus-fusion'
             };
             const filmId = filmIdMap[selectedItem] || 'ultimate-plus';
             calculated = calculatePPFPrice(vehicleType, packageId, filmId, []);
        }
    } else {
        // Calculate Tint Price
        calculated = calculateTintPrice(vehicleType, tintPackage, selectedItem, tintVLT, []);
    }
    setPrice(calculated);
  }, [serviceType, ppfFinish, selectedItem, selectedColor, ppfPackage, tintPackage, tintVLT, vehicleType]);

  // Initialize default selection - REMOVED to prevent auto-selection
  // useEffect(() => {
  //   if (serviceType === 'ppf' && !selectedItem) {
  //       setSelectedItem('XPEL Ultimate Plus');
  //   } else if (serviceType === 'tint' && !selectedItem) {
  //       const films = getAvailableTintFilms(vehicleType, tintPackage);
  //       if (films.length > 0) setSelectedItem(films[0].id);
  //   }
  // }, [serviceType, vehicleType, tintPackage]);

  const availableModels = useMemo(() => {
    return vehicleMakes.find(m => m.id === make)?.models || [];
  }, [make]);

  return (
    <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-12">
      
      <VisualizerDashboard
        year={year}
        setYear={setYear}
        make={make}
        setMake={setMake}
        model={model}
        setModel={setModel}
        subModel={subModel}
        setSubModel={setSubModel}
        availableModels={availableModels}
        serviceType={serviceType}
        setServiceType={setServiceType}
        ppfFinish={ppfFinish}
        setPpfFinish={setPpfFinish}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        colors={colors}
        ppfPackage={ppfPackage}
        setPpfPackage={setPpfPackage}
        tintPackage={tintPackage}
        setTintPackage={setTintPackage}
        vehicleType={vehicleType}
        tintVLT={tintVLT}
        setTintVLT={setTintVLT}
        price={price}
        loading={loading}
        handleAddToCart={parentHandleAddToCart}
        features={features}
      />
    </div>
  );
}
