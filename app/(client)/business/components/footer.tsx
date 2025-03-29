import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary footer-sec">
      <div className="section-padding">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="footer-logo">
            <Image
              src="/logo.png?height=24&width=100"
              alt="Mimbbo"
              width={100}
              height={24}
              className="w-auto h-6"
            />
          </div>
          <div className="flex gap-4 social_links">
            <Link
              href="https://www.facebook.com/mimbbo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-secondary"
            >
              <Image 
              className="w-5 h-5" 
              src="/Facebook.png"
              alt="facebook"
              width={300}
              height={50}
              />
            </Link>
            
            <Link
              href="https://www.instagram.com/mimbbo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image 
              className="w-5 h-5" 
              src="/Instagram.png"
              alt="instagram"
              width={300}
              height={50}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/mimbbo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image 
              className="w-5 h-5" 
              src="/Linkedin.png"
              alt="linkedin"
              width={300}
              height={50}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-6 mt-6 text-xs border-t text-muted-foreground md:flex-row">
          <div className="copyright">
            Copyright © {new Date().getFullYear()} Mimbbo. All rights reserved.
          </div>
          <div className="flex gap-4 terms">
            <Link
              href="https://support.mimbbo.com/support/solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Help Desk
            </Link>
            <Link
              href="https://terms.mimbbo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
