"use client";

import ServicesOffered from "./services-offered";

const steps = [
  { step: "1", title: "Create your account", description: "Set up your profile showcasing your skills, services, and availability to start attracting clients" },
  { step: "2", title: "Activate Mimbbo Pay", description: "Connect your payment details" },
  { step: "3", title: "Start Taking Gigs", description: "Accept bookings and grow your business" },
  { step: "4", title: "Activate Mimbbo Pay", description: "Connect your payment details" },
];

const HowItWorks = () => {
  return (
    <section className="" data-aos="fade-up">
      <h2 className="text-2xl font-semibold theme-title">How it works</h2>
      <div className="grid gap-8 mt-8 md:grid-cols-2 instructions section-padding">
        <div className="relative pl-6 space-y-6 scroll-container" data-aos="fade-up">
          {steps.map(({ step, title, description }) => (
            <div key={step} className="flex gap-4 content">
              <div className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-primary number">{step}</div>
              <div>
                <h3 className="font-bold text-instructions">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground showcase">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <ServicesOffered />
      </div>

    </section>
  );
};

export default HowItWorks;
