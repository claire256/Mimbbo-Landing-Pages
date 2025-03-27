"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/landing-page.css"
import Header from "../components/header";
import HeroSection from "./components/client-hero-section";
import DiscoverSection from "./components/discover-section";


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

      </main>
    </div>
  )
}

