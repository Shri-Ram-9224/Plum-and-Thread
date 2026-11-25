import { useState } from 'react';
import { FAQS } from '../data/products';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection = ({ onOpenSampleModal }) => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum-100 text-plum-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-plum-700" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            Everything you need to know about production.
          </h2>
          <p className="mt-3 text-base text-slate-600 text-justify max-w-2xl mx-auto">
            Have questions about MOQs, custom labels, shipping, or sample strike-offs? Here are clear answers from our Tiruppur operations team.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 font-serif">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-plum-800 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 text-justify">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left shadow-xs">
          <div className="flex items-center gap-4 mb-4 sm:mb-0 justify-center sm:justify-start">
            <div className="w-12 h-12 rounded-xl bg-plum-100 text-plum-800 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Have a custom tech pack or specialized fabric request?</h4>
              <p className="text-xs text-slate-500">Our Tiruppur textile engineers review tech packs within 4 hours.</p>
            </div>
          </div>
          <button
            onClick={onOpenSampleModal}
            className="px-5 py-2.5 rounded-xl bg-plum-800 hover:bg-plum-900 text-white text-xs font-semibold transition-all shadow-xs shrink-0 cursor-pointer"
          >
            Consult Merchandiser
          </button>
        </div>

      </div>
    </section>
  );
}
