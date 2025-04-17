"use client";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import Image from "next/image";

interface PageProps {
  utm_source: string;
}
const steps = [
  {
    src: "./check.png",
    title: "Set your travel radius",
  },
  {
    src: "./check.png",
    title: "Create custom pricing for kids and  groups",
  },
  {
    src: "./check.png",
    title: "Adjust anytime",
  },
];

const YourBusiness = ({ utm_source }: PageProps) => {

  return (
    <section className="section-padding" data-aos="fade-up">
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 md:pt-40 pt-6 lg:grid-cols-1 xl:grid-cols-2 place-items-center">
        <div className="md:w-[600px] w-[300px] ">
          <h2 className="md:text-3xl font-semibold text-2xl ">
            Your Business, Your Rates
          </h2>
          <p className="pb-8 pt-2 md:text-[16px] text-[14px]">
            Set your own rates for in-home services, including travel fees, and
            offer discounts or bundles when it makes sense for you.
          </p>
          {steps.map((item, index) => (
            <div key={index} className="flex gap-4 pb-3">
              <div className="flex items-center">
                <Image src={item.src} alt="check box" width={16} height={16} />
              </div>
              <div>
                <p className="md:text-[16px] text-[14px]">{item.title}</p>
              </div>
            </div>
          ))}
          <a href="#pricing" className="p-2 flex items-center">
            <Button
              variant="custom"
              radius="full"
              className="bg-LimeGreen text-primary md:w-[156px] h-12 w-full "
              onClick={async () =>
                await trackEvent({
                  eventName: "get_started_click",
                  params: {
                    attributes: {
                      buttonLocation: "your_business_section",
                    },
                    query: {
                      utm_source,
                    },
                  },
                })
              }
            >
              Get Started
            </Button>
          </a>
        </div>
        <Image
          src="./purpleroom.png"
          alt="purple room"
          width={630}
          height={472}
        />
      </div>
    </section>
  );
};

export default YourBusiness;
