"use client";

import { Button } from "@/components/ui/button";
import ServicesNeeded from "./services-needed";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";

interface PageProps {
  utm_source: string;
}
const steps = [
  {
    title: "1. Create Your Account",
    description:
      "Create your account on Mimbbo and gain access to multiple professionals.",
  },
  {
    title: "2. Post a Request",
    description: "",
  },
  {
    title: "3. Get Offers",
    description: "",
  },
  {
    title: "4. Book & Enjoy",
    description: "",
  },
];

const GetStarted = ({ utm_source }: PageProps) => {
  return (
    <section className=" bg-white" data-aos="fade-up">
      <h2 className="text-3xl md:text-5xl font-semibold text-center">
        New to Mimbbo? Here’s <br></br> How to Get Started
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 mt-8 lg:grid-cols-1 xl:grid-cols-2 lg:place-items-center instructions section-padding">
        <div className="relative pl-6 space-y-6" data-aos="fade-up">
          {steps.map(({ title, description }) => (
            <div className="flex gap-4 content">
              <div>
                <h3 className="font-semibold md:text-[28px] text-xl">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground showcase">
                  {description}
                </p>
              </div>
            </div>
          ))}
          <div className="md:pt-28 pt-4">
            <Button
              onClick={async () =>
                await trackEvent({
                  eventName: "post_first-request_click",
                  params: {
                    attributes: {
                      buttonLocation: "get_started_section",
                    },
                    query: {
                      utm_source,
                    },
                  },
                })
              }
              variant="custom"
              radius="full"
              className="bg-[#FE5F1D] md:w-[406px] md:h-16  text-white w-[300px] h-8 font-bold md:text-xl text-[16px]"
            >
              Post Your First Request
            </Button>
          </div>
        </div>

        <ServicesNeeded />
      </div>
    </section>
  );
};

export default GetStarted;
