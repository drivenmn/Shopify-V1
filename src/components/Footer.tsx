import { Instagram, Facebook, Youtube, ShieldCheck, Award, CheckCircle } from 'lucide-react';
import drivenLogo from 'figma:asset/d0ee59616032f1602fbb40ab7050a284d028d7d9.png';
import { useTheme } from '../utils/themeContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

// TikTok Icon (custom SVG)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

// Snapchat Icon (custom SVG)
function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .719-.149 1.061-.149.313 0 .586.119.797.359.211.24.324.569.324.959 0 .778-.541 1.821-1.66 1.821-.265 0-.524-.069-.776-.207-.346-.19-.687-.479-1.044-.479-.199 0-.357.067-.52.132l-.062.025c-.255.105-.547.225-1.001.225-.5 0-1.182-.25-1.878-.576-.577-.27-1.174-.549-1.707-.549-.532 0-1.129.279-1.706.549-.696.326-1.379.576-1.879.576-.453 0-.746-.12-1-.225l-.063-.025c-.162-.065-.32-.132-.52-.132-.356 0-.697.289-1.043.479-.252.138-.511.207-.776.207-1.119 0-1.66-1.043-1.66-1.821 0-.39.113-.719.324-.959.211-.24.484-.359.797-.359.342 0 .761.149 1.061.149.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793z" />
    </svg>
  );
}

export function Footer({ onNavigate }: FooterProps) {
  const { theme } = useTheme();

  return (
    <footer className="bg-auto-asphalt border-t border-white/5 mt-auto transition-colors relative overflow-hidden" data-section="Footer">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-auto-plum-deep/5 to-transparent pointer-events-none" />

      {/* Main Footer Links */}
      <div className="border-b border-white/5 relative z-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-8">
              <img src={drivenLogo} alt="DRIVEN MN" className="h-20 w-auto object-contain brightness-0 invert opacity-90" />
              <div className="space-y-4">
                <p className="text-auto-plum-neon text-sm font-bold tracking-[0.2em] uppercase font-['Exo_2']">
                  Est. 2024
                </p>
                <p className="text-white/40 text-sm font-medium tracking-widest leading-loose uppercase font-['Inter']">
                  Driven by Quality<br />
                  Fueled by Passion
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-8">
              <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] font-['Exo_2']">
                Services
              </h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => onNavigate('xpel-protection-film')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    Paint Protection Film
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('xpel-prime-window-tint')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    Window Tint
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('color-ppf-visualizer')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    Color Change PPF
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('automotive-ceramic-coating')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    Ceramic Coating
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('paint-correction')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    Paint Correction
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-8">
              <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] font-['Exo_2']">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    Our Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('blog')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-8">
              <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] font-['Exo_2']">
                Resources
              </h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    XPEL Warranty
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    Care Instructions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    Financing Options
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('shop')}
                    className="text-white/50 hover:text-auto-plum-neon transition-colors duration-300 text-sm font-medium font-['Inter']"
                  >
                    Gift Cards
                  </button>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="space-y-8">
              <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] font-['Exo_2']">
                Certifications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/50 text-sm font-medium font-['Inter']">
                  <ShieldCheck className="w-4 h-4 text-auto-plum-neon" />
                  <span>XPEL Certified</span>
                </li>
                <li className="flex items-center gap-3 text-white/50 text-sm font-medium font-['Inter']">
                  <Award className="w-4 h-4 text-auto-plum-neon" />
                  <span>10-Year Warranty</span>
                </li>
                <li className="flex items-center gap-3 text-white/50 text-sm font-medium font-['Inter']">
                  <CheckCircle className="w-4 h-4 text-auto-plum-neon" />
                  <span>Licensed & Insured</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 font-['Inter'] text-sm">
            © 2025, DrivenMN All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-auto-plum-neon transition-colors transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-auto-plum-neon transition-colors transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-auto-plum-neon transition-colors transform hover:scale-110"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-auto-plum-neon transition-colors transform hover:scale-110"
              aria-label="Snapchat"
            >
              <SnapchatIcon className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-auto-plum-neon transition-colors transform hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
