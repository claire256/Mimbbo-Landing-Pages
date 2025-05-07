"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

const EarnSection = () => {
  return (
    <section className="p-0  section-padding" data-aos="fade-up">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold md:text-4xl theme-title">Who Can Earn on Mimbbo?</h2>
        <p className="pt-4 text-lg text-dark paragraph">
          From side gigs to growing your business. Earn whenever you need with Mimbbo.
        </p>
      </div>

      {/* Static Cards */}
      <div className="grid grid-cols-1 gap-6 mt-14 sm:grid-cols-1 lg:grid-cols-2 cards xl:grid-cols-3">

        {/* College Students Card */}
        <div className="relative overflow-hidden theme-card college-student-card">
          <Image src="/college-student.png" alt="College Students" width={400} height={500} className="object-cover w-full h-full" />
          <Card className="absolute p-4 bg-white shadow-lg bottom-4 left-4 right-4 card_white_box">
            <span className="px-3 py-1 text-sm font-medium card-box select-none">College Students</span>
            <h3 className="mt-2 text-xl font-bold value select-none">$200+</h3>
            <p className="text-sm card-dec select-none">Earn every week by taking on beauty gigs during weekends</p>
          </Card>
        </div>

        <div className="middle_cards">
          {/* Freelancers Card */}
          <div className="relative overflow-hidden theme-card freelancers-card">
            <Image src="/freelancer.png" alt="Freelancers" width={400} height={500} className="object-cover w-full h-full" />
            <Card className="absolute p-4 bg-white shadow-lg bottom-4 left-4 right-4 card_white_box">
              <span className="px-3 py-1 text-sm font-medium card-box select-none">Freelancers</span>
              <h3 className="mt-2 text-xl font-bold value select-none">5x</h3>
              <p className="text-sm card-dec select-none">Your client reach by tapping into Mimbbo’s marketplace</p>
            </Card>
          </div>

          {/* Salon Owners Card */}
          <div className="relative overflow-hidden theme-card salon-owners-card">
            <Image src="/salon-owner.png" alt="Salon Owners" width={400} height={500} className="object-cover w-full h-full" />
            <Card className="absolute p-4 bg-white shadow-lg bottom-4 left-4 right-4 card_white_box">
              <span className="px-3 py-1 text-sm font-medium card-box select-none">Salon Owners</span>
              <h3 className="mt-2 text-xl font-bold value select-none">30%</h3>
              <p className="text-sm card-dec select-none">Fewer empty spots—fill your schedule with beauty gigs</p>
            </Card>
          </div>
        </div>

        {/* Cosmetology Students Card */}
        <div className="relative overflow-hidden theme-card cosmetology-student-card">
          <Image src="/cosmetology-student.png" alt="Cosmetology Students" width={400} height={500} className="object-cover w-full h-full" />
          <Card className="absolute p-4 bg-white shadow-lg bottom-4 left-4 right-4 card_white_box">
            <span className="px-3 py-1 text-sm font-medium card-box select-none">Cosmetology Students</span>
            <h3 className="mt-2 text-xl font-bold value select-none">20+</h3>
            <p className="text-sm card-dec select-none">Paid gigs a semester while building your clientele</p>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default EarnSection;
