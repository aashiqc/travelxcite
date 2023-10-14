import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'


const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row  gap-20 bg-hero-pattern py-10 pb-32 md:gap-28 lg:py-20 '>

        {/* Left */}
      <div className="left padding-container  xl:w-1/2">
       <h1 className="bold-52  lg:bold-70">Escape Routine,<br /> Dive into Adventure </h1>
       <p className='mt-6 text-gray-500 xl:max-w-[520px]'>Escape the mundane and immerse yourself in exhilarating adventures the Travelxcite way. Your gateway to exploring the extraordinary is just a click away.</p>
       <Button variant='destructive' className='mt-4 '>Get Started</Button>
      </div>

      <div className="right items-center flex justify-center ">
        <Image className='rounded-3xl p-10 lg:p-0' src="/herotravel.png" width={500}  alt='hero' height={300}/>
      </div>
      
      
    </section>
  )
}

export default Hero
