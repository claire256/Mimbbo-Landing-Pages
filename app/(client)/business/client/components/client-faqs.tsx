import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    q: "What is Mimbbo?",
    a: "Mimbbo is a beauty marketplace that connects freelancers, side-giggers, and salon owners with paid beauty gigs near them.",
  },
  {
    q: "Does this mean the pro comes to me?",
    a: "",
  },
  {
    q: "Is Mimbbo free to use?",
    a: "",
  },
  {
    q: "Is Mimbbo available everywhere?",
    a: "We’re currently focused on select markets, but we’re expanding quickly! Join the platform to get notified when new opportunities are available in your area.",
  },
  {
    q: "How do I get started?",
    a: "Sign up on Mimbbo, complete your profile, and start exploring available beauty gigs. You can apply for marketplace jobs, post promotions, and connect with new clients right away!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs" data-aos="fade-up">
      <div className="grid  lg:grid-cols-1 xl:grid-cols-2 gap-8 lg:place-items-center section-padding faq_section">
        <div className="faq_left">
          <h2 className="text-2xl font-semibold text-left theme-title">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 faq_img">
            <Image
              src="/faq.png"
              alt="Beauty professional"
              width={300}
              height={400}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="w-full  p-5">
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
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="text-dark text-[15px] faq-a ">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
