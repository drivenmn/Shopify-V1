import { motion } from 'motion/react';
import { Shield, Palette, Layers } from 'lucide-react';
import { Button } from '../../../../components/ui/button';

interface ContentProps {
  onNavigate: (page: string) => void;
}

export function Content({ onNavigate }: ContentProps) {
  return (
    <section className="py-24 bg-auto-carbon">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* PPF Kits (Prompt: points to AutoWindowTint) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-auto-asphalt p-8 rounded-2xl border border-white/5 hover:border-auto-plum-neon/50 transition-all"
          >
            <Shield className="w-12 h-12 text-auto-plum-neon mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">PPF Kits</h3>
            <p className="text-auto-silver mb-6">
              Essential protection for your Rivian. Note: This link redirects as requested.
            </p>
            <Button 
              onClick={() => onNavigate('auto-window-tint')} 
              variant="outline" 
              className="w-full"
            >
              View Packages
            </Button>
          </motion.div>

          {/* Chrome Delete (Points to AccentVinylWrap) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-auto-asphalt p-8 rounded-2xl border border-white/5 hover:border-auto-plum-neon/50 transition-all"
          >
            <Palette className="w-12 h-12 text-auto-plum-neon mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Chrome Delete</h3>
            <p className="text-auto-silver mb-6">
              Black out your trim for a stealth look.
            </p>
            <Button 
              onClick={() => onNavigate('accent-vinyl-wrap')} 
              variant="outline" 
              className="w-full"
            >
              Customize
            </Button>
          </motion.div>

          {/* Ceramic Coating */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-auto-asphalt p-8 rounded-2xl border border-white/5 hover:border-auto-plum-neon/50 transition-all"
          >
            <Layers className="w-12 h-12 text-auto-plum-neon mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Ceramic Coating</h3>
            <p className="text-auto-silver mb-6">
              Hydrophobic protection for mud and dirt.
            </p>
            <Button 
              onClick={() => onNavigate('automotive-ceramic-coating')} 
              variant="outline" 
              className="w-full"
            >
              Learn More
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
