import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const BeautyCare = () => {
  return (
    <div className='grid md:grid-cols-2'>
        <div className='grid place-content-center section-padding '>
            <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold md:pt-16 pt-14 lg:pt-0">Beauty Care That Works Around You</h2>
            <p className='md:text-xl pt-4'>Being a mom doesn’t mean putting yourself last. 
            <br></br>With Mimbbo At Home, you can finally make self-care
            simple, affordable, and doable.
            </p>
            <Button
          variant="custom"
          radius="full"
          className="bg-primary md:w-[383px] md:h-16  text-white w-[300px] h-8 font-bold md:text-xl text-[16px] md:mb-0 mb-10 mt-14"
        >
          Book Now
        </Button>
        </div>
        <Image src="./mom-baby.png" alt="mom-baby" width={671} height={671} className='w-full'/>
    </div>
  )
}

export default BeautyCare;