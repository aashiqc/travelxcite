import Image from 'next/image'
import React from 'react'
import './brand.css'

const Brand = () => {
  return (
    <div className='logos flex-row py-1'>
        <div className="logos-slide flex flex-row gap-2">
        <Image src="/3m.svg" width={150} height={150} alt="3M Logo" />
        <Image src="/barstool-store.svg" width={150} height={150} alt="Barstool Store Logo" />
        <Image src="/budweiser.svg" width={150} height={150} alt="Budweiser Logo" />
        <Image src="/buzzfeed.svg" width={150} height={150} alt="Buzzfeed Logo" />
        <Image src="/forbes.svg" width={150} height={150} alt="Forbes Logo" />
        <Image src="/macys.svg" width={150} height={150} alt="Macy's Logo" />
        <Image src="/menshealth.svg" width={150} height={150} alt="Men's Health Logo" />
        <Image src="/mrbeast.svg" width={150} height={150} alt="MrBeast Logo" />
        <Image src="/3m.svg" width={150} height={150} alt="3M Logo" />
        <Image src="/barstool-store.svg" width={150} height={150} alt="Barstool Store Logo" />
        <Image src="/budweiser.svg" width={150} height={150} alt="Budweiser Logo" />
        <Image src="/buzzfeed.svg" width={150} height={150} alt="Buzzfeed Logo" />
        <Image src="/forbes.svg" width={150} height={150} alt="Forbes Logo" />
        <Image src="/macys.svg" width={150} height={150} alt="Macy's Logo" />
        <Image src="/menshealth.svg" width={150} height={150} alt="Men's Health Logo" />
        <Image src="/mrbeast.svg" width={150} height={150} alt="MrBeast Logo" />
        </div>
    </div>
  )
}

export default Brand
