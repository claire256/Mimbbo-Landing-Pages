import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-muted-foreground" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-muted-foreground" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-muted-foreground" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-6 mt-6 text-xs border-t text-muted-foreground md:flex-row">
          <div className="copyright">Copyright © {new Date().getFullYear()} Mimbbo. All rights reserved.</div>
          <div className="flex gap-4 terms">
            <Link href="#" className="hover:underline">
              Privacy policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer