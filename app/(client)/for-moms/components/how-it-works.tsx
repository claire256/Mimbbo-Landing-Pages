import Image from "next/image";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaVenus } from "react-icons/fa";

const HowItWorks = () => {
  const items = [
    {
      src: "./message.png",
      title: "Tell us what you need",
      des: "From a fresh set of nails to a complete hair makeover.",
    },
    {
      src: "./pro.png",
      title: "Pick a pro",
      des: "Browse trusted professionals available near you.",
    },
    {
      src: "./mirror.png",
      title: "Relax & get pampered",
      des: "Your chosen expert comes to you — no stress, no commute.",
    },
  ];
  return (
    <section className="section-padding bg-white">
      <div className="grid xl:grid-cols-2">
        <div className="relative xl:pl-[190px]  pt-60 w-full grid place-items-center object-cover xl:place-items-start">
          <Image
            src="./masai.jpeg"
            alt=""
            width={262}
            height={253}
            className="rounded-xl absolute object-cover top-32  md:top-20 left-2 border-4 border-white w-2/5 sm:w-1/3"
          />
          <Image
            src="./bun.jpeg"
            alt=""
            width={365}
            height={449}
            className="rounded-xl object-cover md:w-[365px] md:h-[449px] w-[200px] h-[270px]"
          />
          <Image
            src="./orangenails.jpeg"
            alt=""
            width={262}
            height={102}
            className="rounded-xl object-cover absolute md:-bottom-4 -bottom-16 left-2 border-4 h-40 md:h-64 border-white w-2/5 sm:w-1/3 "
          />
        </div>
        <div className="pt-36 grid place-items-center xl:place-items-start">
          <h2 className="text-4xl font-semibold">How it Works</h2>
          <p className="text-[16px] text-base pt-8">
            Whether it’s hair, nails, makeup, or lashes — Mimbbo brings beauty
            services to <br></br>your doorstep. Skip the salon and enjoy
            personal care where you’re most<br></br> comfortable.
          </p>
          <div className="">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 pt-14 items-center">
                <div className="md:w-[102px] md:h-[102px] rounded-full bg-[#fdeadd] flex justify-center items-center w-[50px] h-[40px]">
                  <Image src={item.src} alt="" width={36} height={36} className="text-[#FE5F1D] md:w-9 md:h-9 w-6 h-6"/>
                </div>
                <div>
                  <p className="font-semibold text-[16px] text-base">{item.title}</p>
                  <p className="text-[16px] text-base">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
