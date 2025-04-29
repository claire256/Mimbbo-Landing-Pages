// components/HowItWorks.tsx
import Image from "next/image";
import HowItWorksStep from "./how-it-works-steps";

type Step = {
  src: string;
  title: string;
  des: string;
};

type HowItWorksProps = {
  title: string;
  description: string;
  steps: Step[];
  showImages?: boolean; // optional flag to show/hide collage
};

const HowItWorks = ({ title, description, steps, showImages = true }: HowItWorksProps) => {
  return (
    <section className="section-padding bg-white" data-aos="fade-up">
      <div className="grid xl:grid-cols-2 pb-20">
        {showImages && (
          <div className="relative xl:pl-[190px] pt-60 w-full grid place-items-center xl:place-items-start">
            <Image
              src="/masai.jpeg"
              alt="Masai"
              width={262}
              height={253}
              className="rounded-xl absolute object-cover top-32 md:top-20 left-2 border-4 border-white w-2/5 sm:w-1/3"
            />
            <Image
              src="/bun.jpeg"
              alt="Bun"
              width={365}
              height={449}
              className="rounded-xl object-cover md:w-[365px] md:h-[449px] w-[200px] h-[270px]"
            />
            <Image
              src="/orangenails.jpeg"
              alt="Orange Nails"
              width={262}
              height={102}
              className="rounded-xl absolute object-cover md:-bottom-4 -bottom-16 left-2 border-4 border-white h-40 md:h-64 w-2/5 sm:w-1/3"
            />
          </div>
        )}
        <div className="pt-36 grid place-items-center xl:place-items-start">
          <h2 className="text-4xl font-semibold">{title}</h2>
          <p className="text-[16px] pt-8">{description}</p>
          <div>
            {steps.map((step, index) => (
              <HowItWorksStep key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
