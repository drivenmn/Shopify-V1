import { motion } from 'motion/react';
import { Plus, Minus, MessageCircleQuestion, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../../../../../components/ui/button';
import { useBooking } from '../../../../../../components/features/scheduling/BookingContext';

const faqs = [
  {
    question: 'How long does a Chrome Delete take?',
    answer: 'A standard chrome delete package (window trim, mirrors, handles) typically takes 4-6 hours. Depending on our schedule, we can often complete this within a single day drop-off.',
  },
  {
    question: 'Is it better to paint or wrap chrome trim?',
    answer: 'Wrapping is superior for several reasons. Painting over chrome is difficult because paint does not adhere well to the plating and will chip over time. Vinyl is durable, looks like factory paint, and is fully reversible.',
  },
  {
    question: 'Can you wrap plastic bumpers?',
    answer: 'Vinyl adheres best to smooth, painted surfaces. Textured plastic (often found on truck bumpers or Jeep fenders) cannot be wrapped effectively as the adhesive will not bond properly.',
  },
  {
    question: 'Does the wrap affect sensors?',
    answer: 'No. The vinyl film is thin enough that it does not interfere with parking sensors, radar, or cameras. We carefully trim around sensors or wrap over them cleanly depending on the vehicle type.',
  },
  {
    question: 'What is the warranty on accent wraps?',
    answer: 'We provide a 1-year installation warranty on all chrome deletes and accent wraps. The material itself (3M/Avery) typically carries a 5+ year durability rating against fading.',
  }
];

export function AccentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openBooking } = useBooking();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-auto-asphalt" data-section="AccentFAQ">
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
              Accent Wrap <span className="text-auto-plum-neon">Questions</span>
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
            <h3 className="text-2xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Let's Detail Your Ride</h3>
            <p className="text-auto-silver mb-8 max-w-2xl mx-auto font-light">
              Accent wraps are affordable and quick. Schedule your chrome delete today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="default"
                onClick={openBooking}
                className="bg-auto-plum-neon text-black hover:bg-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-auto-plum-neon/20"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
