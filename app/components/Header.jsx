'use client'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterest, FaInstagram, FaChevronDown } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import Icon from "./Icon";
import Image from "next/image";
import SearchBox from "./SearchBox";
import Link from "next/link";
import { HiBars3, HiBars3BottomRight, HiMiniBars3, HiOutlineShoppingBag } from "react-icons/hi2";
import SmallSearchBox from "./SmallSearchBox";
import { useSelector } from "react-redux";


export default function Header() {
  const storeCart = useSelector(state => state.cart)
  
  const cart = storeCart.cart
  return (
    <header className="border-b sticky top-0 z-50 mb-3 bg-white border-gray-300 pb-4">
  
    {/*Bottom*/}

        <div className="lg:pl-[60px] pt-[10px] px-4 flex bg-white items-center justify-between">

              <div className="flex lg:hidden space-x-3 items-start">
                <HiBars3 className="text-[30px] lg:hidden text-gray-800"/>

                <SmallSearchBox />
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
                         <p className="text-[14px]">{cart.length} {cart.length > 1 ? 'items' : 'item'}</p>
                    </div>
                </div>

            </div>
        </div>
    </header>
    
  )
}
