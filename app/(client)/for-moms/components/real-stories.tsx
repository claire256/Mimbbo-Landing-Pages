
'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function CardCarousel() {
  const cards = [
    {
      id: 1,
      src: "/masai.jpeg",
      name: "Nia, Atlanta",
      title: "Working mom",
      text: "I got a silk press while my toddler watched cartoons. No driving, no stress.",
    },
    {
      id: 2,
      src: "/alex.png",
      name: "Alexis, Brooklyn",
      title: "Working Professional",
      text: "I booked lashes for Sunday night-right after bedtime. Best thing I've done for myself in months.",
    },
    {
      id: 3,
      src: "/masai.jpeg",
      name: "Tasha, Houston",
      title: "Event Ready",
      text: "I booked lashes for Sunday night-right after bedtime. Best thing I've done for myself in.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      // Adjust width based on screen size
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setCardWidth(90); // 90% for mobile
      } else if (screenWidth < 1280) {
        setCardWidth(50); // 50% for md screens
      } else {
        setCardWidth(33.3333); // 33.33% for xl and up
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <section className="section-padding bg-primary px-4 md:px-8">
      <div className="text-center pt-20 md:pt-32">
        <h2 className="text-3xl text-white font-bold">Real Stories from Real Moms</h2>
        <p className="text-white pt-4">Hear from clients just like you.</p>
      </div>

      {/* Scroll area */}
      <div className="overflow-hidden pt-10 md:pt-20">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * cardWidth}%)`,
            width: `${cards.length * cardWidth}%`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-4"
              style={{ width: `${100 / cards.length}%`, flex: "0 0 auto" }}
            >
              <div className="bg-white shadow rounded-xl p-4 md:p-14 w-full max-w-[514px] h-full">
                <div className="flex items-center gap-6">
                  <Image
                    width={60}
                    height={64}
                    src={card.src}
                    alt=""
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold">{card.name}</p>
                    <p className="text-[#717171] md:text-[16px] text-sm">{card.title}</p>
                  </div>
                </div>
                <p className="xl:pt-10 pt-6 md:text-[16px] text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2 pt-6 md:pt-14 pb-20">
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

