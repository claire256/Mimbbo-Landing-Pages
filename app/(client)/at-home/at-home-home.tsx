"use client";

import {Amplify} from "aws-amplify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/landing-page.css"
import Header from "./components/header";
import Footer from "../../../components/footer";
import HeroSection from "./components/hero";
import UnLock from "./components/unlock-a-new-way";
import YourBusiness from "./components/your-business";
import { useSearchParams } from "next/navigation";
import { apiConfig, auth_object } from '../../../utils/Config/amplify-auth-config';
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";
import Pricing from "./components/pricing";
import FAQ from "./components/home-faqs";
import Help from "./components/help";

Amplify.configure({ Auth: auth_object, API: apiConfig , ssr: true});

export default function Home() {

  const searchParams = useSearchParams()

  useEffect(()=>{
   for(const key of searchParams.keys()){
     console.log('key', key)
     if(key.includes('utm')){
       console.log('key-value', key, searchParams.get(key))
       trackEvent({
         eventName: 'mimboss_landing_page_view',
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
      <Header utm_source="at_home_landing_page" />

      <section className="flex-1">
        <HeroSection/>
        <UnLock/>
        <YourBusiness/>
        <Pricing/>
        <FAQ/>
        <Help/>
      </section>

      <Footer bgColorClass="bg-white" />
    </div>
  )
}

