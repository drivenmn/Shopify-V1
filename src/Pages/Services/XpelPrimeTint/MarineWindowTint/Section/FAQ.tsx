import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Marine Performance',
    questions: [
      {
        q: 'What makes marine window tint different from automotive tint?',
        a: 'Marine window tint is specifically engineered for the harsh marine environment. It features specialized corrosion-resistant adhesives and durable construction to withstand salt water, high humidity, and intense sun exposure that would cause standard automotive film to fail.'
      },
      {
        q: 'Will window tint reduce glare on the water?',
        a: 'Yes, significantly. Water reflects sunlight, intensifying glare for the captain and passengers. XPEL marine tint reduces this glare, improving visibility, reducing eye strain, and making your time on the water much more comfortable and safe.'
      },
      {
        q: 'How much heat does marine tint block?',
        a: 'Our XPEL PRIME XR PLUS marine film blocks up to 98% of infrared heat. This makes a massive difference in cabin temperature, reducing the load on your air conditioning system and making non-AC vessels much more pleasant.'
      }
    ]
  },
  {
    category: 'Installation & Service',
    questions: [
      {
        q: 'Do you offer mobile marine tinting services?',
        a: 'Yes! We understand that moving a large boat or yacht is not always feasible. Our expert team can come directly to your marina or dock to perform the installation on-site, ensuring a convenient and professional experience.'
      },
      {
        q: 'How long does it take to tint a boat?',
        a: 'Installation time varies greatly depending on the size of the vessel and the number of windows. A small boat might take 2-4 hours, while a large yacht could take a full day or more. We will provide a time estimate along with your quote.'
      },
      {
        q: 'Is there a warranty on marine window tint?',
        a: 'Yes, XPEL provides a comprehensive lifetime warranty on their marine window films. This covers peeling, bubbling, cracking, and color change, giving you peace of mind that your investment is protected.'
      }
    ]
  },
  {
    category: 'Care & Maintenance',
    questions: [
      {
        q: 'How do I clean my tinted boat windows?',
        a: 'We recommend using a soft microfiber cloth and an ammonia-free cleaner (like XPEL Film Cleaner or mild soapy water). Avoid abrasive scrubbers, paper towels, or products containing ammonia, as these can damage the film over time.'
      },
      {
        q: 'Will the salt water damage the tint?',
        a: 'No, provided you choose our marine-grade film. XPEL marine films are designed to be salt-water resistant. However, we do recommend rinsing salt spray off the windows with fresh water when you wash your boat to maintain optimal clarity.'
      }
    ]
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({
    [faqs[0].category]: true
  });

  const toggleItem = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(74,20,140,0.2) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Marine FAQ</span>
          </motion.div>
          <h2 className="mb-6 text-foreground">
            Common Questions
            <span className="block text-primary mt-2">About Marine Tinting</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to frequent questions about our marine window film services, mobile installation, and care instructions.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, categoryIdx) => {
            const isCategoryOpen = openCategories[category.category];
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIdx * 0.1 }}
                className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden"
              >
                {/* Category Title Header */}
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-3 m-0">
                    <div className={`w-2 h-2 rounded-full transition-colors ${isCategoryOpen ? 'bg-primary' : 'bg-muted-foreground'}`} />
                    {category.category}
                  </h3>
                  <motion.div
                    animate={{ rotate: isCategoryOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full ${isCategoryOpen ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                {/* Collapsible Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isCategoryOpen ? 'auto' : 0,
                    opacity: isCategoryOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {/* Questions List */}
                  <div className="px-8 pb-8 space-y-4">
                    {category.questions.map((faq, idx) => {
                      const key = `${category.category}-${idx}`;
                      const isOpen = openItems[key];

                      return (
                        <motion.div
                          key={idx}
                          className="rounded-2xl bg-muted/30 border border-border overflow-hidden group"
                          whileHover={{ 
                            borderColor: 'var(--auto-plum-deep)',
                            transition: { duration: 0.2 }
                          }}
                        >
                          {/* Question */}
                          <button
                            onClick={() => toggleItem(category.category, idx)}
                            className="w-full p-5 flex items-start justify-between gap-4 text-left transition-colors relative overflow-hidden"
                          >
                            <h4 className="text-foreground font-semibold group-hover:text-primary transition-colors pr-4 relative z-10 text-base">
                              {faq.q}
                            </h4>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-1"
                            >
                              <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </motion.div>
                          </button>

                          {/* Answer */}
                          <motion.div
                            initial={false}
                            animate={{
                              height: isOpen ? 'auto' : 0,
                              opacity: isOpen ? 1 : 0
                            }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-0">
                              <p className="text-muted-foreground leading-relaxed text-sm">
                                {faq.a}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/20 relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 1 }}
          />
          <h3 className="mb-3 text-foreground relative z-10">Have Questions About Your Boat?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto relative z-10">
            Every boat is unique. Contact us to discuss your specific vessel and get a custom quote for on-site installation.
          </p>
          <button
             onClick={() => document.location.href = '/contact'}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-colors relative z-10 overflow-hidden group/btn"
          >
            <span className="relative">Contact Us</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
