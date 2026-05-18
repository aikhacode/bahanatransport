"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  faqs: { question: string; answer: string }[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-slate-200 rounded-lg bg-white overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-slate-900 text-sm md:text-base">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-slate-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 md:p-6 pt-0 text-slate-600 text-sm md:text-base">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
