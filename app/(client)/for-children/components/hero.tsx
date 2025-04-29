"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";

interface PageProps {
  utm_source: string;
}

const Header = ({ utm_source }: PageProps) => {
  const webUrl = process.env.NEXT_PUBLIC_MIMBBO_WEB_URL || "";

  const loginUrl = `${webUrl}/?auth=login&utm_source=${utm_source}`;
  const downloadUrl = `${webUrl}/?utm_source=${utm_source}`;

  const items = [
    {
      src: "/checkcalender.png",
      des: "Appointments that fit into your routine, not the other way around",
    },
    {
      src: "/home.png",
      des: "No need to find childcare or sit in traffic",
    },
    {
      src: "/bear.png",
      des: "Services done while your child naps, plays, or relaxes nearby",
    },
  ];

  return (
    <section className="grid xl:grid-cols-2 grid-cols-1  bg-[#f1ede5]" data-aos="fade-up">
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
                src="/logo.png?height=24&width=100"
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
                className="rounded-md home_button w-[81px] border-slate-950 h-8"
                variant={"outline"}
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
        <div className="section-padding text-center md:text-start">
          <h2 className="font-bold text-3xl md:text-5xl md:pt-28 pt-14">
          Haircuts don’t have to be stressful.          </h2>
          <p className="md:text-[16px] text-base pt-8">
          Create a calm, familiar environment for your child by booking a provider who comes to your home.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 section-padding items-center md:items-start md:justify-start justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-[200px] h-[186px] bg-white rounded-lg p-4 mt-10"
            >
            <Image src={item.src} width={24} height={27} alt="" />
              <p className="pt-6 md:text-[16px] text-base">{item.des}</p>
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
          Join the Waitlist for At-Home Appointments
        </Button>
        <p className="mt-2 md:text-[16px] text-base">
          Already have an account?{" "}
          <Link
            href={loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold md:text-base text-sm"
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
      <div className="xl:pt-0 pt-16">
        <Image src="./girl.png" alt="gal with hair" width={688} height={799} className="w-full" />
      </div>
    </section>
  );
};

export default Header;
