"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/utils/pinpoint/pinpointEvent";

interface PageProps {
  utm_source: string;
}
const Header = ({ utm_source }: PageProps) => {
  const webUrl = process.env.NEXT_PUBLIC_MIMBBO_WEB_URL || "";

  const loginUrl = `${webUrl}/?auth=login&utm_source=${utm_source}`;
  const downloadUrl = `${webUrl}/?utm_source=${utm_source}`;

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
        <p>Customer</p>
        <Link href={loginUrl} target="_blank" rel="noopener noreferrer">
          <Button
            onClick={async () =>
              await trackEvent({
                eventName: "login_click",
                params: {
                  attributes: {
                    buttonLocation: "header_section",
                  },
                  query: {
                    utm_source,
                  },
                },
              })
            }
            className="rounded-md home_button w-[81px] border-slate-950 h-8"
            variant={"outline"}
          >
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
