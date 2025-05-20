"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import Link from "next/link";
interface PageProps {
  utm_source: string;
}

const HeroSection = ({utm_source}: PageProps) => {
  const webUrl = process.env.NEXT_PUBLIC_MIMBBO_WEB_URL || "";
  const downloadUrl = `${webUrl}/?utm_source=${utm_source}`;

  return (
    <div data-aos="fade-up">
      <div className="grid xl:grid-cols-2 xl:gap-4 relative">
        <Image
          src="./makeupartist.jpeg"
          alt="makeup artist"
          width={820}
          height={820}
          className="w-full"
        />
        <div className="pr-16 pl-10 xl:text-start text-center">
        <div className="pt-5 flex xl:static absolute top-0">
        <Link
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto"
        >
          <Image
            src="/logo.png?height=24&width=100"
            alt="Mimbbo"
            width={80}
            height={80}
            className="w-auto h-6 logo"
          />
        </Link>
      </div>
          <h2 className="font-semibold text-3xl md:text-5xl xl:pt-32 pt-10 ">
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
