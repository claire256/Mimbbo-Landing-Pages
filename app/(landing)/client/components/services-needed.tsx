"use client";
import Image from "next/image";

const services = [
  { icon: "/hair-styling.png", label: "Haircuts" },
  { icon: "/make-up.png", label: "Make-up" },
  { icon: "/nail-polish.png", label: "Nail Services" },
  { icon: "/cream.png", label: "Skin Care" },
  { icon: "heart.png", label: "Other" }
];

const ServicesNeeded = () => {
  return (
    <div className="p-6 bg-white rounded-xl w-full needed_card" data-aos="fade-left">
      <h3 className="mb-4 text-sm font-medium text-center service-text">What do you need done?</h3>
      {/* <div className="grid grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-3 mb-2 rounded-full bg-accent inner_img">
              <Image src={service.icon} alt={service.label} height={20} width={20} className="w-8 h-8 text-primary" />
            </div>
            <span className="text_service">{service.label}</span>
          </div>
        ))}
      </div> */}
      <div className="flex justify-between">
        <div className="w-[255px] h-[410px] bg-secondary pl-3 pt-2 pr-2 rounded-xl">
        <Image src="/natural.jpeg" alt="makeup" height={228} width={215} className="rounded-xl" />
        <p className="font-medium text-lg text-dark pt-2">need editorial makeup</p>
        <div className="flex justify-between">
            <div className="flex gap-2">
            <Image src="/Vector.png" alt="vector" height={1} width={1} className="h-6 w-6"/>
            <p className="text-dark font-semibold text-xl">$115 - $155</p>
            </div>
            <div className="bg-primary rounded-3xl w-[63px] h-[22px] text-white text-sm flex justify-center">Makeup</div>
        </div>
        <button className="rounded-3xl w-[212px] h-[42px] mt-2 post">Post Request</button>
        </div>
        <div className="w-[237px] h-[390px] bg-secondary pl-2.5 pt-2 rounded-xl">
        <Image src="/pony.jpeg" alt="hair" height={228} width={219} className="rounded-xl"/>
        <p>need a sleek ponytail</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesNeeded;
