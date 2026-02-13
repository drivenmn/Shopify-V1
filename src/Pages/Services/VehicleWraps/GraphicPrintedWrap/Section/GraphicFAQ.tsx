import { motion } from 'motion/react';
import { Plus, Minus, MessageCircleQuestion, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../../../../../components/ui/button';
import { useBooking } from '../../../../../../components/features/scheduling/BookingContext';

const faqs = [
  {
    question: 'Do you design the graphics in-house?',
    answer: 'Yes! We have a dedicated team of graphic designers who specialize in vehicle layouts. Whether you have a full brand style guide or just a rough idea on a napkin, we can bring it to life.',
  },
  {
    question: 'Can I use my own artwork?',
    answer: 'Absolutely. If you have print-ready vector files (.AI, .EPS, or high-res .PDF), we can use them. If your files need adjustment for vehicle contours, our designers will assist with prepress setup.',
  },
  {
    question: 'How long does the design process take?',
    answer: 'Initial concepts are usually ready within 3-5 business days after our consultation. Revisions depend on your feedback speed. Once approved, production and installation typically take another 3-5 days.',
  },
  {
    question: 'Will the printed image fade?',
    answer: 'We use high-quality UV-resistant overlaminates to protect the print from sun damage. You can expect your graphics to stay vibrant for 5-7 years with proper care.',
  },
  {
    question: 'Can you wrap over existing graphics?',
    answer: 'It is highly recommended to remove old vinyl first. Wrapping over existing graphics creates uneven textures and can lead to premature failure. We offer removal services for old wraps.',
  },
  {
    question: 'Do you offer partial wraps?',
    answer: 'Yes. Partial wraps (covering just the rear 3/4, or sides) are a cost-effective way to get a branded look without the expense of a full wrap.',
  }
];

export function GraphicFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openBooking } = useBooking();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-auto-asphalt" data-section="GraphicFAQ">
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
              Design & Print <span className="text-auto-plum-neon">Questions</span>
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
            <h3 className="text-2xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Have a Crazy Idea?</h3>
            <p className="text-auto-silver mb-8 max-w-2xl mx-auto font-light">
              We love a challenge. Let's discuss your custom project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="default"
                onClick={openBooking}
                className="bg-auto-plum-neon text-black hover:bg-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-auto-plum-neon/20"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Start Design Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
