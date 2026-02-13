import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Service {
  image: string;
  title: string;
  description: string;
  features: string[];
  page: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  onNavigate: (page: string) => void;
}

export function ServiceCard({ service, index, onNavigate }: ServiceCardProps) {
  const gradient = index % 2 === 0 ? 'from-primary to-primary/80' : 'from-warning to-[#F59E0B]';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onNavigate(service.page)}
      className="group relative bg-card border border-border hover:border-warning/60 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-warning/20"
      data-component="ServiceCard"
    >
      {/* Gradient Overlay on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none`} />
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0A0A0A]" />
      </div>

      <div className="relative p-8">
        {/* Content */}
        <h3 className="text-card-foreground mb-3" style={{ fontSize: '24px', fontWeight: 700 }}>
          {service.title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed" style={{ fontSize: '15px', lineHeight: '1.6' }}>
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground text-xs">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-warning group-hover:gap-4 transition-all duration-300">
          <span style={{ fontWeight: 700, fontSize: '14px' }}>LEARN MORE</span>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-50 blur-xl`} />
      </div>
    </motion.div>
  );
}