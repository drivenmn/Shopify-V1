import { motion } from 'motion/react';
import { Settings, Sparkles, CheckCircle2, Search } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Consultation & Inspection',
    description: 'We assess your windshield condition, discuss your protection goals, and provide a detailed quote. Our experts answer all your questions about XPEL windshield film.',
    icon: Search
  },
  {
    step: '02',
    title: 'Surface Preparation',
    description: 'Thorough cleaning and decontamination of the windshield ensures optimal adhesion. We remove any existing contaminants, wax, or residue for a perfect bond.',
    icon: Sparkles
  },
  {
    step: '03',
    title: 'Precision Installation',
    description: 'Computer-cut film is expertly applied using professional techniques. Our certified technicians ensure bubble-free, edge-to-edge coverage with perfect alignment.',
    icon: Settings
  },
  {
    step: '04',
    title: 'Quality Inspection',
    description: 'Final inspection ensures perfect clarity, proper adhesion, and flawless finish. We verify ADAS compatibility and provide care instructions for long-lasting protection.',
    icon: CheckCircle2
  }
];

export function Process() {
  return (
    <section className="py-24 bg-auto-asphalt border-b border-white/5" data-section="WindshieldProcess">
      <div className="container mx-auto px-4" data-component="ProcessContent">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 mb-6 backdrop-blur-md">
              <Settings className="w-4 h-4 text-auto-plum-neon" />
              <span className="text-xs font-bold text-auto-plum-mist uppercase tracking-widest font-['Exo_2']">Installation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Exo_2'] uppercase tracking-tight">
              Professional <span className="text-auto-plum-neon">Process</span>
            </h2>
            <p className="text-auto-silver max-w-3xl mx-auto leading-relaxed text-lg font-light">
              Our certified technicians follow XPEL's rigorous installation standards to ensure your windshield protection is flawless from start to finish.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8" data-component="ProcessSteps">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-auto-plum-neon/50 transition-all duration-300 group overflow-hidden"
                  data-component="ProcessCard"
                >
                   {/* Hover Glow */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-auto-plum-neon/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start gap-6 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-auto-carbon border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-auto-plum-neon/50 group-hover:bg-auto-plum-neon group-hover:text-black transition-all duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-auto-silver group-hover:text-black transition-colors" />
                      </div>
                      <div className="mt-4 text-center">
                        <span className="font-['Exo_2'] text-auto-plum-mist font-bold text-lg opacity-50 group-hover:opacity-100 transition-opacity">
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 font-['Exo_2'] uppercase group-hover:text-auto-plum-mist transition-colors">{item.title}</h3>
                      <p className="text-auto-silver leading-relaxed font-light group-hover:text-white/90 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-auto-plum-deep/10 border border-auto-plum-neon/20 rounded-2xl p-8 text-center" 
            data-component="InstallationTimeBanner"
          >
            <h3 className="text-xl font-bold text-white mb-3 font-['Exo_2'] uppercase">Installation Time</h3>
            <p className="text-auto-silver leading-relaxed max-w-2xl mx-auto font-light">
              Most windshield protection film installations are completed in <span className="text-auto-plum-neon font-bold">2-3 hours</span>. Same-day service is available for most vehicles. Your vehicle is ready to drive immediately after installation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
