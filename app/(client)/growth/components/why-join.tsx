import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import Link from "next/link";

interface PageProps {
  utm_source: string;
}
const WhyJoin = ({ utm_source }: PageProps) => {
  const items = [
    {
      src: "./check.png",
      title: "$150 monthly pay",
    },
    {
      src: "./check.png",
      title: "$50 monthly stipend for Mimmbo services",
    },
    {
      src: "./check.png",
      title: "5% commission on referral bookings",
    },
    {
      src: "./check.png",
      title: "$25 referral discount for your followers",
    },
    {
      src: "./check.png",
      title: "Enjoy one free concert ticket per year",
    },
    {
      src: "./check.png",
      title: "Early access to new features",
    },
  ];
  return (
    <div className="bg-white section-padding">
      <h2 className="font-bold text-2xl text-center pt-10">Why Join?</h2>
      <p className="text-base text-center pt-4">
        Earn monthly rewards and enjoy exclusive perks
      </p>
      <div>
        <div className="pt-6">
          {items.map((item, index) => (
            <div key={index} className="flex gap-2 pt-2">
              <Image src={item.src} alt="" width={16} height={1} className="" />
              <p className="md:text-lg text-sm select-none font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
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
            className="bg-LimeGreen text-primary mt-8 w-full h-12 text-base"
          >
            Apply now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WhyJoin;
