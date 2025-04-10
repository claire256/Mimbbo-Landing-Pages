"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/landing-page.css"
import Header from "./components/header";
import Footer from "../../../components/footer";
import HeroSection from "./components/hero";



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
      <Header utm_source="" />

      <main className="flex-1">
        <HeroSection/>
      </main>

      <Footer bgColorClass="bg-white" />
    </div>
  )
}

