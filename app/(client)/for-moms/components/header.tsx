"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import ImageGrid from "./image-grid";
import { RiBearSmileLine } from "react-icons/ri";

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
    des: "No need to find childcare or sit in traffic" },
    {
      icon: <RiBearSmileLine/>,
      des: "Services done while your child naps, plays, or relaxes nearby",
    },
  ];

  return (
    <section className="flex gap-32 bg-[#f1ede5] pl-[120px]">
        <div>
      <div className="flex justify-between align-center">
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
      <h2 className="font-bold text-5xl pt-28">Your time is limited. Your <br></br>self-care shouldn’t be.</h2>
      <p className="text-base pt-4">
        Book trusted beauty professionals who can come to your home -
        <br></br>
          so you can care for yourself without rearranging your entire day.
      </p>
      <div className="flex gap-3 pt-10">
        {items.map((item, index)=>
        <div key={index} className="w-[200px] h-[186px] bg-white rounded-lg p-4">
        {item.icon?
        <div className="text-3xl text-[#FE5F1D]">{item.icon}</div>
        :
        <Image src={item.src} width={24} height={27} alt=""/>}
        <p className="pt-6">{item.des}</p>
        </div>
        )}
      </div>
      <Button variant='custom' radius="full" className="bg-[#FE5F1D] w-[406px] h-11 mt-12 text-white" >Join the Waitlist for At-Home Appointments</Button>
      <p className="mt-2 text-xs text-dark alrdy">
        Already have an account?{" "}
        <Link
          href={loginUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
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
      <div className="">
       <ImageGrid/> 
      </div>
    </section>
  );
};

export default Header;
