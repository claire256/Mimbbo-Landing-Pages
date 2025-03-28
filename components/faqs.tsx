
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FaqItem = {
  q: string;
  a: React.ReactNode;
};

type FAQProps = {
  faqs: FaqItem[];
};

const FaqsComp = ({ faqs}: FAQProps) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="faqs" data-aos="fade-up">
        <div className="w-full p-5">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-3">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-3 text-left text-lg font-medium"
                >
                  <span className="faq-q">
                    {index + 1}. {faq.q}
                  </span>
                  {openIndices.includes(index) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openIndices.includes(index) && (
                  <div className="text-dark text-[15px] faq-a">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default FaqsComp;

