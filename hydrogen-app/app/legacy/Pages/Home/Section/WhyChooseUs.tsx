import { motion } from "motion/react";
import { Award, Shield, CheckCircle2, Clock, MapPin } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      title: 'XPEL Certified Facility',
      description: "Minnesota's authorized XPEL dealer. Factory-trained technicians ensuring flawless installation and full warranty coverage.",
      icon: Award,
    },
    {
      title: 'Premium Materials',
      description: 'We strictly use industry-leading XPEL films and coatings. No compromises on quality for your vehicle protection.',
      icon: Shield,
    },
    {
      title: 'Burnsville Location',
      description: 'Conveniently located in Burnsville, serving Minneapolis, St. Paul, and the entire Twin Cities metro area.',
      icon: MapPin,
    },
    {
      title: 'Expert Craftsmanship',
      description: 'Specialized in Tesla, Rivian, and luxury vehicles. Decades of combined experience in automotive aesthetics.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#9D4EDD 1px, transparent 1px), linear-gradient(to right, #9D4EDD 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-auto-plum-mist font-medium tracking-[0.2em] text-sm uppercase mb-3"
          >
            Why Choose DrivenMN
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6"
          >
            The Standard for <span className="text-auto-plum-neon">Excellence</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            We don't just protect cars; we elevate them. Experience the difference of a dedicated automotive protection studio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#151515] border border-white/5 p-8 rounded-2xl hover:border-auto-plum-deep/50 hover:bg-[#1A1A1A] transition-all duration-300"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-auto-plum-deep/10 text-auto-plum-neon group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-auto-plum-mist transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
