import { Mail } from 'lucide-react';
import { Button } from '~/legacy/components/ui/button';

export function Newsletter() {
  return (
    <section className="py-20 bg-auto-carbon border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-auto-plum-deep/20 to-auto-asphalt border border-auto-plum-neon/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-auto-plum-neon/5 blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-auto-plum-neon/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-auto-plum-neon/30">
              <Mail className="w-8 h-8 text-auto-plum-neon" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4 font-['Exo_2'] uppercase">
              Stay in the <span className="text-auto-plum-neon">Loop</span>
            </h2>
            
            <p className="text-auto-silver max-w-lg mx-auto mb-8">
              Subscribe to our newsletter for the latest automotive protection tips, 
              new product announcements, and exclusive offers.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-auto-plum-neon focus:ring-1 focus:ring-auto-plum-neon transition-all"
              />
              <Button 
                type="submit"
                className="bg-auto-plum-neon text-black hover:bg-white font-bold uppercase tracking-wide px-8 py-3 h-auto"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="text-xs text-white/40 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
