import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>("General & Benefits");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const faqCategories = [
    {
      title: "General & Benefits",
      color: "teal",
      items: [
        {
          question: 'How long does XPEL paint protection film last?',
          answer: 'XPEL Ultimate Plus and Ultimate Plus Fusion come with a 10-year manufacturer warranty. With proper care and maintenance, the film can last the lifetime of your vehicle ownership. The self-healing technology and UV-resistant properties ensure the film maintains its clarity and protection for years to come.'
        },
        {
          question: 'Is XPEL paint protection film worth the investment?',
          answer: "Absolutely. PPF protects your vehicle's most valuable asset - its paint - from costly damage. A single front bumper repaint costs $800-1,500, while PPF lasts 10+ years. PPF also maintains your vehicle's resale value, as protected paint stays in pristine condition. For luxury, exotic, or new vehicles, PPF is one of the best investments you can make."
        },
        {
          question: 'Does paint protection film damage car paint when removed?',
          answer: 'No, XPEL PPF is specifically designed to protect your paint without causing any damage. When installed by XPEL certified professionals like DrivenMN, the film can be removed cleanly without affecting the original paint. In fact, the paint underneath will be in better condition than unprotected areas due to the UV and environmental protection provided by the film.'
        }
      ]
    },
    {
      title: "Products & Technology",
      color: "purple",
      items: [
        {
          question: 'What is self-healing paint protection film and how does it work?',
          answer: 'Self-healing PPF has a special elastomeric polyurethane top coat that repairs minor scratches and swirl marks when exposed to heat. When the film is heated (by sunlight, warm water, or heat gun), the polymers in the top coat flow back together, making light scratches disappear. This technology keeps your PPF looking new and maintains the protected appearance of your vehicle.'
        },
        {
          question: "What's the difference between XPEL Ultimate Plus and Ultimate Plus Fusion?",
          answer: 'Both offer the same physical protection and self-healing technology. The key difference is that Fusion has ceramic coating technology embedded directly in the film, providing enhanced hydrophobic properties (better water beading), superior gloss, and easier maintenance. Fusion is ideal for owners who want the ultimate finish and easiest care routine.'
        },
        {
          question: 'Should I get ceramic coating or paint protection film?',
          answer: 'These products serve different purposes and work great together. PPF provides physical protection against rock chips, scratches, and impacts - something ceramic coating cannot do. Ceramic coating provides chemical protection, enhanced gloss, and hydrophobic properties. For best protection, many clients choose PPF for high-impact areas and ceramic coating for the rest of the vehicle.'
        },
        {
          question: 'Can PPF be applied to matte or satin paint finishes?',
          answer: 'Yes! XPEL Stealth is specifically designed for matte and satin finishes. It maintains the factory matte appearance while providing the same protection as clear PPF. Stealth can also be applied to gloss paint to create a matte finish. If your vehicle has a specialty finish, our certified installers will recommend the appropriate film to preserve the original appearance.'
        }
      ]
    },
    {
      title: "Installation & Process",
      color: "yellow",
      items: [
        {
          question: 'How long does PPF installation take?',
          answer: 'Installation time depends on the coverage package: Track Pack takes 1-2 days, Premium packages take 2-3 days, and full-body installations take 5-7 days. This includes preparation, cutting, installation, and curing time. We never rush installations - precision and quality are our priorities. Your vehicle stays in our climate-controlled facility during the entire process.'
        },
        {
          question: 'Do you service vehicles outside Minneapolis?',
          answer: 'Yes, we serve the entire Twin Cities metro area including Minneapolis, St. Paul, Eden Prairie, Bloomington, Minnetonka, Edina, Plymouth, and surrounding communities. Many clients also travel from greater Minnesota and neighboring states for our XPEL certified installation services. Contact us to discuss your specific location and scheduling needs.'
        },
        {
          question: 'What vehicles do you install PPF on?',
          answer: 'We install XPEL paint protection film on all vehicle makes and models, including Tesla, BMW, Mercedes-Benz, Porsche, Audi, Lamborghini, Ferrari, McLaren, Corvette, Ford, Chevrolet, Ram, and more. We have patterns for virtually every vehicle and can create custom cuts if needed. From daily drivers to exotic supercars, we protect them all.'
        }
      ]
    },
    {
      title: "Pricing & Care",
      color: "teal",
      items: [
        {
          question: 'How much does paint protection film cost in Minneapolis?',
          answer: 'PPF costs vary based on coverage area and vehicle type. Track Pack (partial front) starts at $1,299, Premium front-end packages start at $2,499, and full-body protection ranges from $5,999-$8,999. Luxury and exotic vehicles may require custom pricing. Contact DrivenMN for a free detailed quote specific to your vehicle and desired coverage.'
        },
        {
          question: 'Can I wash my car after PPF installation?',
          answer: 'You should wait 7 days after installation before washing to allow the film to fully cure. After the curing period, you can wash your vehicle normally. In fact, PPF makes washing easier due to its hydrophobic properties. We recommend hand washing or touchless car washes. Avoid automatic car washes with harsh brushes during the first 30 days.'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-auto-carbon border-t border-white/5" data-section="PPFFAQ">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <HelpCircle className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold text-white uppercase tracking-widest font-['Exo_2']">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Exo_2']">
            COMMON <span className="text-auto-plum-neon">QUESTIONS</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-6">
          {faqCategories.map((category, idx) => {
            const isCategoryOpen = openCategory === category.title;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${isCategoryOpen ? 'border-auto-plum-neon/50 bg-auto-plum-deep/5' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
              >
                {/* Category Header */}
                <button
                  onClick={() => setOpenCategory(isCategoryOpen ? null : category.title)}
                  className="w-full px-8 py-6 flex items-center justify-between"
                >
                  <h3 className={`text-xl font-bold font-['Exo_2'] ${isCategoryOpen ? 'text-auto-plum-neon' : 'text-white'}`}>
                    {category.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isCategoryOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full ${isCategoryOpen ? 'bg-auto-plum-neon text-black' : 'bg-white/10 text-white/50'}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Category Questions */}
                <AnimatePresence>
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/5"
                    >
                      <div className="p-6 space-y-4">
                        {category.items.map((item, itemIdx) => {
                          const isFaqOpen = openFaq === item.question;
                          
                          return (
                            <div 
                              key={itemIdx} 
                              className={`rounded-xl border transition-all duration-300 ${isFaqOpen ? 'border-auto-plum-neon/30 bg-auto-plum-neon/5' : 'border-white/5 bg-auto-asphalt/50 hover:border-white/10'}`}
                            >
                              <button
                                onClick={() => setOpenFaq(isFaqOpen ? null : item.question)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left"
                              >
                                <span className={`font-medium pr-4 ${isFaqOpen ? 'text-white' : 'text-white/80'}`}>
                                  {item.question}
                                </span>
                                <ChevronDown 
                                  className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isFaqOpen ? 'rotate-180 text-auto-plum-neon' : 'text-white/30'}`} 
                                />
                              </button>
                              
                              <AnimatePresence>
                                {isFaqOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-6 pb-4 text-auto-silver leading-relaxed font-light border-t border-white/5 pt-4 mt-2 text-sm">
                                      {item.answer}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
