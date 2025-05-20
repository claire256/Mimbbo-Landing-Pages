import { Button } from "@/components/ui/button";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  utm_source: string;
}
const Hero = ({ utm_source }: PageProps) => {
  const webUrl = process.env.NEXT_PUBLIC_MIMBBO_WEB_URL || "";
  const downloadUrl = `${webUrl}/?utm_source=${utm_source}`;

  return (
    <div className="bg-white grid xl:grid-cols-2 xl:gap-4 relative">
      <div className="">
        <Image
          src="./growth-image.png"
          alt="makeup artist"
          width={820}
          height={820}
          className=""
        />
        {/* </div> */}
      </div>
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
        <h2 className="font-semibold text-3xl md:text-5xl xl:pt-48 pt-10 ">
          Mimbbo Growth <br></br>Partners Program
        </h2>
        <p className="pt-6  md:text-[18px]">
          Share authentic beauty moments, help others discover their next look,
          and earn along the way.
        </p>
        <Link
          href="https://form.typeform.com/to/r5YkK2gz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            onClick={async () =>
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
            className="bg-LimeGreen text-primary mt-8 w-[183px] h-10 text-base"
          >
            Apply Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
