"use client"

import Image from "next/image";

const UnLock = ()=>{
   return(
    <section className="section-padding mt-14 pl-5 pr-5 sm:place-content-center sm:text-xs ">
        <h2 className="text-2xl font-semibold">
        Unlock a new way to grow your beauty business
            </h2>
        <p className="pt-4">Supercharge your design workflow, kick-start your projects faster, and level up your process.</p>
            <div className="grid gap-6 pt-14 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2">
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
                  src: "/time.png",
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
                  className="flex flex-col border border-[#C5CAD3] justify-center items-center"
                >
                  <div className="">
                    <Image
                      src={item.src}
                      alt={item.title}
                      height={15}
                      width={15}
                      className="pt-4 text-primary"
                    />
                  </div>
                  <h3 className="font-semibold  pt-4">{item.title}</h3>
                  <p className="mt-2 pl-2 text-sm text-muted-foreground">{item.desc}</p>
                  <p className=" text-primary text-sm">{item.more}</p>
                </div>
              ))}
            </div>
    </section>
   )
}

export default UnLock