"use client";
import Image from "next/image";

export default function ImageGrid() {
    return (
      <div className="columns-2 ">
        <div className="col-span-1">
          <Image
            src="/keke.jpeg"
            alt="Top Image"
            width={308}
            height={416}
            className="rounded-xl object-cover  h-[400px] w-[450px]"
          />
        </div>
        <div className="pt-4">
          <Image
            src="/flower.jpeg"
            alt="Small Image 1"
            width={308}
            height={416} 
            className="rounded-xl object-cover h-[400px] w-[450px]" 
          />
        </div>
        <div className=" h-[200px] pt-4">
          <Image
            src="fulani.jpeg"
            alt="Top Image"
            width={308}
            height={50}
            className="rounded-xl object-cover h-[170px] w-[450px]"
          />
        </div>
        <div className="">
          <Image
            src="/colornails.jpeg"
            alt="Small Image 2"
            width={308}
            height={400}
            className="rounded-xl object-cover h-[170px] w-[450px]"
          />
        </div>
        <div className=" pt-4">
          <Image
            src="/lashtec.jpeg"
            alt="Small Image 2"
            width={800}
            height={600}
            className="rounded-xl object-cover h-[400px] w-[450px]"
          />
        </div>
        <div className="pt-4">
          <Image
            src="/braidsbob.jpeg"
            alt="Bottom Image"
            width={800}
            height={600}
            className="rounded-xl object-cover h-[400px] w-[450px]"
            />
            </div>
            </div>
    );
}