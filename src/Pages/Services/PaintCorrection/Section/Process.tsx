import { motion } from 'motion/react';
import { Layers } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Decontamination Wash',
      description: 'Thorough strip wash followed by iron remover and clay bar treatment to remove embedded contaminants from the clear coat.'
    },
    {
      number: '02',
      title: 'Compounding',
      description: 'Using a heavy cut compound and microfiber pad to remove deep scratches, etching, and oxidation (Stage 2 & 3 only).'
    },
    {
      number: '03',
      title: 'Polishing',
      description: 'Refining the finish with a fine polish and foam pad to remove haze and maximize gloss levels.'
    },
    {
      number: '04',
      title: 'Panel Wipe',
      description: 'Removing all polishing oils to reveal the true finish and prepare the surface for protective coatings.'
    }
  ];

  return (
    <section className="py-24 bg-auto-asphalt relative overflow-hidden" data-section="PaintCorrectionProcess">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-auto-plum-deep/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Layers className="w-4 h-4 text-auto-plum-neon" />
              <span className="text-xs font-bold text-white uppercase tracking-widest font-['Exo_2']">Our Process</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-['Exo_2'] font-bold text-white uppercase italic mb-6 leading-tight">
              SURGICAL <span className="text-auto-plum-neon">PRECISION</span>
            </h2>
            <p className="text-auto-silver text-lg mb-10 font-['Inter'] font-light leading-relaxed">
              We treat every vehicle with the utmost care. Our multi-stage process ensures the safest and most effective defect removal without compromising clear coat integrity.
            </p>
            
            <div className="space-y-8 relative">
              {/* Connecting line */}
              <div className="absolute left-[22px] top-4 bottom-4 w-0.5 bg-white/10 -z-10 hidden sm:block" />

              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full bg-auto-asphalt border-2 border-white/10 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-lg z-10 font-['Exo_2'] group-hover:border-auto-plum-neon group-hover:text-auto-plum-neon transition-colors">
                    {step.number}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-white mb-2 font-['Exo_2'] group-hover:text-auto-plum-neon transition-colors">{step.title}</h3>
                    <p className="text-auto-silver leading-relaxed font-['Inter'] font-light text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[700px] rounded-2xl overflow-hidden shadow-2xl group border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-auto-asphalt via-transparent to-transparent z-10 opacity-60" />
            <img 
              src="https://images.unsplash.com/photo-1655260708815-630452ee45d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
              alt="Professional Polishing Process" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            
            <div className="absolute bottom-8 left-8 right-8 z-20">
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                  <p className="text-white font-['Exo_2'] text-lg font-bold mb-1">Rupes BigFoot Polishing System</p>
                  <p className="text-auto-silver text-sm font-['Inter']">We use only the finest Italian polishing machines and compounds for swirl-free results.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
