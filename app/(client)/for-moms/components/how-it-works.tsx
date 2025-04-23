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
            <div className="grid xl:grid-cols-2">
            <div className="relative xl:pl-[190px]  pt-60 bg-red-500 w-full grid place-items-center object-cover xl:place-items-start">
            {/* <div className="pt- md:pt-0">   */}
                 <Image src="./masai.jpeg" alt="" width={262} height={253} className="rounded-xl absolute object-cover top-32  md:top-20 left-2 border-4 border-white w-2/5 sm:w-1/3"/>
            {/* </div> */}
                <Image src="./bun.jpeg" alt="" width={365} height={449} className="rounded-xl object-cover"/>
                <Image src="./orangenails.jpeg" alt="" width={262} height={102}  className="rounded-xl object-cover absolute -bottom-4 left-2 border-4 h-40 md:h-64 border-white w-2/5 sm:w-1/3 "/>
            </div>
            <div className="pt-36 bg-slate-500 grid place-items-center xl:place-items-start">
            <h2 className="text-4xl font-semibold">How it Works</h2>
            <p className="text-[16px] pt-8">
            Whether it’s hair, nails, makeup, or lashes — Mimbbo brings beauty services to <br></br>your doorstep. Skip the salon and enjoy personal care where you’re most<br></br> comfortable.
            </p>
            <div className="">
                {items.map((item, index)=>
                  <div key={index} className="flex gap-4 pt-14 items-center">
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