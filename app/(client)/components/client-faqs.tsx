import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import FaqsComp from "@/components/faqs";

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
