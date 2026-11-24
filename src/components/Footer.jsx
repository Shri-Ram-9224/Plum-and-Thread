import React from 'react';
import { 
  Building2, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  ArrowUp,
  FileText
} from 'lucide-react';

export const Footer = ({ onOpenSampleModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Address Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* Logo with bold PT text */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-plum-700 to-slate-900 flex items-center justify-center border border-plum-600/40 shrink-0">
                <span className="text-xl font-serif text-amber-400 font-black tracking-tight select-none">PT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-serif leading-none">
                  Plum & Thread
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-amber-300 mt-1">
                  Tiruppur
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm text-justify">
              Precision garment manufacturing engineered in India's knitwear capital. Supplying export-grade basics, corporate apparel, and custom private-label knitwear worldwide.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Plum & Thread Garment Manufacturing Complex,<br />
                  Plot 42-45, SIDCO Industrial Complex, Kangeyam Road,<br />
                  Tiruppur, Tamil Nadu 641603, India.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 (0421) 289-4400 / +91 98765 43210</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>manufacturing@plumandthread.com</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon – Sat: 08:30 AM to 07:00 PM IST (Factory Shifts)</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore Factory
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Product Range & Rate Card
                </a>
              </li>
              <li>
                <a href="#quotation-studio" className="hover:text-amber-400 transition-colors">
                  Live Quotation Tool
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-400 transition-colors">
                  Manufacturing Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact & Factory Location
                </a>
              </li>
            </ul>
          </div>

          {/* Core Categories Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Core Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Round-neck T-shirts (₹165)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Pique Polo T-shirts (₹235)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Fleece Hoodies (₹480)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  French Terry Track Pants (₹320)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Insulated Padded Jackets (₹2,850)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Embroidered Logo Caps (₹95)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Organic Kids Rompers (₹140)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Athletic Shorts (₹150)
                </a>
              </li>
            </ul>
          </div>

          {/* Statutory Compliance & Export Desk Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Statutory Details
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="block text-slate-500 font-mono text-[10px]">GSTIN / TAX ID</span>
                <span className="font-mono text-slate-200">33AABCP1234F1Z8</span>
              </div>
              <div>
                <span className="block text-slate-500 font-mono text-[10px]">IEC (IMPORT-EXPORT)</span>
                <span className="font-mono text-slate-200">0412093811</span>
              </div>
              <div>
                <span className="block text-slate-500 font-mono text-[10px]">TEA MEMBERSHIP</span>
                <span className="font-mono text-slate-200">TEA/REG/2012/8821</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenSampleModal}
                  className="w-full px-3 py-2 rounded-xl bg-plum-900 hover:bg-plum-800 text-amber-300 font-semibold text-xs border border-plum-700/60 transition-colors cursor-pointer text-center block"
                >
                  Request Swatch Kit
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Plum & Thread Apparel Pvt. Ltd. All rights reserved.</span>
            <span className="text-slate-700">•</span>
            <span>Tiruppur, India</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">AQL 2.5 • OEKO-TEX Standard 100 • GOTS Certified</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
