export default function ShopPageStandalone() {
  // --- Inlined React hooks ---
  const { useState, useEffect, useMemo } = (window as any).React || require('react');

  // --- Inlined Data ---
  const vehicleTypes = [
    { id: 'coupe', name: 'Coupe' },
    { id: 'sedan', name: 'Sedan' },
    { id: 'truck-2', name: 'Truck 2-Door' },
    { id: 'truck-4', name: 'Truck 4-Door' },
    { id: 'suv', name: 'SUV' },
    { id: 'large-suv', name: 'Large SUV' },
    { id: 'wagon', name: 'Wagon' }
  ];

  const categories = [
    { id: 'tint', name: 'Window Tint Kits', icon: '🛡️', desc: 'Pre-cut for your vehicle' },
    { id: 'ppf', name: 'PPF Kits', icon: '📦', desc: 'Paint protection film' },
    { id: 'care', name: 'Auto Care', icon: '✨', desc: 'Professional detailing' },
    { id: 'tools', name: 'Tools', icon: '🔧', desc: 'Installation supplies' },
  ];

  const tintPackagesList = [
    { id: 'full', name: 'Full Vehicle' },
    { id: 'front-windshield', name: 'Windshield' },
    { id: 'front-sides', name: 'Front Sides' },
    { id: 'rear', name: 'Rear Sides + Back' },
    { id: 'visor', name: 'Visor Strip' },
    { id: 'sunroof', name: 'Sunroof' },
  ];

  const ppfPackagesList = [
    { id: 'bumper', name: 'Front Bumper' },
    { id: 'partial', name: 'Partial Front' },
    { id: 'full', name: 'Full Front' },
    { id: 'track', name: 'Track Pack' },
    { id: 'wear', name: 'Wear & Tear' },
  ];

  const availableAddons = [
    { id: 'install-kit', name: 'Pro Install Kit', price: 24.95, desc: 'Squeegee, solution, & knife', icon: '🔧' },
    { id: 'removal-kit', name: 'Tint Removal Kit', price: 19.95, desc: 'Scraper & adhesive remover', icon: '✨' },
    { id: 'soap', name: 'Slip Solution', price: 12.95, desc: 'Professional mounting fluid', icon: '✨' },
  ];

  const supplyProducts = [
    { id: 'wash-bucket', name: 'Dual Bucket System', category: 'care', price: 169.95, image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600', desc: 'Professional wash system with grit guards.' },
    { id: 'foam-cannon', name: 'Smart Foam Cannon', category: 'tools', price: 49.95, image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600', desc: 'Produce thick clinging foam.' },
    { id: 'wash-mitt', name: 'Microfiber Mitt', category: 'care', price: 14.95, image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600', desc: 'Scratch-free washing.' },
    { id: 'squeegee', name: 'Pro Squeegee Set', category: 'tools', price: 24.95, image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7f875?w=600', desc: 'Essential for film application.' },
    { id: 'detail-spray', name: 'Ceramic Boost', category: 'care', price: 29.95, image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600', desc: 'Enhance gloss and protection.' },
    { id: 'knife', name: 'Precision Cutter', category: 'tools', price: 12.95, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600', desc: 'For trimming excess film.' },
  ];

  const colorPPFOptions = [
    { id: 'satin-black', name: 'Satin Black', category: 'Satin', price: 1299, color: '#1a1a1a', finish: 'Satin' },
    { id: 'satin-white', name: 'Satin White', category: 'Satin', price: 1299, color: '#f5f5f5', finish: 'Satin' },
    { id: 'satin-blue', name: 'Satin Deep Blue', category: 'Satin', price: 1399, color: '#1e3a8a', finish: 'Satin' },
    { id: 'satin-red', name: 'Satin Red', category: 'Satin', price: 1399, color: '#991b1b', finish: 'Satin' },
    { id: 'gloss-black', name: 'Gloss Black', category: 'Gloss', price: 1199, color: '#000000', finish: 'Gloss' },
    { id: 'gloss-white', name: 'Gloss White', category: 'Gloss', price: 1199, color: '#ffffff', finish: 'Gloss' },
    { id: 'chrome-silver', name: 'Chrome Silver', category: 'Chrome', price: 1899, color: 'linear-gradient(135deg, #d4d4d8 0%, #f4f4f5 50%, #d4d4d8 100%)', finish: 'Chrome' },
    { id: 'chrome-gold', name: 'Chrome Gold', category: 'Chrome', price: 1899, color: 'linear-gradient(135deg, #fbbf24 0%, #fcd34d 50%, #fbbf24 100%)', finish: 'Chrome' },
  ];

  // --- Component State ---
  const [activeCategory, setActiveCategory] = useState('tint');
  const [activePPFTab, setActivePPFTab] = useState<'clear' | 'color'>('clear');
  const [selectedVehicleType, setSelectedVehicleType] = useState('sedan');
  const [selectedPackage, setSelectedPackage] = useState('full');
  const [vehicleInfo, setVehicleInfo] = useState({ year: '', make: '', model: '', subModel: '' });
  const [addons, setAddons] = useState<string[]>([]);
  const [vinNumber, setVinNumber] = useState('');
  const [vinLoading, setVinLoading] = useState(false);
  const [vinDecoded, setVinDecoded] = useState(false);
  const [selectedColorPPF, setSelectedColorPPF] = useState<string | null>(null);
  const [cart, setCart] = useState<any[]>([]);

  // --- Helper Functions ---
  const showToast = (message: string, description?: string) => {
    alert(`${message}${description ? '\n' + description : ''}`);
  };

  const generatePPFKits = (vehicleTypeId: string, packageId: string) => {
    const multiplier = vehicleTypeId.includes('truck') || vehicleTypeId.includes('suv') ? 1.2 : 1;
    const prices: Record<string, number> = {
      'bumper': 189, 'partial': 249, 'full': 499, 'track': 349, 'wear': 99
    };
    const base = Math.round((prices[packageId] || 189) * multiplier);
    
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
  };

  const generateTintKits = (vehicleTypeId: string, packageId: string) => {
    const basePrices: Record<string, number> = {
      'full': 199,
      'front-windshield': 149,
      'front-sides': 89,
      'rear': 159,
      'visor': 49,
      'sunroof': 59
    };
    const base = basePrices[packageId] || 199;

    return [
      {
        id: `${vehicleTypeId}-${packageId}-hp`,
        name: 'Prime HP',
        filmType: 'prime-hp',
        vlt: 35,
        price: base,
        description: 'High Performance Hybrid. Great heat rejection and UV protection.',
        features: ['54% Heat Rejection', '99% UV Protection', 'Color Stable', 'Lifetime Warranty'],
        packageId: packageId
      },
      {
        id: `${vehicleTypeId}-${packageId}-xr`,
        name: 'Prime XR',
        filmType: 'prime-xr',
        vlt: 35,
        price: Math.round(base * 1.4),
        description: 'Advanced Nano-Ceramic. Superior heat rejection without signal interference.',
        features: ['85% Heat Rejection', '99% UV Protection', 'Signal Friendly', 'Enhanced Clarity'],
        popular: true,
        packageId: packageId
      },
      {
        id: `${vehicleTypeId}-${packageId}-xr-plus`,
        name: 'Prime XR Plus',
        filmType: 'prime-xr-plus',
        vlt: 35,
        price: Math.round(base * 1.8),
        description: 'The Pinnacle of Performance. Maximum heat rejection for ultimate comfort.',
        features: ['98% Heat Rejection', 'SPF 1,000 Protection', 'Max Comfort', 'Multi-layer Tech'],
        packageId: packageId
      }
    ];
  };

  // --- Effects ---
  useEffect(() => {
    if (activeCategory === 'tint') setSelectedPackage('full');
    if (activeCategory === 'ppf') setSelectedPackage('bumper');
  }, [activeCategory]);

  // --- Computed Values ---
  const currentKits = useMemo(() => {
    if (activeCategory === 'ppf') {
      return generatePPFKits(selectedVehicleType, selectedPackage);
    }
    return generateTintKits(selectedVehicleType, selectedPackage);
  }, [selectedVehicleType, selectedPackage, activeCategory]);

  const products = supplyProducts.filter(p => 
    activeCategory === 'care' ? p.category === 'care' : 
    activeCategory === 'tools' ? p.category === 'tools' : false
  );

  // --- Event Handlers ---
  const handleAddToCart = (item: any, type: string) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      type: type,
      metadata: { type, package: selectedPackage, vehicle: vehicleInfo }
    };
    
    setCart([...cart, cartItem]);
    
    // Add selected addons
    const addonItems = addons.map(addonId => {
      const addon = availableAddons.find(a => a.id === addonId);
      return addon ? {
        id: addon.id,
        name: addon.name,
        price: addon.price,
        quantity: 1,
        type: 'supply',
        metadata: { type: 'addon' }
      } : null;
    }).filter(Boolean);
    
    if (addonItems.length > 0) {
      setCart([...cart, cartItem, ...addonItems]);
    }

    showToast(`${item.name} ${addons.length > 0 ? '+ Add-ons' : ''} added to cart`);
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
      showToast('Please enter a valid 17-character VIN');
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
        
        // Enhanced Trim/Sub-Model extraction - check multiple fields
        const trim = getValueByVariable('Trim');
        const trim2 = getValueByVariable('Trim2');
        const series = getValueByVariable('Series');
        const series2 = getValueByVariable('Series2');
        
        // Use the first non-empty value, prioritizing Trim > Series > Trim2 > Series2
        const subModel = trim || series || trim2 || series2 || '';
        
        const bodyClass = getValueByVariable('Body Class');

        // Auto-populate vehicle info
        setVehicleInfo({
          year: year,
          make: make,
          model: model,
          subModel: subModel
        });

        // Auto-select body type based on Body Class from API
        const bodyClassLower = bodyClass.toLowerCase();
        if (bodyClassLower.includes('coupe')) {
          setSelectedVehicleType('coupe');
        } else if (bodyClassLower.includes('sedan')) {
          setSelectedVehicleType('sedan');
        } else if (bodyClassLower.includes('suv') || bodyClassLower.includes('sport utility')) {
          setSelectedVehicleType('suv');
        } else if (bodyClassLower.includes('truck')) {
          if (bodyClassLower.includes('crew') || bodyClassLower.includes('4')) {
            setSelectedVehicleType('truck-4');
          } else {
            setSelectedVehicleType('truck-2');
          }
        } else if (bodyClassLower.includes('wagon')) {
          setSelectedVehicleType('wagon');
        }

        setVinDecoded(true);
        showToast('VIN decoded successfully!', `${year} ${make} ${model}${subModel ? ' ' + subModel : ''}`);
      } else {
        showToast('Unable to decode VIN. Please try again or enter manually.');
      }
    } catch (error) {
      showToast('Failed to decode VIN. Please check your internet connection.');
      console.error('VIN Decode Error:', error);
    } finally {
      setVinLoading(false);
    }
  };

  // --- SVG Icons ---
  const ShoppingCartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );

  const CarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6 0a1 1 0 001 1h2a1 1 0 001-1m0 0h1a1 1 0 001-1v-1a1 1 0 00-.293-.707l-1-1A1 1 0 0017 13h-3" />
    </svg>
  );

  const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  // --- Inline Product Card Component ---
  const ProductKitCard = ({ kit }: any) => (
    <div className="relative group bg-white border-2 border-gray-200 rounded-3xl hover:shadow-2xl hover:border-teal-500 transition-all duration-300 overflow-hidden">
      {kit.popular && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
          <StarIcon />
          Popular
        </div>
      )}
      
      <div className="p-8">
        <div className="mb-6">
          <h4 className="text-2xl font-bold text-gray-900 mb-2">{kit.name}</h4>
          <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-3">{kit.filmType}</p>
          <p className="text-gray-600 leading-relaxed">{kit.description}</p>
        </div>

        <div className="space-y-3 mb-6">
          {kit.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckIcon />
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t-2 border-gray-100">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Starting at</p>
              <p className="text-4xl font-bold text-teal-600">${kit.price}</p>
            </div>
          </div>

          <button
            onClick={() => handleAddToCart(kit, activeCategory)}
            className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 flex items-center justify-center gap-2"
          >
            <ShoppingCartIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  // --- Inline Color PPF Selector ---
  const ColorPPFSelector = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Satin', 'Gloss', 'Chrome'];
    
    const filteredColors = selectedCategory === 'All' 
      ? colorPPFOptions 
      : colorPPFOptions.filter(c => c.category === selectedCategory);

    return (
      <div className="space-y-8">
        {/* Category Filter */}
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Color Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredColors.map(color => (
            <div
              key={color.id}
              onClick={() => setSelectedColorPPF(color.id)}
              className={`cursor-pointer group bg-white border-2 rounded-2xl p-6 transition-all ${
                selectedColorPPF === color.id
                  ? 'border-teal-600 shadow-2xl'
                  : 'border-gray-200 hover:border-teal-300 hover:shadow-lg'
              }`}
            >
              <div
                className="w-full h-32 rounded-xl mb-4 shadow-lg"
                style={{ background: color.color }}
              />
              <h4 className="font-bold text-gray-900 mb-2">{color.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{color.finish} Finish</p>
              <p className="text-2xl font-bold text-teal-600">${color.price}</p>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(color, 'ppf-color');
                }}
                className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCartIcon />
                Select Color
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // --- Main Render ---
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-96 w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1739895388302-ad413e47afab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJhZ2UlMjBwb3JzY2hlJTIwZGFyayUyMGRldGFpbHxlbnwxfHx8fDE3NjQyMDQ2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Garage"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-600/20 text-teal-400 border border-teal-500/30 text-xs font-bold uppercase tracking-widest mb-4">
              Professional Grade DIY
            </span>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Automotive Protection,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">Perfected by You.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Premium window tint and paint protection film kits, computer-cut to your exact vehicle specifications. Plus the pro-grade tools to install them.
            </p>
          </div>
        </div>
      </div>

      {/* --- CATEGORY NAVIGATION --- */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto py-2 gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-lg scale-105'
                    : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
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
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* STEP 1: VEHICLE BUILDER */}
            <div className="relative overflow-hidden">
              {/* Step Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    🚗
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Build Your Vehicle Profile</h3>
                  <p className="text-gray-600 mt-1">Enter your vehicle details to customize your experience</p>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-8 lg:p-10">
                  {/* VIN Decoder Section */}
                  <div className="mb-10 pb-10 border-b-2 border-gray-200">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-md">
                        <SearchIcon />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Quick Start with VIN</h4>
                        <p className="text-sm text-gray-600">Auto-fill your vehicle details instantly</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 space-y-2">
                        <label className="block text-sm font-semibold text-gray-900 uppercase tracking-wider">
                          Vehicle Identification Number (VIN)
                        </label>
                        <input
                          type="text"
                          value={vinNumber}
                          onChange={(e) => setVinNumber(e.target.value.toUpperCase())}
                          placeholder="Enter 17-character VIN"
                          maxLength={17}
                          className={`w-full h-14 px-5 border-2 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 transition-all font-mono uppercase tracking-wider ${
                            vinDecoded
                              ? 'bg-teal-50 border-teal-600 focus:border-teal-600 focus:ring-teal-200'
                              : 'bg-white border-gray-300 focus:border-yellow-400 focus:ring-yellow-100'
                          }`}
                        />
                        <p className="text-xs text-gray-500">
                          Find your VIN on your vehicle registration, insurance card, or dashboard
                        </p>
                      </div>

                      <div className="flex items-end">
                        <button
                          onClick={decodeVIN}
                          disabled={vinLoading || vinNumber.length !== 17}
                          className="h-14 px-8 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 rounded-xl font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg flex items-center gap-2 whitespace-nowrap"
                        >
                          {vinLoading ? (
                            <>
                              <div className="animate-spin">
                                <SearchIcon />
                              </div>
                              Decoding...
                            </>
                          ) : (
                            <>
                              <SearchIcon />
                              Decode VIN
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {vinDecoded && (
                      <div className="mt-4 p-4 bg-teal-50 border border-teal-300 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                          <CheckIcon />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-teal-700 text-sm">VIN Decoded Successfully!</p>
                          <p className="text-xs text-gray-900 mt-1">
                            {vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model} {vehicleInfo.subModel}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-600">
                        Or manually enter your vehicle details below
                      </p>
                    </div>
                  </div>

                  {/* Vehicle Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Year
                      </label>
                      <input 
                        type="text" 
                        value={vehicleInfo.year}
                        onChange={(e) => setVehicleInfo({...vehicleInfo, year: e.target.value})}
                        placeholder="e.g. 2024" 
                        className="w-full h-14 px-5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-200 transition-all font-medium" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Make
                      </label>
                      <input 
                        type="text" 
                        value={vehicleInfo.make}
                        onChange={(e) => setVehicleInfo({...vehicleInfo, make: e.target.value})}
                        placeholder="e.g. Tesla" 
                        className="w-full h-14 px-5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-200 transition-all font-medium" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Model
                      </label>
                      <input 
                        type="text" 
                        value={vehicleInfo.model}
                        onChange={(e) => setVehicleInfo({...vehicleInfo, model: e.target.value})}
                        placeholder="e.g. Model Y" 
                        className="w-full h-14 px-5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-200 transition-all font-medium" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Trim <span className="text-gray-500 normal-case">(Optional)</span>
                      </label>
                      <input 
                        type="text" 
                        value={vehicleInfo.subModel}
                        onChange={(e) => setVehicleInfo({...vehicleInfo, subModel: e.target.value})}
                        placeholder="e.g. Performance" 
                        className="w-full h-14 px-5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-200 transition-all font-medium" 
                      />
                    </div>
                  </div>

                  {/* Body Type Selector */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                      Select Body Style
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
                      {vehicleTypes.map(type => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedVehicleType(type.id)}
                          className={`relative group flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-300 min-h-[120px] ${
                            selectedVehicleType === type.id
                              ? 'border-teal-600 bg-gradient-to-br from-teal-50 to-teal-100 shadow-lg'
                              : 'border-gray-200 bg-white hover:border-teal-300 hover:shadow-md'
                          }`}
                        >
                          {selectedVehicleType === type.id && (
                            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center shadow-lg">
                              <CheckIcon />
                            </div>
                          )}
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all ${
                            selectedVehicleType === type.id
                              ? 'bg-teal-600 text-white'
                              : 'bg-gray-100 text-gray-600 group-hover:bg-teal-100 group-hover:text-teal-600'
                          }`}>
                            <CarIcon />
                          </div>
                          <span className={`text-xs font-bold uppercase text-center leading-tight transition-colors ${
                            selectedVehicleType === type.id ? 'text-teal-700' : 'text-gray-900'
                          }`}>
                            {type.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2: PACKAGE SELECTION */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-gray-900">2</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center">
                    📦
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {activeCategory === 'tint' ? 'Choose Your Coverage Package' : 'Select Protection Level'}
                  </h3>
                  <p className="text-gray-600 mt-1">Pick the perfect package for your needs</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {currentKits.map((kit) => (
                  <ProductKitCard key={kit.id} kit={kit} />
                ))}
              </div>
            </div>

            {/* STEP 3: FILM SELECTION */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    🛡️
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {activeCategory === 'tint' ? 'Select Film Series & Grade' : 'Choose Your Protection Film'}
                  </h3>
                  <p className="text-gray-600 mt-1">Premium films for ultimate protection</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* PPF Tab Switcher */}
                {activeCategory === 'ppf' && (
                  <div className="flex justify-center">
                    <div className="inline-flex bg-gray-100 border-2 border-gray-200 rounded-2xl p-2 shadow-lg">
                      <button
                        onClick={() => setActivePPFTab('clear')}
                        className={`relative px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                          activePPFTab === 'clear'
                            ? 'bg-white text-gray-900 shadow-xl'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <span className="relative flex items-center gap-2">
                          🛡️ Clear Protection
                        </span>
                      </button>
                      <button
                        onClick={() => setActivePPFTab('color')}
                        className={`relative px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                          activePPFTab === 'color'
                            ? 'bg-white text-gray-900 shadow-xl'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <span className="relative flex items-center gap-2">
                          ✨ Color Change
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Standard Kits Display */}
                {(activeCategory === 'tint' || (activeCategory === 'ppf' && activePPFTab === 'clear')) && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentKits.map((kit: any) => (
                      <ProductKitCard key={kit.id} kit={kit} />
                    ))}
                  </div>
                )}

                {/* Color PPF Selector */}
                {activeCategory === 'ppf' && activePPFTab === 'color' && (
                  <div className="bg-white border-2 border-gray-200 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-br from-teal-50 via-transparent to-yellow-50 p-8 lg:p-12 border-b-2 border-gray-200">
                      <div className="text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-300 rounded-full px-4 py-2 mb-4">
                          <span className="text-2xl">✨</span>
                          <span className="text-sm font-bold text-teal-800 uppercase tracking-wider">Premium Color Change</span>
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-3">
                          Transform Your Ride
                        </h3>
                        <p className="text-gray-600 text-lg">
                          Choose from our exclusive collection of premium color change films
                        </p>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <ColorPPFSelector />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ADD-ONS SECTION */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">➕</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Enhance Your Install</h3>
                  <p className="text-gray-600 mt-1">Premium add-ons for the complete package</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {availableAddons.map(addon => (
                  <div 
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                      addons.includes(addon.id)
                        ? 'border-teal-600 bg-gradient-to-br from-teal-50 to-teal-100 shadow-xl'
                        : 'border-gray-200 bg-white hover:border-teal-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all text-2xl ${
                        addons.includes(addon.id) 
                          ? 'bg-teal-600 text-white shadow-lg' 
                          : 'bg-gray-100'
                      }`}>
                        {addon.icon}
                      </div>
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                        addons.includes(addon.id) 
                          ? 'border-teal-600 bg-teal-600 scale-110' 
                          : 'border-gray-300 bg-white'
                      }`}>
                        {addons.includes(addon.id) && (
                          <CheckIcon />
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900">{addon.name}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{addon.desc}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Add-On Price</span>
                        <span className="text-xl font-bold text-teal-600">+${addon.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* AUTO CARE & TOOLS LOGIC */}
        {(activeCategory === 'care' || activeCategory === 'tools') && (
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-300 rounded-full px-4 py-2 mb-4">
                <span className="text-2xl">✨</span>
                <span className="text-sm font-bold text-teal-800 uppercase tracking-wider">Premium Supplies</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {activeCategory === 'care' ? 'Professional Auto Care' : 'Installation Tools'}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Premium supplies and tools for the perfect finish every time
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white border-2 border-gray-200 rounded-2xl hover:shadow-2xl hover:border-teal-500 transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                      <button
                        onClick={() => handleAddToCart(product, 'supply')}
                        className="w-full bg-white hover:bg-teal-600 text-gray-900 hover:text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                      >
                        <ShoppingCartIcon />
                        Quick Add
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 mb-2">{product.name}</h4>
                    <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-2xl font-bold text-teal-600">${product.price}</span>
                      <button
                        onClick={() => handleAddToCart(product, 'supply')}
                        className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-teal-600 flex items-center justify-center transition-all duration-300"
                      >
                        <ChevronRightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white border-2 border-teal-600 rounded-2xl shadow-2xl p-6 max-w-sm">
          <h4 className="font-bold text-gray-900 mb-3">Cart Summary</h4>
          <p className="text-sm text-gray-600 mb-4">{cart.length} item(s) in cart</p>
          <button
            onClick={() => alert('Checkout functionality would go here')}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition-all"
          >
            View Cart
          </button>
        </div>
      )}
    </div>
  );
}
