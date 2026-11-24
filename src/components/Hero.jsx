import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Factory, 
  Calculator,
  Building,
  GraduationCap,
  Store
} from 'lucide-react';
import { formatINR } from '../utils/formatters';

export const Hero = ({ onAddProduct, onOpenSampleModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-plum-50/60 via-white to-slate-50 pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-200">
      {/* Background textile weave subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#562f44_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value proposition and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plum-100/90 border border-plum-200 text-plum-900 text-xs font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-plum-700"></span>
              <span>DIRECT FROM THE KNITWEAR CAPITAL • TIRUPPUR, INDIA</span>
            </div>

            {/* Main Headline: Optimized to ensure zero gap between 'on' and 'uncompromising' */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
              Apparel manufacturing built on{' '}
              <span className="text-plum-800 font-serif italic">uncompromising precision</span> &amp; trust.
            </h1>

            {/* Subheading with text-justify */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal text-justify">
              Plum & Thread crafts export-grade T-shirts, pique polos, fleece hoodies, and institutional uniforms for brands, schools, and corporate leaders. Transparent mill-direct pricing, certified eco-dyeing, and guaranteed dispatch.
            </p>

            {/* Bullet trust tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Broker Markups</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Exact GST Invoicing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Low 20-50 pc MOQs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>OEKO-TEX Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pre-shrunk Bio-wash</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>AQL 2.5 Lab Audit</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#quotation-studio"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-plum-800 hover:bg-plum-900 active:scale-[0.98] transition-all shadow-lg shadow-plum-900/20 group cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-amber-300" />
                <span>Create Instant Quotation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 transition-all cursor-pointer"
              >
                <span>Browse Rate Card</span>
              </a>

              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-plum-900 hover:text-plum-700 underline underline-offset-4 cursor-pointer"
              >
                <span>Request Sample Swatch Pack →</span>
              </button>
            </div>

            {/* Live Tiruppur Production Status with badges */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 text-plum-800">
                <span className="p-1.5 rounded-lg bg-plum-100"><Store className="w-4 h-4 text-plum-800" /></span>
                <span className="p-1.5 rounded-lg bg-amber-100"><Building className="w-4 h-4 text-amber-800" /></span>
                <span className="p-1.5 rounded-lg bg-emerald-100"><GraduationCap className="w-4 h-4 text-emerald-800" /></span>
              </div>
              <div>
                <p className="font-medium text-slate-800">Supplying 320+ Brands, Colleges & Corporates</p>
                <p className="text-slate-500">2.4M garments produced with 99.4% on-schedule dispatch record.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Factory Spotlight & Quick-Add Feature Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Decoration */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-plum-600 via-amber-400 to-plum-800 rounded-3xl blur-md opacity-20"></div>

              {/* Main Card */}
              <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl p-6 space-y-5">
                
                {/* Header in card */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-plum-100 flex items-center justify-center text-plum-800">
                      <Factory className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">Featured Rate Card Specials</h2>
                      <p className="text-[11px] text-slate-500">Live factory base pricing + GST</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Direct Mill Rate
                  </span>
                </div>

                {/* Quick Add Showcase Items (Product only images) */}
                <div className="space-y-3">
                  
                  {/* Item 1: Round Neck T-shirt */}
                  <div className="group flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-plum-50/50 border border-slate-200/70 hover:border-plum-200 transition-all">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://png.pngtree.com/png-vector/20250219/ourmid/pngtree-3d-model-of-a-white-cotton-t-shirt-mockup-png-image_15517103.png" 
                        alt="Round-neck T-shirt"
                        className="w-12 h-12 rounded-lg object-cover border border-slate-200" 
                      />
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-plum-900">Round-neck T-shirt</h3>
                        <p className="text-xs text-slate-500">180 GSM Combed Cotton • Bio-wash</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-bold text-slate-900">{formatINR(165)}</span>
                          <span className="text-[10px] font-semibold text-plum-700 bg-plum-100 px-1.5 py-0.2 rounded">+5% GST</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => onAddProduct('round-neck-tshirt', 50)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-plum-800 bg-white hover:bg-plum-800 hover:text-white border border-plum-300 shadow-xs transition-all cursor-pointer"
                    >
                      + Add 50 pcs
                    </button>
                  </div>

                  {/* Item 2: Polo T-shirt */}
                  <div className="group flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-plum-50/50 border border-slate-200/70 hover:border-plum-200 transition-all">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXyWqlyvG5XrWEmdUeBYqX3cjyY2xLEWHpggGHc-qBbViSOOz5P8-kcR_&s=10" 
                        alt="Polo T-shirt"
                        className="w-12 h-12 rounded-lg object-cover border border-slate-200" 
                      />
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-plum-900">Polo T-shirt</h3>
                        <p className="text-xs text-slate-500">220 GSM Honeycomb Pique • Tipped collar</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-bold text-slate-900">{formatINR(235)}</span>
                          <span className="text-[10px] font-semibold text-plum-700 bg-plum-100 px-1.5 py-0.2 rounded">+5% GST</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => onAddProduct('polo-tshirt', 30)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-plum-800 bg-white hover:bg-plum-800 hover:text-white border border-plum-300 shadow-xs transition-all cursor-pointer"
                    >
                      + Add 30 pcs
                    </button>
                  </div>

                  {/* Item 3: Heavyweight Hoodie */}
                  <div className="group flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-plum-50/50 border border-slate-200/70 hover:border-plum-200 transition-all">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://png.pngtree.com/png-clipart/20241230/original/pngtree-white-hoodie-mockup-png-image_18280214.png" 
                        alt="Hoodie"
                        className="w-12 h-12 rounded-lg object-cover border border-slate-200" 
                      />
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-plum-900">Hoodie</h3>
                        <p className="text-xs text-slate-500">320 GSM Brushed Fleece • Streetwear Cut</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-bold text-slate-900">{formatINR(480)}</span>
                          <span className="text-[10px] font-semibold text-plum-700 bg-plum-100 px-1.5 py-0.2 rounded">+5% GST</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => onAddProduct('hoodie', 25)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-plum-800 bg-white hover:bg-plum-800 hover:text-white border border-plum-300 shadow-xs transition-all cursor-pointer"
                    >
                      + Add 25 pcs
                    </button>
                  </div>

                </div>

                {/* Bottom interactive quotation prompt */}
                <div className="pt-2">
                  <a
                    href="#quotation-studio"
                    className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-plum-900 text-amber-300 font-semibold text-xs tracking-wide hover:bg-slate-900 transition-colors shadow-xs"
                  >
                    <span>Customize All 8 Products in Quotation Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Tiruppur Cluster Micro-Fact */}
                <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-justify">All quotes include HSN code compliance, fabric test specs, and binding 30-day price lock.</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
