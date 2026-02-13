import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Shield, Package, Wrench, Sparkles, Check, ChevronRight, Star, Search, Filter, Car, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '~/legacy/utils/cartContext';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ColorPPFSelector } from './ColorPPFSelector';
import { ProductKitCard } from './ProductKitCard';

// --- Data & Types ---

const categories = [
  { id: 'tint', name: 'Window Tint Kits', icon: Shield, desc: 'Pre-cut for your vehicle' },
  { id: 'ppf', name: 'PPF Kits', icon: Package, desc: 'Paint protection film' },
  { id: 'care', name: 'Auto Care', icon: Sparkles, desc: 'Professional detailing' },
  { id: 'tools', name: 'Tools', icon: Wrench, desc: 'Installation supplies' },
];

const tintPackagesList = [
  { id: 'full', name: 'Full Vehicle' },
  { id: 'front-windshield', name: 'Windshield' },
  { id: 'front-sides', name: 'Front Sides' },
  { id: 'rear', name: 'Rear Sides + Back' },
  { id: 'visor', name: 'Visor Strip' },
  { id: 'sunroof', name: 'Sunroof' },
];

const availableAddons = [
  { id: 'install-kit', name: 'Pro Install Kit', price: 24.95, desc: 'Squeegee, solution, & knife', icon: Wrench },
  { id: 'removal-kit', name: 'Tint Removal Kit', price: 19.95, desc: 'Scraper & adhesive remover', icon: Sparkles },
  { id: 'soap', name: 'Slip Solution', price: 12.95, desc: 'Professional mounting fluid', icon: Sparkles },
];

