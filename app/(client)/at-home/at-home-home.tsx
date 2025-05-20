"use client";

import { Amplify } from "aws-amplify";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/landing-page.css";
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
import Help from "./components/help";
import BottomPopup from "./components/popup";

Amplify.configure({ Auth: auth_object, API: apiConfig, ssr: true });

export default function Home() {
  const at_home = "at_home_landing_page";
  const searchParams = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);
  const lastScrollY = useRef(0); // for detecting scroll direction

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
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      lastScrollY.current = currentScrollY;

      const scrolledToBottom =
        window.innerHeight + currentScrollY >= document.body.offsetHeight - 10;

      if (scrolledToBottom && !showPopup) {
        setShowPopup(true);
      }

      if (isScrollingUp && showPopup) {
        setShowPopup(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPopup]);

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
        <HeroSection utm_source={at_home} />
        <UnLock />
        <YourBusiness utm_source={at_home} />
        <Pricing utm_source={at_home} />
        <Help utm_source={at_home} />
      </div>

      <Footer bgColorClass="bg-white" />
      {showPopup && <BottomPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
