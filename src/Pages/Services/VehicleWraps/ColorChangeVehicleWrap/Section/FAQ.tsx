import { motion } from 'motion/react';
import { Plus, Minus, MessageCircleQuestion, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../../../../../components/ui/button';
import { useBooking } from '../../../../../../components/features/scheduling/BookingContext';

const faqs = [
  {
    question: 'How much does a color change wrap cost?',
    answer: 'A standard full vehicle wrap typically ranges from $2,800 to $4,500. Pricing depends on the size of the vehicle, the complexity of the body panels, the specific material chosen (chrome and color-shift films cost more), and the level of coverage (exterior only vs. door jambs).',
  },
  {
    question: 'Does a wrap damage my car paint?',
    answer: 'No. In fact, it protects it. The vinyl acts as a shield against UV rays, minor scratches, and road debris. However, the paint must be in good condition (OEM quality) before wrapping. If your clear coat is already peeling, wrapping over it is not recommended.',
  },
  {
    question: 'How long does a vinyl wrap last?',
    answer: 'A professionally installed wrap using premium 3M or Avery Dennison film typically lasts 5-7 years with proper care. Horizontal surfaces (hood, roof) may show wear sooner if constantly exposed to intense sun.',
  },
  {
    question: 'Can I wash my wrapped car?',
    answer: 'Yes, but hand washing is highly recommended. Automatic car washes with bristles can scratch the vinyl and lift edges. Touchless washes are generally safe, but hand washing with pH-neutral soap is best to maintain the finish.',
  },
  {
    question: 'Is the wrap removable?',
    answer: 'Yes, high-quality vehicle wraps are designed to be removable within their lifespan (usually up to 5-7 years) without leaving significant adhesive residue or damaging the underlying paint.',
  },
  {
    question: 'Do you wrap door jambs?',
    answer: 'We offer door jamb wrapping as an optional add-on. A standard "exterior only" wrap covers all visible painted surfaces when the doors are closed. Wrapping jambs requires significantly more labor and disassembly, which increases the cost.',
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openBooking } = useBooking();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-auto-asphalt" data-section="VinylFAQ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
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
              Common <span className="text-auto-plum-neon">Questions</span>
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
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

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-10 bg-gradient-to-br from-auto-plum-deep/20 to-auto-asphalt rounded-2xl border border-auto-plum-neon/20 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Ready to Transform Your Car?</h3>
            <p className="text-auto-silver mb-8 max-w-2xl mx-auto font-light">
              Schedule a free consultation to view our color swatch books and get a precise quote for your vehicle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="default"
                onClick={openBooking}
                className="bg-auto-plum-neon text-black hover:bg-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-auto-plum-neon/20"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
