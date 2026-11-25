import { Calculator, ArrowRight } from 'lucide-react';
import { formatINR } from '../utils/formatters';

export const FloatingQuoteBar = ({ totalItems, grandTotal, onOpenPrintModal }) => {
  if (totalItems <= 0) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 max-w-2xl mx-auto no-print animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-slate-950/95 backdrop-blur-md text-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-800 flex items-center justify-between gap-3">
        
        {/* Left: Live Ticker */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-plum-800 text-amber-400 flex items-center justify-center shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Quotation Total:</span>
              <span className="text-xs bg-amber-400/20 text-amber-300 font-bold px-1.5 py-0.2 rounded font-mono">
                {totalItems} pcs
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold font-mono text-white">
              {formatINR(grandTotal)}
              <span className="text-[10px] text-slate-400 font-normal ml-1">(Inc. GST)</span>
            </div>
          </div>
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="#quotation-studio"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-plum-800 hover:bg-plum-700 text-white font-semibold text-xs transition-colors shadow-xs"
          >
            <span>Review Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onOpenPrintModal}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
          >
            <span>PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}
