import React from 'react';
import { 
  CheckCircle2, 
  Coins, 
  FileCheck2, 
  Scale, 
  Microscope, 
  UserCheck, 
  LeafyGreen,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const WhyChooseUs = ({ onOpenSampleModal }) => {
  const reasons = [
    {
      icon: Coins,
      title: 'Zero Middleman Markups',
      desc: 'Buy directly from our Tiruppur industrial knitting and sewing floors. Eliminate 25-40% agent markups and work directly with the craftsmen building your garments.',
      tag: 'Direct Factory Floor',
    },
    {
      icon: FileCheck2,
      title: '100% Legal GST Compliance',
      desc: 'Every single quotation, sample order, and bulk invoice is billed with full GST statutory compliance, enabling your enterprise to claim seamless 100% input tax credit (ITC).',
      tag: 'ITC Eligible',
    },
    {
      icon: Scale,
      title: 'Accessible MOQ Flexibility',
      desc: 'Scale smoothly from 20-50 units for boutique capsule drops or school uniform pilots, up to 100,000+ pieces for global corporate merchandise and retail labels.',
      tag: '20 to 100k+ Units',
    },
    {
      icon: Microscope,
      title: 'Rigorous Fabric Lab Testing',
      desc: 'In-house wash testing, tensile strength checks, pilling resistance, and dimensional stability guarantee residual shrinkage below 3% across all cotton grades.',
      tag: 'AQL 2.5 Standard',
    },
    {
      icon: UserCheck,
      title: 'Dedicated Account Merchandiser',
      desc: 'A single technical contact who speaks your language handles tech packs, lab dips, daily WhatsApp photo updates from the floor, and dispatch logistics.',
      tag: 'Single Point of Contact',
    },
    {
      icon: LeafyGreen,
      title: 'Eco-conscious Water Recycling',
      desc: 'Connected to Tiruppur Central Effluent Treatment Plants (CETP) with zero liquid discharge. 100% of dye water is recycled and returned clean to the system.',
      tag: 'Zero Liquid Discharge',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum-100 text-plum-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-plum-700" />
            <span>The Manufacturer Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            Why leading brands choose Plum & Thread.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-justify max-w-2xl mx-auto">
            We bridge the gap between heavy industrial manufacturing power and modern, responsive customer service.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-plum-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-plum-50 group-hover:bg-plum-800 text-plum-800 group-hover:text-amber-300 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-plum-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-plum-800 group-hover:text-plum-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Guaranteed factory benchmark</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-plum-900 via-slate-900 to-plum-950 rounded-2xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Ready to verify our fabric quality firsthand?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl text-justify">
              We courier physical fabric swatch cards, GSM rings, and color lab dips directly to your office.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSampleModal}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Request Free Swatch Kit
            </button>
            <a
              href="#quotation-studio"
              className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all border border-slate-700"
            >
              Build Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
