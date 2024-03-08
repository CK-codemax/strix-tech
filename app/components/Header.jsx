import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterest, FaInstagram, FaChevronDown } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import Icon from "./Icon";
import Image from "next/image";
import SearchBox from "./SearchBox";
import Link from "next/link";
import { HiBars3, HiBars3BottomRight, HiMiniBars3, HiOutlineShoppingBag } from "react-icons/hi2";


export default function Header() {
  return (
    <header className="border-b border-gray-300 pb-4">
    {/*Top*/}

    <div className="bg-[#28d0e7] w-screen h-[50px] flex items-center justify-center xl:justify-between px-4 text-white">
        <div className=" hidden lg:flex pl-5 space-x-2">
           <Icon Icon={FaFacebookF} color='blue'/>
           <Icon Icon={FaTwitter} color='blue'/>
           <Icon Icon={TfiYoutube} color='red'/>
           <Icon Icon={FaGooglePlusG} color='red'/>
           <Icon Icon={FaPinterest} color='red'/>
           <Icon Icon={FaInstagram} color='red' />


        </div>

        <div className="flex items-center pr-5 space-x-4">
            <div className="flex items-center space-x-0.5 cursor-pointer">
              <p className="text-[14px]">Currency</p>
              <FaChevronDown className="text-xs"/>
            </div>

            <div className="flex items-center space-x-0.5 cursor-pointer">
              <p className="text-[14px]">Account</p>
              <FaChevronDown className="text-xs"/>
            </div>
        </div>


    </div>

    {/*Bottom*/}

        <div className="lg:ml-[60px] mt-[10px] px-4 flex items-center justify-between">

              <div className="flex lg:hidden space-x-3 items-center">
                <HiBars3 className="text-[30px] lg:hidden text-gray-800"/>

              <CiSearch className="text-[30px] lg:hidden text-gray-800" />
              </div>

            <Link href={'/'}> 
                <Image className="object-contain h-auto w-[40px] sm:w-[60px]" src='/strix-logo.png' alt='logo' width={60} height={60} />
            </Link>
           
             <SearchBox />
          

            <div className="flex lg:pr-5 items-center space-x-4">
                <div className=" hidden lg:flex cursor-pointer items-center space-x-1">
                    <CiHeart  className="text-[50px] text-[#28d0e7]" />
                    <div className="flex flex-col items-start">
                         <p className="font-[500]">WishList</p>
                         <p className="text-[14px]">0 items</p>
                    </div>
                </div>
                <HiBars3BottomRight className="text-[30px] lg:hidden text-gray-800"/>
                <HiOutlineShoppingBag className="text-[30px] lg:hidden text-gray-800"/>
                
                <div className=" hidden lg:flex cursor-pointer items-center space-x-1">
                    <PiShoppingCartThin  className="text-[50px] text-[#28d0e7]" />
                    <div className="flex flex-col items-start">
                         <p className="font-[500]">Your Cart</p>
                         <p className="text-[14px]">0 item</p>
                    </div>
                </div>

            </div>
        </div>
    </header>
    
  )
}
