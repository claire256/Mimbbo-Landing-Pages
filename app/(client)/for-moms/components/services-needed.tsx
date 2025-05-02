"use client";
import Image from "next/image";

const ServicesNeeded = () => {
  return (
    <div
      className="p-6 bg-white rounded-xl w-full needed_card"
      data-aos="fade-left"
    >
      <div className="md:w-[663px] md:h-[525px] w-[505px] h-[400px] md:p-8 p:6 rounded-xl bg-secondary grid place-content-center">
        <div className="flex gap-4  bg-white md:w-[605px] md:h-[467px] w-[405px] h-[330px] md:p-8 rounded-xl justify-center items-center">
          <div className="md:w-[240px] md:h-[410px] w-[180px] h-[300px] bg-secondary  pl-2 md:pl-3  pr-2 rounded-xl grid place-content-center">
            <Image
              src="/natural.jpeg"
              alt="makeup"
              height={228}
              width={215}
              className="rounded-xl natural"
            />
            <p className="font-medium md:text-lg text-sm text-dark pt-1 select-none">
              need editorial makeup
            </p>
            <div className="flex md:gap-10 gap-6 vector_div">
              <div className="flex gap-2">
                <Image
                  src="/Vector.png"
                  alt="vector"
                  height={1}
                  width={1}
                  className="h-5 w-5 vector"
                />
                <p className="text-dark font-semibold select-none ">$115-$155</p>
              </div>
              <div className="bg-primary pt-[2px]  rounded-3xl md:w-[63px] md:h-[22px] text-white md:text-xs text-[9px]  flex justify-center w-12 h-5">
                Makeup
              </div>
            </div>
            <button className="rounded-3xl md:w-[218px] md:h-[42px] mt-2 post w-[144px] h-[28px] md:text-xl text-[16px] post">
              Post Request
            </button>
          </div>
          <div className="md:w-[240px] md:h-[410px] pr-2 bg-secondary pl-2.5 pt-2 rounded-xl w-[180px] h-[300px] place-content-center">
            <Image
              src="/pony.jpeg"
              alt="hair"
              height={228}
              width={219}
              className="rounded-xl"
            />
            <p className="font-medium text-dark pt-2 md:text-lg text-base select-none">
              need a sleek ponytail
            </p>
            <div className="flex justify-center md:gap-16 gap-10 ">
              <div className="flex gap-2">
                <Image
                  src="/Vector.png"
                  alt="vector"
                  height={1}
                  width={1}
                  className="h-5 w-5"
                />
                <p className="text-dark font-semibold select-none">$95-$105</p>
              </div>
              <div className="bg-mimbboRed pt-[2px] rounded-3xl md:w-[42px] md:h-[22px] text-white md:text-xs flex justify-center text-[9px] w-12 h-5">
                Hair
              </div>
            </div>
            <button className="rounded-3xl md:w-[218px] md:h-[42px] mt-2 w-[144px] h-[28px] md:text-xl text-[16px] post">
              Post Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesNeeded;
