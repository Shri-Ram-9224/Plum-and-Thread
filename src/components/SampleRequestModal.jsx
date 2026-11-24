import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, PackageCheck, Layers } from 'lucide-react';
import { formatINR } from '../utils/formatters';

export const SampleRequestModal = ({ isOpen, onClose, quoteItems, grandTotal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    deliveryAddress: '',
    specificFabricNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleResetAndClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const totalPieces = Object.values(quoteItems).reduce((sum, q) => sum + q, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ── Persist submission as JSON in localStorage ──────────────────────
    try {
      const existing = JSON.parse(localStorage.getItem('sampleRequestLog') || '[]');
      const entry = {
        ...formData,
        quoteItems,
        grandTotal,
        totalPieces: Object.values(quoteItems).reduce((s, q) => s + q, 0),
        submittedAt: new Date().toISOString(),
        refId: `PT-SMP-${Math.floor(100000 + Math.random() * 900000)}`,
      };
      localStorage.setItem('sampleRequestLog', JSON.stringify([...existing, entry]));
    } catch (_) {
      // localStorage unavailable — fail silently
    }

    setSubmitted(true);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback safe
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    /* Full-screen backdrop — click empty space to close */
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm cursor-pointer"
      onClick={handleResetAndClose}
    >
      {/* Centering wrapper with breathing room top & bottom */}
      <div className="flex min-h-full items-center justify-center py-10 px-4">
        {/* Modal panel — click inside does NOT close */}
        <div
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Sticky Header with close button ── */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100 shrink-0">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-plum-100 text-plum-900 text-xs font-semibold uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-plum-700" />
                <span>Complimentary Factory Swatch Pack</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900 leading-tight">
                Request Swatches &amp; Proforma
              </h3>
            </div>
            <button
              onClick={handleResetAndClose}
              className="ml-4 shrink-0 w-9 h-9 rounded-full bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center cursor-pointer transition-colors border border-red-200"
              aria-label="Close modal"
              title="Close (Esc or click backdrop)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ── Scrollable Body ── */}
          <div className="overflow-y-auto flex-1 px-6 py-5">
            {submitted ? (
              /* Confirmation View */
              <div className="py-6 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-slate-900">
                  Sample Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed text-justify">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our technical merchandising team will review your specifications and dispatch physical fabric swatches to <strong className="text-slate-900">{formData.companyName || 'your address'}</strong> within 24 hours.
                </p>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-left space-y-2">
                  <div className="flex justify-between font-semibold">
                    <span className="text-slate-500">Tracking Reference:</span>
                    <span className="font-mono text-plum-900 font-bold">PT-SMP-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Estimate:</span>
                    <span className="font-mono font-medium text-slate-800">{totalPieces} pcs ({formatINR(grandTotal)})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Priority Courier:</span>
                    <span className="text-slate-800 font-medium">Bluedart Express Surface</span>
                  </div>
                </div>
                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 rounded-xl bg-plum-800 text-white font-bold text-sm hover:bg-plum-900 transition-colors cursor-pointer"
                >
                  Back to Website
                </button>
              </div>
            ) : (
              /* Form View */
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-slate-500 mb-4">
                  Verify touch, GSM, shrinkage resistance, and stitch density before placing your bulk production order.
                </p>

                {totalPieces > 0 && (
                  <div className="mb-4 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                    <span>Attached Active Quotation:</span>
                    <span className="font-bold font-mono">{totalPieces} garments • {formatINR(grandTotal)}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Your Full Name *</label>
                      <input type="text" required placeholder="e.g. Ramesh Kannan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-plum-700/20 text-slate-900 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Company / Brand / School *</label>
                      <input type="text" required placeholder="e.g. Urban Threads Apparel"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-plum-700/20 text-slate-900 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Work Email *</label>
                      <input type="email" required placeholder="ramesh@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-plum-700/20 text-slate-900 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Phone / WhatsApp *</label>
                      <input type="tel" required placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-plum-700/20 text-slate-900 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Delivery Address (For Swatch Kit) *</label>
                    <textarea rows="2" required placeholder="Complete office or studio address for courier dispatch..."
                      value={formData.deliveryAddress}
                      onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-plum-700/20 text-slate-900 text-sm"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Fabric / Customization Notes (Optional)</label>
                    <input type="text" placeholder="e.g. Need 220 GSM single jersey, high-density puff print"
                      value={formData.specificFabricNotes}
                      onChange={(e) => setFormData({ ...formData, specificFabricNotes: e.target.value })}
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-plum-700/20 text-slate-900 text-xs"
                    />
                  </div>

                  <div className="pt-1">
                    <button type="submit"
                      className="w-full py-3.5 rounded-xl bg-plum-800 hover:bg-plum-900 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Submit Sample Request</span>
                    </button>
                  </div>

                  <p className="text-center text-[10px] text-slate-500 pb-1">
                    🔒 We respect your privacy. No spam. Direct technical contact from our Tiruppur merchandiser.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
