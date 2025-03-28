"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/landing-page.css"
import Header from "./business/components/header";
import HeroSection from "./components/client-hero-section";
import DiscoverSection from "./components/discover-section";
import ImageGrid from "./components/client-image-grid";
import HowItWorks from "./components/client-how-it-works";
import WhyJoin from "./components/client-why-join";
import FAQ from "./components/client-faqs";
import CTA from "./business/components/cta";
import Footer from "./business/components/footer";


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
        <DiscoverSection/>
        <ImageGrid/>
        <HowItWorks/>
        <WhyJoin/>
        <FAQ/>
        <CTA/>
      </main>
      <Footer/>
    </div>
  )
}

