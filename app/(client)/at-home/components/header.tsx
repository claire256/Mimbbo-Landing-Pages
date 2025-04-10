"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface PageProps{
  utm_source: string
}
const Header = ({utm_source}: PageProps) => {
  const [link, setLink] = useState<string>("");

  const webUrl = process.env.NEXT_PUBLIC_MIMBBO_WEB_URL || "";

  const loginUrl = `${webUrl}/?auth=login&utm_source=${utm_source}`;
  const downloadUrl = `${webUrl}/?utm_source=${utm_source}`;

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(userAgent)) {
      setLink("https://play.google.com/store/apps/details?id=com.mimbbo.app");
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      setLink("https://apps.apple.com/us/app/mimbbo/id1602788926");
    } else {
      setLink(downloadUrl);
    }
  }, []);
  
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-8 border-b section-padding navbar bg-white md:px-8">
      <div className="flex items-center">
        <Link
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/logo.png?height=24&width=100"
            alt="Mimbbo"
            width={180}
            height={48}
            className="w-auto h-6 logo"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {/* {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline"
          > */}
            <p>Customer</p>
          {/* </Link>
        )} */}
        <Link href={loginUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="rounded-md home_button w-[81px] border-slate-950 h-8" variant={"outline"}>
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
