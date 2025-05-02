"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

const DiscoverSection = () => {
  return (
    <section className="px-6 pt-10 py-16 md:px-12 section-padding" data-aos="fade-up">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold md:text-4xl theme-title">Find ideas for your next look</h2>
        <p className="pt-4 text-lg text-dark paragraph">
          Find looks you love and save them to your moonboard <br/> for your next beauty appointment or DIY project.
        </p>
      </div>

      {/* Static Cards */}
      <div className="grid grid-cols-1 gap-6 mt-14 sm:grid-cols-1 lg:grid-cols-2 cards xl:grid-cols-3">

        {/* Hair Card */}
        <div className="relative overflow-hidden theme-card college-student-card">
          <Image src="/bob.jpeg" alt="College Students" width={400} height={500} className="object-cover w-full h-full" />
          <Card className="absolute p-4 bg-white shadow-lg bottom-4 left-4 right-4 card_white_box">
            <span className="px-3 py-1 text-sm font-medium card-box select-none">Hair</span>
            <p className="text-sm card-dec mt-16 select-none">Layered bob silk press</p>
          </Card>
        </div>

        <div className="middle_cards">
          {/* Lash Card */}
          <div className="relative overflow-hidden theme-card freelancers-card">
            <Image src="/lash.png" alt="Freelancers" width={400} height={500} className="object-cover w-full h-full" />
            <Card className="absolute p-4 bg-white shadow-lg bottom-4 left-4 right-4 card_white_box">
              <span className="px-3 py-1 text-sm font-medium card-box select-none ">Lash & Brow</span>
              <p className="text-sm card-dec mt-16 select-none">2 weeks fill</p>
            </Card>
          </div>

          {/* Nails Card */}
          <div className="relative overflow-hidden theme-card salon-owners-card">
            <Image src="/nails.jpeg" alt="Salon Owners" width={400} height={500} className="object-cover w-full h-full" />
            <Card className="absolute p-4 bg-white shadow-lg bottom-4 left-4 right-4 card_white_box">
              <span className="px-3 py-1 text-sm font-medium card-box select-none">Nails</span>
              <p className="text-sm card-dec mt-16 select-none">Colorful nails for the summer</p>
            </Card>
          </div>
        </div>

        {/* Makeup Card */}
        <div className="relative overflow-hidden theme-card cosmetology-student-card">
          <Image src="makeup.jpeg" alt="Cosmetology Students" width={400} height={500} className="object-cover w-full h-full" />
          <Card className="absolute p-4 bg-white shadow-lg bottom-4 left-4 right-4 card_white_box">
            <span className="px-3 py-1 text-sm font-medium card-box select-none">Makeup</span>
            <p className="text-sm card-dec mt-16 select-none">Soft nude makeup for photoshoot</p>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default DiscoverSection;
