"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-6 border-b section-padding navbar bg-secondary md:px-8">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
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
        <Button size="sm" className="h-8 text-white rounded-md main_btn">
          Get it
        </Button>
      </div>
    </header>
  );
};

export default Header;
