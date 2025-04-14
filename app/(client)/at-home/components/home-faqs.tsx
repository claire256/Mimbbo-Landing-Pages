import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import FaqsComp from "@/components/faqs";

const faqs = [
  {
    q: "How can I begin using Nucleus?",
    a: "",
  },
  {
    q: "How do I integrate Nucleus design templates into my existing projects?",
    a: ["Start by logging into your Nucleus account and browsing the template library. Select the design templates that best fit your project needs and download them. Nucleus templates are compatible with a wide range of popular design tools, such as Adobe XD, Figma, Sketch, and others. Open the downloaded template files in your preferred design tool. Once the templates are open in your design tool, you can customize them to match your project requirements. Change colors, fonts, layouts, and other elements to align with your brand guidelines and project specifications. After customization, you can integrate these templates into your project workflow. This might involve importing them into your design system, collaborating with team members, or preparing them for handoff to developers.", 
       "Nucleus also provides comprehensive documentation and tutorials to assist you with template integration. These resources can guide you through best practices and advanced customization techniques.",
       "If you encounter any issues or have specific questions during the integration process, Nucleus’s customer support team is available to help.",]
  },
];

const FAQ = () => {
  return (
    <section className="section-padding" data-aos="fade-up">
        <h2 className="text-3xl text-center font-semibold pt-40">
          Frequently Asked Questions
        </h2>
    <div className="w-[840px] mx-auto">
    <FaqsComp faqs={faqs}/>
    </div>
    </section>
  );
};

export default FAQ;
