import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function ColorPPFSelector({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [colorFinishTab, setColorFinishTab] = useState<'gloss' | 'satin'>('gloss');

  const glossColors = [
    {
      name: 'Molten Orange',
      hex: '#FF6600',
      description: 'Vibrant orange gloss finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change'],
      price: '+$2,500',
      featured: true
    },
    {
      name: 'Monza Red',
      hex: '#C8102E',
      description: 'Racing-inspired red gloss finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change'],
      price: '+$2,500',
      featured: true
    },
    {
      name: 'South Beach Blue',
      hex: '#00A3E0',
      description: 'Electric blue gloss finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change'],
      price: '+$2,500',
      featured: true
    },
    {
      name: 'Ultra Plum',
      hex: '#6B2C91',
      description: 'Deep purple gloss finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change'],
      price: '+$2,500',
      featured: true
    },
    {
      name: 'Bond Silver',
      hex: '#C0C0C0',
      description: 'Metallic silver gloss finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change'],
      price: '+$2,500',
      featured: true
    },
    {
      name: 'Obsidian Black',
      hex: '#0A0A0A',
      description: 'Deep black gloss finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change'],
      price: '+$2,500',
      featured: true
    },
    {
      name: 'Pearl White',
      hex: '#F8F8FF',
      description: 'Pearlescent white gloss finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'High-gloss finish', '7-year warranty', 'Color change'],
      price: '+$2,500',
      featured: true
    }
  ];

  const satinColors = [
    {
      name: 'Satin Black',
      hex: '#1A1A1A',
      description: 'Sophisticated matte black satin finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change'],
      price: '+$2,800',
      featured: true
    },
    {
      name: 'Satin White',
      hex: '#E8E8E8',
      description: 'Clean pearl white satin finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change'],
      price: '+$2,800',
      featured: true
    },
    {
      name: 'Satin Perfect Blue',
      hex: '#2B5F8F',
      description: 'Deep blue satin finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change'],
      price: '+$2,800',
      featured: true
    },
    {
      name: 'Satin Burnt Orange',
      hex: '#CC5500',
      description: 'Warm burnt orange satin finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change'],
      price: '+$2,800',
      featured: true
    },
    {
      name: 'Satin Tropic Teal',
      hex: '#008B8B',
      description: 'Exotic teal satin finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change'],
      price: '+$2,800',
      featured: true
    },
    {
      name: 'Satin Racing Red',
      hex: '#8B0000',
      description: 'Deep racing red satin finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change'],
      price: '+$2,800',
      featured: true
    },
    {
      name: 'Satin Dark Gray',
      hex: '#4A4A4A',
      description: 'Refined dark gray satin finish with self-healing PPF protection.',
      features: ['Self-healing protection', 'Satin finish', '7-year warranty', 'Color change'],
      price: '+$2,800',
      featured: true
    }
  ];

  const activeColors = colorFinishTab === 'gloss' ? glossColors : satinColors;

  return (
    <div>
      {/* Finish Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-auto-asphalt border border-white/10 rounded-2xl p-2 gap-2 shadow-lg">
          <button
            onClick={() => setColorFinishTab('gloss')}
            className={`px-8 py-4 rounded-xl transition-all duration-300 font-['Exo_2'] uppercase tracking-wide ${
              colorFinishTab === 'gloss'
                ? 'bg-auto-plum-neon text-black shadow-[0_0_15px_rgba(157,78,221,0.4)]'
                : 'text-auto-silver hover:text-white hover:bg-white/5'
            }`}
            style={{ fontWeight: 700, fontSize: '14px' }}
          >
            Gloss Finish
          </button>
          <button
            onClick={() => setColorFinishTab('satin')}
            className={`px-8 py-4 rounded-xl transition-all duration-300 font-['Exo_2'] uppercase tracking-wide ${
              colorFinishTab === 'satin'
                ? 'bg-auto-plum-neon text-black shadow-[0_0_15px_rgba(157,78,221,0.4)]'
                : 'text-auto-silver hover:text-white hover:bg-white/5'
            }`}
            style={{ fontWeight: 700, fontSize: '14px' }}
          >
            Satin Finish
          </button>
        </div>
      </div>

      {/* Films Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {activeColors.map((color, index) => (
          <motion.div
            key={`${colorFinishTab}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: index * 0.1 }
            }}
            className="group relative bg-auto-carbon border border-white/5 rounded-[16px] overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              borderColor: color.hex,
              boxShadow: `0 25px 50px -12px ${color.hex}40`,
              transition: { duration: 0.3, delay: 0 }
            }}
          >
            {/* Gradient Overlay on Hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none"
              style={{ background: `linear-gradient(to bottom right, ${color.hex}, ${color.hex})` }}
            />
            
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div 
                className="absolute inset-0 rounded-[16px] opacity-20 blur-xl"
                style={{ background: `linear-gradient(to right, ${color.hex}, ${color.hex})` }}
              />
            </div>

            {/* Color Header */}
            <div className="relative z-20 h-32 w-full" style={{ backgroundColor: color.hex }}>
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-white text-xs font-mono">{color.hex}</span>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-white/20 opacity-50" />
            </div>

            {/* Content */}
            <div className="relative z-20 p-6 bg-auto-carbon">
              <h4 className="text-white font-['Exo_2'] text-lg mb-2 uppercase tracking-wide" style={{ fontWeight: 700 }}>
                {color.name}
              </h4>
              <p className="text-auto-silver text-sm leading-relaxed mb-6">
                {color.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {color.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: color.hex }} />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-white/5 mt-auto">
                <button 
                  onClick={() => onNavigate?.('color-ppf-visualizer')}
                  className="w-full py-3 bg-auto-asphalt hover:bg-auto-plum-neon hover:text-black border border-white/10 text-white font-bold rounded-xl transition-all shadow-lg text-sm font-['Exo_2'] uppercase tracking-wide"
                >
                  Start Visual Configurator
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
