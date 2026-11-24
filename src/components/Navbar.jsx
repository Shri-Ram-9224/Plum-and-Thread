import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Calculator, 
  PhoneCall
} from 'lucide-react';

export const Navbar = ({ totalItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Quotation', href: '#quotation-studio' },
    { name: 'Manufacturing Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top micro bar for credibility & factory location */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Tiruppur Factory Active
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-400">
              GSTIN: <span className="text-slate-200 font-mono">33AABCP1234F1Z8</span>
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-400">
              Export Grade & Direct Mill Pricing
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href="tel:+919876543210" 
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>+91 (0421) 289-4400</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo: PT Icon with company name and place name (Tiruppur) right on the downside */}
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center gap-3 group cursor-pointer select-none"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-plum-800 via-plum-900 to-slate-900 flex items-center justify-center shadow-md shadow-plum-900/20 group-hover:scale-105 transition-transform border border-plum-700/50 shrink-0">
              <span className="text-2xl font-serif text-amber-400 font-black tracking-tight select-none">
                PT
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-serif leading-tight">
                Plum & Thread
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-plum-800 mt-0.5">
                Tiruppur
              </span>
            </div>
          </a>

          {/* Desktop Nav Links: Exactly Products, Quotation, Manufacturing Process, Why Us, Contact */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-plum-800 transition-colors py-1 hover:border-b-2 hover:border-plum-700"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Action: ONLY Quote Icon and Count (No text, no price, no free samples) */}
          <div className="flex items-center gap-3">
            <a
              href="#quotation-studio"
              className="relative p-2.5 rounded-xl bg-plum-800 hover:bg-plum-900 text-white transition-all shadow-sm flex items-center justify-center group cursor-pointer"
              title="View Quotation"
              aria-label="View Quotation"
            >
              <Calculator className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-slate-950 text-xs font-bold px-1.5 py-0.2 rounded-full min-w-[20px] text-center shadow-xs">
                {totalItems}
              </span>
            </a>

            {/* Mobile menu toggle button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile view with backdrop overlay for empty space click */}
      {mobileMenuOpen && (
        <>
          {/* Plain dark backdrop — no blur — clicking empty space closes menu */}
          <div 
            className="fixed inset-0 z-30 lg:hidden cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu backdrop"
          />

          {/* Mobile dropdown menu drawer — sits above backdrop, below header level but clipped to it */}
          <div className="lg:hidden relative z-40 border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-plum-900 hover:bg-plum-50 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href="#quotation-studio"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-plum-800 text-white font-semibold text-sm"
              >
                <span className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-300" />
                  <span>Quotation</span>
                </span>
                <span className="bg-amber-400 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalItems} pcs
                </span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
