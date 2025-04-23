import Image from "next/image"
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaVenus } from "react-icons/fa";

const HowItWorks = ()=>{

    const items = [
        {
            icon: <LuMessageSquareMore className="w-9 h-9 text-[#FE5F1D]" />,
            title:"Tell us what you need",
            des: "From a fresh set of nails to a complete hair makeover.",
        },
        {
            icon:<MdOutlineManageAccounts className="w-9 h-9 text-[#FE5F1D]"  />,
            title:"Pick a pro",
            des: "Browse trusted professionals available near you.",
        },
        {
            icon:<FaVenus className="w-9 h-9 text-[#FE5F1D]" />,
            title:"Relax & get pampered",
            des: "Your chosen expert comes to you — no stress, no commute.",
        },
    ]
    return(
        <section className="section-padding bg-white">
            <div className="flex">
            <div className="relative pl-[190px] pt-60">
                <div className="">
                <Image src="./masai.jpeg" alt="" width={262} height={253} className="rounded-xl absolute top-20 left-2 border-4 border-white "/>
                </div>
                <Image src="./bun.jpeg" alt="" width={365} height={449} className="rounded-xl object-cover"/>
                <Image src="./orangenails.jpeg" alt="" width={262} height={5} className="rounded-xl absolute -bottom-32 left-2 h-64 border-4 border-white  "/>
            </div>
            <div>
            <h2 className="text-4xl font-semibold">How it Works</h2>
            <p className="">
            Whether it’s hair, nails, makeup, or lashes — Mimbbo brings beauty services to your doorstep. Skip the salon and enjoy personal care where you’re most comfortable.
            </p>
            <div>
                {items.map((item, index)=>
                  <div key={index} className="flex gap-4 pt-10">
                  <div className="w-[102px] h-[102px] rounded-full bg-[#fdeadd] flex justify-center items-center">{item.icon}</div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>{item.des}</p>
                  </div>
                  </div>
                )

                }
            </div>
            </div>
            </div>
        </section>
    )
}

export default HowItWorks