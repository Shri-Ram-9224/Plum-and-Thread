import { useRef, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { formatINR, formatINRDecimal, formatPercent, generateQuoteId } from '../utils/formatters';
import { Printer, X, Download } from 'lucide-react';

export const PrintableQuoteModal = ({ quoteItems, onClose }) => {
  const quoteRefId = useRef(generateQuoteId()).current;
  const quoteDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  const validUntilDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // HSN code mapping
  const hsnMap = {
    'round-neck-tshirt': '6109',
    'polo-tshirt': '6105',
    'hoodie': '6101',
    'track-pant': '6103',
    'padded-jacket': '6201',
    'logo-cap': '6505',
    'kids-romper': '6111',
    'shorts': '6103',
  };

  const activeItems = Object.entries(quoteItems)
    .filter(([_, qty]) => qty > 0)
    .map(([productId, qty]) => {
      const product = PRODUCTS.find((p) => p.id === productId);
      if (!product) return null;
      const subtotal = product.price * qty;
      const gstAmount = subtotal * product.gstRate;
      const total = subtotal + gstAmount;

      return {
        ...product,
        hsn: hsnMap[product.id] || '6109',
        qty,
        subtotal,
        gstAmount,
        total,
      };
    })
    .filter(Boolean);

  const totalPieces = activeItems.reduce((acc, item) => acc + item.qty, 0);
  const subtotalSum = activeItems.reduce((acc, item) => acc + item.subtotal, 0);
  const totalGst = activeItems.reduce((acc, item) => acc + item.gstAmount, 0);
  const grandTotal = subtotalSum + totalGst;

  const handlePrint = () => {
    window.print();
  };


  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      {/* Centering wrapper */}
      <div className="flex min-h-full items-start justify-center py-10 px-2 sm:px-4">
        {/* Modal panel */}
        <div
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 text-slate-800 cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Sticky Top Control Bar (hidden during print) ── */}
          <div className="no-print bg-slate-900 text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-30 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Printer className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold">Official Proforma Quotation Document</span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Save / Print as PDF */}
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-sm"
                title="Print or Save as PDF via browser"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>

              {/* Close */}
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors cursor-pointer"
                aria-label="Close quote modal"
                title="Close (Esc or click backdrop)"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>
          </div>

          {/* ── Printable Quotation Content ── */}
          <div id="printable-quotation" className="p-6 sm:p-10 bg-white space-y-6 rounded-b-2xl">
          
          {/* Official Letterhead with PT text */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b-2 border-slate-900">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-plum-900 text-amber-400 font-serif font-black text-xl flex items-center justify-center border border-plum-700">
                  PT
                </div>
                <div>
                  <h1 className="text-2xl font-bold font-serif text-slate-950 tracking-tight">
                    PLUM & THREAD APPAREL PVT. LTD.
                  </h1>
                  <p className="text-xs text-slate-600 font-medium">
                    Integrated Knitwear Manufacturing & Export Mill
                  </p>
                </div>
              </div>

              <div className="mt-3 text-xs text-slate-600 space-y-0.5">
                <p>Plot 42-45, SIDCO Industrial Complex, Kangeyam Road</p>
                <p>Tiruppur, Tamil Nadu 641603, India</p>
                <p>GSTIN: <strong className="font-mono text-slate-900">33AABCP1234F1Z8</strong> • IEC: <strong className="font-mono text-slate-900">0412093811</strong></p>
                <p>Email: manufacturing@plumandthread.com • Phone: +91 (0421) 289-4400</p>
              </div>
            </div>

            {/* Quotation Metadata Box */}
            <div className="sm:text-right bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1 min-w-[220px]">
              <div className="text-xs uppercase tracking-wider font-bold text-plum-900">
                PROFORMA ESTIMATE
              </div>
              <div>
                <span className="text-slate-500">Quote Ref:</span>{' '}
                <strong className="font-mono text-slate-900 text-sm">{quoteRefId}</strong>
              </div>
              <div>
                <span className="text-slate-500">Date:</span>{' '}
                <span className="font-medium text-slate-800">{quoteDate}</span>
              </div>
              <div>
                <span className="text-slate-500">Valid Until:</span>{' '}
                <span className="font-medium text-slate-800">{validUntilDate} (30 Days)</span>
              </div>
              <div className="pt-1 text-[11px] text-emerald-700 font-semibold">
                ✓ Price Lock Guaranteed
              </div>
            </div>
          </div>

          {/* Client Recipient Placeholder */}
          <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200 text-xs flex flex-wrap justify-between items-center gap-2">
            <div>
              <span className="text-slate-500 font-semibold">Prepared For:</span>{' '}
              <strong className="text-slate-900 font-semibold">Prospective Brand / Institutional Client</strong>
            </div>
            <div>
              <span className="text-slate-500 font-semibold">Delivery Origin:</span>{' '}
              <span className="text-slate-800 font-medium">Ex-Factory Tiruppur Mill Gate</span>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white font-semibold">
                  <th className="py-2.5 px-3 rounded-l-lg">#</th>
                  <th className="py-2.5 px-3">Product Description & Specs</th>
                  <th className="py-2.5 px-3 text-center">HSN Code</th>
                  <th className="py-2.5 px-3 text-right">Unit Rate</th>
                  <th className="py-2.5 px-3 text-center">Qty (pcs)</th>
                  <th className="py-2.5 px-3 text-right">Subtotal</th>
                  <th className="py-2.5 px-3 text-center">GST Slab</th>
                  <th className="py-2.5 px-3 text-right">GST (₹)</th>
                  <th className="py-2.5 px-3 text-right rounded-r-lg">Total (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {activeItems.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-slate-50/50">
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-500">{idx + 1}</td>
                    <td className="py-2.5 px-3">
                      <strong className="text-slate-900">{item.name}</strong>
                      <p className="text-[11px] text-slate-500 text-justify">{item.fabric}</p>
                    </td>
                    <td className="py-2.5 px-3 text-center font-mono text-slate-600">{item.hsn}</td>
                    <td className="py-2.5 px-3 text-right font-mono text-slate-800">{formatINR(item.price)}</td>
                    <td className="py-2.5 px-3 text-center font-mono font-bold text-slate-900">{item.qty}</td>
                    <td className="py-2.5 px-3 text-right font-mono font-semibold text-slate-800">{formatINR(item.subtotal)}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-plum-900">{formatPercent(item.gstRate)}</td>
                    <td className="py-2.5 px-3 text-right font-mono text-slate-700">{formatINRDecimal(item.gstAmount)}</td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-950">{formatINR(item.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals Summary Breakdown */}
          <div className="flex flex-col sm:flex-row justify-between gap-6 pt-4 border-t border-slate-200">
            {/* Left: Commercial Notes */}
            <div className="sm:max-w-xs space-y-2 text-[11px] text-slate-600 text-justify">
              <p className="font-bold text-slate-900 uppercase">Production & Delivery Notes:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Turnaround: 10-14 working days from size breakdown and sample confirmation.</li>
                <li>Rates inclusive of single-piece polybagging, size stickers, and export corrugated cartons.</li>
                <li>Shrinkage guaranteed &lt;3% post commercial wash.</li>
                <li>Pan-India express cargo and Tuticorin port ocean dispatch available.</li>
              </ul>
            </div>

            {/* Right: Financial Grand Totals */}
            <div className="sm:w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">Total Units:</span>
                <span className="font-bold font-mono text-slate-900">{totalPieces.toLocaleString('en-IN')} pcs</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-600">Subtotal (Ex-factory):</span>
                <span className="font-mono font-semibold text-slate-800">{formatINR(subtotalSum)}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-600">Total GST Applicable:</span>
                <span className="font-mono font-semibold text-slate-800">{formatINR(totalGst)}</span>
              </div>
              <div className="flex justify-between py-2 border-t-2 border-slate-900 font-bold text-sm text-slate-950">
                <span>Grand Total (Incl. GST):</span>
                <span className="font-mono text-plum-900 text-base">{formatINR(grandTotal)}</span>
              </div>
            </div>
          </div>

          {/* Statutory Sign-off */}
          <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-8 text-xs text-slate-500">
            <div>
              <p className="font-semibold text-slate-800">Bank Details for Direct RTGS / NEFT:</p>
              <p>Account Name: Plum & Thread Apparel Pvt. Ltd.</p>
              <p>Bank: HDFC Bank Ltd, Tiruppur Main Branch</p>
              <p>A/C No: 50200012345678 • IFSC: HDFC0000289</p>
            </div>
            <div className="text-right flex flex-col justify-end">
              <div className="border-b border-slate-400 w-48 ml-auto mb-1"></div>
              <p className="font-bold text-slate-800">For Plum & Thread Apparel Pvt. Ltd.</p>
              <p className="text-[10px]">Authorized Factory Signatory (Tiruppur)</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);
}
