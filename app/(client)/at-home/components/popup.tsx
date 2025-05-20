import { Button } from "@/components/ui/button";
import Image from "next/image";
 

export default function BottomPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
       <div className="bg-white rounded-lg shadow-xl w-[450px]  md:w-[840px] grid md:grid-cols-2 ">
        <div className="relative">
        <Image src="./popup.png" alt="two ladies" width={416} height={441} className="w-full md:h-auto h-[300px] object-cover" />
        </div>
        <div className="p-6 ">
          <p className="md:pt-4 pt-0 text-sm text-primary font-semibold">
            Get Early Access - 50% OFF
          </p>
          <p className="text-textGray text-[12px]">
            <span className="text-[40px] text-black font-semibold">$79.95</span>{" "}
            One-time fee
          </p>
          <p className="text-textGray text-sm p-3">
            Your $35/month membership will begin only after onboarding is
            complete and you’re approved. You’ll be notified in advance before
            any charges.
          </p>

            <input
              placeholder="Enter your email addresss"
              className="border border-gray-200 text-sm md:text-base  w-[368px] h-12 mt-2 pl-4 rounded-lg"
            />
            <Button
              variant="custom"
              radius="full"
              className="bg-LimeGreen text-primary md:w-[122px] h-12 w-full mt-4 "
            >
              Sign Up
            </Button>
            <p className="text-textGray text-[12px] pt-5">
              By clicking "Sign up," you are consenting to receive emails from
              Mimbbo at the email address provided
            </p>
          </div>
      </div>
    </div>
  );
}