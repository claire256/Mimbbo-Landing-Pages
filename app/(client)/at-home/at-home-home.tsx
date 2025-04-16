"use client";

import { Amplify } from "aws-amplify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/landing-page.css";
import Header from "./components/header";
import Footer from "../../../components/footer";
import HeroSection from "./components/hero";
import UnLock from "./components/unlock-a-new-way";
import YourBusiness from "./components/your-business";
import { useSearchParams } from "next/navigation";
import {
  apiConfig,
  auth_object,
} from "../../../utils/Config/amplify-auth-config";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import Pricing from "./components/pricing";
import FAQ from "./components/home-faqs";
import Help from "./components/help";

Amplify.configure({ Auth: auth_object, API: apiConfig, ssr: true });

export default function Home() {
  const at_home = "at_home_landing_page";
  const searchParams = useSearchParams();

  useEffect(() => {
    // track the page view first
    trackEvent({
      eventName: `${at_home}_view`,
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
          eventName: `${at_home}_utm_view`,
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
      <Header utm_source={at_home} />

      <div className="flex-1">
        <HeroSection utm_source={at_home} />
        <UnLock />
        <YourBusiness utm_source={at_home} />
        <Pricing utm_source={at_home} />
        <FAQ />
        <Help utm_source={at_home} />
      </div>

      <Footer bgColorClass="bg-white" />
    </div>
  );
}
