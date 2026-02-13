import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Instagram, Facebook, Youtube, ShoppingCart, User, Moon, Sun } from 'lucide-react';
import drivenLogo from 'figma:asset/d0ee59616032f1602fbb40ab7050a284d028d7d9.png';
import svgPaths from '~/legacy/imports/svg-muj3q0axor';
import { useCart } from '~/legacy/utils/cartContext';
import { useTheme } from '~/legacy/utils/themeContext';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [byMakeOpen, setByMakeOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [servicesLocked, setServicesLocked] = useState(false);
  const [byMakeLocked, setByMakeLocked] = useState(false);
  const [socialLocked, setSocialLocked] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const byMakeRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close locked menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesLocked && servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesLocked(false);
        setServicesOpen(false);
      }
      if (byMakeLocked && byMakeRef.current && !byMakeRef.current.contains(event.target as Node)) {
        setByMakeLocked(false);
        setByMakeOpen(false);
      }
      if (socialLocked && socialRef.current && !socialRef.current.contains(event.target as Node)) {
        setSocialLocked(false);
        setSocialOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [servicesLocked, byMakeLocked, socialLocked]);

  const megaMenuServices = [
    {
      category: 'Xpel Protection Film',
      featured: true,
      items: [
        { name: 'Paint Protection Film', desc: 'Xpel Clear Bra Paint Protection For Cars, Trucks & SUVs', page: 'paint-protection-film' },
        { name: 'Windshield Protection Film', desc: 'Xpel Windshield Protection Film To Prevent Chips, Cracks & Road Damage', page: 'windshield-protection-film' },
        { name: 'Headlight Protection Film', desc: 'Xpel Headlight Tint & Protection Film To Prevent Fading And Yellowing', page: 'headlight-protection-film' },
        { name: 'Interior Protection Film', desc: 'Xpel Interior Surface Protection For Touchscreens, Trim & Panels', page: 'interior-protection-film' },
      ]
    },
    {
      category: 'Xpel Prime Window Tint',
      featured: true,
      items: [
        { name: 'Auto Window Tint', desc: 'Xpel Professional Car Window Tinting For UV, Heat & Privacy', page: 'auto-window-tint' },
        { name: 'Marine Window Tint', desc: 'Xpel Boat & Yacht Window Tint For UV Protection And Glare Reduction', page: 'marine-window-tint' },
        { name: 'Home & Office Window Tint', desc: 'Xpel Residential & Commercial Window Film For Energy Efficiency & Privacy', page: 'home-office-window-tint' },
      ]
    },
    {
      category: 'Vehicle Wraps',
      featured: true,
      items: [
        { name: 'Color Change Vehicle Wrap', desc: 'Custom Color Change Car Wraps In Burnsville, MN', page: 'color-change-vehicle-wrap' },
        { name: 'Graphic Printed Wrap', desc: "Burnsville's Best Custom Printed Vehicle Wraps – Bold Designs That Get Noticed", page: 'graphic-printed-wrap' },
        { name: 'Fleet Graphic Wrap', desc: 'Commercial Fleet Wraps In Burnsville – Boost Brand Visibility On The Road', page: 'fleet-graphic-wrap' },
        { name: 'Accent Vinyl Wrap', desc: 'Vinyl Accent Wraps In Burnsville, MN – Roof, Hood, And Mirror Customization Experts', page: 'accent-vinyl-wrap' },
      ]
    },
    {
      category: 'Xpel Fusion Ceramic Coating',
      featured: true,
      items: [
        { name: 'Automotive Ceramic Coating', desc: 'Xpel Professional Car Ceramic Coating For Paint Protection & Gloss', page: 'automotive-ceramic-coating' },
        { name: 'Marine Ceramic Coating', desc: 'Boat Ceramic Coating For UV, Salt, And Water Resistance', page: 'marine-ceramic-coating' },
      ]
    },
    {
      category: 'Paint Correction & Detail',
      featured: true,
      items: [
        { name: 'Paint Correction', desc: 'Professional Paint Correction Services For Swirl Marks & Scratches', page: 'paint-correction' },
        { name: 'Interior Detail', desc: 'Deep Interior Car Detailing For Seats, Carpet & Dashboards', page: 'interior-detail' },
        { name: 'Exterior Detail', desc: 'Exterior Auto Detailing For Paint, Wheels, And Trim Restoration', page: 'exterior-detail' },
        { name: 'Full Detail', desc: 'Complete Car Detailing Packages For Showroom-Level Finish', page: 'full-detail' },
      ]
    }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-center justify-between h-20 relative">
            {/* Logo */}
            <motion.button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-0 cursor-pointer relative z-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="px-4 py-2 flex items-center">
                <img src={drivenLogo} alt="DRIVEN" className="h-10 w-auto object-contain brightness-0 invert" />
              </div>
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              <motion.button
                onClick={() => onNavigate('home')}
                className="font-['Exo_2'] font-bold text-white/80 hover:text-white transition-all duration-300 text-[14px] tracking-wide uppercase relative group"
                whileHover={{ y: -2 }}
              >
                HOME
                {currentPage === 'home' && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-auto-plum-neon shadow-[0_0_8px_var(--auto-plum-neon)]"
                    layoutId="activeNav"
                  />
                )}
              </motion.button>

              {/* Services Mega Menu */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => !servicesLocked && setServicesOpen(true)}
                onMouseLeave={() => !servicesLocked && setServicesOpen(false)}
              >
                <motion.button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (servicesLocked) {
                      setServicesLocked(false);
                      setServicesOpen(false);
                    } else {
                      setServicesLocked(true);
                      setServicesOpen(true);
                    }
                  }}
                  className="font-['Exo_2'] font-bold flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 text-[14px] tracking-wide uppercase relative group"
                  whileHover={{ y: -2 }}
                >
                  SERVICES
                  <motion.div
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 text-auto-plum-neon" />
                  </motion.div>
                  {servicesOpen && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-auto-plum-neon shadow-[0_0_8px_var(--auto-plum-neon)]"
                    />
                  )}
                </motion.button>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-[1200px] glass-card rounded-2xl overflow-hidden border border-white/10"
                    >
                      {/* Mega Menu Content */}
                      <div className="relative p-8">
                        {/* Background Glow */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-auto-plum-neon/50 to-transparent" />
                        
                        <div className="grid grid-cols-5 gap-6">
                          {megaMenuServices.map((category, idx) => (
                            <motion.div
                              key={category.category}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="group/col"
                            >
                              {/* Category Header */}
                              <button
                                onClick={() => {
                                  const categoryRoutes: Record<string, string> = {
                                    'Xpel Protection Film': 'xpel-protection-film',
                                    'Xpel Prime Window Tint': 'xpel-prime-window-tint',
                                    'Vehicle Wraps': 'vehicle-wraps',
                                    'Xpel Fusion Ceramic Coating': 'xpel-fusion-ceramic-coating',
                                    'Paint Correction & Detail': 'paint-correction-detail'
                                  };
                                  const route = categoryRoutes[category.category];
                                  if (route) {
                                    onNavigate(route);
                                    setServicesOpen(false);
                                    setServicesLocked(false);
                                  }
                                }}
                                className="w-full text-left"
                              >
                                <h3 className="font-['Exo_2'] text-auto-plum-mist text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2 hover:text-auto-plum-neon transition-colors">
                                  {category.category}
                                </h3>
                              </button>
                              
                              <ul className="space-y-3">
                                {category.items.map((item, itemIdx) => (
                                  <motion.li
                                    key={item.name}
                                    whileHover={{ x: 4 }}
                                  >
                                    <button
                                      onClick={() => {
                                        onNavigate(item.page);
                                        setServicesOpen(false);
                                        setServicesLocked(false);
                                      }}
                                      className="group/item block text-left w-full"
                                    >
                                      <div className="font-['Inter'] font-semibold text-white/90 group-hover/item:text-auto-plum-neon transition-colors text-sm mb-0.5">
                                        {item.name}
                                      </div>
                                      <div className="font-['Inter'] text-xs text-white/50 group-hover/item:text-white/70 transition-colors line-clamp-2">
                                        {item.desc}
                                      </div>
                                    </button>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* By Make Dropdown */}
              <div
                ref={byMakeRef}
                className="relative"
                onMouseEnter={() => !byMakeLocked && setByMakeOpen(true)}
                onMouseLeave={() => !byMakeLocked && setByMakeOpen(false)}
              >
                <motion.button 
                  className="font-['Exo_2'] font-bold flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 text-[14px] tracking-wide uppercase relative group"
                  whileHover={{ y: -2 }}
                >
                  BY MAKE
                  <motion.div
                    animate={{ rotate: byMakeOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 text-auto-plum-neon" />
                  </motion.div>
                  {byMakeOpen && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-auto-plum-neon shadow-[0_0_8px_var(--auto-plum-neon)]"
                    />
                  )}
                </motion.button>
                
                <AnimatePresence>
                  {byMakeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[600px] glass-card rounded-2xl border border-white/10 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-auto-plum-neon/50 to-transparent" />
                      
                      <div className="grid grid-cols-2 gap-8 p-6">
                        {/* Tesla */}
                        <div>
                          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                            <h3 className="font-['Exo_2'] text-lg font-bold text-white">Tesla</h3>
                          </div>
                          <div className="space-y-2">
                             {[
                               { name: 'PPF Packages', route: 'tesla-ppf', desc: 'Full body & clear bra protection' },
                               { name: 'Window Tint', route: 'tesla-tint', desc: 'Heat rejection & privacy films' },
                               { name: 'Color Change', route: 'color-change-vehicle-wrap', desc: 'Custom wraps & accents' },
                             ].map((item) => (
                               <button
                                 key={item.name}
                                 onClick={() => {
                                   onNavigate(item.route);
                                   setByMakeOpen(false);
                                   setByMakeLocked(false);
                                 }}
                                 className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors group/item"
                               >
                                  <div className="font-['Inter'] font-semibold text-white group-hover/item:text-auto-plum-neon">{item.name}</div>
                                  <div className="text-xs text-white/50">{item.desc}</div>
                               </button>
                             ))}
                          </div>
                        </div>

                        {/* Rivian */}
                        <div>
                          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                            <h3 className="font-['Exo_2'] text-lg font-bold text-white">Rivian</h3>
                          </div>
                          <div className="space-y-2">
                             {[
                               { name: 'Rivian Packages', route: 'rivian', desc: 'Adventure-ready protection' },
                               { name: 'PPF Kits', route: 'xpel-protection-film', desc: 'Off-road ready protection' },
                               { name: 'Window Tint', route: 'auto-window-tint', desc: 'Ceramic tint solutions' },
                               { name: 'Chrome Delete', route: 'accent-vinyl-wrap', desc: 'Stealth blackout packages' },
                             ].map((item) => (
                               <button
                                 key={item.name}
                                 onClick={() => {
                                   onNavigate(item.route);
                                   setByMakeOpen(false);
                                   setByMakeLocked(false);
                                 }}
                                 className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors group/item"
                               >
                                  <div className="font-['Inter'] font-semibold text-white group-hover/item:text-auto-plum-neon">{item.name}</div>
                                  <div className="text-xs text-white/50">{item.desc}</div>
                               </button>
                             ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onClick={() => onNavigate('shop')}
                className="font-['Exo_2'] font-bold text-white/80 hover:text-white transition-all duration-300 text-[14px] tracking-wide uppercase relative group"
                whileHover={{ y: -2 }}
              >
                SHOP
                {currentPage === 'shop' && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-auto-plum-neon shadow-[0_0_8px_var(--auto-plum-neon)]"
                    layoutId="activeNav"
                  />
                )}
              </motion.button>

              <motion.button
                onClick={() => onNavigate('blog')}
                className="font-['Exo_2'] font-bold text-white/80 hover:text-white transition-all duration-300 text-[14px] tracking-wide uppercase relative group"
                whileHover={{ y: -2 }}
              >
                BLOG
                {currentPage === 'blog' && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-auto-plum-neon shadow-[0_0_8px_var(--auto-plum-neon)]"
                    layoutId="activeNav"
                  />
                )}
              </motion.button>

              <motion.button
                onClick={() => onNavigate('contact')}
                className="font-['Exo_2'] font-bold text-white/80 hover:text-white transition-all duration-300 text-[14px] tracking-wide uppercase relative group"
                whileHover={{ y: -2 }}
              >
                CONTACT
                {currentPage === 'contact' && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-auto-plum-neon shadow-[0_0_8px_var(--auto-plum-neon)]"
                    layoutId="activeNav"
                  />
                )}
              </motion.button>
            </div>

            {/* Right Icons */}
            <div className="hidden lg:flex items-center gap-6">
               <div className="flex items-center gap-4 border-r border-white/10 pr-6">
                  <motion.a href="#" whileHover={{ y: -2, color: '#9D4EDD' }} className="text-white/60 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></motion.a>
                  <motion.a href="#" whileHover={{ y: -2, color: '#9D4EDD' }} className="text-white/60 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></motion.a>
                  <motion.a href="#" whileHover={{ y: -2, color: '#9D4EDD' }} className="text-white/60 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></motion.a>
               </div>
               
               <div className="flex items-center gap-4">
                  <motion.button
                    onClick={() => onNavigate('cart')}
                    className="relative text-white/80 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-auto-plum-neon text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_8px_var(--auto-plum-neon)]">
                        {totalItems}
                      </span>
                    )}
                  </motion.button>
                  
                  <motion.button
                     onClick={toggleTheme}
                     className="text-white/80 hover:text-auto-plum-mist transition-colors"
                     whileHover={{ rotate: 15 }}
                  >
                     {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  </motion.button>
               </div>
               
               <motion.button
                 onClick={() => onNavigate('vehicle-configurator')}
                 className="bg-auto-plum-deep/80 hover:bg-auto-plum-neon text-white px-5 py-2 rounded-lg font-['Exo_2'] font-bold text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(74,20,140,0.4)] hover:shadow-[0_0_20px_rgba(157,78,221,0.6)] border border-white/10"
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
               >
                 START BUILD
               </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden z-50">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-auto-asphalt lg:hidden overflow-y-auto"
          >
             <div className="p-8 pt-24 space-y-6">
                {['HOME', 'SERVICES', 'BY MAKE', 'SHOP', 'BLOG', 'CONTACT'].map((item) => (
                  <div key={item} className="border-b border-white/10">
                    {item === 'SERVICES' ? (
                      <details className="group">
                        <summary className="flex items-center justify-between w-full py-4 font-['Exo_2'] font-bold text-2xl text-white list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                          {item}
                          <ChevronDown className="w-6 h-6 text-auto-plum-neon transition-transform duration-300 group-open:rotate-180" />
                        </summary>
                        <div className="pb-6 pl-4 space-y-6">
                          {megaMenuServices.map((category) => (
                            <div key={category.category}>
                              <h4 className="text-auto-plum-mist text-xs font-bold uppercase tracking-wider mb-3">{category.category}</h4>
                              <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                                {category.items.map((subItem) => (
                                  <button
                                    key={subItem.name}
                                    onClick={() => {
                                      onNavigate(subItem.page);
                                      setMobileMenuOpen(false);
                                    }}
                                    className="text-left text-white/80 text-sm font-medium hover:text-auto-plum-neon transition-colors"
                                  >
                                    {subItem.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </details>
                    ) : item === 'BY MAKE' ? (
                      <details className="group">
                        <summary className="flex items-center justify-between w-full py-4 font-['Exo_2'] font-bold text-2xl text-white list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                          {item}
                          <ChevronDown className="w-6 h-6 text-auto-plum-neon transition-transform duration-300 group-open:rotate-180" />
                        </summary>
                        <div className="pb-6 pl-4 space-y-6">
                           <div>
                              <h4 className="text-auto-plum-mist text-xs font-bold uppercase tracking-wider mb-3">Tesla</h4>
                              <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                                <button onClick={() => { onNavigate('tesla-ppf'); setMobileMenuOpen(false); }} className="text-left text-white/80 text-sm font-medium hover:text-auto-plum-neon">PPF Packages</button>
                                <button onClick={() => { onNavigate('tesla-tint'); setMobileMenuOpen(false); }} className="text-left text-white/80 text-sm font-medium hover:text-auto-plum-neon">Window Tint</button>
                                <button onClick={() => { onNavigate('color-change-vehicle-wrap'); setMobileMenuOpen(false); }} className="text-left text-white/80 text-sm font-medium hover:text-auto-plum-neon">Color Change</button>
                              </div>
                           </div>
                           <div>
                              <h4 className="text-auto-plum-mist text-xs font-bold uppercase tracking-wider mb-3">Rivian</h4>
                              <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                                <button onClick={() => { onNavigate('rivian'); setMobileMenuOpen(false); }} className="text-left text-white/80 text-sm font-medium hover:text-auto-plum-neon">Rivian Packages</button>
                                <button onClick={() => { onNavigate('xpel-protection-film'); setMobileMenuOpen(false); }} className="text-left text-white/80 text-sm font-medium hover:text-auto-plum-neon">PPF Kits</button>
                                <button onClick={() => { onNavigate('auto-window-tint'); setMobileMenuOpen(false); }} className="text-left text-white/80 text-sm font-medium hover:text-auto-plum-neon">Window Tint</button>
                                <button onClick={() => { onNavigate('accent-vinyl-wrap'); setMobileMenuOpen(false); }} className="text-left text-white/80 text-sm font-medium hover:text-auto-plum-neon">Chrome Delete</button>
                              </div>
                           </div>
                        </div>
                      </details>
                    ) : (
                      <button
                        onClick={() => {
                          onNavigate(item.toLowerCase());
                          setMobileMenuOpen(false);
                        }}
                        className="block w-full text-left py-4 font-['Exo_2'] font-bold text-2xl text-white hover:text-auto-plum-neon transition-colors"
                      >
                        {item}
                      </button>
                    )}
                  </div>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
