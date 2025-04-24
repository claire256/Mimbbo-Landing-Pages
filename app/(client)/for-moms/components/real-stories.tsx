"use client";

import Image from "next/image";
import { useState } from "react";

export default function CardCarousel() {
  const cards = [
    {
      id: 1,
      src: "./masai.jpeg",
      name: "Nia, Atlanta",
      title: "Working mom",
      text: "I got a silk press while my toddler watched cartoons. No driving, no stress.",
    },
    {
      id: 2,
      src: "./alex.png",
      name: "Alexis, Brooklyn:",
      title: "Working Professional",
      text: "I booked lashes for Sunday night-right after bedtime. Best thing Ive done for myself in months.",
    },
    {
      id: 3,
      src: "./masai.jpeg",
      name: "Tasha, Houston:",
      title: "Event Ready",
      text: "I booked lashes for Sunday night-right after bedtime. Best thing Ive done for myself in.",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <section className="section-padding bg-primary">
        <div className="text-center pt-32">
        <h2 className="text-3xl text-white font-bold">Real Stories from Real Moms</h2>
        <p className="text-white">Hear from clients just like you.</p>
        </div>
      {/* Scroll area */}
      <div className="overflow-hidden pt-20">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * 33.3333}%)`,
            width: `${cards.length * 33.3333}%`,
          }}
        >
          {cards.map((card) => (
            <div key={card.id} className=" p-4">
              <div className="bg-white shadow rounded-xl p-4 md:p-10 xl:w-[514px] xl:h-[292px] md:w-[400px] md:h-[250px] w-[300px]">
                <div className="flex items-center gap-6">
                <Image width={60} height={64} src={card.src} alt="" className="rounded-full" />
                <div>
                <p className="font-bold">{card.name}</p>
                <p className="text-[#717171] md:text-[16px] text-sm">{card.title}</p>
                </div>
                </div>
                <p className="xl:pt-14 pt-6 md:text-[16px] text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2 pt-14 pb-20">
        {cards.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-black" : "bg-white"
            }`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
}
