import { motion } from 'motion/react';
import { Check, ShieldCheck } from 'lucide-react';

export function Applications() {
  const applications = [
    {
      title: 'Marine Hull',
      description: 'Reduces drag and prevents fouling on fiberglass and gelcoat hulls.',
      image: 'https://images.unsplash.com/photo-1747641067999-15d961c30c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Topside & Deck',
      description: 'Protects non-skid decks and smooth topsides from staining and UV damage.',
      image: 'https://images.unsplash.com/photo-1652013019474-a4be53c6e8ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Marine Glass',
      description: 'Improves visibility in wet conditions by repelling water and salt spray from windshields.',
      image: 'https://images.unsplash.com/photo-1711167143224-84aa9f94f644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Vinyl & Fabric',
      description: 'Protects marine upholstery and canvas from mold, mildew, and UV fading without altering the texture.',
      image: 'https://images.unsplash.com/photo-1647424767098-23cf57400347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ];

  return (
    <section className="py-24 bg-auto-asphalt relative overflow-hidden" data-section="MarineApplications">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-auto-plum-deep/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <ShieldCheck className="w-4 h-4 text-auto-plum-neon" />
              <span className="text-xs font-bold text-white uppercase tracking-widest font-['Exo_2']">Vessel Coverage</span>
            </div>

          <h2 className="text-4xl md:text-5xl font-['Exo_2'] font-bold text-white uppercase italic mb-6">
            COMPLETE VESSEL <span className="text-auto-plum-neon">PROTECTION</span>
          </h2>
          <p className="text-xl text-auto-silver max-w-3xl mx-auto font-light leading-relaxed font-['Inter']">
            FUSION PLUS MARINE isn't just for your hull. We offer specialized formulations for every surface of your boat or yacht.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-auto-carbon rounded-2xl overflow-hidden border border-white/5 hover:border-auto-plum-neon/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(157,78,221,0.15)] flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-auto-carbon/50 to-transparent z-10 md:hidden" />
                <div className="absolute inset-0 bg-gradient-to-l from-auto-carbon via-transparent to-transparent z-10 hidden md:block" />
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 md:w-3/5 flex flex-col justify-center relative z-20">
                <h3 className="text-2xl font-bold text-white mb-3 font-['Exo_2'] uppercase group-hover:text-auto-plum-neon transition-colors">
                  {app.title}
                </h3>
                
                <p className="text-auto-silver text-sm leading-relaxed mb-6 font-['Inter'] font-light">
                  {app.description}
                </p>
                
                <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-wider">
                  <Check className="w-4 h-4 text-auto-plum-neon" />
                  <span>Certified Installation</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
