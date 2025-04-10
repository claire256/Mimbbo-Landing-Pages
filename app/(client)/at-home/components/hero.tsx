"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";


const HeroSection = ()=>{
  return(
    <div className="" data-aos="fade-up">
        <div className="grid w-full p-0 xl:grid-cols-2 gap-24 lg:grid-cols-1 sm:place-items-center makeup_artist">
            <Image src="./makeupartist.jpeg" alt="makeup artist" width={920} height={920} className=""/>
            <div className="w-[624px] pt-32 sm:pt-0 sm:text-center xl:text-start glam">
                <h2 className="font-semibold text-5xl">Bring the Glam <br></br> Straight to their door</h2>
                <p className="text-lg text-[#6E7375] pt-6">Offer at-home beauty services and earn more on your schedule</p>
                <Button  variant="custom" radius="full" className="bg-LimeGreen text-primary mt-8 w-[183px] h-12">Get Early Access</Button>
            </div>
        </div>
    </div>
  ) 
}

export default HeroSection;