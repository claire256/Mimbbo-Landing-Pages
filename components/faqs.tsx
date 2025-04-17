"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FaqItem = {
  q: string;
  a: string | string[];
  qClassName?: string; // optional styles for question
  aClassName?: string; // optional styles for answer
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
  <div className="w-full pt-4" data-aos="fade-up">
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-3">
          <button
            onClick={() => toggleFaq(index)}
            className={`w-full flex justify-between py-3 text-left`}
          >
            <span className={`flex flex-1 items-start text-base ${faq.qClassName || "md:text-xl"}`}>
              <span>{faq.q}</span>
            </span>
            <span className="ml-2 shrink-0 flex items-center">
            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>

          {openIndex === index && (
            <div className={` space-y-4 text-sm mt-1 pl-6 ${faq.aClassName || "md:text-base"}`}>
              {Array.isArray(faq.a) ? (
                faq.a.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="leading-relaxed">{faq.a}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
};

export default FaqsComp;
