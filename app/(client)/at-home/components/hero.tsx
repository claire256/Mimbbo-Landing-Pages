"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import Link from "next/link";
interface PageProps {
  utm_source: string;
}

const HeroSection = ({utm_source}: PageProps) => {

  return (
    <div data-aos="fade-up">
      <div className="grid xl:grid-cols-2 md:gap-24 lg:grid-cols-1 gap-10 place-items-center ">
        <Image
          src="./makeupartist.jpeg"
          alt="makeup artist"
          width={820}
          height={820}
          className=""
        />
        <div className="place-items-center xl:text-start text-center">
          <h2 className="font-semibold text-3xl md:text-5xl xl:pt-44 pt-0 ">
            Bring the Glam <br></br> Straight to their door
          </h2>
          <p className=" text-[#6E7375] md:text-[18px] text-[16px] pt-6">
            Offer at-home beauty services and earn more on your schedule
          </p>
          <a href="#pricing">
          <Button
            onClick={
              async() => 
                await trackEvent({
                  eventName: "get_early_access_click",
                  params: {
                    attributes: {
                      buttonLocation: "hero_section",
                    },
                    query: {
                      utm_source,
                    },
                  },
                })
            }
            variant="custom"
            radius="full"
            className="bg-LimeGreen text-primary mt-8 w-[183px] h-12"
          >
            Get Early Access
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
