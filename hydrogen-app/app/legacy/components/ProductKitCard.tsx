import { Shield, Check } from 'lucide-react';
import { Button } from './ui/button';

interface Kit {
  id: string;
  popular?: boolean;
  name: string;
  filmType?: string;
  description: string;
  features?: string[];
  price: number;
}

interface ProductKitCardProps {
  kit: Kit;
  activeCategory: string;
  onAddToCart: (kit: Kit, category: string) => void;
}

export function ProductKitCard({ kit, activeCategory, onAddToCart }: ProductKitCardProps) {
  return (
    <div
      className="group bg-auto-carbon rounded-2xl border border-white/5 hover:border-auto-plum-neon hover:shadow-[0_0_20px_rgba(157,78,221,0.2)] transition-all duration-300 overflow-hidden flex flex-col relative"
    >
      <div className="bg-auto-asphalt p-6 text-center relative min-h-[160px] flex flex-col items-center justify-center border-b border-white/5">
         {kit.popular && (
           <div className="absolute top-4 right-4 bg-auto-plum-neon text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg font-['Exo_2'] uppercase tracking-wider">
             Recommended
           </div>
         )}
         <Shield className="w-12 h-12 text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 group-hover:text-auto-plum-deep/20 transition-all duration-500" />
         
           <div className="relative z-10">
           <h4 className="text-xl font-bold text-white mb-1 font-['Exo_2']">{kit.name}</h4>
           <p className="text-xs text-auto-plum-neon uppercase tracking-widest font-bold font-['Exo_2']">
             {activeCategory === 'tint' 
               ? `XPEL ${(kit.filmType || '').toUpperCase().replace('PRIME-', '')}` 
               : `XPEL ${(kit.filmType || '').toUpperCase()}`}
           </p>
         </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
         <p className="text-sm text-auto-silver mb-6 text-center leading-relaxed line-clamp-2">{kit.description}</p>
         
         <div className="space-y-3 mb-8 flex-grow">
           {kit.features?.slice(0, 4).map((feat: string, i: number) => (
             <div key={i} className="flex items-center gap-2 text-xs font-medium text-white/80">
               <div className="w-4 h-4 rounded-full bg-auto-plum-deep/20 flex items-center justify-center shrink-0">
                 <Check className="w-2.5 h-2.5 text-auto-plum-neon" />
               </div>
               {feat}
             </div>
           ))}
         </div>

         <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
           <div className="flex flex-col">
             <span className="text-xs text-auto-silver font-medium uppercase tracking-wide">Starting at</span>
             <span className="text-2xl font-bold text-white font-['Exo_2']">${kit.price}</span>
           </div>
           <Button 
             onClick={() => onAddToCart(kit, activeCategory)} 
             className="bg-white text-black hover:bg-auto-plum-neon rounded-full text-xs font-bold uppercase tracking-wide px-6 py-5 h-auto shadow-lg hover:shadow-[0_0_15px_rgba(157,78,221,0.4)] transition-all"
           >
             Add to Cart
           </Button>
         </div>
      </div>
    </div>
  );
}
