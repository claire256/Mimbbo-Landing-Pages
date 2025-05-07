'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

type Card = {
  id: number;
  src: string;
  name: string;
  title: string;
  text: string;
};

type CardCarouselProps = {
  title: string;
  subtitle?: string;
  cards: Card[];
  bgColor?: string; // Tailwind color class like "bg-primary"
};

export default function CardCarousel({
  title,
  subtitle,
  cards,
  bgColor = 'bg-primary',
}: CardCarouselProps) {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) setCardWidth(90);
      else if (screenWidth < 1280) setCardWidth(50);
      else setCardWidth(33.3333);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <section className={`section-padding px-4 md:px-8 ${bgColor}`}>
      <div className="text-center pt-20 md:pt-32">
        <h2 className="text-3xl text-white font-bold">{title}</h2>
        {subtitle && <p className="text-white pt-4">{subtitle}</p>}
      </div>

      {/* Carousel content */}
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
              style={{ width: `${100 / cards.length}%`, flex: '0 0 auto' }}
            >
              <div className="bg-white shadow rounded-xl p-4 md:p-14 w-full max-w-[514px] h-full">
                <div className="flex items-center gap-6">
                  <Image
                    width={60}
                    height={64}
                    src={card.src}
                    alt={card.name}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold select-none">{card.name}</p>
                    <p className="text-[#717171] md:text-[16px] text-sm select-none">{card.title}</p>
                  </div>
                </div>
                <p className="xl:pt-10 pt-6 md:text-[16px] text-sm select-none">{card.text}</p>
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
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-black' : 'bg-white'}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
