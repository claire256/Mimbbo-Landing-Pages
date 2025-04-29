// components/HowItWorksStep.tsx
import Image from "next/image";

type StepProps = {
  src: string;
  title: string;
  des: string;
};

const HowItWorksStep = ({ src, title, des }: StepProps) => (
  <div className="flex gap-4 pt-14 items-center">
    <div className="md:w-[102px] md:h-[102px] w-[50px] h-[40px] rounded-full bg-[#faece4] flex justify-center items-center">
      <Image src={src} alt={title} width={36} height={36} className="md:w-9 md:h-9 w-6 h-6" />
    </div>
    <div>
      <p className="font-semibold text-[16px]">{title}</p>
      <p className="text-[16px]">{des}</p>
    </div>
  </div>
);

export default HowItWorksStep;
