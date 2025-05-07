import FaqsComp from "@/components/faqs";
import React from "react";

const Faqs = () => {
    const items = [
        {
          q: "Do I need to provide anything at home?",
          a: "No, your provider brings everything.",
          qClassName: "font-semibold",
      
        },
        {
          q: "What happens if I need to cancel?",
          a: "You can cancel or reschedule easily.",
          qClassName: "font-semibold",
        },
        {
            q: "Are the providers background checked?",
            a: "Yes, including ID and experience verification.",
            qClassName: "font-semibold",
          },
          {
            q: "Can I book the same provider again?",
            a: "Yes, you can request them again.",
            qClassName: "font-semibold",
          },
      ];
  return (
    <section className="section-padding bg-white">
    <div className="lg:pt-32 pt-16 grid lg:grid-cols-2 md:gap-8 gap-4 pb-10 md:pb-16 ">
      <div className=" gap-2 flex flex-row text-2xl md:text-4xl justify-center items-center lg:flex-col leading-loose lg:text-6xl font-bold bg-gradient-to-r from-[#FA98F1] to-[#D14206] bg-clip-text text-transparent">
        <h2 className="">
          Frequently
        </h2>
        <h2> Asked</h2>
        <h2>Questions</h2>
      </div>
      <div className="w-full">
      <FaqsComp faqs={items}/>
      </div>
    </div>
    </section>
  );
};

export default Faqs;
