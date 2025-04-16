"use client";

import { Amplify } from "aws-amplify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/landing-page.css";
import Header from "./business/components/header";
import HeroSection from "./components/client-hero-section";
import DiscoverSection from "./components/discover-section";
import ImageGrid from "./components/client-image-grid";
import HowItWorks from "./components/client-how-it-works";
import WhyJoin from "./components/client-why-join";
import FAQ from "./components/client-faqs";
import CTA from "./business/components/cta";
import Footer from "../../components/footer";
import { useSearchParams } from "next/navigation";
import { apiConfig, auth_object } from "../../utils/Config/amplify-auth-config";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";

Amplify.configure({ Auth: auth_object, API: apiConfig });

export default function HomeClient() {
  const client = "customer_landing_page";
  const searchParams = useSearchParams();

  useEffect(() => {
    // track the page view first
    trackEvent({
      eventName: `${client}_view`,
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
          eventName: `${client}_utm_view`,
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
      <Header utm_source={client} />

      <main className="flex-1">
        <HeroSection utm_source={client} />
        <DiscoverSection />
        <ImageGrid />
        <HowItWorks />
        <WhyJoin />
        <FAQ />
        <CTA utm_source={client} />
      </main>
      <Footer />
    </div>
  );
}
