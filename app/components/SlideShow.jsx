'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


export default function SlideShow() {

    const [index, setIndex] = useState(true)
   
    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setIndex(!index);
        }, 5000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [index]
    )

   
  return (
    <div className="relative group w-[690px]">
      <div onClick={() => setIndex(!index)} className="bg-[#28d0e7] z-20 absolute top-[225px] hover:border border-black right-[50px] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:right-[20px] w-[30px] h-[30px] rounded-full flex items-center justify-center">
      <FaChevronRight className="text-l text-white" />
     </div>

     <div onClick={() => setIndex(!index)} className="bg-[#28d0e7] hover:border border-black z-20 absolute top-[225px] left-[50px] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-[20px] w-[30px] h-[30px] rounded-full flex items-center justify-center">
      <FaChevronLeft className="text-l text-white" />
     </div>
     <div className={`group absolute w-full top-0 cursor-pointer ${index === false && 'opacity-100'} transition-all duration-1000 ease-in-out opacity-0 mt-8`}>
     <Image className="h-auto rounded-md w-full" src={'https://strix.com.ng/e/image/cache/catalog/slider/slide-2-855x559.jpg'} alt='home-image' width={855} height={559} />
     
         
     <div className="absolute flex flex-col space-y-4 top-[46%] right-5">
     <p className={`tracking-[5px] text-wrap w-[278px] py-[9px] -translate-y-[30px] opacity-0 ${index === false && 'opacity-100 -translate-y-0'}  transition-all duration-700 ease-in-out px-[20px] bg-gray-100 rounded-md uppercase text-[12px] text-gray-700`}>strix will take your order</p>

      <p className={`capitalize text-[36px] -translate-y-[30px]  ${index === false && '-translate-y-0 opacity-100'} transition-all duration-600 ease-in-out opacity-0  text-gray-800 font-bold`}>fast delivery</p>

      <Link className="bg-[#28d0e7] rounded-full py-3 px-5 max-w-[50%] text-[14px] uppercase hover:text-white transition-colors duration-300 ease-in-out" href={'/'}>Shop Now</Link>
     </div>
     </div>
      

     <div className={`group absolute w-full top-0 ${index === true && 'opacity-100'} cursor-pointer opacity-0 transition-all duration-1000 ease-in-out mt-8 `}>
     <Image className="w-full h-auto rounded-md" src={'https://strix.com.ng/e/image/cache/catalog/slider/slide-1-855x559.jpg'} alt='home-image' width={855} height={559} />
     
     <div className="absolute flex flex-col space-y-4 top-[46%] right-5">
     <p className={`tracking-[5px] text-wrap w-[278px] py-[9px] -translate-y-[30px] opacity-0 ${index === true && 'opacity-100 -translate-y-0'} transition-all duration-700 ease-in-out px-[20px] bg-gray-100 rounded-md uppercase text-[12px] text-gray-700`}>save upto 20% off</p>

      <p className={`capitalize text-[36px] -translate-y-[30px]  ${index === true && '-translate-y-[0] opacity-100'} transition-all duration-600 ease-in-out opacity-0   text-gray-800 font-bold`}>latest collection</p>

      <Link className="bg-[#28d0e7] rounded-full py-3 px-5 max-w-[50%] text-[14px] uppercase hover:text-white transition-colors duration-300 ease-in-out" href={'/'}>Shop Now</Link>
     </div>
     </div>

     <div className='bg-[#28d0e7] w-[40px] absolute top-[420px] left-[49%] -translate-x-full h-1 rounded-sm' />
     <div className='bg-[#28d0e7] w-[40px] absolute top-[420px] right-[49%] translate-x-full h-1 rounded-sm' />


     </div>
      
  )
}
