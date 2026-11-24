import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { formatINR, formatPercent } from '../utils/formatters';
import { 
  Search, 
  LayoutGrid, 
  Table as TableIcon, 
  Plus, 
  Check, 
  Tag, 
  Layers, 
  Clock,
  ChevronDown
} from 'lucide-react';

export const ProductCatalog = ({ quoteItems, onAddProduct, onOpenProductModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [sortBy, setSortBy] = useState('default'); // 'default' | 'price-asc' | 'price-desc'
  const [batchQuantities, setBatchQuantities] = useState({});

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'All Products' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleQtyChange = (productId, qty) => {
    setBatchQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, parseInt(qty) || 1)
    }));
  };

  const getAddQty = (productId, minDefault) => {
    return batchQuantities[productId] || minDefault;
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum-100 text-plum-900 text-xs font-semibold uppercase tracking-wider mb-2">
              <Tag className="w-3.5 h-3.5 text-plum-700" />
              <span>Catalog & Transparent Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
              Product range & factory rate card.
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl text-justify">
              All prices reflect direct mill production rates from our Tiruppur facility. Click any product card to inspect full technical specifications, yarn counts, and custom color options.
            </p>
          </div>

          {/* View Toggle & Count */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-white text-plum-900 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-label="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Visual Cards</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'table' 
                    ? 'bg-white text-plum-900 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-label="Table View"
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Rate Card Table</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="space-y-4 mb-8">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-plum-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Stylized Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search products by name, fabric, or GSM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-plum-700/20 focus:border-plum-700 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Custom CSS Stylized Sort Dropdown */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <span className="text-xs text-slate-500 font-semibold tracking-wide uppercase">Sort:</span>
              <div className="relative inline-block w-full sm:w-56">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 hover:border-plum-400 text-slate-800 text-xs font-semibold rounded-xl pl-3.5 pr-9 py-2.5 shadow-xs focus:outline-none focus:ring-2 focus:ring-plum-700/20 focus:border-plum-700 transition-all cursor-pointer"
                >
                  <option value="default">Default Catalog Order</option>
                  <option value="price-asc">Price: Low to High (₹)</option>
                  <option value="price-desc">Price: High to Low (₹)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  <ChevronDown className="w-4 h-4 text-plum-800" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Catalog Content */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-base font-semibold text-slate-700">No products match your criteria</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for "t-shirt", "hoodie", or resetting category filters.</p>
            <button
              onClick={() => { setSelectedCategory('All Products'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-plum-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View - Product card itself is clickable to open technical specifications */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const inQuoteQty = quoteItems[product.id] || 0;
              const defaultAdd = product.minRecommend || 25;
              const currentInput = getAddQty(product.id, defaultAdd);

              return (
                <div
                  key={product.id}
                  onClick={() => onOpenProductModal(product)}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-plum-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative"
                  title="Click to view technical specifications"
                >
                  {/* Image Container with Badge (100% Product Only, No Persons) */}
                  <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>

                    {/* Subtle click hint badge */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-2 py-1 rounded-md text-[10px] font-semibold bg-white/95 text-slate-800 shadow-xs">
                        View Specs
                      </span>
                    </div>

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div>
                        <div className="text-2xl font-extrabold tracking-tight font-mono text-white">
                          {formatINR(product.price)}
                          <span className="text-xs font-normal text-slate-200"> / pc</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-amber-400 text-slate-950">
                          +{formatPercent(product.gstRate)} GST
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content - Complete Texts, No Cut-Offs, Justified */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-xs font-semibold text-plum-700 uppercase tracking-wider">
                        {product.category}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mt-0.5 group-hover:text-plum-900 transition-colors">
                        {product.name}
                      </h3>
                      
                      {/* Description displayed completely without truncation with text-justify */}
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed text-justify">
                        {product.description}
                      </p>

                      {/* Fabric & Lead specs shown completely */}
                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                        <div className="flex items-start gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span className="font-medium text-justify">{product.fabric}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="text-slate-600">Dispatch in {product.turnaround}</span>
                        </div>
                      </div>
                    </div>

                    {/* Add to Quote Action Area (stop propagation so clicking here does not open modal) */}
                    <div 
                      className="pt-3 border-t border-slate-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {inQuoteQty > 0 && (
                        <div className="mb-2 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center justify-between">
                          <span className="flex items-center gap-1">
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>In Quote:</span>
                          </span>
                          <span className="font-bold">{inQuoteQty} pcs</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        {/* Custom Quick Qty Selector */}
                        <div className="w-20">
                          <input
                            type="number"
                            min="1"
                            step="5"
                            value={currentInput}
                            onChange={(e) => handleQtyChange(product.id, e.target.value)}
                            className="w-full text-center py-2 px-1 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-plum-700"
                            title="Batch quantity to add"
                          />
                        </div>

                        {/* Add Button */}
                        <button
                          onClick={() => onAddProduct(product.id, currentInput)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-plum-800 hover:bg-plum-900 transition-all cursor-pointer shadow-xs active:scale-95"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Quote</span>
                        </button>
                      </div>

                      {/* Quick preset increments */}
                      <div className="flex items-center justify-between gap-1 mt-2 text-[10px] text-slate-500">
                        <span className="text-[10px] text-slate-400">Presets:</span>
                        {[25, 50, 100, 250].map((preset) => (
                          <button
                            key={preset}
                            onClick={() => {
                              handleQtyChange(product.id, preset);
                              onAddProduct(product.id, preset);
                            }}
                            className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-plum-100 hover:text-plum-900 transition-colors font-medium cursor-pointer"
                          >
                            +{preset}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Table View: Directly matching specification table */
          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6">Product & Specifications</th>
                  <th className="py-4 px-4 text-center">Category</th>
                  <th className="py-4 px-4 text-right">Price / Piece</th>
                  <th className="py-4 px-4 text-center">GST Slab</th>
                  <th className="py-4 px-4 text-center">Effective Rate (Inc. GST)</th>
                  <th className="py-4 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredProducts.map((product) => {
                  const effectivePrice = product.price * (1 + product.gstRate);
                  const inQuoteQty = quoteItems[product.id] || 0;

                  return (
                    <tr 
                      key={product.id} 
                      onClick={() => onOpenProductModal(product)}
                      className="hover:bg-plum-50/40 transition-colors group cursor-pointer"
                      title="Click to view technical specifications"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0"
                          />
                          <div>
                            <div className="font-bold text-slate-900 group-hover:text-plum-900 flex items-center gap-2">
                              <span>{product.name}</span>
                              {inQuoteQty > 0 && (
                                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                                  {inQuoteQty} in quote
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-600 max-w-md text-justify mt-0.5">{product.fabric}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center text-xs font-medium text-slate-600">
                        {product.category}
                      </td>
                      <td className="py-4 px-4 text-right font-mono font-bold text-slate-900 text-base">
                        {formatINR(product.price)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                          product.gstRate === 0.05 
                            ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                            : product.gstRate === 0.12 
                            ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                            : 'bg-purple-50 text-purple-700 border border-purple-200'
                        }`}>
                          {formatPercent(product.gstRate)}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center font-mono font-semibold text-slate-700">
                        {formatINR(effectivePrice)}
                      </td>
                      <td className="py-4 px-6 text-center" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => onAddProduct(product.id, 50)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-plum-800 text-white hover:bg-plum-900 transition-colors shadow-xs cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add 50 pcs</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
