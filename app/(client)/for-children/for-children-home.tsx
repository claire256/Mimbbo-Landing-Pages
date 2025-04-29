"use client";

import { Amplify } from "aws-amplify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/landing-page.css";
import Footer from "../../../components/footer";
import { useSearchParams } from "next/navigation";
import {
  apiConfig,
  auth_object,
} from "../../../utils/Config/amplify-auth-config";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import CTA from "../business/components/cta";
import Hero from "./components/hero";
// import HowItWorksHome from "./components/how-it-works";
// import WhyMoms from "./components/why-moms";
// import RealStories from "./components/real-stories";
// import ServicesHome from "./components/services";


Amplify.configure({ Auth: auth_object, API: apiConfig, ssr: true });

export default function Home() {
  const for_children = "for_children_landing_page";
  const searchParams = useSearchParams();

  useEffect(() => {
    // track the page view first
    trackEvent({
      eventName: `${for_children}_view`,
      params: {
        attributes: {
          source: "_direct",
        },
        query: {},
      },
    });

    //  check for UTM params and track those as well
    for (const key of searchParams.keys()) {
      console.log("key", key);
      if (key.includes("utm")) {
        trackEvent({
          eventName: `${for_children}_utm_view`,
          params: {
            attributes: {},
            query: {
              [key]: searchParams.get(key),
            },
          },
        });
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
        <Hero utm_source={for_children}/>

      <div className="flex-1">
        {/* <HowItWorksHome/>
        <WhyMoms/>
        <RealStories/>
        <ServicesHome/> */}

      <CTA utm_source={for_children}/> 
      </div>

      <Footer bgColorClass="bg-white" />
    </div>
  );
}