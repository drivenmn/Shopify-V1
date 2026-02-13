import { motion } from 'motion/react';
import { Shield, Droplets, Sparkles, Car, Palette, Eye } from 'lucide-react';

interface TeslaPackageLivePreviewProps {
  model?: string;
  ppfCoverage?: string;
  ppfFilm?: string; // 'Ultimate Plus', 'Stealth', etc.
  ppfColor?: string; // Hex code for color PPF
  tintPackage?: string;
  tintFilm?: string;
  tintVLT?: number;
  ceramicCoating?: boolean;
}

export function TeslaPackageLivePreview({
  model = 'Model 3',
  ppfCoverage,
  ppfFilm,
  ppfColor,
  tintPackage,
  tintFilm,
  tintVLT,
  ceramicCoating,
}: TeslaPackageLivePreviewProps) {
  
  const isStealth = ppfFilm?.toLowerCase().includes('stealth') || ppfFilm?.toLowerCase().includes('satin');
  const isColor = !!ppfColor;

  return (
    <div className="bg-auto-carbon border border-auto-chrome rounded-lg shadow-xl overflow-hidden sticky top-24">
      {/* Header */}
      <div className="p-6 border-b border-auto-gunmetal bg-auto-asphalt relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-10">
          <Car className="w-24 h-24 text-auto-plum-neon" />
        </div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-auto-plum-deep/10 border border-auto-plum-deep/30 px-3 py-1 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-auto-plum-neon animate-pulse" />
            <span className="text-auto-plum-neon text-xs uppercase tracking-wider font-semibold">Live Configurator</span>
          </div>
          <h3 className="text-white text-2xl font-bold mb-1 font-exo">
            Tesla {model}
          </h3>
          <div className="flex items-center gap-2 text-auto-silver text-sm">
             <span>{ppfCoverage || 'Select PPF'}</span>
             {ppfFilm && <span className="text-auto-plum-mist">• {ppfFilm}</span>}
          </div>
        </div>
      </div>

      {/* Visualizer Area */}
      <div className="aspect-video bg-auto-gunmetal relative flex items-center justify-center overflow-hidden group">
        <div 
            className="absolute inset-0 transition-colors duration-500"
            style={{ 
                background: isColor && ppfColor 
                    ? `radial-gradient(circle at center, ${ppfColor}40, var(--auto-asphalt))` 
                    : 'radial-gradient(circle at center, var(--auto-plum-deep)20, var(--auto-asphalt), var(--auto-asphalt))'
            }} 
        />
        
        {/* Abstract Car Silhouette / Visual */}
        <motion.div 
          key={model}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <Car 
            className={`w-32 h-32 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(157,78,221,0.3)] transition-all duration-500
                ${isColor ? 'text-white' : 'text-auto-silver/50'}
            `}
            style={{
                color: isColor ? ppfColor : undefined,
                filter: isStealth ? 'contrast(0.8) brightness(1.2)' : undefined
            }}
          />
          <div className="px-4 py-2 bg-auto-black/50 backdrop-blur-sm rounded border border-auto-chrome/50 inline-block">
            <span className="text-auto-silver text-sm tracking-widest uppercase font-mono">{model}</span>
          </div>
        </motion.div>

        {/* Dynamic Overlays based on selection */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2">
           {ppfCoverage && (
               <span className="px-2 py-1 bg-auto-plum-deep/80 text-white text-[10px] uppercase tracking-wider rounded border border-auto-plum-neon/30 flex items-center gap-2 w-fit">
                 <Shield className="w-3 h-3" /> {ppfCoverage}
               </span>
           )}
           {tintPackage && (
               <span className="px-2 py-1 bg-auto-gunmetal/80 text-white text-[10px] uppercase tracking-wider rounded border border-auto-chrome/30 flex items-center gap-2 w-fit">
                 <Droplets className="w-3 h-3" /> {tintPackage} {tintVLT ? `(${tintVLT}%)` : ''}
               </span>
           )}
        </div>
      </div>

      {/* Spec Sheet */}
      <div className="p-6 space-y-4 bg-auto-carbon">
        <h4 className="text-auto-silver text-xs uppercase tracking-[0.2em] font-semibold mb-4 border-b border-auto-gunmetal pb-2">
          Configuration Specs
        </h4>

        <div className="space-y-3">
          {/* PPF Row */}
          <motion.div 
            className="flex items-center justify-between group"
            animate={{ opacity: ppfCoverage ? 1 : 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${ppfCoverage ? 'bg-auto-plum-deep/20 text-auto-plum-neon' : 'bg-auto-gunmetal text-auto-chrome'}`}>
                <Shield className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-auto-silver text-xs uppercase font-medium">Paint Protection</span>
                <span className={`text-sm font-semibold ${ppfCoverage ? 'text-white' : 'text-auto-chrome'}`}>
                  {ppfCoverage || 'Not Selected'}
                </span>
                {ppfFilm && (
                    <span className="text-xs text-auto-plum-mist">{ppfFilm} {isStealth && '(Satin)'}</span>
                )}
              </div>
            </div>
            {isColor && ppfColor && (
                <div className="w-6 h-6 rounded-full border border-white/20 shadow-sm" style={{ backgroundColor: ppfColor }} />
            )}
            {isStealth && !isColor && (
                <div className="w-6 h-6 rounded flex items-center justify-center bg-auto-gunmetal border border-auto-chrome" title="Stealth/Matte">
                    <Eye className="w-3 h-3 text-auto-silver" />
                </div>
            )}
          </motion.div>

          {/* Tint Row */}
          <motion.div 
            className="flex items-center justify-between group"
            animate={{ opacity: tintPackage ? 1 : 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${tintPackage ? 'bg-auto-plum-deep/20 text-auto-plum-neon' : 'bg-auto-gunmetal text-auto-chrome'}`}>
                <Droplets className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-auto-silver text-xs uppercase font-medium">Window Tint</span>
                <span className={`text-sm font-semibold ${tintPackage ? 'text-white' : 'text-auto-chrome'}`}>
                  {tintPackage || 'Not Selected'}
                </span>
                {tintFilm && (
                    <span className="text-xs text-auto-plum-mist">
                        {tintFilm} {tintVLT ? `• ${tintVLT}%` : ''}
                    </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Ceramic Row */}
          <motion.div 
            className="flex items-center justify-between group"
            animate={{ opacity: ceramicCoating ? 1 : 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${ceramicCoating ? 'bg-auto-plum-deep/20 text-auto-plum-neon' : 'bg-auto-gunmetal text-auto-chrome'}`}>
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-auto-silver text-xs uppercase font-medium">Ceramic Coating</span>
                <span className={`text-sm font-semibold ${ceramicCoating ? 'text-white' : 'text-auto-chrome'}`}>
                  {ceramicCoating ? 'Applied' : 'Not Selected'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Total Estimate */}
        <div className="mt-8 pt-6 border-t border-auto-gunmetal">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-auto-silver text-xs uppercase tracking-wider mb-1">Estimated Total</p>
              <p className="text-xs text-auto-chrome">Final quote provided upon review</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-white font-exo">Quote</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
