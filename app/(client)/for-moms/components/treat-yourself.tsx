import { Button } from "@/components/ui/button";
import React from "react";

const TreatYourself = () => {
  return (
    <section
      className=" pt-24 pb-20  bg-gradient-to-r grid place-content-center text-center"
      style={{ backgroundImage: "linear-gradient(to right, #FA98F1, #D14206)" }}
    >
      <div>
        <h2 className="md:text-4xl text-2xl font-bold text-white">
          Treat Yourself-You've Earned It
        </h2>
        <p className="md:text-2xl text-[16px] text-white pt-6">
          Book your first Mimbbo At Home service today and get $25 off.
        </p>
        <Button
          variant="custom"
          radius="full"
          className="bg-primary md:w-[327px] md:h-16  text-white w-[300px] h-8 font-bold md:text-xl text-[16px] mt-14"
        >
          Claim Your $25 Off
        </Button>
      </div>
    </section>
  );
};

export default TreatYourself;
