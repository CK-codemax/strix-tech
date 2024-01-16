import Link from "next/link";
import { HiMiniBars3BottomLeft } from "react-icons/hi2"
import { TfiEmail } from "react-icons/tfi";

export default function Nav() {
  return (
    <div className="flex justify-between items-center px-8 border-b border-gray-300 h-[55px]">

        <div className="bg-[#28d0e7] h-full flex group items-center space-x-3 text-white cursor-pointer w-[239px] rounded-md pl-5">
            <HiMiniBars3BottomLeft className="text-2xl group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
            <p className="tracking-widest">Categories</p>
        </div>

        <div className="flex items-center space-x-5">
             <Link className='link' href={'/'}>Home</Link>
             <Link className="link" href={'/'}>About Us</Link>
             <Link className="link" href={'/'}>Login</Link>
             <Link className="link" href={'/'}>CheckOut</Link>
            
        </div>

        <div className="flex space-x-3 items-center cursor-pointer">
            <TfiEmail className="text-2xl text-[#28d0e7]" />
            <p className="text-gray-700 ">admin@strix.com.ng</p>
        </div>
    </div>
  )
}
