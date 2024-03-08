'use client'

import Image from "next/image"
import Link from "next/link"

export default function RelatedList({apple}) {
    // key={device.id} name={device.name} src={device.img} description={device.description} id={device.id} />
    console.log(apple)
  return (
    <div className="flex flex-col w-full border border-gray-500 lg:w-[237px] xl:w-[261px] xl:ml-1 flex-grow">
        <p className='text-black uppercase text-sm w-full p-2 pl-4 text-left bg-gray-200'>
            bestsellers
       </p>
        {apple.slice(0, 9).map((product) => <Link key={product.id} className="cursor-pointer flex items-center justify-start space-x-3 w-full border-y border-gray-500 px-1 pl-4 py-2" href={`/individual-item/${product.id}`}>
        <Image className="w-[70px] h-auto object-cover border p-2 border-gray-500" src={product.img} width={500} height={300} alt={`${product.name}-image`} />
        <p className="text-left text-wrap">{product.name}</p>
    </Link>)}
    </div>
  )
}
