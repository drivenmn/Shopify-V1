import { motion } from 'motion/react';
import { Palette, Shield, RefreshCw } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

interface ColorFilmsProps {
  onNavigate: (page: string) => void;
}

export function ColorFilms({ onNavigate }: ColorFilmsProps) {
  return (
    <section className="py-24 bg-auto-carbon border-y border-white/5 relative overflow-hidden" data-section="TeslaPPFColorFilms">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(157, 78, 221, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-auto-plum-deep/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 mb-8">
              <Palette className="w-4 h-4 text-auto-plum-neon" />
              <span className="text-xs font-bold uppercase tracking-widest text-auto-plum-neon font-['Exo_2']">New Feature</span>
            </div>
            
            <h2 className="text-white mb-6 text-4xl md:text-5xl font-['Exo_2'] font-bold uppercase tracking-tight">
              Color Change <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-neon to-white">Paint Protection</span>
            </h2>
            
            <p className="text-lg text-auto-silver mb-10 leading-relaxed font-['Inter'] font-light">
              Transform your Tesla's appearance while getting the same industry-leading protection as clear PPF. Available in Gloss and Satin finishes.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 bg-auto-plum-deep/10 rounded-xl flex items-center justify-center shrink-0 border border-auto-plum-neon/20 group-hover:border-auto-plum-neon/50 transition-colors">
                    <Shield className="w-6 h-6 text-auto-plum-neon" />
                 </div>
                 <div>
                    <h3 className="text-white font-['Exo_2'] font-bold text-lg mb-1 uppercase tracking-wide">Full Protection</h3>
                    <p className="text-auto-silver font-['Inter'] font-light text-sm">Same 8 mil thickness and self-healing properties as clear XPEL PPF.</p>
                 </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 bg-auto-plum-deep/10 rounded-xl flex items-center justify-center shrink-0 border border-auto-plum-neon/20 group-hover:border-auto-plum-neon/50 transition-colors">
                    <RefreshCw className="w-6 h-6 text-auto-plum-neon" />
                 </div>
                 <div>
                    <h3 className="text-white font-['Exo_2'] font-bold text-lg mb-1 uppercase tracking-wide">Instant Transformation</h3>
                    <p className="text-auto-silver font-['Inter'] font-light text-sm">Change your Tesla's color instantly without a permanent paint job. Fully reversible.</p>
                 </div>
              </div>
            </div>

            <Button 
              onClick={() => onNavigate('tesla-package')}
              className="bg-auto-plum-neon hover:bg-white text-black font-['Exo_2'] font-bold uppercase tracking-widest px-8 py-6 rounded-xl shadow-[0_0_20px_rgba(157,78,221,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all"
            >
              Visualize Colors
            </Button>
          </motion.div>

          {/* Visual/Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                <div className="aspect-[4/3] relative">
                   <img 
                      src="https://images.unsplash.com/photo-1701311521752-9f85d68d55ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXNsYSUyMG1vZGVsJTIwcyUyMHBsYWlkJTIwbWF0dGUlMjBibGFja3xlbnwxfHx8fDE3NjUxMzc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Tesla with Stealth PPF"
                      className="w-full h-full object-cover opacity-90"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                   
                   <div className="absolute bottom-8 left-8 right-8">
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                         <div className="flex justify-between items-center mb-3">
                            <span className="text-white font-['Exo_2'] font-bold uppercase tracking-wider">XPEL Stealth</span>
                            <span className="text-auto-plum-neon font-mono text-xs">Satin Finish</span>
                         </div>
                         <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-auto-plum-neon w-full h-full" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -top-6 -right-6 bg-auto-plum-neon text-black p-8 rounded-full shadow-[0_0_30px_rgba(157,78,221,0.4)] animate-bounce duration-[3000ms]">
                <p className="text-center font-['Exo_2'] font-bold text-sm leading-tight uppercase tracking-wide">
                   NEW<br/>Color<br/>PPF
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
