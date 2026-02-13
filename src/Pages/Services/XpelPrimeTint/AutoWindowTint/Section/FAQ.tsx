import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Product & Performance',
    questions: [
      {
        q: 'What is the difference between XPEL PRIME CS, HP, XR, and XR PLUS?',
        a: 'XPEL PRIME CS features advanced ceramic technology with 88% heat rejection. HP offers hybrid technology at 76% rejection for excellent value. XR provides extreme performance with 93% IR rejection using multi-layer ceramics. XR PLUS is the ultimate choice with 98% total solar energy rejection and anti-reflective coating. All include 99% UV protection and lifetime warranty.'
      },
      {
        q: 'How much heat does window tint actually block?',
        a: 'XPEL window films block between 76-98% of total solar energy depending on the series. PRIME XR PLUS blocks up to 98% TSER and 95% infrared heat, keeping your vehicle significantly cooler. Even on hot summer days, you can expect cabin temperature reductions of 40-60°F compared to untinted windows.'
      },
      {
        q: 'Will ceramic window tint interfere with my electronics or GPS?',
        a: 'No. All XPEL PRIME series films use nano-ceramic technology which is completely non-metallic. Unlike old metallic tints, ceramic films won\'t interfere with GPS, satellite radio, mobile phones, key fobs, or any other electronic signals.'
      },
      {
        q: 'What VLT percentage should I choose?',
        a: 'VLT (Visible Light Transmission) determines darkness. Lower numbers = darker tint. 5% is very dark (limo tint), 15-20% offers strong privacy, 35% balances privacy with visibility, 50-70% is subtle with maximum light. Check your state laws - many require 35% or higher on front windows. We recommend 35% front, 15-20% rear for optimal balance.'
      }
    ]
  },
  {
    category: 'Installation & Warranty',
    questions: [
      {
        q: 'How long does window tint installation take?',
        a: 'Professional installation typically takes 2-4 hours depending on vehicle size and number of windows. We carefully prep each window, precision-cut the film, and ensure perfect application with no bubbles or gaps. Sedans average 2-3 hours, while SUVs and trucks may take 3-4 hours.'
      },
      {
        q: 'What does the XPEL lifetime warranty cover?',
        a: 'The XPEL manufacturer warranty covers peeling, cracking, bubbling, delaminating, color change, and fading for the lifetime of the film. It\'s transferable to new owners, adding resale value. The warranty is honored nationwide at any authorized XPEL dealer.'
      },
      {
        q: 'How long before I can roll down my windows?',
        a: 'Wait 3-5 days before rolling down windows to allow the film to fully cure and adhere. During this time, you may see small water bubbles or haze - this is normal and will disappear as the film dries. Avoid cleaning windows for 7 days after installation.'
      },
      {
        q: 'Can window tint be removed if needed?',
        a: 'Yes, professional-grade window tint can be removed without damage to your windows when done properly. However, XPEL films are designed to last the lifetime of your vehicle. If you need removal for any reason, we recommend professional removal to avoid adhesive residue.'
      }
    ]
  },
  {
    category: 'Legal & Maintenance',
    questions: [
      {
        q: 'What are the window tint laws in my state?',
        a: 'Window tint laws vary by state and typically regulate VLT percentage and window coverage. Most states allow darker tint on rear windows than front. We stay current with all state regulations and will ensure your installation is fully compliant. Contact us for specific requirements in your area.'
      },
      {
        q: 'How do I clean and maintain tinted windows?',
        a: 'Use soft microfiber cloths and ammonia-free glass cleaner. Spray cleaner on the cloth, not directly on windows. Avoid abrasive materials, scrapers, or paper towels which can scratch the film. XPEL films have a scratch-resistant coating but gentle care ensures longest life.'
      },
      {
        q: 'Will window tint fade or turn purple over time?',
        a: 'Not with XPEL PRIME films. All PRIME series use color-stable technology that prevents fading, purpling, or color change. Cheap dyed films from decades ago would turn purple, but modern ceramic and hybrid films maintain their appearance indefinitely.'
      },
      {
        q: 'Does window tint help with resale value?',
        a: 'Yes. Quality window tint is a desirable feature that protects interior condition, demonstrates vehicle care, and transfers with the XPEL warranty. Studies show tinted vehicles maintain better interior condition and can command higher resale prices, especially in sunny climates.'
      }
    ]
  },
  {
    category: 'Cost & Value',
    questions: [
      {
        q: 'How much does professional window tinting cost?',
        a: 'Prices vary by vehicle size and film series. XPEL PRIME HP starts around $249, PRIME CS around $299, PRIME XR around $449, and PRIME XR PLUS around $599. This includes full professional installation, lifetime warranty, and typically covers all windows except windshield. Contact us for exact quote for your vehicle.'
      },
      {
        q: 'Is ceramic tint worth the extra cost over basic film?',
        a: 'Absolutely. Ceramic films like XPEL PRIME provide superior heat rejection (76-98% vs 30-50% for basic film), better UV protection, no signal interference, and guaranteed color stability. The comfort improvement and interior protection easily justify the investment, especially if you keep your vehicle long-term.'
      },
      {
        q: 'Do you offer any warranties or guarantees?',
        a: 'Yes. Every XPEL installation includes the manufacturer\'s lifetime warranty against defects. We also guarantee our professional installation workmanship. If any issues arise from installation (bubbles, peeling, improper fit), we\'ll make it right at no charge.'
      },
      {
        q: 'Can I get just the front windows tinted?',
        a: 'Yes, we can tint any combination of windows based on your needs and budget. Many customers start with front windows for driver comfort, or rear windows for privacy and child protection. However, full vehicle tinting provides the most comprehensive benefits and uniform appearance.'
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
            <span className="text-sm text-primary">Frequently Asked Questions</span>
          </motion.div>
          <h2 className="mb-6 text-foreground">
            Everything You Need to Know
            <span className="block text-primary mt-2">About Auto Window Tinting</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about XPEL window film, installation process, 
            warranties, legal requirements, and maintenance.
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
          <h3 className="mb-3 text-foreground relative z-10">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto relative z-10">
            Our window tinting experts are here to help. Contact us for personalized recommendations 
            based on your vehicle, location, and preferences.
          </p>
          <motion.a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-colors relative z-10 overflow-hidden group/btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative">Call Us Today</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
