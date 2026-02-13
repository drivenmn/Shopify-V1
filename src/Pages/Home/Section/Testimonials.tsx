import { Star, Check } from 'lucide-react';
import { motion } from 'motion/react';

// Custom Google Icon as SVG since it's not in Lucide
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const reviews = [
  {
    name: "James Anderson",
    date: "2 days ago",
    text: "Just got my Rivian R1S wrapped in XPEL stealth and it looks incredible. The team at DrivenMN was super professional and the quality of the install is flawless. They even walked me through the aftercare process. Definitely the place to go for EV protection.",
    services: ["XPEL Stealth", "Ceramic Coating"],
    initial: "J",
    bg: "bg-blue-600"
  },
  {
    name: "Lisa Thompson",
    date: "1 week ago",
    text: "Amazing experience from start to finish. Had my windows tinted on my new Audi Q8. The heat rejection is noticeable immediately. The staff was friendly, the shop is spotless, and they finished exactly when they said they would.",
    services: ["Window Tint", "Heat Rejection"],
    initial: "L",
    bg: "bg-purple-600"
  },
  {
    name: "Robert Martinez",
    date: "2 weeks ago",
    text: "Brought my Corvette C8 here for a full front PPF and ceramic coating. The gloss is unreal! They took the time to explain the different packages and didn't try to upsell me on things I didn't need. Honest, high-quality work.",
    services: ["PPF", "Paint Correction"],
    initial: "R",
    bg: "bg-green-600"
  },
  {
    name: "Jennifer Wu",
    date: "3 weeks ago",
    text: "DrivenMN did an interior detail and exterior wash on my daily driver. It looks brand new again! I was impressed by how they got the stains out of the upholstery. Will definitely be coming back for window tinting next month.",
    services: ["Interior Detail", "Detailing"],
    initial: "J",
    bg: "bg-orange-600"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-auto-plum-deep/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <GoogleIcon className="w-5 h-5" />
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <span className="text-sm font-medium text-white ml-1">5.0 Rating</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Twin Cities' <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-plum-mist to-auto-plum-neon">Top Rated</span> Studio
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              Don't just take our word for it. See what our clients have to say about their experience at DrivenMN.
            </p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-auto-plum-deep/30 transition-all group"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.bg} flex items-center justify-center text-white font-bold`}>
                    {review.initial}
                  </div>
                  <div>
                    <div className="font-bold text-white">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </div>
                <GoogleIcon className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                "{review.text}"
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {review.services.map((service, i) => (
                  <div key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-400 border border-white/5">
                    <Check className="w-3 h-3 text-auto-plum-neon" />
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.a 
            href="https://g.page/r/CfD8-6QkaK7IEAE/review" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <GoogleIcon className="w-5 h-5" />
            Read All 500+ Reviews
          </motion.a>
          <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">
            Based on 500+ Verified Google Reviews
          </p>
        </div>

      </div>
    </section>
  );
}
