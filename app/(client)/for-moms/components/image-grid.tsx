"use client";
import Image from "next/image";

export default function ImageGrid() {
    return (
      <div className="columns-2 space-x-0">
        <div className="col-span-1">
          <Image
            src="/keke.jpeg"
            alt="Top Image"
            width={408}
            height={400}
            className="rounded-xl object-cover h-[400px]  w-full"
          />
        </div>
        <div className="pt-4">
          <Image
            src="/flower.jpeg"
            alt="Small Image 1"
            width={408}
            height={400} 
            className="rounded-xl object-cover h-[400px] w-full" 
          />
        </div>
        <div className=" h-[200px] pt-4">
          <Image
            src="fulani.jpeg"
            alt="Top Image"
            width={408}
            height={170}
            className="rounded-xl object-cover h-[170px] w-full"
          />
        </div>
        <div className="">
          <Image
            src="/colornails.jpeg"
            alt="Small Image 2"
            width={408}
            height={170}
            className="rounded-xl object-cover h-[170px] w-full"
          />
        </div>
        <div className=" pt-4">
          <Image
            src="/lashtec.jpeg"
            alt="Small Image 2"
            width={408}
            height={400}
            className="rounded-xl object-cover h-[400px] w-full"
          />
        </div>
        <div className="pt-4">
          <Image
            src="/braidsbob.jpeg"
            alt="Bottom Image"
            width={408}
            height={400}
            className="rounded-xl object-cover h-[400px] w-full"
            />
            </div>
            </div>
    );
}