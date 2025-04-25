"use client";
import Image from "next/image";


const ServicesNeeded = () => {
  return (
    <div className="p-6 bg-white rounded-xl w-full needed_card" data-aos="fade-left">
    <div className="md:w-[663px] md:h-[525px] w-[505px] h-[400px] p-8 rounded-xl bg-secondary">
      <div className="flex justify-between flex_images bg-white md:w-[605px] md:h-[467px] w-[405px] h-[330px] p-4 md:p-8 rounded-xl">
        <div className="w-[240px] h-[410px] bg-secondary pl-3 pt-2 pr-2 rounded-xl  images_div">
        <Image src="/natural.jpeg" alt="makeup" height={228} width={215} className="rounded-xl natural" />
        <p className="font-medium text-lg text-dark pt-2 ">need editorial makeup</p>
        <div className="flex gap-10 vector_div">
            <div className="flex gap-2 display_vector">
            <Image src="/Vector.png" alt="vector" height={1} width={1} className="h-5 w-5 vector"/>
            <p className="text-dark font-semibold">$115-$155</p>
            </div>
            <div className="bg-primary pt-[2px]  rounded-3xl w-[63px] h-[22px] text-white text-xs flex justify-center makeup">Makeup</div>
        </div>
        <button className="rounded-3xl w-[218px] h-[42px] mt-2 post">Post Request</button>
        </div>
        <div className="w-[240px] h-[410px] pr-2 bg-secondary pl-2.5 pt-2 rounded-xl images_div">
        <Image src="/pony.jpeg" alt="hair" height={228} width={219} className="rounded-xl"/>
        <p className="font-medium text-lg text-dark pt-2">need a sleek ponytail</p>
        <div className="flex justify-center gap-16 display_vector2">
            <div className="flex gap-2">
            <Image src="/Vector.png" alt="vector" height={1} width={1} className="h-5 w-5"/>
            <p className="text-dark font-semibold">$95-$105</p>
            </div>
            <div className="bg-mimbboRed pt-[2px] rounded-3xl w-[42px] h-[22px] text-white text-xs flex justify-center makeup">Hair</div>
        </div>
        <button className="rounded-3xl w-[218px] h-[42px] mt-2 post">Post Request</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServicesNeeded;
