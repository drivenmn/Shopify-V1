import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Check } from 'lucide-react';

export function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full">
                <span className="text-primary uppercase tracking-wider" style={{ fontSize: '0.875rem', fontWeight: 600 }}>Since 2017</span>
              </div>
              
              <h1>
                Driven Styling
              </h1>
              
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Driven Styling was founded in 2017 in Burnsville, Minnesota. What started as a small team of passionate car enthusiasts has grown into the Twin Cities' premier destination for automotive protection and restyling.
                </p>
                <p>
                  Our mission is simple: To provide the highest quality service using the best products in the industry. We treat every vehicle as if it were our own, ensuring that every detail is perfect before it leaves our shop.
                </p>
                <p>
                  We are certified installers for XPEL Paint Protection Film and Window Tint, and we use only the highest quality vinyl for our wraps. Whether you're looking to protect your investment with PPF, keep cool with window tint, or completely change the look of your vehicle with a wrap, we have the expertise to get the job done right.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {['XPEL Certified', 'Expert Installers', 'Premium Materials', 'Quality Guaranteed'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-foreground" style={{ fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1635108198165-1773945e506e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhdXRvJTIwZGV0YWlsaW5nJTIwc2hvcCUyMGludGVyaW9yJTIwY2xlYW58ZW58MXx8fHwxNzY0NDYzNzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Driven Styling Shop Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-warning/10 rounded-full -z-10 blur-3xl" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full -z-10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
