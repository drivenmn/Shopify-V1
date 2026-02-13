import { motion } from 'motion/react';
import { DollarSign, Eye, TrendingUp, BarChart3, Map } from 'lucide-react';

export function ROIBreakdown() {
  return (
    <section className="py-24 bg-auto-carbon relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-auto-plum-deep/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-['Exo_2'] uppercase">
              The Math <span className="text-auto-plum-neon">Makes Sense</span>
            </h2>
            <p className="text-auto-silver mb-8 leading-relaxed text-lg">
              Unlike billboards or digital ads that require recurring payments, a fleet wrap is a 
              one-time capital expense that generates impressions for 5+ years. 
              It is the lowest Cost Per Thousand Impressions (CPM) of any advertising medium.
            </p>

            <div className="bg-auto-asphalt/50 border border-white/10 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <span className="text-white font-bold">Daily Impressions</span>
                <span className="text-auto-plum-neon font-bold">30,000 - 70,000</span>
              </div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <span className="text-white font-bold">Average Lifespan</span>
                <span className="text-auto-plum-neon font-bold">5 Years</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold">Cost Per Impression</span>
                <span className="text-auto-plum-neon font-bold text-xl">$0.07</span>
              </div>
            </div>

            <p className="text-xs text-auto-silver/60 italic">
              *Based on Outdoor Advertising Association of America (OAAA) statistics for major metropolitan areas like Minneapolis/St. Paul.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { label: 'Brand Awareness', value: '+15x', icon: Eye, color: 'bg-blue-500/20 text-blue-400' },
              { label: 'Local Visibility', value: '100%', icon: Map, color: 'bg-green-500/20 text-green-400' },
              { label: 'Lead Generation', value: 'High', icon: TrendingUp, color: 'bg-orange-500/20 text-orange-400' },
              { label: 'Professionalism', value: 'Instant', icon: BarChart3, color: 'bg-purple-500/20 text-purple-400' }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-auto-asphalt p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors text-center group">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 font-['Exo_2']">{stat.value}</div>
                  <div className="text-sm text-auto-silver uppercase tracking-wider font-bold">{stat.label}</div>
                </div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
