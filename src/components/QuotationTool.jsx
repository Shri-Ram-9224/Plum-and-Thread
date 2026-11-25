import { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { formatINR, formatINRDecimal, formatPercent } from '../utils/formatters';
import { 
  Calculator, 
  Trash2, 
  RotateCcw, 
  Printer, 
  Copy, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Plus, 
  Minus, 
  Package, 
  Percent,
  MessageCircle,
  ShoppingBag
} from 'lucide-react';

export const QuotationTool = ({ 
  quoteItems, 
  onUpdateQty, 
  onRemoveItem, 
  onResetQuote, 
  onAddProduct,
  onOpenPrintModal,
  onOpenSampleModal 
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedQuickAdd, setSelectedQuickAdd] = useState(PRODUCTS[0].id);
  const [quickAddQty, setQuickAddQty] = useState(50);
  const [confirmReset, setConfirmReset] = useState(false);

  // Derive active items list
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
        qty,
        subtotal,
        gstAmount,
        total,
      };
    })
    .filter(Boolean);

  // Overall totals
  const totalPieces = activeItems.reduce((acc, item) => acc + item.qty, 0);
  const subtotalSum = activeItems.reduce((acc, item) => acc + item.subtotal, 0);
  const totalGst = activeItems.reduce((acc, item) => acc + item.gstAmount, 0);
  const grandTotal = subtotalSum + totalGst;

  // GST breakdowns by slab
  const gst5Total = activeItems
    .filter((item) => item.gstRate === 0.05)
    .reduce((acc, item) => acc + item.gstAmount, 0);
  const gst12Total = activeItems
    .filter((item) => item.gstRate === 0.12)
    .reduce((acc, item) => acc + item.gstAmount, 0);
  const gst18Total = activeItems
    .filter((item) => item.gstRate === 0.18)
    .reduce((acc, item) => acc + item.gstAmount, 0);

  // Copy summary to clipboard
  const handleCopySummary = () => {
    if (activeItems.length === 0) return;

    let text = `*Plum & Thread (Tiruppur) - Estimated Quotation*\n`;
    text += `Date: ${new Date().toLocaleDateString('en-IN')}\n\n`;
    activeItems.forEach((item) => {
      text += `• ${item.name} (${item.qty} pcs) @ ₹${item.price} = ₹${item.subtotal.toLocaleString('en-IN')} (+${Math.round(item.gstRate * 100)}% GST: ₹${Math.round(item.gstAmount).toLocaleString('en-IN')})\n`;
    });
    text += `\nTotal Quantity: ${totalPieces} units\n`;
    text += `Subtotal (Excl. Tax): ₹${subtotalSum.toLocaleString('en-IN')}\n`;
    text += `Total GST: ₹${Math.round(totalGst).toLocaleString('en-IN')}\n`;
    text += `Grand Total (Incl. GST): ₹${Math.round(grandTotal).toLocaleString('en-IN')}\n`;
    text += `\n*Note: Direct factory mill rates. Valid for 30 days. GSTIN: 33AABCP1234F1Z8*`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // WhatsApp share link
  const getWhatsAppShareUrl = () => {
    let message = `Hi Plum & Thread Sales Team, I would like to request a proforma quote for our order from Tiruppur:\n\n`;
    activeItems.forEach((item) => {
      message += `- ${item.name}: ${item.qty} pcs @ ₹${item.price}/pc\n`;
    });
    message += `\nTotal Items: ${totalPieces} units`;
    message += `\nEstimated Grand Total: ₹${Math.round(grandTotal).toLocaleString('en-IN')} (Incl. GST)`;
    message += `\nPlease connect with me regarding sampling and lead times.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  };

  const handleQuickAddSubmit = (e) => {
    e.preventDefault();
    if (!selectedQuickAdd) return;
    onAddProduct(selectedQuickAdd, quickAddQty);
  };

  // Preload starter packages
  const handleLoadStartupPackage = () => {
    onAddProduct('round-neck-tshirt', 100);
    onAddProduct('polo-tshirt', 50);
    onAddProduct('hoodie', 30);
  };

  const handleLoadSchoolPackage = () => {
    onAddProduct('polo-tshirt', 150);
    onAddProduct('track-pant', 150);
    onAddProduct('shorts', 150);
    onAddProduct('logo-cap', 100);
  };

  return (
    <section id="quotation-studio" className="py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5 text-amber-700" />
              <span>Transparent Quotation Generator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
              Live estimate & GST tax calculator.
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl text-justify">
              Add products, adjust bulk piece counts, and review real-time subtotal, applicable GST slabs (5%, 12%, 18%), and export-ready grand total.
            </p>
          </div>

          {/* Quick Header Actions */}
          {activeItems.length > 0 && (
            <div className="flex items-center gap-2.5 flex-wrap">
              <button
                onClick={handleCopySummary}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-xs transition-colors cursor-pointer"
                title="Copy Quotation text summary"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
              </button>

              <button
                onClick={onOpenPrintModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-xs transition-colors cursor-pointer"
                title="Print or save PDF formal invoice quote"
              >
                <Printer className="w-3.5 h-3.5 text-plum-800" />
                <span>Print / Save PDF</span>
              </button>

              {confirmReset ? (
                <div className="flex items-center gap-1 bg-red-50 border border-red-200 p-1 rounded-xl">
                  <span className="text-xs text-red-700 px-2 font-medium">Clear all?</span>
                  <button
                    onClick={() => {
                      onResetQuote();
                      setConfirmReset(false);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-red-600 text-white text-xs font-bold hover:bg-red-700 cursor-pointer"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setConfirmReset(false)}
                    className="px-2 py-1 rounded-lg bg-white text-slate-600 text-xs font-semibold hover:bg-slate-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmReset(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-red-200 text-xs font-semibold text-red-600 hover:bg-red-50 shadow-xs transition-colors cursor-pointer"
                  title="Clear all selected items"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Quote</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Quick Product Adder Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs mb-8">
          <form onSubmit={handleQuickAddSubmit} className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 shrink-0">
              <Plus className="w-4 h-4 text-plum-700" />
              <span>Quick Add Product:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 w-full">
              {/* Product selector dropdown */}
              <div className="sm:col-span-6">
                <select
                  value={selectedQuickAdd}
                  onChange={(e) => setSelectedQuickAdd(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-plum-700/20 focus:border-plum-700 cursor-pointer"
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name} — {formatINR(prod.price)} / pc (+{formatPercent(prod.gstRate)} GST)
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity Input */}
              <div className="sm:col-span-3 flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Qty (pcs):</span>
                <input
                  type="number"
                  min="1"
                  step="5"
                  value={quickAddQty}
                  onChange={(e) => setQuickAddQty(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-plum-700/20 text-center"
                />
              </div>

              {/* Submit Add */}
              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-plum-800 hover:bg-plum-900 text-white font-semibold text-xs transition-all shadow-xs cursor-pointer active:scale-98"
                >
                  <Plus className="w-4 h-4 text-amber-300" />
                  <span>Add to Quotation</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Main Grid: Left Items Table / Right Summary Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Active Products List & Controls (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            {activeItems.length === 0 ? (
              /* Thoughtful Empty State */
              <div className="bg-white rounded-2xl border-2 border-dashed border-slate-300 p-8 sm:p-12 text-center shadow-xs">
                <div className="w-16 h-16 rounded-2xl bg-plum-50 border border-plum-100 text-plum-800 flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-plum-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Your quotation has no items yet
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto mt-2 leading-relaxed text-justify">
                  Select products from the catalog above or choose a ready-made starter bundle below to simulate accurate manufacturing costs and GST taxes.
                </p>

                {/* Pre-packaged bundles for fast user exploration */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleLoadStartupPackage}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-plum-50 text-plum-900 hover:bg-plum-100 border border-plum-200 text-xs font-semibold transition-all cursor-pointer shadow-xs"
                  >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Load D2C Brand Starter Pack (Tees + Polos + Hoodies)</span>
                  </button>

                  <button
                    onClick={handleLoadSchoolPackage}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 text-xs font-semibold transition-all cursor-pointer shadow-xs"
                  >
                    <Package className="w-4 h-4 text-slate-600" />
                    <span>Load School Uniform & Sports Bundle</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Itemized Products Card List / Table */
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-800">Selected Products & Piece Quantities</span>
                    <span className="bg-plum-100 text-plum-900 text-xs font-bold px-2 py-0.5 rounded-full">
                      {activeItems.length} styles
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    Adjust pieces to see live line-item updates
                  </span>
                </div>

                {/* Items loop */}
                <div className="divide-y divide-slate-100">
                  {activeItems.map((item) => {
                    return (
                      <div 
                        key={item.id} 
                        className="p-4 sm:p-6 hover:bg-slate-50/60 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        {/* Product Info (Product only image) */}
                        <div className="flex items-start gap-4 min-w-0 sm:max-w-xs md:max-w-sm">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-bold text-slate-900 text-base leading-snug">
                                {item.name}
                              </h4>
                              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                                {item.category}
                              </span>
                            </div>
                            <div className="text-xs text-slate-600 mt-1 text-justify">
                              {item.fabric}
                            </div>
                            <div className="mt-1 flex items-center gap-3 text-xs text-slate-700 font-medium">
                              <span>Rate: <strong className="font-mono">{formatINR(item.price)}</strong> / pc</span>
                              <span>•</span>
                              <span className="text-plum-700 font-semibold">
                                GST: {formatPercent(item.gstRate)} ({formatINRDecimal(item.gstAmount / item.qty)}/pc)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Quantity Controls */}
                        <div className="flex flex-col items-start sm:items-center gap-2">
                          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                            {/* Decrement */}
                            <button
                              onClick={() => onUpdateQty(item.id, Math.max(0, item.qty - 10))}
                              className="w-8 h-8 rounded-lg bg-white hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition-colors cursor-pointer"
                              title="Decrease by 10 pieces"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>

                            {/* Direct number input with strict positive integer validation */}
                            <input
                              type="number"
                              min="0"
                              step="5"
                              value={item.qty}
                              onChange={(e) => {
                                const val = parseInt(e.target.value);
                                onUpdateQty(item.id, isNaN(val) ? 0 : Math.max(0, val));
                              }}
                              className="w-16 sm:w-20 text-center font-mono font-bold text-sm bg-transparent border-0 focus:outline-none focus:ring-0 text-slate-900"
                              aria-label={`${item.name} quantity`}
                            />

                            {/* Increment */}
                            <button
                              onClick={() => onUpdateQty(item.id, item.qty + 10)}
                              className="w-8 h-8 rounded-lg bg-white hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition-colors cursor-pointer"
                              title="Increase by 10 pieces"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Quick bulk presets for this item */}
                          <div className="flex items-center gap-1 text-[10px] text-slate-500">
                            <span className="text-slate-400">Jump:</span>
                            {[50, 100, 250, 500].map((preset) => (
                              <button
                                key={preset}
                                onClick={() => onUpdateQty(item.id, preset)}
                                className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer font-medium ${
                                  item.qty === preset ? 'bg-plum-800 text-white font-bold' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                                }`}
                              >
                                {preset}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Calculated Line Item Totals & Delete */}
                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-slate-100">
                          <div className="text-left sm:text-right">
                            <div className="text-xs text-slate-500 font-medium">
                              Subtotal: <span className="font-mono text-slate-800 font-semibold">{formatINR(item.subtotal)}</span>
                            </div>
                            <div className="text-xs text-slate-500">
                              + GST ({formatPercent(item.gstRate)}): <span className="font-mono text-slate-700">{formatINRDecimal(item.gstAmount)}</span>
                            </div>
                            <div className="text-base sm:text-lg font-bold text-slate-900 font-mono mt-0.5">
                              {formatINR(item.total)}
                            </div>
                          </div>

                          {/* Delete Item */}
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                            title="Remove item from quotation"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* Subtotal Footer Ticker */}
                <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-justify">Exact HSN code mapped GST applied automatically per statutory rules.</span>
                  </div>
                  <span className="font-mono font-semibold text-slate-700">
                    {totalPieces.toLocaleString('en-IN')} total garments selected
                  </span>
                </div>
              </div>
            )}

            {/* Volume Tier Perks Notice */}
            <div className="bg-gradient-to-r from-amber-50 to-plum-50 rounded-2xl border border-amber-200/80 p-4 flex items-start gap-3 text-xs text-slate-700">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-sm">
                  {totalPieces >= 500 
                    ? '🎉 Tier 2 Volume Perks Unlocked!' 
                    : totalPieces >= 200 
                    ? '⚡ Tier 1 Volume Perks Unlocked!' 
                    : 'Wholesale Tier Insights:'}
                </p>
                <p className="mt-0.5 leading-relaxed text-slate-600 text-justify">
                  {totalPieces >= 500
                    ? 'Orders over 500 units include complimentary pre-production lab strike-offs, custom woven neck damask labels, and individualized barcoded polybags.'
                    : totalPieces >= 200
                    ? 'Orders over 200 units receive priority cutting floor scheduling and complimentary color swatch courier.'
                    : 'Combine 200+ total pieces across styles to unlock free physical strike-off sampling and custom neck-tag integration.'}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Live Quotation Summary Receipt (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
              
              {/* Receipt Header */}
              <div className="bg-slate-900 text-white p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-amber-400" />
                    <h3 className="font-bold text-base font-serif">Quotation Summary</h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-slate-800 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
                    Live Estimate
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Ex-mill Tiruppur supply rate card
                </p>
              </div>

              {/* Receipt Body */}
              <div className="p-5 space-y-4 text-sm">
                
                {/* Total Units */}
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600">Total Garment Pieces:</span>
                  <span className="font-bold font-mono text-slate-900 text-base">
                    {totalPieces.toLocaleString('en-IN')} pcs
                  </span>
                </div>

                {/* Subtotal Excl Tax */}
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-600">Subtotal (Excl. Taxes):</span>
                  <span className="font-semibold font-mono text-slate-800 text-base">
                    {formatINR(subtotalSum)}
                  </span>
                </div>

                {/* GST Breakdown Accordion/Breakdown */}
                <div className="bg-slate-50 rounded-xl p-3 space-y-2 border border-slate-100 text-xs">
                  <div className="flex items-center justify-between font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <Percent className="w-3.5 h-3.5 text-plum-700" />
                      <span>Applicable GST Breakdown</span>
                    </span>
                    <span className="font-mono text-slate-900">{formatINR(totalGst)}</span>
                  </div>

                  {gst5Total > 0 && (
                    <div className="flex items-center justify-between text-slate-500 pl-4">
                      <span>• 5% GST (Standard Apparels):</span>
                      <span className="font-mono font-medium">{formatINRDecimal(gst5Total)}</span>
                    </div>
                  )}

                  {gst12Total > 0 && (
                    <div className="flex items-center justify-between text-slate-500 pl-4">
                      <span>• 12% GST (Caps & Accessories):</span>
                      <span className="font-mono font-medium">{formatINRDecimal(gst12Total)}</span>
                    </div>
                  )}

                  {gst18Total > 0 && (
                    <div className="flex items-center justify-between text-slate-500 pl-4">
                      <span>• 18% GST (Padded Jackets):</span>
                      <span className="font-mono font-medium">{formatINRDecimal(gst18Total)}</span>
                    </div>
                  )}

                  {totalGst === 0 && (
                    <p className="text-slate-400 italic pl-4">No products in quote</p>
                  )}
                </div>

                {/* Grand Total Highlight */}
                <div className="pt-2 border-t-2 border-slate-900/10">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="block font-bold text-slate-900 text-base">Estimated Grand Total</span>
                      <span className="text-[11px] text-slate-500 font-normal">Inclusive of all applicable GST</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold text-plum-900 font-mono tracking-tight">
                        {formatINR(grandTotal)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Average Unit Cost indicator */}
                {totalPieces > 0 && (
                  <div className="text-center bg-plum-50/70 p-2 rounded-lg border border-plum-100 text-xs text-plum-900 font-medium">
                    Average Effective Cost: <strong className="font-mono">{formatINRDecimal(grandTotal / totalPieces)}</strong> / unit (inc. GST)
                  </div>
                )}

                {/* Primary CTA Buttons */}
                <div className="space-y-2.5 pt-3">
                  
                  {/* Request Official Proforma / Swatch Modal */}
                  <button
                    onClick={onOpenSampleModal}
                    disabled={activeItems.length === 0}
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md ${
                      activeItems.length > 0
                        ? 'bg-plum-800 hover:bg-plum-900 text-white shadow-plum-900/20 active:scale-98 cursor-pointer'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    }`}
                  >
                    <span>Request Factory Proforma & Swatches</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Print / Download PDF */}
                  <button
                    onClick={onOpenPrintModal}
                    disabled={activeItems.length === 0}
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs border transition-all ${
                      activeItems.length > 0
                        ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-xs cursor-pointer'
                        : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                    }`}
                  >
                    <Printer className="w-4 h-4 text-plum-800" />
                    <span>Download / Print Formal PDF Estimate</span>
                  </button>

                  {/* WhatsApp Direct Share */}
                  {activeItems.length > 0 && (
                    <a
                      href={getWhatsAppShareUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Quote to Tiruppur Desk (WhatsApp)</span>
                    </a>
                  )}

                </div>

                {/* Guarantee Note */}
                <div className="pt-2 text-[11px] text-slate-500 leading-tight space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>30-Day Rate Lock Guarantee</span>
                  </div>
                  <p className="text-justify">All quotations generated here lock in raw yarn and processing rates for 30 calendar days upon proforma generation.</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
