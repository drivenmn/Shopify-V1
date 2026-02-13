import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-white mb-4 uppercase tracking-wide font-['Exo_2'] font-bold text-3xl">
          Contact Info
        </h2>
        <p className="text-auto-silver leading-relaxed font-['Inter'] font-light">
          Choose DrivenMN for expert vehicle restyling and protection where quality, precision, and premium XPEL certified services ensure your car looks flawless and stays protected.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {/* Phone */}
        <a 
          href="tel:6128439727"
          className="flex items-start gap-4 group bg-white/5 p-4 rounded-xl border border-white/10 hover:border-auto-plum-neon/50 transition-all duration-300 hover:bg-white/10"
        >
          <div className="w-12 h-12 rounded-lg bg-auto-plum-deep/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-auto-plum-neon/30">
            <Phone className="w-5 h-5 text-auto-plum-neon" />
          </div>
          <div>
            <div className="text-auto-plum-mist text-xs font-bold uppercase tracking-wider mb-1 font-['Exo_2']">
              Call Us
            </div>
            <div className="text-white font-['Exo_2'] font-bold text-lg group-hover:text-auto-plum-neon transition-colors">
              (612) 843-9727
            </div>
          </div>
        </a>

        {/* Email */}
        <a 
          href="mailto:Sales@DrivenMN.com"
          className="flex items-start gap-4 group bg-white/5 p-4 rounded-xl border border-white/10 hover:border-auto-plum-neon/50 transition-all duration-300 hover:bg-white/10"
        >
          <div className="w-12 h-12 rounded-lg bg-auto-plum-deep/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-auto-plum-neon/30">
            <Mail className="w-5 h-5 text-auto-plum-neon" />
          </div>
          <div>
            <div className="text-auto-plum-mist text-xs font-bold uppercase tracking-wider mb-1 font-['Exo_2']">
              Email Us
            </div>
            <div className="text-white font-['Exo_2'] font-bold text-lg group-hover:text-auto-plum-neon transition-colors">
              Sales@DrivenMN.com
            </div>
          </div>
        </a>

        {/* Address */}
        <a 
          href="https://maps.google.com/?q=12040+Riverwood+DR,+Burnsville,+Minnesota+55337"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 group bg-white/5 p-4 rounded-xl border border-white/10 hover:border-auto-plum-neon/50 transition-all duration-300 hover:bg-white/10"
        >
          <div className="w-12 h-12 rounded-lg bg-auto-plum-deep/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-auto-plum-neon/30">
            <MapPin className="w-5 h-5 text-auto-plum-neon" />
          </div>
          <div>
            <div className="text-auto-plum-mist text-xs font-bold uppercase tracking-wider mb-1 font-['Exo_2']">
              Visit Us
            </div>
            <div className="text-white font-['Inter'] leading-snug">
              12040 Riverwood DR<br />
              Burnsville, Minnesota 55337
            </div>
          </div>
        </a>
      </div>

      {/* Google Map Embed */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.7524892469754!2d-93.27994492346815!3d44.76086917107132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f622e1c1c1c1c1%3A0x1234567890abcdef!2s12040%20Riverwood%20Dr%2C%20Burnsville%2C%20MN%2055337!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DrivenMN Location"
          className="bg-gray-800"
        />
      </div>

      {/* Business Hours */}
      <div className="bg-auto-carbon border border-white/10 rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-auto-plum-deep/10 rounded-full blur-xl" />
        
        <div className="flex items-center gap-2 mb-4">
           <Clock className="w-4 h-4 text-auto-plum-neon" />
           <h3 className="text-white uppercase tracking-wider text-sm font-['Exo_2'] font-bold">
             Business Hours
           </h3>
        </div>
        
        <div className="space-y-3 font-['Inter'] text-sm">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-auto-silver">Monday - Friday</span>
            <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-auto-silver">Saturday</span>
            <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-auto-silver">Sunday</span>
            <span className="text-auto-plum-mist font-medium">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
