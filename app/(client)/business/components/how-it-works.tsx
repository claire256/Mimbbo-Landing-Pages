"use client";

import ServicesOffered from "./services-offered";

const steps = [
  {
    title: "1. Create your account",
    description:
      "Set up your profile showcasing your skills, services, and availability to start attracting clients",
  },
  {
    title: "2. Activate Mimbbo Pay",
    description: " Get paid fast and securely for every gig you complete",
  },
  {
    title: "3. Start Taking Gigs",
    description:
      "Browse opportunities, apply for gigs, and start earning on your terms!",
  },
];

const HowItWorks = () => {
  return (
    <div className="md:pt-36 pt-10 " data-aos="fade-up">
      <h2 className="text-2xl font-semibold theme-title">How it works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-10  lg:grid-cols-1 xl:grid-cols-2 lg:place-items-center instructions section-padding">
        <div className="relative pl-6 space-y-6" data-aos="fade-up">
          {steps.map(({  title, description }, index) => (
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

        <ServicesOffered />
      </div>
    </div>
  );
};

export default HowItWorks;
