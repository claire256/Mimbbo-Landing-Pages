"use client";

import { Amplify } from "aws-amplify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/landing-page.css";
import CTA from "../business/components/cta";
import Footer from "../../../components/footer";
import { useSearchParams } from "next/navigation";
import { apiConfig, auth_object } from "../../../utils/Config/amplify-auth-config";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import Header from "./components/header";
import HowItWorks from "./components/how-it-works";
import WhyMoms from "./components/why-moms";

Amplify.configure({ Auth: auth_object, API: apiConfig });

export default function Home() {
  const for_moms = "for_moms_landing_page";
  const searchParams = useSearchParams();

  useEffect(() => {
    // track the page view first
    trackEvent({
      eventName: `${for_moms}_view`,
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
          eventName: `${for_moms}_utm_view`,
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
      <Header utm_source={for_moms} />

      <main className="flex-1">
        <HowItWorks/>
        <WhyMoms/>
        <CTA utm_source={for_moms} />
      </main>
      <Footer />
    </div>
  );
}
