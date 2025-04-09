"use client";

import {Amplify} from "aws-amplify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/landing-page.css"
import EarnSection from "./components/earn-section"
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import RevenueStream from "./components/revenue-stream";
import HowItWorks from "./components/how-it-works";
import WhyJoin from "./components/why-join";
import Testimonials from "./components/testimonials";
import FAQ from "./components/business-faqs";
import CTA from "./components/cta";
import Footer from "./components/footer";
import { useSearchParams } from "next/navigation";
import { apiConfig, auth_object } from '../../../utils/Config/amplify-auth-config';
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";

Amplify.configure({ Auth: auth_object, API: apiConfig , ssr: true});

export default function HomeBusiness() {

  const searchParams = useSearchParams()

   useEffect(()=>{
    for(const key of searchParams.keys()){
      console.log('key', key)
      if(key.includes('utm')){
        console.log('key-value', key, searchParams.get(key))
        trackEvent({
          eventName: 'Mimboss_landing_page_view',
          params:{
            attributes:{},
            query:{
              [key]: searchParams.get(key)
            } 
          }
        })
      }
    }

   },[])

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
      })
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header utm_source="mimboss_landing_page"/>

      <main className="flex-1">
        <HeroSection utm_source="mimboss_landing_page" />
        <RevenueStream />
        <EarnSection />
        <HowItWorks />
        <WhyJoin />
        <Testimonials />
        <FAQ />
        <CTA utm_source="mimbboss_landing_page" />
      </main>

      <Footer />
    </div>
  )
}

