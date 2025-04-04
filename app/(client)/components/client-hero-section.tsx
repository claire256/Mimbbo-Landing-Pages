"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { trackEvent } from '@/utils/pinpoint/pinpointEvent';
interface PageProps{
  utm_source: string
}

const HeroSection = ({utm_source}: PageProps) => {
  const webUrl = process.env.NEXT_PUBLIC_MIMBBO_WEB_URL || "";
  const loginUrl = `${webUrl}/?auth=login&utm_source=customer_landing_page`;

  const trackClick = async(eventName: string)=>{
   
    await trackEvent({
     eventName,
     params: {
      attributes:{
        buttonLocation: "header"
      },
      query: {
      utm_source,
     },
  }
  })

  }

  return (
    <section
      className="max-w-5xl px-6 pt-16 mx-auto text-center md:px-8 md:pt-24"
      data-aos="fade-up"
    >
      <h1 className=" font-bold tracking-tight banner_text">
        Get matched with beauty <br /> pros near you in minutes
      </h1>
      <p className="mt-4 text-sm text-dark md:text-base banner-p">
        Simplify your search. Post your beauty needs. Set your budget and let
        offers roll in.
      </p>
      <div className="pt-16 mt-3">
        <Link href="./business" rel="noopener noreferrer">
          <Button className="px-6 py-2 mt-6 text-white rounded-md theme-btn">
            Join as a Pro
          </Button>
        </Link>
        <p className="mt-2 text-xs text-dark alrdy">
          Already have an account?{" "}
          <Link
            href={loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
