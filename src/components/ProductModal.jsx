import { useState, useEffect } from 'react';
import { X, Check, Plus, Layers, Sparkles, Clock, Palette, Ruler } from 'lucide-react';
import { formatINR, formatPercent } from '../utils/formatters';

export const ProductModal = ({ product, onClose, onAddProduct, inQuoteQty }) => {
  const [modalQty, setModalQty] = useState(product?.minRecommend || 50);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Default');

  // Determine size options depending on category
  const getSizeOptions = () => {
    if (product.id === 'logo-cap') {
      return ['Standard / Adjustable (56-60cm)'];
    }
    if (product.id === 'kids-romper') {
      return ['0-3M', '3-6M', '6-12M', '12-18M', '18-24M'];
    }
    return ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
  };

  const sizeOptions = getSizeOptions();
  const [selectedSize, setSelectedSize] = useState(sizeOptions[2] || sizeOptions[0]);

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

  if (!product) return null;

  const handleAdd = () => {
    onAddProduct(product.id, modalQty);
    onClose();
  };

  const activeColorHex = product.colorHexes?.[selectedColor] || '#18181b';

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-6 lg:p-10 flex items-start sm:items-center justify-center min-h-screen py-10 bg-slate-950/80 backdrop-blur-xs cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 my-auto cursor-default overflow-hidden max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar with Title & Close Button */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="text-sm font-bold tracking-wide uppercase text-amber-300">
              Product Technical Specifications
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            aria-label="Close modal"
            title="Close modal (or click outside)"
          >
            <X className="w-4 h-4" />
            <span>Close</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left: Product Image & Interactive Dynamic Color Tint */}
            <div className="space-y-4">
              <div className="relative h-72 sm:h-96 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center">
                {/* Base Product Image */}
                <img
                  src={product.image}
                  alt={`${product.name} - ${selectedColor}`}
                  className="w-full h-full object-cover transition-all duration-300"
                />

                {/* Dynamic Color Hue / Overlay: Changes color dynamically when user clicks any defined color */}
                <div 
                  className="absolute inset-0 transition-all duration-300 pointer-events-none mix-blend-color opacity-70"
                  style={{ backgroundColor: activeColorHex }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none"></div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-plum-900 text-amber-300 border border-plum-700 shadow-xs">
                    {product.badge}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/95 text-slate-900 shadow-xs flex items-center gap-1.5 w-fit">
                    <span className="w-2.5 h-2.5 rounded-full border border-black/20" style={{ backgroundColor: activeColorHex }}></span>
                    <span>{selectedColor}</span>
                  </span>
                </div>

                {/* Bottom Price Details */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-xs uppercase font-semibold text-slate-200 tracking-wider">Direct Factory Rate</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold font-mono text-white">{formatINR(product.price)}</span>
                    <span className="text-sm text-slate-300">/ piece</span>
                    <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full bg-amber-400 text-slate-950">
                      +{formatPercent(product.gstRate)} GST
                    </span>
                  </div>
                </div>
              </div>

              {/* Real-time Color & Size Summary Pill */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center justify-between text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: activeColorHex }}></span>
                  <span>Active Selection: <strong>{selectedColor}</strong></span>
                </span>
                <span>Size: <strong className="text-plum-900 font-bold">{selectedSize}</strong></span>
              </div>
            </div>

            {/* Right: Specifications, Color Chooser & Size Selector */}
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-plum-700">
                  {product.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mt-0.5">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed text-justify">
                  {product.description}
                </p>
              </div>

              {/* Interactive Color Selection - Changes product color on click */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Palette className="w-4 h-4 text-plum-700" />
                    <span>Click Color to Preview Garment:</span>
                  </span>
                  <span className="text-xs font-semibold text-plum-900 font-mono">
                    {selectedColor}
                  </span>
                </div>

                {/* Swatch Buttons */}
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => {
                    const hex = product.colorHexes?.[color] || '#18181b';
                    const isSelected = selectedColor === color;

                    return (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-plum-900 text-white ring-2 ring-plum-700 shadow-sm scale-105'
                            : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        <span 
                          className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0" 
                          style={{ backgroundColor: hex }}
                        ></span>
                        <span>{color}</span>
                        {isSelected && <Check className="w-3 h-3 text-amber-300" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selector - Requested by User */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-plum-700" />
                    <span>Select Garment Size Breakdown:</span>
                  </span>
                  <span className="text-xs font-bold text-plum-900 bg-plum-100 px-2 py-0.5 rounded">
                    Selected: {selectedSize}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {sizeOptions.map((sz) => {
                    const isSelected = selectedSize === sz;
                    return (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-plum-900 text-white ring-2 ring-plum-700 shadow-sm'
                            : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-slate-500">
                  * Bulk orders support custom ratio size distribution (e.g., 20% S, 30% M, 30% L, 20% XL).
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-plum-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">Fabric Composition:</span>
                    <p className="text-slate-600 mt-0.5 text-justify">{product.fabric}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">Recommended Customization:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {product.customization.map((c, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-[11px] font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">Production Turnaround:</span>
                    <span className="text-slate-600 ml-1.5">{product.turnaround}</span>
                  </div>
                </div>
              </div>

              {/* Quantity Selector & Add Button */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">Quantity to Add:</span>
                  {inQuoteQty > 0 && (
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Currently in quote: {inQuoteQty} pcs
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setModalQty(Math.max(1, modalQty - 25))}
                      className="w-9 h-9 rounded-lg bg-white text-slate-700 font-bold hover:bg-slate-200 cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={modalQty}
                      onChange={(e) => setModalQty(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center font-mono font-bold text-sm bg-transparent border-0 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setModalQty(modalQty + 25)}
                      className="w-9 h-9 rounded-lg bg-white text-slate-700 font-bold hover:bg-slate-200 cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAdd}
                    className="flex-1 py-3 px-5 rounded-xl bg-plum-800 hover:bg-plum-900 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Plus className="w-4 h-4 text-amber-300" />
                    <span>Add {modalQty} pcs ({selectedColor} • {selectedSize})</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
