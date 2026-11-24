import React, { useState } from 'react';
import { MANUFACTURING_STEPS } from '../data/products';
import { 
  Factory, 
  CheckCircle2, 
  Layers, 
  Droplets, 
  Scissors, 
  Sparkles, 
  Cpu, 
  CheckCircle, 
  Truck,
  ArrowRight,
  ShieldCheck,
  Clock
} from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Droplets: Droplets,
  Scissors: Scissors,
  Sparkles: Sparkles,
  Cpu: Cpu,
  CheckCircle2: CheckCircle,
  Truck: Truck,
};

export const ManufacturingProcess = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = MANUFACTURING_STEPS[activeStepIdx];
  const StepIcon = iconMap[activeStep.icon] || Factory;

  return (
    <section id="process" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum-100 text-plum-900 text-xs font-semibold uppercase tracking-wider mb-2">
            <Factory className="w-3.5 h-3.5 text-plum-700" />
            <span>Industrial Infrastructure & Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            The 7-stage Tiruppur manufacturing engine.
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 text-justify">
            From single-origin raw cotton to precision automated stitching and AQL 2.5 quality control. Complete vertical integration under one 180,000 sq.ft roof.
          </p>
        </div>

        {/* Step Navigation Tabs / Timeline */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-slate-100">
          {MANUFACTURING_STEPS.map((step, idx) => {
            const Icon = iconMap[step.icon] || Factory;
            const isActive = activeStepIdx === idx;

            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIdx(idx)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-plum-900 text-white shadow-md shadow-plum-900/10'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                  isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                }`}>
                  {step.step}
                </span>
                <span>{step.short}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Showcase Card */}
        <div className="bg-slate-900 rounded-3xl text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-plum-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* Left Column: Stage Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  STAGE {activeStep.step} OF 07
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Timeline: {activeStep.leadTime}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif">
                {activeStep.title}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-justify">
                {activeStep.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-800/90 px-4 py-2 rounded-xl border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">
                    Standard: {activeStep.highlight}
                  </span>
                </div>
              </div>

              {/* Step Navigation Arrows */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  disabled={activeStepIdx === 0}
                  onClick={() => setActiveStepIdx(Math.max(0, activeStepIdx - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={activeStepIdx === MANUFACTURING_STEPS.length - 1}
                  onClick={() => setActiveStepIdx(Math.min(MANUFACTURING_STEPS.length - 1, activeStepIdx + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Next Stage →
                </button>
              </div>
            </div>

            {/* Right Column: Visual Stage Badge / Technical Highlights */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/90 rounded-2xl border border-slate-700 p-6 sm:p-8 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-plum-800/80 flex items-center justify-center text-amber-400 mb-2">
                  <StepIcon className="w-8 h-8" />
                </div>
                
                <h4 className="text-lg font-bold text-white">
                  Why this stage matters to your brand:
                </h4>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-justify">Eliminates fabric torque skewing and ensures seams remain straight after 50+ washes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-justify">Certified azo-free dyes safe for infants and sensitive skin compliance (OEKO-TEX 100).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-justify">Direct factory data reporting with digital quality pass stamps on every carton.</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-700/80">
                  <a
                    href="#quotation-studio"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Simulate your order requirements in Quotation Tool</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
