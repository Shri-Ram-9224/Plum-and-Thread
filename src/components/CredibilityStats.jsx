import { KEY_METRICS } from '../data/products';
import { 
  Award, 
  Users2, 
  ShieldCheck,
  Leaf
} from 'lucide-react';

export const CredibilityStats = () => {
  return (
    <section className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-plum-700/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-700">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Industrial Infrastructure & Credibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            Tiruppur engineering at an industrial scale.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Headquartered in Tamil Nadu's world-famous textile cluster, our integrated knitting, processing, and finishing lines deliver unswerving consistency for single batches or million-unit contracts.
          </p>
        </div>

        {/* 6 Key Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {KEY_METRICS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/70 hover:border-plum-500/60 transition-all duration-300 hover:translate-y-[-2px] group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 group-hover:text-amber-300 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-100 leading-snug">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-400 leading-tight">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Global Compliance & Certification Ribbon */}
        <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Certified Manufacturing Standards:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full md:w-auto">
            
            <div className="flex items-center gap-2.5 bg-slate-800/50 px-3.5 py-2 rounded-xl border border-slate-700/50">
              <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">GOTS Organic</p>
                <p className="text-[10px] text-slate-400">CU-892401 Cotton</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-slate-800/50 px-3.5 py-2 rounded-xl border border-slate-700/50">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">OEKO-TEX 100</p>
                <p className="text-[10px] text-slate-400">Class 1 Safe Dyes</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-slate-800/50 px-3.5 py-2 rounded-xl border border-slate-700/50">
              <Users2 className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Sedex SMETA 4-Pillar</p>
                <p className="text-[10px] text-slate-400">Ethical Factory Audit</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-slate-800/50 px-3.5 py-2 rounded-xl border border-slate-700/50">
              <Award className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">ISO 9001:2015</p>
                <p className="text-[10px] text-slate-400">Quality Certified</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
