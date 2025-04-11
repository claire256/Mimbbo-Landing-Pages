"use client"

import Image from "next/image";

const UnLock = ()=>{
   return(
    <section className="section-padding mx-auto text-center" data-aos="fade-up">
        <div className="pt-16">
        <h2 className="text-2xl md:text-[40px] font-semibold ">
        Unlock a new way to grow your beauty business
            </h2>
        <p className="pt-4 text-sm md:text-lg">Supercharge your design workflow, kick-start your projects faster, and level up your process.</p>
        </div>
            <div className="flex gap-10 flex-wrap sm:place-content-center pt-10">

              {[
                {
                  src: "/profiles.png",
                  title: "Reach new clients",
                  desc: "Save countless hours otherwise spent on creating from scratch.",
                  more: "Read more"
                },
                {
                  src: "/calendar.png",
                  title: "Fill slow days fast",
                  desc: "Save countless hours otherwise spent on creating from scratch.",
                  more: "Read more"
                },
                {
                  src: "/clock.png",
                  title: "Book on your own terms",
                  desc: "Save countless hours otherwise spent on creating from scratch.",
                  more: "Read more"
                },
                {
                    src: "/money.png",
                    title: "Set your rates",
                    desc: "Save countless hours otherwise spent on creating from scratch.",
                    more: "Read more"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center rounded-lg bg-[#F4F6F7] pb-4 pl-2 pr-2 w-[350px] h-[210px]"
                >
                  <div className="">
                    <Image
                      src={item.src}
                      alt={item.title}
                      height={21}
                      width={18}
                      className="pt-4 text-primary"
                    />
                  </div>
                  <h3 className="font-semibold text-[16px]  pt-4">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#6E7375] whitespace-pre-line">{item.desc}</p>
                  <p className=" text-primary text-sm pt-3">{item.more}</p>
                </div>
              ))}
            </div>
    </section>
   )
}

export default UnLock