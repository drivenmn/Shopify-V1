import { motion } from 'motion/react';
import { Plus, Minus, MessageCircleQuestion, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../../../../components/ui/button';
import { useBooking } from '../../../../../components/features/scheduling/BookingContext';

const faqs = [
  {
    question: 'Do you offer volume discounts for fleets?',
    answer: 'Yes. We offer tiered pricing for fleet projects involving 3 or more vehicles. The more vehicles you wrap, the lower the cost per unit due to production efficiencies.',
  },
  {
    question: 'How long will my fleet be off the road?',
    answer: 'We understand that downtime costs you money. A typical full van wrap takes 1-2 days. We can schedule installations over weekends or stagger them one vehicle at a time to keep your operations running smoothly.',
  },
  {
    question: 'Can you match our corporate colors exactly?',
    answer: 'Yes. We use Pantone color matching systems to ensure your brand colors are reproduced accurately on the vinyl. We will provide a printed proof for approval before full production begins.',
  },
  {
    question: 'What happens if a vehicle gets in an accident?',
    answer: 'Since we keep your design files on record, we can easily reprint and replace just the damaged panels (e.g., just the bumper or one door) rather than re-wrapping the entire vehicle. This saves significant time and money.',
  },
  {
    question: 'How do I care for wrapped fleet vehicles?',
    answer: 'Regular washing is key. Avoid high-pressure pressure washers directly on edges and seams. We provide a care guide for your drivers to ensure the wraps last their full 5-7 year lifespan.',
  },
  {
    question: 'Do you offer removal services?',
    answer: 'Yes. When you are ready to sell or trade in your fleet vehicles, we can professionally remove the vinyl, often revealing paint that looks brand new due to the protection the wrap provided.',
  }
];

export function FleetFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openBooking } = useBooking();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-auto-asphalt" data-section="FleetFAQ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-auto-plum-deep/20 border border-auto-plum-neon/30 mb-6">
              <MessageCircleQuestion className="w-4 h-4 text-auto-plum-neon" />
              <span className="text-xs font-bold text-auto-plum-mist uppercase tracking-widest font-['Exo_2']">FAQ</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Exo_2'] uppercase tracking-tight">
              Fleet Management <span className="text-auto-plum-neon">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/5 border-auto-plum-neon/50 shadow-[0_0_20px_rgba(157,78,221,0.1)]' : 'bg-auto-carbon border-white/5 hover:border-auto-plum-neon/30'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 className={`text-lg md:text-xl font-bold font-['Exo_2'] transition-colors ${openIndex === index ? 'text-auto-plum-mist' : 'text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-auto-plum-neon text-black rotate-180' : 'bg-white/10 text-white'}`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 pt-0">
                    <p className="text-auto-silver leading-relaxed font-light border-t border-white/10 pt-6">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-10 bg-gradient-to-br from-auto-plum-deep/20 to-auto-asphalt rounded-2xl border border-auto-plum-neon/20 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Ready to Brand Your Fleet?</h3>
            <p className="text-auto-silver mb-8 max-w-2xl mx-auto font-light">
              Contact our fleet manager directly to discuss volume pricing and installation schedules.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="default"
                onClick={openBooking}
                className="bg-auto-plum-neon text-black hover:bg-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-auto-plum-neon/20"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Fleet Audit
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
