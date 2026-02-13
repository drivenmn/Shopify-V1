import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Product & Performance',
    questions: [
      {
        q: 'Will window film make my home or office too dark?',
        a: 'Not at all. We offer a wide range of shades, from virtually clear films that block heat and UV rays to darker options for glare reduction. Modern nano-ceramic films can block up to 98% of heat while letting in plenty of natural light, preserving your views.'
      },
      {
        q: 'How does window film prevent furniture fading?',
        a: 'XPEL window films block 99.9% of harmful UV rays, which are the primary cause of fading. By also reducing heat and visible light, our films significantly extend the life of your flooring, furniture, artwork, and curtains.'
      },
      {
        q: 'Does it really save money on energy bills?',
        a: 'Yes. By rejecting solar heat in the summer and insulating your windows in the winter, window film can lower cooling costs by up to 30%. It reduces the load on your HVAC system, prolonging its life and improving overall energy efficiency.'
      },
      {
        q: 'Can I install window film on any type of glass?',
        a: 'Most likely, yes. Our films are safe for double-pane (IGU) and Low-E windows. However, we always conduct a glass checklist during our consultation to ensure the film is compatible with your specific glass type to prevent thermal stress or breakage.'
      }
    ]
  },
  {
    category: 'Installation & Care',
    questions: [
      {
        q: 'How long does installation take?',
        a: 'It depends on the scope of the project. A standard home living room might take half a day, while a large commercial office could take several days. We work efficiently to minimize disruption to your daily routine or business operations.'
      },
      {
        q: 'Is the installation messy?',
        a: 'No. Our installers are professional and respectful of your space. We use drop cloths, wear shoe covers, and clean up thoroughly after the job. The installation process uses a mild soap and water solution, so there are no harsh chemicals or odors.'
      },
      {
        q: 'How do I clean my windows after tinting?',
        a: 'Wait 30 days after installation to allow the film to fully cure. Then, clean your windows as usual using a soft microfiber cloth and an ammonia-free glass cleaner (or mild soap and water). Avoid abrasive scrubbers or blades.'
      },
      {
        q: 'What is the warranty?',
        a: 'XPEL offers a comprehensive lifetime manufacturer warranty for residential installations against bubbling, peeling, cracking, and delaminating. Commercial installations typically come with a 10-15 year warranty depending on the specific film selected.'
      }
    ]
  },
  {
    category: 'Privacy & Security',
    questions: [
      {
        q: 'Can window film provide privacy during the day and night?',
        a: 'Reflective films provide excellent daytime privacy (you can see out, they can\'t see in). However, at night when lights are on inside, the effect reverses. For 24/7 privacy, we recommend frosted or decorative films, or combining film with window treatments.'
      },
      {
        q: 'Does security film really stop break-ins?',
        a: 'Safety and security films are designed to hold shattered glass together, making it much harder for intruders to break through. While no film makes glass unbreakable, it adds a significant delay and deterrent, protecting occupants from flying glass shards.'
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
          style={{ background: 'radial-gradient(circle, rgba(1,121,116,0.2) 0%, transparent 70%)' }}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Common Questions</span>
          </div>
          <h2 className="mb-6 text-foreground">
            Everything You Need to Know
            <span className="block text-primary mt-2">About Architectural Window Film</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about XPEL window film, installation process, 
            warranties, and maintenance for your home or business.
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
      </div>
    </section>
  );
}
