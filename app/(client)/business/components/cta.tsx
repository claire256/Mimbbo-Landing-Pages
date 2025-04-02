import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PageProps{
  utm_source: string
}
const CTA = ({utm_source}: PageProps) => {
  const webUrl = process.env.NEXT_PUBLIC_MIMBBO_WEB_URL || "";

  const signupUrl = `${webUrl}/?auth=signup&utm_source=${utm_source}`;

  return (
    <section className="mt-16 bg-[#6d1d14] py-12 text-white">
      <div className="max-w-5xl px-6 mx-auto text-center md:px-8">
        <h2 className="text-2xl font-semibold rdy-text">
          Ready to get started?
        </h2>
        <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
          <Button className="mt-6 rounded-md bg-white px-6 py-2 text-[#6d1d14] hover:bg-white/90 theme-btn  signup">
            Sign Up
          </Button>
        </Link>
        <div className="">
          <p className="text-xs download">Download the Mimbbo App</p>
          <div className="flex gap-4 justify-center qr_code">
            <Link
              href={"https://apps.apple.com/us/app/mimbbo/id1602788926"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/appstore.png"
                alt="appstore"
                width={1}
                height={1}
                className="apps-icon h-10 w-36 "
              />
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.mimbbo.app"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/playstore.png"
                alt="playstore"
                width={1}
                height={1}
                className="apps-icon h-10 w-36 "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
