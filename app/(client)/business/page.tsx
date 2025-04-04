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
import { apiConfig, auth_object } from '../../../utils/Config/amplify-auth-config';

// const pinpointAppId =
//     // appEnv === 'prod'
//       ? '87c515e341cf4ca4885178343dbd7661'
//       : 'd4b2fb4e0e584eb6af8da102065ce8af';

// Amplify.configure({
//   Analytics: {
//     Pinpoint: {
//       appId: 'd4b2fb4e0e584eb6af8da102065ce8af',
//       region: 'us-east-1', // Replace with your region
 
//     }
//   }
// });
Amplify.configure({ Auth: auth_object, API: apiConfig });

export default function Home() {

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
      <Header utm_source="mimbboss_landing_page" />

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

