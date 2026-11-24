import React, { useState, useMemo } from 'react';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilityStats } from './components/CredibilityStats';
import { ProductCatalog } from './components/ProductCatalog';
import { QuotationTool } from './components/QuotationTool';
import { ManufacturingProcess } from './components/ManufacturingProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { PrintableQuoteModal } from './components/PrintableQuoteModal';
import { SampleRequestModal } from './components/SampleRequestModal';

export default function App() {
  // Quote State: { [productId]: quantity }
  const [quoteItems, setQuoteItems] = useState({
    'round-neck-tshirt': 50,
  });

  // Modal States
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

  // Add / Increment product quantity
  const handleAddProduct = (productId, qtyToAdd = 50) => {
    const num = Math.max(1, parseInt(qtyToAdd) || 1);
    setQuoteItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + num,
    }));
  };

  // Direct quantity update (from input stepper)
  const handleUpdateQty = (productId, newQty) => {
    const validQty = Math.max(0, parseInt(newQty) || 0);
    setQuoteItems((prev) => {
      if (validQty <= 0) {
        const next = { ...prev };
        delete next[productId];
        return next;
      }
      return {
        ...prev,
        [productId]: validQty,
      };
    });
  };

  // Remove individual item from quote
  const handleRemoveItem = (productId) => {
    setQuoteItems((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  };

  // Reset / Clear entire quote
  const handleResetQuote = () => {
    setQuoteItems({});
  };

  // Calculate live overall stats
  const { totalPieces, grandTotal } = useMemo(() => {
    let pieces = 0;
    let total = 0;

    Object.entries(quoteItems).forEach(([productId, qty]) => {
      if (qty > 0) {
        const product = PRODUCTS.find((p) => p.id === productId);
        if (product) {
          pieces += qty;
          const subtotal = product.price * qty;
          const gstAmount = subtotal * product.gstRate;
          total += (subtotal + gstAmount);
        }
      }
    });

    return { totalPieces: pieces, grandTotal: total };
  }, [quoteItems]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col">
      {/* Top Navbar with only Icon and Count */}
      <Navbar totalItems={totalPieces} />

      <main className="flex-1">
        {/* 01 / Hero Section with quick-add specials */}
        <Hero
          onAddProduct={handleAddProduct}
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        {/* 02 / Credibility & Tiruppur Mill Statistics */}
        <CredibilityStats />

        {/* 03 / Product Catalog & Interactive Rate Card */}
        <ProductCatalog
          quoteItems={quoteItems}
          onAddProduct={handleAddProduct}
          onOpenProductModal={(product) => setSelectedProductForModal(product)}
        />

        {/* 04 / Live Interactive Quotation Tool & Tax Calculator */}
        <QuotationTool
          quoteItems={quoteItems}
          onUpdateQty={handleUpdateQty}
          onRemoveItem={handleRemoveItem}
          onResetQuote={handleResetQuote}
          onAddProduct={handleAddProduct}
          onOpenPrintModal={() => setIsPrintModalOpen(true)}
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        {/* 05 / 7-Stage Tiruppur Manufacturing Engine */}
        <ManufacturingProcess />

        {/* 06 / Why Choose Us & The Manufacturer Advantage */}
        <WhyChooseUs
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        {/* 07 / Client Testimonials & Social Proof */}
        <Testimonials />

        {/* 08 / Frequently Asked Questions */}
        <FaqSection
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />
      </main>

      {/* 09 / Footer & Factory Contact Information with id="contact" */}
      <Footer
        onOpenSampleModal={() => setIsSampleModalOpen(true)}
      />

      {/* Product Technical Deep-Dive Modal with interactive color switcher & backdrop close */}
      {selectedProductForModal && (
        <ProductModal
          product={selectedProductForModal}
          inQuoteQty={quoteItems[selectedProductForModal.id] || 0}
          onClose={() => setSelectedProductForModal(null)}
          onAddProduct={handleAddProduct}
        />
      )}

      {/* Official Printable PDF / Invoice Estimate Modal with prominent close & download options */}
      {isPrintModalOpen && (
        <PrintableQuoteModal
          quoteItems={quoteItems}
          onClose={() => setIsPrintModalOpen(false)}
        />
      )}

      {/* Sample Swatch Request & Official Proforma Modal with backdrop close */}
      {isSampleModalOpen && (
        <SampleRequestModal
          isOpen={isSampleModalOpen}
          quoteItems={quoteItems}
          grandTotal={grandTotal}
          onClose={() => setIsSampleModalOpen(false)}
        />
      )}
    </div>
  );
}
