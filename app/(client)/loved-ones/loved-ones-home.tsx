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


Amplify.configure({ Auth: auth_object, API: apiConfig, ssr: true });

export default function Home() {
  const loved_ones = "loved_ones_landing_page";
  const searchParams = useSearchParams();

  useEffect(() => {
    // track the page view first
    trackEvent({
      eventName: `${loved_ones}_view`,
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
          eventName: `${loved_ones}_utm_view`,
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

      <div className="flex-1">
        <Hero utm_source={loved_ones}/>
      <CTA utm_source={loved_ones}/> 
      </div>

      <Footer bgColorClass="bg-white" />
    </div>
  );
}