import { TESTIMONIALS } from '../data/products';
import { Star, Award } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum-100 text-plum-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-plum-700" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            Trusted by founders, procurement heads & schools.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-justify max-w-2xl mx-auto">
            See how our transparent manufacturing process and Tiruppur production quality power established brands and growing institutions.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-7 sm:p-8 border border-slate-200 hover:border-plum-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-plum-800 bg-plum-100 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Content with text-justify */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic text-justify">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-5 border-t border-slate-200/80 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.role}
                  </p>
                  <p className="text-xs text-plum-700 font-semibold mt-0.5">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Trust Bar */}
        <div className="mt-14 p-6 bg-slate-100 rounded-2xl border border-slate-200/80 text-center">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Apparel manufactured for brands, schools, universities & IT enterprises across India & 40+ countries
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-400 font-serif font-bold text-lg sm:text-xl">
            <span className="hover:text-slate-700 transition-colors">Urban Thread Co.</span>
            <span className="hover:text-slate-700 transition-colors">Aventis Academy</span>
            <span className="hover:text-slate-700 transition-colors">Cognitive Corp</span>
            <span className="hover:text-slate-700 transition-colors">Stride Athletics</span>
            <span className="hover:text-slate-700 transition-colors">Vanguard Global</span>
          </div>
        </div>

      </div>
    </section>
  );
}
