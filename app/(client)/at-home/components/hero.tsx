"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";


const HeroSection = ()=>{
  return(
    <div className="" data-aos="fade-up">
        <div className="grid  xl:grid-cols-2 gap-24 lg:grid-cols-1 lg:gap-10 place-items-center">
            <Image src="./makeupartist.jpeg" alt="makeup artist" width={820} height={820} className=""/>
            <div className="place-items-center xl:text-start text-center">
                <h2 className="font-semibold text-3xl md:text-5xl xl:pt-44 pt-0 ">Bring the Glam <br></br> Straight to their door</h2>
                <p className=" text-[#6E7375] md:text-[18px] text-[16px] pt-6">Offer at-home beauty services and earn more on your schedule</p>
                <Button  variant="custom" radius="full" className="bg-LimeGreen text-primary mt-8 w-[183px] h-12">Get Early Access</Button>
            </div>
        </div>
    </div>
  ) 
}

export default HeroSection;