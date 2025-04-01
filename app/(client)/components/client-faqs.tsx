import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import FaqsComp from "@/components/faqs";

const faqs = [
  {
    q: "What is Mimbbo?",
    a: "Mimbbo is a beauty marketplace that makes it easy to find local beauty pros that fit your budget.",
  },
  {
    q: "Does this mean the pro comes to me?",
    a: "Only if you request it.  When posting a request, you’ll have the option to choose your preferred location, and providers can choose whether to accept.",
  },
  {
    q: "Is Mimbbo free to use?",
    a: (
      <>
      Yes, a travel fee applies for at-home services, and 100% of it goes to your beauty pro. The fee is based on distance and shown before you book:
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>
        0–5 miles → $15
        </li>
        <li>
        6–10 miles → $25
        </li>
        <li>
        11–15 miles → $35
        </li>
        <li>
        16–20 miles → $45
        </li>
        <li>
        21+ miles → $60+
        </li>
     </ul>
      </>
    ),
  },
  {
    q: "Is Mimbbo available everywhere?",
    a: "We’re currently focused on select cities, starting with Atlanta. We’re expanding quickly, so sign up to get notified when we launch in your area.",
  },
  {
    q: "How do I get started?",
    a: (
      <>
      It’s simple:
      <ol className="list-decimal list-inside mt-2 space-y-1">
        <li>Create a free account.</li>
        <li>Post your beauty need (what you’re looking for, date, budget, etc.).</li>
        <li>Get matched with providers who fit your request.</li>
        <li>Choose who you’d like to book with and finalize the details.</li>
      </ol>
      </>
    ),
  },
];

const FAQ = () => {
  

  return (
    <section className="faqs" data-aos="fade-up">
       <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 lg:place-items-center section-padding faq_section">
        <div className="faq_left">
          <h2 className="text-2xl font-semibold text-left theme-title">Frequently Asked Questions</h2>
          <div className="mt-6 faq_img">
            <Image
              src="/faq.png"
              alt="FAQ Image"
              width={300}
              height={400}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
     <FaqsComp faqs={faqs}/>
     </div>
    </section>
  );
};

export default FAQ;
