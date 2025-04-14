
"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GoShieldCheck } from "react-icons/go";

const steps = [
  {
    icon: <GoShieldCheck className="text-primary w-[16px]" />,
    title: "Background check (safety badge on your profile)",
    des: "So customers feel confident inviting you into their homes. You’ll receive a “Verified Pro” badge once complete.",
  },
  {
    src: "/profiles.png",
    title: "Early access to house call gigs",
    des: "Be the first to see and claim at-home beauty requests in your area — before the full rollout. More visibility. More bookings.",
  },
  {
    src: "/vip.png",
    title: "Priority placement in search",
    des: "Be featured at the top of relevant searches when customers look for at-home services in your area.",
  },
];

const Pricing = ()=>{
   return (
       <section className="section-padding" data-aos="fade-up">
         <div className="grid xl:grid-cols-2 md:grid-cols-1 pt-36 gap-10">
           <div className="p-4">
            <h2 className="md:text-[32px] text-2xl font-semibold pb-10">Now 50% off for early pros</h2>
             {steps.map((item, index) => (
               <div key={index} className="flex gap-4 pb-3 ">
                 <div className="flex items-center justify-center">
                  {item.icon? (item.icon):
                   <Image src={item.src} alt="images" width={16} height={16} className="" />
                  }
                 </div>
                 <div>
                   <p className="md:text-[18px] text-[14px] font-semibold">{item.title}</p>
                   <p className="text-textGray md:text-[16px] text-[14px]">{item.des}</p>
                 </div>
               </div>
             ))}
           </div>
           <div className="shadow-md rounded-lg p-10 " >
            <div className="flex items-center justify-between">
            <h2 className="md:text-[32px] font-semibold">One-Time Setup</h2>
            <div className="flex items-center gap-4">
            <p className="text-[#979797] font-semibold md:text-xl line-through">$160</p>
            <h2 className="font-semibold md:md:text-[32px]" >$79.95</h2>
            </div>
            </div>
            <hr className="w-full border-t-2  my-6" />

            <div className="flex gap-3 items-center pt-6">
              <Image src="./info.png" alt="info" width={1} height={1} className="w-[16px] h-[16px]"/>
              <p className="md:text-[18px]" >Monthly Subscription $35/mo (Starts Later) </p>
            </div>
            <p className="text-textGray pt-6 md:text-[16px] text-[14px]">
            Once you’re approved and fully onboarded, a $35/month <br></br>subscription will kick in. But don’t worry — you’ll be notified<br></br> before this happens, so there won’t be any surprises.
            </p>
            <Button variant="custom" radius="full" className="bg-LimeGreen w-full text-primary h-12 mt-20" >Claim My Spot</Button>
           </div>
         </div>
       </section>
     );
}

export default Pricing;