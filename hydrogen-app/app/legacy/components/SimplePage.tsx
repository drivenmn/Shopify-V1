import { ArrowRight, Shield, Award, CheckCircle2 } from 'lucide-react';

interface SimplePageProps {
  title: string;
  subtitle: string;
  description: string;
  onNavigate: (page: string) => void;
}

export function SimplePage({ title, subtitle, description, onNavigate }: SimplePageProps) {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-32">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <div className="inline-block mb-4 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full">
            <span className="text-white uppercase tracking-wider text-sm" style={{ fontWeight: 600 }}>
              {subtitle}
            </span>
          </div>
          
          <h1 className="font-['Agdasima'] text-white mb-6 uppercase" style={{ fontSize: '64px', fontWeight: 700 }}>
            {title}
          </h1>
          
          <p className="text-white/90 max-w-2xl mx-auto mb-8" style={{ fontSize: '18px' }}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('ppf-configurator')}
              className="bg-warning hover:bg-[#FFC107] text-[#0A0A0A] px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              Get PPF Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('tint-configurator')}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              Get Tint Quote
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-['Agdasima'] text-gray-900 text-4xl mb-6">
                Premium Vehicle Protection
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                At DrivenMN, we specialize in comprehensive vehicle protection solutions using industry-leading XPEL products. Our certified technicians ensure precise installation and superior results for every vehicle we service.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you're looking to protect your investment with paint protection film, enhance comfort with ceramic window tint, or transform your vehicle's appearance with wraps and coatings, we deliver exceptional quality and service.
              </p>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-primary/30">
              <img
                src="https://placehold.co/800x450?text=Vehicle+Protection"
                alt="Vehicle Protection Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-gray-900 text-xl mb-3 font-semibold">XPEL Certified</h3>
              <p className="text-gray-600 leading-relaxed">
                Minnesota's exclusive authorized XPEL installation facility with factory-trained technicians.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-warning/50 transition-colors">
              <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-warning" />
              </div>
              <h3 className="text-gray-900 text-xl mb-3 font-semibold">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We use only the highest quality materials backed by industry-leading warranties.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-gray-900 text-xl mb-3 font-semibold">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence ensures you're completely satisfied with every service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}