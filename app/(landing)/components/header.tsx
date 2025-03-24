"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [link, setLink] = useState<string>("");

  const webUrl = process.env.NEXT_PUBLIC_MIMBBO_WEB_URL || "";

  useEffect(() => {
    const userAgent = navigator.userAgent || (window as any).opera;
    
    if (/android/i.test(userAgent)) {
      setLink("https://play.google.com/store/apps/details?id=com.mimbbo.app");
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      setLink("https://apps.apple.com/us/app/mimbbo/id1602788926");
    } else {
      setLink(webUrl);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-6 border-b section-padding navbar bg-secondary md:px-8">
      <div className="flex items-center">
        <Link
          href={webUrl}
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
        <span className="text-sm">Download the app</span>
        {link && (
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="h-8 text-white rounded-md main_btn">
              Get it
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
