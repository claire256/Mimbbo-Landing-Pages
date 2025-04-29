"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";

interface PageProps {
  utm_source: string;
}

const Hero = ({ utm_source }: PageProps) => {
  const webUrl = process.env.NEXT_PUBLIC_MIMBBO_WEB_URL || "";

  const loginUrl = `${webUrl}/?auth=login&utm_source=${utm_source}`;
  const downloadUrl = `${webUrl}/?utm_source=${utm_source}`;

  const items = [
    {
      src: "/car.png",
      des: "No transportation required",
    },
    {
      src: "/home-white.png",
      des: "Appointments that respect mobility and accessibility needs",
    },
    {
      src: "/hands.png",
      des: "Trusted professionals who care for clients with patience and respect",
    },
  ];

  return (
    <section className="bg-[url('/repair.png')] bg-cover bg-center" data-aos="fade-up">
      <div>
        <div className="flex justify-between align-center section-padding">
          <div className="flex items-center">
            <Link
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/logo_white.png?height=24&width=100"
                alt="Mimbbo"
                width={180}
                height={48}
                className="w-auto h-6 logo"
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* <p>Customer</p> */}
            <Link href={loginUrl} target="_blank" rel="noopener noreferrer">
              <Button
                onClick={async () =>
                  await trackEvent({
                    eventName: "login_click",
                    params: {
                      attributes: {
                        buttonLocation: "header_section",
                      },
                      query: {
                        utm_source,
                      },
                    },
                  })
                }
                className="rounded-md bg-trasparent w-[81px] border-white h-8 text-white"
                variant={"outline"}
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
        <div className="section-padding text-center md:text-start">
          <h2 className="font-bold text-4xl md:text-7xl md:pt-28 pt-14 text-white">
          Beauty and personal <br></br> care—delivered with dignity          </h2>
          <p className="md:text-[16px] text-base pt-8 text-white">
          Support your loved one’s comfort and wellbeing with at-home services from compassionate, experienced professionals.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 section-padding items-center md:items-start md:justify-start justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-[200px] h-[186px] bg-transparent border border-[#FE5F1D] rounded-lg p-4 mt-10"
            >
            <Image src={item.src} width={24} height={27} alt=""/>
              <p className="pt-6 md:text-[16px] text-base text-white">{item.des}</p>
            </div>
          ))}
        </div>
        <div className="section-padding grid md:place-items-start place-items-center">
        <Button
         onClick={
          async() => 
            await trackEvent({
              eventName: "join-wait-list-for-at-home_click",
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
          className="bg-[#FE5F1D] md:w-[406px] md:h-11 mt-12 text-white w-[300px] h-8"
        >
          Join the Waitlist 
        </Button>
        <p className="mt-2 md:text-[16px] text-base text-white">
          Already have an account?{" "}
          <Link
            href={loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold md:text-base text-sm "
            onClick={async () =>
              await trackEvent({
                eventName: "login_click",
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
          >
            Sign in
          </Link>
        </p>
        </div>
      </div>
      <div className="">
      </div>
    </section>
  );
};

export default Hero;
