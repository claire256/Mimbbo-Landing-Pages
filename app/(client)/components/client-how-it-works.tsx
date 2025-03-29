"use client";

import ServicesNeeded from "./services-needed";

const steps = [
  {
    step: "1.",
    title: "Pick the look and budget",
    description:
      "Set up your profile-showcase your skills, services, and availability to start attracting beauty gigs",
  },
  {
    step: "2.",
    title: "Post it on marketplace",
    description: "",
  },
  {
    step: "3.",
    title: "Review proposals",
    description:
      "",
  },
];

const HowItWorks = () => {
  return (
    <section className="" data-aos="fade-up">
      <h2 className="text-2xl font-semibold theme-title">How it works</h2>
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
        </div>

        <ServicesNeeded />
      </div>
    </section>
  );
};

export default HowItWorks;
