"use client";

import { Amplify } from "aws-amplify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/landing-page.css";
import Footer from "../../../components/footer";
import { useSearchParams } from "next/navigation";
import { apiConfig, auth_object } from "../../../utils/Config/amplify-auth-config";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import Hero from "./components/hero";
import WhyJoin from "./components/why-join";

Amplify.configure({ Auth: auth_object, API: apiConfig });

export default function HomeGrowth() {
  const growth = "growth_landing_page";
  const searchParams = useSearchParams();

  useEffect(() => {
    // track the page view first
    trackEvent({
      eventName: `${growth}_view`,
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
          eventName: `${growth}_utm_view`,
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

      <main className="flex-1">
      <Hero utm_source={growth}/>
      <WhyJoin utm_source={growth}/>
      </main>
      <Footer bgColorClass="bg-white" />
    </div>
  );
}
