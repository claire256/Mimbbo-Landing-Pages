'use client';

import Image from "next/image";

type ServiceItem = {
  src: string;
  title: string;
  list: string[];
};

type ServicesProps = {
  heading: string;
  services: ServiceItem[];
  bgColor?: string; // e.g., "bg-white", "bg-[#fdf6f1]"
};

const Services = ({ heading, services, bgColor = "bg-white" }: ServicesProps) => {
  return (
    <section className={`section-padding ${bgColor}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-center pt-20 md:pt-32">
        {heading}
      </h2>
      <div className="flex md:gap-8 gap-4 flex-wrap justify-center items-center pb-28">
        {services.map((item, index) => (
          <div key={index}>
            <div className="flex gap-4 text-2xl items-center justify-center pb-10 md:pt-16 pt-10">
              <Image src={item.src} alt={item.title} width={30} height={30} />
              <p className="font-bold text-2xl md:text-3xl">{item.title}</p>
            </div>
            <ul className="list-disc list-inside w-[290px] h-[250px] bg-[#fdf6f1] rounded-lg p-6 md:p-16 text-[16px]">
              {item.list.map((listItem, i) => (
                <li
                  key={i}
                  className="[&::marker]:text-mimbboRed [&::marker]:text-lg select-none"
                >
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
