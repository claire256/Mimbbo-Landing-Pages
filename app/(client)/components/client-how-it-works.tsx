"use client";

import ServicesNeeded from "./services-needed";

const steps = [
  {
    title: "1. Post your beauty need",
    description:
      "Tell us what you’re looking for, including the service, your budget, timing, and preferred location.",
  },
  {
    title: "2. We'll match you with providers",
    description: "Professionals in your area will review your request and send offers based on what you need.",
  },
  {
    title: "3. Choose your preferred pro",
    description:
      "Browse your offers, compare profiles, and select the provider that feels right for you.",
  },
];

const HowItWorks = () => {
  return (
    <div className="md:pt-36 pt-10" data-aos="fade-up">
      <h2 className="text-2xl font-semibold theme-title">How it works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 mt-8 lg:grid-cols-1 xl:grid-cols-2 lg:place-items-center instructions section-padding">
        <div className="relative pl-6 space-y-6" data-aos="fade-up">
          {steps.map(({ title, description }, index) => (
            <div key={index} className="flex gap-4 content">
              <div>
                <h3 className="font-semibold text-instructions">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground showcase">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ServicesNeeded />
      </div>
    </div>
  );
};

export default HowItWorks;
