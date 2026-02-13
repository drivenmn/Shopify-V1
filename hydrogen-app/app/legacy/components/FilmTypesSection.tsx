import { Shield, Award, CheckCircle2, ArrowRight, Palette, Eye, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { ColorPPFSelector } from './ColorPPFSelector';
import { clearFilms } from './configurators/shared/filmData';

interface FilmTypesSectionProps {
  onNavigate: (page: string) => void;
}

export function FilmTypesSection({ onNavigate }: FilmTypesSectionProps) {
  const [activeTab, setActiveTab] = useState<'clear' | 'color'>('clear');

  return (
    <div className="max-w-7xl mx-auto px-6" data-component="FilmTypesContent">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-primary uppercase tracking-[0.2em] mb-6 text-xs" style={{ fontWeight: 700 }}>
          Film Options
        </span>
        <h2 className="font-['Agdasima'] text-gray-900 mb-6" style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 700 }}>
          Choose Your Film Type
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12" style={{ fontSize: '18px' }}>
          Premium protection available in clear or custom color finishes
        </p>

        {/* Tab Buttons */}
        <div className="inline-flex bg-gray-100 border border-gray-200 rounded-2xl p-2">
          <button
            onClick={() => setActiveTab('clear')}
            className={`px-10 py-4 rounded-xl transition-all duration-300 ${
              activeTab === 'clear'
                ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            style={{ fontWeight: 700, fontSize: '16px' }}
          >
            Clear Films
          </button>
          <button
            onClick={() => setActiveTab('color')}
            className={`px-10 py-4 rounded-xl transition-all duration-300 ${
              activeTab === 'color'
                ? 'bg-gradient-to-r from-warning to-[#F59E0B] text-black shadow-lg'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            style={{ fontWeight: 700, fontSize: '16px' }}
          >
            Color Films
          </button>
        </div>
      </motion.div>

      {/* Clear Films Content */}
      {activeTab === 'clear' && (
        <div className="space-y-10">
          {clearFilms.map((film, index) => {
            const Icon = film.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 hover:border-warning rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-warning/20"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-[400px] lg:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={film.image}
                      alt={film.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${film.gradient} opacity-40 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute top-8 left-8">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${film.gradient} flex items-center justify-center shadow-2xl`}>
                        <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-12 lg:p-16 flex flex-col justify-center">
                    <div className="text-gray-500 uppercase tracking-[0.15em] mb-3 text-xs" style={{ fontWeight: 600 }}>
                      {film.subtitle}
                    </div>
                    <h3 className="text-gray-900 mb-6" style={{ fontSize: '42px', fontWeight: 700, lineHeight: '1.1' }}>
                      {film.name}
                    </h3>
                    <p className="text-gray-700 mb-10 leading-relaxed" style={{ fontSize: '18px' }}>
                      {film.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {film.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => onNavigate('ppf-configurator')}
                      className="group/btn inline-flex items-center gap-3 text-warning hover:text-[#FFC107] transition-all duration-300"
                      style={{ fontWeight: 700, fontSize: '16px' }}
                    >
                      <span>CONFIGURE WITH {film.name.toUpperCase()}</span>
                      <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Color Films Content */}
      {activeTab === 'color' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Intro */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 mb-12 text-center">
            <Palette className="w-16 h-16 text-warning mx-auto mb-6" strokeWidth={2} />
            <h3 className="text-gray-900 mb-4" style={{ fontSize: '32px', fontWeight: 700 }}>
              XPEL Color Paint Protection Film
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed" style={{ fontSize: '18px' }}>
              Transform your vehicle's appearance while adding premium protection. XPEL Color PPF combines 
              the protective benefits of traditional PPF with the ability to change your vehicle's color. 
              Available in Gloss, Satin, and Matte finishes with 7-year warranty coverage.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>Same Protection</div>
                <div className="text-gray-600 text-sm">Self-healing technology included</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <Palette className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>24+ Colors</div>
                <div className="text-gray-600 text-sm">Multiple finish options</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>7-Year Warranty</div>
                <div className="text-gray-600 text-sm">Comprehensive coverage</div>
              </div>
            </div>
          </div>

          {/* Color Swatches by Finish */}
          <ColorPPFSelector />

          {/* Color Film CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-6 items-center">
              <button
                onClick={() => onNavigate('ppf-configurator')}
                className="group px-10 py-5 bg-gradient-to-r from-warning to-[#F59E0B] hover:from-[#FFC107] hover:to-warning text-black rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-warning/50"
                style={{ fontWeight: 700, fontSize: '16px' }}
              >
                <span className="flex items-center gap-3">
                  Get Color PPF Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <div className="text-gray-500 text-sm">
                or contact us for custom color matching
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}