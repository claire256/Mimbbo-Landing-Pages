'use client';

import Image from 'next/image';

type WhySectionItem = {
  src: string;
  title: string;
  des: string;
};

type WhySectionProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  items: WhySectionItem[];
};

const WhySection = ({ title, subtitle, imageSrc, items }: WhySectionProps) => {
  return (
    <section className="relative" data-aos="fade-up">
      {/* Text and image grid */}
      <div className="grid xl:grid-cols-2">
        <div className="section-padding relative text-center xl:text-start">
          <h2 className="md:text-5xl text-3xl font-bold text-mimbboRed xl:pt-24 pt-0">
            {title}
          </h2>
          <p className="md:text-[20px] text-[16px] pt-4 pb-10 xl:pb-0 text-[#181A20]">
            {subtitle}
          </p>
        </div>
        <Image
          src={imageSrc}
          alt="section visual"
          width={900}
          height={800}
          className="w-full relative"
        />
      </div>

      {/* Info boxes */}
      <div className="xl:flex bg-white xl:w-[1295px] xl:h-[300px] rounded-lg gap-8 p-6 xl:absolute xl:right-20 xl:bottom-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 grid md:place-items-center xl:place-items-start"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={50}
              height={50}
              className="md:w-[50px] md:h-[50px] h-8 w-8"
            />
            <p className="md:text-[16px] text-base font-bold md:pt-10 pt-6">
              {item.title}
            </p>
            <p className="md:text-[16px] text-base pt-2">{item.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
