"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FaqItem = {
  q: string;
  a: string | string[]; // Allow both single and multiple paragraphs
};

type FAQProps = {
  faqs: FaqItem[];
};

const FaqsComp = ({ faqs }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs w-full " data-aos="fade-up">
      <div className="w-full">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b  pb-3">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-3 text-left text-lg font-medium"
              >
                <span className="faq-q">
                  {index + 1}. {faq.q}
                </span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {openIndex === index && (
                <div className="text-dark text-[15px] space-y-6 mt-1">
                  {Array.isArray(faq.a) ? (
                    faq.a.map((paragraph, i) => (
                      <p key={i} className="text-gray-600">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-600">{faq.a}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsComp;
