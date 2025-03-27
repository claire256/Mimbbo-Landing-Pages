"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/landing-page.css"
import EarnSection from "./components/earn-section"
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import RevenueStream from "./components/revenue-stream";
import HowItWorks from "./components/how-it-works";
import WhyJoin from "./components/why-join";
import Testimonials from "./components/testimonials";
import FAQ from "./components/faq";
import CTA from "./components/cta";
import Footer from "./components/footer";


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
      <Header />

      <main className="flex-1">
        <HeroSection />
        <RevenueStream />
        <EarnSection />
        <HowItWorks />
        <WhyJoin />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

