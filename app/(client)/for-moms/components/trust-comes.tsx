'use client';

import React from 'react'
import Image from "next/image";

const TrustComes = () => {

    const items = [
        {
            src:"./whitecheck.png",
            title: "Verified provider profiles",
        },
        {
            src:"./whitecheck.png",
            title: "Experience with house calls",
        },
        {
            src:"./whitecheck.png",
            title: "Customer reviews and ratings",
        },
        {
            src:"./whitecheck.png",
            title: "You choose who comes to you",
        },
    ]
  return (
    <div className='relative'>
        <div className='grid gap-20 xl:gap-36 xl:grid-cols-2'>
            <Image src="./handshake.png" alt="" width={730} height={664} className='w-full' />
            <div className='xl:pt-36 text-center'>
                <h2 className='font-bold text-3xl md:text-5xl'>Trust Comes <br></br> Standard</h2>
                <p className='md:text-lg text-base  pt-4'>Youre welcoming someone into your home-we <br></br> take that seriously.</p>
            </div>
        </div>
        <div className='bg-mimbboRed xl:w-[60%] text-white h-[221px] rounded-xl xl:absolute  xl:bottom-10 xl:right-2 mt-4 xl:pt-2 grid place-content-center'>
         {items.map((item, index)=>
         <div key={index} className='flex gap-3 xl:pl-64 pt-4'>
         <Image src={item.src} alt="" width={20} height={15} className='' />
         <p className='md:text-lg text-bas '>{item.title}</p>
         </div>
        )}
        </div>
    </div>
  )
}

export default TrustComes