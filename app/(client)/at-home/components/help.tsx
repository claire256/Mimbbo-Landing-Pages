import { Button } from "@/components/ui/button";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import { ArrowRight } from "lucide-react";

interface PageProps {
    utm_source: string;
  }
const Help = ({utm_source}: PageProps) => {
  return (
    <section className="section-padding">
      <div className="pt-32 md:w-[620px] w-[400px]">
        <h2 className="md:text-[32px] font-semibold ">How can we help you?</h2>
        <p className="text-textGray md:text-[16px] text-[14px] pt-4">
          Couldnt find the answer you’re looking for? Don’t worry, we’re here to
          assist you. Contact our 24/7 live support by clicking the button
          below.
        </p>
        <Button
          variant="custom"
          radius="full"
          className="bg-LimeGreen text-primary w-[228px] h-12 mt-4"
          onClick={async () =>
            await trackEvent({
              eventName: "contact_support_click",
              params: {
                attributes: {
                  buttonLocation: "help_section",
                },
                query: {
                  utm_source,
                },
              },
            })
          }
        >
          Contact Support <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
};

export default Help;
