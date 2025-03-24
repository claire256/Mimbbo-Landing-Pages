import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import QRCode from 'react-qr-code';


const CTA = () => {

  return (
    <section className="mt-16 bg-[#6d1d14] py-12 text-white">
      <div className="max-w-5xl px-6 mx-auto text-center md:px-8">
        <h2 className="text-2xl font-semibold rdy-text">Ready to get started?</h2>
        <Link
        href="https://mimbbo.com/?auth=signup" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button className="mt-6 rounded-md bg-white px-6 py-2 text-[#6d1d14] hover:bg-white/90 theme-btn  signup">Sign Up</Button>
      </Link>
        <div className="">
          <p className="text-xs download">Download our mobile app to get started</p>
          <div className="flex justify-center qr_code">
            <Image
              src="/qr-code.png?height=100&width=100"
              alt="QR Code"
              width={100}
              height={100}
              className="w-24 h-24"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA