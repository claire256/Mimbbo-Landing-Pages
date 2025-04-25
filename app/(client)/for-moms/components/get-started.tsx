"use client";

import { Button } from "@/components/ui/button";
import ServicesNeeded from "./services-needed";

const steps = [
  {
    step: "1.",
    title: "Create Your Account",
    description:
      "Create your account on Mimbbo and gain access to multiple professionals.",
  },
  {
    step: "2.",
    title: "Post a Request",
    description: "",
  },
  {
    step: "3.",
    title: "Get Offers",
    description: "",
  },
  {
    step: "4.",
    title: "Book & Enjoy",
    description: "",
  },
];

const GetStarted = () => {
  return (
    <section className=" bg-white" data-aos="fade-up">
      <h2 className="text-3xl md:text-5xl font-semibold text-center">
        New to Mimbbo? Here’s <br></br> How to Get Started
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 mt-8 lg:grid-cols-1 xl:grid-cols-2 lg:place-items-center instructions section-padding">
        <div className="relative pl-6 space-y-6" data-aos="fade-up">
          {steps.map(({ step, title, description }) => (
            <div key={step} className="flex gap-4 content">
              <div className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-primary number">
                {step}
              </div>
              <div>
                <h3 className="font-semibold text-instructions">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground showcase">
                  {description}
                </p>
              </div>
            </div>
          ))}
          <Button
            variant="custom"
            radius="full"
            className="bg-[#FE5F1D] md:w-[406px] md:h-16 mt-12 text-white w-[300px] h-8 font-bold text-xl"
          >
            Post Your First Request
          </Button>
        </div>

        <ServicesNeeded />
      </div>
    </section>
  );
};

export default GetStarted;
