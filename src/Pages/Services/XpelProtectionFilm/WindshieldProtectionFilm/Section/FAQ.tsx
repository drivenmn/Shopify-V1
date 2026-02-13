import { motion } from 'motion/react';
import { Plus, Minus, MessageCircleQuestion, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../../../../../components/ui/button';
import { useBooking } from '../../../../../../components/features/scheduling/BookingContext';

const faqs = [
  {
    question: 'How much does windshield protection film cost in Minneapolis?',
    answer: 'XPEL windshield protection film installation in Minneapolis typically ranges from $399-$699 depending on your vehicle make and model. Luxury vehicles like Tesla Model S, BMW 7 Series, and Mercedes S-Class may be on the higher end due to larger windshield size and complexity. We offer free quotes and can provide exact pricing based on your specific vehicle.',
    keywords: 'windshield protection film cost Minneapolis, XPEL windshield price Minnesota, windshield PPF cost Twin Cities'
  },
  {
    question: 'How long does windshield protection film last?',
    answer: 'XPEL windshield protection film is backed by a 10-year manufacturer warranty and can last the lifetime of your vehicle with proper care. The self-healing technology ensures the film maintains optical clarity for years, and the aerospace-grade materials are designed to withstand Minnesota\'s harsh winters and intense summer sun without yellowing, cracking, or peeling.',
    keywords: 'windshield film lifespan, XPEL warranty, how long does windshield PPF last'
  },
  {
    question: 'Will windshield protection film interfere with ADAS or safety systems?',
    answer: 'No. XPEL windshield protection film is specifically engineered to be 100% compatible with all Advanced Driver Assistance Systems (ADAS) including lane departure warning, adaptive cruise control, collision avoidance, and forward-facing cameras. The film\'s optical clarity meets OEM specifications and will not interfere with Tesla Autopilot, GM Super Cruise, or any other camera-based safety system.',
    keywords: 'windshield film ADAS compatible, Tesla Autopilot windshield protection, ADAS safe windshield film'
  },
  {
    question: 'Can windshield protection film prevent all rock chips?',
    answer: 'XPEL windshield protection film prevents approximately 95% of rock chip damage that would otherwise crack or chip your windshield. The 8-mil urethane film absorbs impact energy from road debris, rocks, and gravel. While no product can guarantee 100% protection against all impacts (especially large rocks at high speeds), windshield PPF dramatically reduces the risk of costly windshield replacement.',
    keywords: 'prevent rock chips windshield, stop windshield chips, windshield protection effectiveness'
  },
  {
    question: 'How long does windshield protection film installation take?',
    answer: 'Professional windshield protection film installation at DrivenMN typically takes 2-3 hours from start to finish. Our XPEL-certified technicians use computer-cut patterns for perfect fitment and precision installation in our climate-controlled facility. Same-day service is available, and you can drive your vehicle immediately after installation.',
    keywords: 'windshield film installation time, how long install windshield PPF, same day windshield protection'
  },
  {
    question: 'Is windshield protection film legal in Minnesota?',
    answer: 'Yes, XPEL windshield protection film is 100% legal in Minnesota and all 50 states. The film is completely clear with 99.9% light transmission, meeting all federal and state visibility requirements. Unlike window tint, which has restrictions on windshields, clear protection film is approved for full windshield coverage.',
    keywords: 'windshield film legal Minnesota, Minnesota windshield protection laws, legal windshield PPF'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openBooking } = useBooking();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-auto-asphalt" data-section="WindshieldFAQ">
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
            <p className="text-xl text-auto-silver max-w-3xl mx-auto font-light leading-relaxed">
              Everything you need to know about XPEL windshield protection film installation in Minneapolis, Minnesota.
            </p>
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
                    {/* Hidden keywords for SEO */}
                    <div className="sr-only" aria-hidden="true">
                      {faq.keywords}
                    </div>
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
            <h3 className="text-2xl font-bold text-white mb-4 font-['Exo_2'] uppercase">Still Have Questions?</h3>
            <p className="text-auto-silver mb-8 max-w-2xl mx-auto font-light">
              Our XPEL-certified experts are here to help. Contact DrivenMN for personalized answers about windshield protection film for your specific vehicle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="default"
                onClick={() => window.location.href = 'tel:+16125550100'}
                className="bg-auto-plum-neon text-black hover:bg-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-auto-plum-neon/20"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (612) 555-0100
              </Button>
              <Button
                variant="outline"
                onClick={openBooking}
                className="border-white/20 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-xl"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