const supplyProducts = [
  { id: 'wash-bucket', name: 'Dual Bucket System', category: 'care', price: 169.95, image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80', desc: 'Professional wash system with grit guards.' },
  { id: 'foam-cannon', name: 'Smart Foam Cannon', category: 'tools', price: 49.95, image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80', desc: 'Produce thick clinging foam.' },
  { id: 'wash-mitt', name: 'Microfiber Mitt', category: 'care', price: 14.95, image: 'https://images.unsplash.com/photo-1520340356584-7c9948811dff?auto=format&fit=crop&q=80', desc: 'Scratch-free washing.' },
  { id: 'squeegee', name: 'Pro Squeegee Set', category: 'tools', price: 24.95, image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80', desc: 'Essential for film application.' },
  { id: 'detail-spray', name: 'Ceramic Boost', category: 'care', price: 29.95, image: 'https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&q=80', desc: 'Enhance gloss and protection.' },
  { id: 'knife', name: 'Precision Cutter', category: 'tools', price: 12.95, image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80', desc: 'For trimming excess film.' },
];

export default function ShopPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('tint');
  const [activePPFTab, setActivePPFTab] = useState<'clear' | 'color'>('clear');
  const [selectedVehicleType, setSelectedVehicleType] = useState('sedan');
  const [selectedPackage, setSelectedPackage] = useState('full');
  
  // Form States
  const [vehicleInfo, setVehicleInfo] = useState({ year: '', make: '', model: '', subModel: '' });
  const [addons, setAddons] = useState<string[]>([]);

  // VIN Decoder States
  const [vinNumber, setVinNumber] = useState('');
  const [vinLoading, setVinLoading] = useState(false);
  const [vinDecoded, setVinDecoded] = useState(false);

  // Reset package selection when category changes
  useEffect(() => {
    if (activeCategory === 'tint') setSelectedPackage('full');
    if (activeCategory === 'ppf') setSelectedPackage('bumper');
  }, [activeCategory]);

  // Dynamic Kit Generation
  const currentKits = useMemo(() => {
      if (activeCategory === 'ppf') {
         const multiplier = selectedVehicleType.includes('truck') || selectedVehicleType.includes('suv') ? 1.2 : 1;
         const prices: Record<string, number> = {
            'bumper': 189, 'partial': 249, 'full': 499, 'track': 349, 'wear': 99
         };
         const base = Math.round((prices[selectedPackage] || 189) * multiplier);
         
         return [
            {
               id: 'ultimate',
               name: 'Xpel Ultimate Plus',
               filmType: 'Gloss Clear',
               description: 'The first non-yellowing film',
               features: ['High Gloss Finish', 'Self-Healing', 'Stain Resistant', '10 Year Warranty'],
               price: base,
               popular: true
            },
            {
               id: 'fusion',
               name: 'Xpel Ultimate Plus Fusion',
               filmType: 'Ceramic Coated',
               description: 'Ceramic Infused Top-Coat',
               features: ['Hydrophobic', 'High Gloss', 'Self-Healing', '10 Year Warranty'],
               price: Math.round(base * 1.15)
            },
            {
               id: 'stealth',
               name: 'Xpel Stealth',
               filmType: 'Satin Matte',
               description: 'to give you matte stealth finish',
               features: ['Satin Matte Finish', 'Self-Healing', 'Hides Micro-scratches', '10 Year Warranty'],
               price: Math.round(base * 1.2)
            }
         ];
      }

      const basePrices: Record<string, number> = {
        'full': 199,
        'front-windshield': 149,
        'front-sides': 89,
        'rear': 159,
        'visor': 49,
        'sunroof': 59
      };
      const base = basePrices[selectedPackage] || 199;

      return [
        {
            id: `${selectedVehicleType}-${selectedPackage}-hp`,
            name: 'Prime HP',
            filmType: 'prime-hp',
            vlt: 35,
            price: base,
            description: 'High Performance Hybrid. Great heat rejection and UV protection.',
            features: ['54% Heat Rejection', '99% UV Protection', 'Color Stable', 'Lifetime Warranty'],
            packageId: selectedPackage
        },
        {
            id: `${selectedVehicleType}-${selectedPackage}-xr`,
            name: 'Prime XR',
            filmType: 'prime-xr',
            vlt: 35,
            price: Math.round(base * 1.4),
            description: 'Advanced Nano-Ceramic. Superior heat rejection without signal interference.',
            features: ['85% Heat Rejection', '99% UV Protection', 'Signal Friendly', 'Enhanced Clarity'],
            popular: true,
            packageId: selectedPackage
        },
        {
            id: `${selectedVehicleType}-${selectedPackage}-xr-plus`,
            name: 'Prime XR Plus',
            filmType: 'prime-xr-plus',
            vlt: 35,
            price: Math.round(base * 1.8),
            description: 'The Pinnacle of Performance. Maximum heat rejection for ultimate comfort.',
            features: ['98% Heat Rejection', 'SPF 1,000 Protection', 'Max Comfort', 'Multi-layer Tech'],
            packageId: selectedPackage
        }
      ];
  }, [selectedVehicleType, selectedPackage, activeCategory]);

  const products = supplyProducts.filter(p => 
    activeCategory === 'care' ? p.category === 'care' : 
    activeCategory === 'tools' ? p.category === 'tools' : false
  );

  const handleAddToCart = (item: any, type: string) => {
    // Add main item
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      type: type as any,
      metadata: { type, package: selectedPackage, vehicle: vehicleInfo }
    });
    
    // Add selected addons
    addons.forEach(addonId => {
      const addon = availableAddons.find(a => a.id === addonId);
      if (addon) {
        addToCart({
          id: addon.id,
          name: addon.name,
          price: addon.price,
          quantity: 1,
          type: 'supply',
          metadata: { type: 'addon' }
        });
      }
    });

    toast.success(`${item.name} added to cart`, {
      description: addons.length > 0 ? `+ ${addons.length} add-ons included` : 'Ready for checkout'
    });
    setAddons([]);
  };

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter(a => a !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  const decodeVIN = async () => {
    if (!vinNumber || vinNumber.length !== 17) {
      toast.error('Please enter a valid 17-character VIN');
      return;
    }

    setVinLoading(true);
    setVinDecoded(false);

    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vinNumber}?format=json`
      );
      const data = await response.json();

      if (data.Results) {
        const getValueByVariable = (variableName: string) => {
          const result = data.Results.find((item: any) => item.Variable === variableName);
          return result?.Value || '';
        };

        const year = getValueByVariable('Model Year');
        const make = getValueByVariable('Make');
        const model = getValueByVariable('Model');
        const trim = getValueByVariable('Trim');
        const series = getValueByVariable('Series');
        const subModel = trim || series || '';
        const bodyClass = getValueByVariable('Body Class');

        setVehicleInfo({
          year,
          make,
          model,
          subModel
        });

        const bodyClassLower = bodyClass.toLowerCase();
        if (bodyClassLower.includes('coupe')) setSelectedVehicleType('coupe');
        else if (bodyClassLower.includes('sedan')) setSelectedVehicleType('sedan');
        else if (bodyClassLower.includes('suv')) setSelectedVehicleType('suv');
        else if (bodyClassLower.includes('truck')) setSelectedVehicleType(bodyClassLower.includes('crew') ? 'truck-4' : 'truck-2');
        else if (bodyClassLower.includes('wagon')) setSelectedVehicleType('wagon');

        setVinDecoded(true);
        toast.success('VIN decoded successfully!');
      } else {
        toast.error('Unable to decode VIN.');
      }
    } catch (error) {
      toast.error('Failed to decode VIN. Check connection.');
      console.error('VIN Decode Error:', error);
    } finally {
      setVinLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-auto-asphalt font-sans text-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[400px] w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1739895388302-ad413e47afab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJhZ2UlMjBwb3JzY2hlJTIwZGFyayUyMGRldGFpbHxlbnwxfHx8fDE3NjQyMDQ2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Garage"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-auto-asphalt via-auto-asphalt/80 to-transparent" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-auto-plum-deep/30 text-auto-plum-neon border border-auto-plum-neon/30 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm font-['Exo_2']">
              Professional Grade DIY
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-['Exo_2'] uppercase">
              Automotive Protection,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-neon to-auto-plum-mist">Perfected by You.</span>
            </h1>
            <p className="text-lg text-auto-silver max-w-xl leading-relaxed">
              Premium window tint and paint protection film kits, computer-cut to your exact vehicle specifications. Plus the pro-grade tools to install them.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- CATEGORY NAVIGATION --- */}
      <div className="sticky top-20 z-40 bg-auto-asphalt/80 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar py-4 gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap font-['Exo_2'] uppercase tracking-wide border ${
                  activeCategory === cat.id
                    ? 'bg-auto-plum-deep/20 border-auto-plum-neon text-auto-plum-neon shadow-[0_0_15px_rgba(157,78,221,0.3)]'
                    : 'bg-auto-carbon border-white/5 text-auto-silver hover:text-white hover:border-white/20'
                }`}
              >
                <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-auto-plum-neon' : ''}`} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-4 py-16">
        
        {/* TINT & PPF LOGIC */}
        {(activeCategory === 'tint' || activeCategory === 'ppf') && (
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* STEP 1: VEHICLE BUILDER */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              {/* Step Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-auto-carbon border border-white/10 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-auto-plum-neon font-['Exo_2']">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white font-['Exo_2'] uppercase">Build Your Vehicle Profile</h3>
                  <p className="text-auto-silver mt-1">Enter your vehicle details to customize your experience</p>
                </div>
              </div>

              <div className="bg-auto-carbon border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-auto-plum-neon/5 to-transparent pointer-events-none" />
                
                <div className="p-8 lg:p-10 relative z-10">
                  {/* VIN Decoder Section */}
                  <div className="mb-10 pb-10 border-b border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-auto-plum-deep/20 flex items-center justify-center">
                        <Search className="w-5 h-5 text-auto-plum-neon" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg font-['Exo_2']">Quick Start with VIN</h4>
                        <p className="text-sm text-auto-silver">Auto-fill your vehicle details instantly</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 space-y-2">
                        <label className="block text-sm font-semibold text-auto-silver uppercase tracking-wider font-['Exo_2']">
                          Vehicle Identification Number (VIN)
                        </label>
                        <input
                          type="text"
                          value={vinNumber}
                          onChange={(e) => setVinNumber(e.target.value.toUpperCase())}
                          placeholder="Enter 17-character VIN"
                          maxLength={17}
                          className={`w-full h-14 px-5 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-1 transition-all font-mono uppercase tracking-wider ${
                            vinDecoded
                              ? 'bg-auto-plum-deep/20 border-auto-plum-neon focus:border-auto-plum-neon focus:ring-auto-plum-neon'
                              : 'bg-auto-asphalt border-white/10 focus:border-auto-plum-neon focus:ring-auto-plum-neon'
                          }`}
                        />
                      </div>

                      <div className="flex items-end">
                        <button
                          onClick={decodeVIN}
                          disabled={vinLoading || vinNumber.length !== 17}
                          className="h-14 px-8 bg-auto-plum-neon hover:bg-white text-black rounded-xl font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(157,78,221,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center gap-2 whitespace-nowrap font-['Exo_2'] uppercase tracking-wide"
                        >
                          {vinLoading ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <Search className="w-5 h-5" />
                              </motion.div>
                              Decoding...
                            </>
                          ) : (
                            <>
                              <Search className="w-5 h-5" />
                              Decode VIN
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {vinDecoded && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-auto-plum-deep/20 border border-auto-plum-neon/30 rounded-xl flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-auto-plum-neon flex items-center justify-center flex-shrink-0 text-black">
                          <Check className="w-5 h-5" strokeWidth={3} />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-white text-sm">VIN Decoded Successfully!</p>
                          <p className="text-xs text-auto-plum-mist mt-1">
                            {vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model} {vehicleInfo.subModel || ''}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Vehicle Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {['Year', 'Make', 'Model', 'Trim'].map((field) => (
                      <div key={field} className="space-y-2">
                        <label className="block text-sm font-semibold text-auto-silver uppercase tracking-wider font-['Exo_2']">
                          {field}
                        </label>
                        <input 
                          type="text" 
                          value={field === 'Trim' ? vehicleInfo.subModel : (vehicleInfo as any)[field.toLowerCase()]}
                          onChange={(e) => setVehicleInfo({...vehicleInfo, [field === 'Trim' ? 'subModel' : field.toLowerCase()]: e.target.value})}
                          placeholder={`e.g. ${field === 'Year' ? '2024' : field === 'Make' ? 'Tesla' : field === 'Model' ? 'Model Y' : 'Performance'}`} 
                          className="w-full h-14 px-5 bg-auto-asphalt border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-auto-plum-neon focus:ring-1 focus:ring-auto-plum-neon transition-all font-medium" 
                        />
                      </div>
                    ))}
                  </div>

                  {/* Body Type Selector */}
                  <div>
                    <label className="block text-sm font-semibold text-auto-silver uppercase tracking-wider mb-6 font-['Exo_2']">
                      Select Body Style
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
                      {[
                        { id: 'coupe', name: 'Coupe' },
                        { id: 'sedan', name: 'Sedan' },
                        { id: 'truck-2', name: 'Truck 2-Dr' },
                        { id: 'truck-4', name: 'Truck 4-Dr' },
                        { id: 'suv', name: 'SUV' },
                        { id: 'large-suv', name: 'Large SUV' },
                        { id: 'wagon', name: 'Wagon' }
                      ].map(type => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedVehicleType(type.id)}
                          className={`relative group flex flex-col items-center justify-center p-5 rounded-2xl border transition-all duration-300 min-h-[120px] ${
                            selectedVehicleType === type.id
                              ? 'border-auto-plum-neon bg-auto-plum-deep/20 shadow-[0_0_15px_rgba(157,78,221,0.2)]'
                              : 'border-white/5 bg-auto-asphalt hover:border-auto-plum-neon/50 hover:bg-auto-asphalt/80'
                          }`}
                        >
                          {selectedVehicleType === type.id && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-2 right-2 w-5 h-5 rounded-full bg-auto-plum-neon flex items-center justify-center shadow-lg"
                            >
                              <Check className="w-3 h-3 text-black" strokeWidth={3} />
                            </motion.div>
                          )}
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all ${
                            selectedVehicleType === type.id
                              ? 'bg-auto-plum-neon text-black'
                              : 'bg-white/5 text-auto-silver group-hover:text-white'
                          }`}>
                            <Car className="w-5 h-5" />
                          </div>
                          <span className={`text-xs font-bold uppercase text-center leading-tight transition-colors font-['Exo_2'] ${
                            selectedVehicleType === type.id ? 'text-white' : 'text-auto-silver'
                          }`}>
                            {type.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* STEP 2: PACKAGE SELECTION */}
            {activeCategory === 'tint' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-auto-carbon border border-white/10 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-auto-plum-neon font-['Exo_2']">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white font-['Exo_2'] uppercase">Choose Coverage</h3>
                    <p className="text-auto-silver mt-1">Select which windows to tint</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {tintPackagesList.map((pkg) => (
                    <motion.button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative group p-6 rounded-2xl border transition-all duration-300 text-left ${
                        selectedPackage === pkg.id
                          ? 'border-auto-plum-neon bg-auto-plum-deep/20 shadow-[0_0_15px_rgba(157,78,221,0.2)]'
                          : 'border-white/5 bg-auto-carbon hover:border-auto-plum-neon/50'
                      }`}
                    >
                      {selectedPackage === pkg.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-4 right-4 w-6 h-6 rounded-full bg-auto-plum-neon flex items-center justify-center shadow-lg z-10"
                        >
                          <Check className="w-3 h-3 text-black" strokeWidth={3} />
                        </motion.div>
                      )}

                      {/* SVG Car Diagram with Dynamic Highlights */}
                      <div className="mb-4 h-24 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                        <svg viewBox="0 0 200 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M40 50 L50 30 L70 25 L130 25 L150 30 L160 50 L160 60 L155 60 L155 65 L150 65 L150 60 L50 60 L50 65 L45 65 L45 60 L40 60 Z"
                            stroke="currentColor" strokeWidth="2" className="text-white/30" fill="none"
                          />
                          <path
                            d="M70 25 L50 30 L55 40 L75 35 Z"
                            fill={['front-windshield', 'full', 'visor'].includes(pkg.id) ? 'currentColor' : 'none'}
                            className={['front-windshield', 'full', 'visor'].includes(pkg.id) ? 'text-auto-plum-neon' : 'text-transparent'}
                            stroke="currentColor" strokeWidth="1.5"
                          />
                          <path
                            d="M75 35 L55 40 L55 50 L75 50 Z"
                            fill={['front-sides', 'full'].includes(pkg.id) ? 'currentColor' : 'none'}
                            className={['front-sides', 'full'].includes(pkg.id) ? 'text-auto-plum-neon' : 'text-transparent'}
                            stroke="currentColor" strokeWidth="1.5"
                          />
                          <path
                            d="M125 35 L125 50 L145 50 L145 40 Z"
                            fill={['rear', 'full'].includes(pkg.id) ? 'currentColor' : 'none'}
                            className={['rear', 'full'].includes(pkg.id) ? 'text-auto-plum-neon' : 'text-transparent'}
                            stroke="currentColor" strokeWidth="1.5"
                          />
                          <path
                            d="M125 35 L145 40 L150 30 L130 25 Z"
                            fill={['rear', 'full'].includes(pkg.id) ? 'currentColor' : 'none'}
                            className={['rear', 'full'].includes(pkg.id) ? 'text-auto-plum-neon' : 'text-transparent'}
                            stroke="currentColor" strokeWidth="1.5"
                          />
                          {['sunroof', 'full'].includes(pkg.id) && (
                            <rect x="85" y="30" width="30" height="10" fill="currentColor" className="text-auto-plum-neon" rx="2" />
                          )}
                          {pkg.id === 'visor' && (
                            <rect x="55" y="28" width="25" height="3" fill="currentColor" className="text-auto-plum-neon" />
                          )}
                        </svg>
                      </div>

                      <div className="space-y-1">
                        <h4 className={`font-bold font-['Exo_2'] transition-colors ${
                          selectedPackage === pkg.id ? 'text-white' : 'text-auto-silver'
                        }`}>
                          {pkg.name}
                        </h4>
                        <p className="text-xs text-white/50 uppercase tracking-wider">
                          {pkg.id === 'full' && 'Complete Coverage'}
                          {pkg.id === 'front-windshield' && 'Front Protection'}
                          {pkg.id === 'front-sides' && 'Driver & Passenger'}
                          {pkg.id === 'rear' && 'Back Coverage'}
                          {pkg.id === 'visor' && 'Top Strip Only'}
                          {pkg.id === 'sunroof' && 'Roof Panel'}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: FILM SELECTION */}
            {(activeCategory === 'tint' || activeCategory === 'ppf') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-auto-carbon border border-white/10 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-auto-plum-neon font-['Exo_2']">
                        {activeCategory === 'tint' ? '3' : '2'}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white font-['Exo_2'] uppercase">
                      {activeCategory === 'tint' ? 'Select Film Series' : 'Select Protection Level'}
                    </h3>
                    <p className="text-auto-silver mt-1">
                      {activeCategory === 'tint' ? 'Choose your heat rejection performance' : 'Pick the perfect package for your needs'}
                    </p>
                  </div>
                </div>

                {/* PPF Tab Switcher */}
                {activeCategory === 'ppf' && (
                  <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-auto-asphalt border border-white/10 rounded-2xl p-1 shadow-lg">
                      <button
                        onClick={() => setActivePPFTab('clear')}
                        className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 font-['Exo_2'] uppercase tracking-wide ${
                          activePPFTab === 'clear'
                            ? 'bg-auto-carbon text-white shadow-lg border border-white/10'
                            : 'text-auto-silver hover:text-white'
                        }`}
                      >
                        Clear Protection
                      </button>
                      <button
                        onClick={() => setActivePPFTab('color')}
                        className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 font-['Exo_2'] uppercase tracking-wide ${
                          activePPFTab === 'color'
                            ? 'bg-auto-carbon text-white shadow-lg border border-white/10'
                            : 'text-auto-silver hover:text-white'
                        }`}
                      >
                        Color Change
                      </button>
                    </div>
                  </div>
                )}

                {/* Grid */}
                {activeCategory === 'ppf' && activePPFTab === 'color' ? (
                   <div className="bg-auto-carbon border border-white/10 rounded-3xl overflow-hidden">
                      <div className="p-10 border-b border-white/10 text-center bg-gradient-to-b from-auto-plum-deep/10 to-transparent">
                        <h3 className="text-3xl font-bold text-white font-['Exo_2'] uppercase mb-2">Premium Color Change</h3>
                        <p className="text-auto-silver">Transform your vehicle with our exclusive collection</p>
                      </div>
                      <div className="p-8">
                        <ColorPPFSelector onNavigate={onNavigate} />
                      </div>
                   </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {currentKits.map((kit) => (
                      <ProductKitCard
                        key={kit.id}
                        kit={kit}
                        activeCategory={activeCategory}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* ADD-ONS SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-auto-plum-deep/20 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-auto-plum-neon" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-['Exo_2'] uppercase">Enhance Your Install</h3>
                  <p className="text-auto-silver mt-1">Professional tools & supplies</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {availableAddons.filter(a => a.id !== 'soap').map(addon => (
                  <motion.div 
                    key={addon.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => toggleAddon(addon.id)}
                    className={`cursor-pointer rounded-3xl border transition-all duration-300 overflow-hidden ${
                      addons.includes(addon.id)
                        ? 'border-auto-plum-neon bg-auto-plum-deep/20 shadow-[0_0_20px_rgba(157,78,221,0.2)]'
                        : 'border-white/5 bg-auto-carbon hover:border-auto-plum-neon/50'
                    }`}
                  >
                    <div className="p-6 flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                        addons.includes(addon.id) 
                          ? 'bg-auto-plum-neon text-black' 
                          : 'bg-white/5 text-auto-silver'
                      }`}>
                        {addon.id === 'install-kit' ? <Wrench className="w-7 h-7" /> : <Sparkles className="w-7 h-7" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1 font-['Exo_2']">{addon.name}</h4>
                        <p className="text-sm text-auto-silver mb-4">{addon.desc}</p>
                        
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                          <span className="text-xl font-bold text-auto-plum-neon">${addon.price}</span>
                          <div className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider ${
                             addons.includes(addon.id) ? 'bg-auto-plum-neon text-black' : 'bg-white/10 text-white'
                          }`}>
                            {addons.includes(addon.id) ? 'Added' : 'Add to Kit'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        )}

        {/* CARE & TOOLS LOGIC */}
        {(activeCategory === 'care' || activeCategory === 'tools') && (
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {products.map(product => (
                 <motion.div
                   key={product.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   whileHover={{ y: -5 }}
                   className="bg-auto-carbon border border-white/5 rounded-2xl overflow-hidden group hover:border-auto-plum-neon/50 transition-all duration-300"
                 >
                   <div className="aspect-square relative overflow-hidden">
                     <img 
                       src={product.image} 
                       alt={product.name}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <Button 
                          onClick={() => handleAddToCart(product, 'supply')}
                          className="w-full bg-auto-plum-neon text-black hover:bg-white font-bold"
                        >
                          Add to Cart
                        </Button>
                     </div>
                   </div>
                   <div className="p-6">
                     <div className="flex justify-between items-start mb-2">
                       <h3 className="text-lg font-bold text-white font-['Exo_2']">{product.name}</h3>
                       <span className="text-auto-plum-neon font-bold">${product.price}</span>
                     </div>
                     <p className="text-sm text-auto-silver">{product.desc}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        )}

      </main>
    </div>
  );
}
