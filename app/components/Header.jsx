import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterest, FaInstagram, FaChevronDown } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import Icon from "./Icon";
import Image from "next/image";
import SearchBox from "./SearchBox";
import Link from "next/link";


export default function Header() {
  return (
    <header>
    {/*Top*/}

    <div className="bg-[#28d0e7] w-screen h-[50px] flex items-center justify-between px-4 text-white">
        <div className="flex pl-5 space-x-2">
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

        <div className="ml-[60px] mt-[10px] px-4 flex items-center justify-between">
            <Link href={'/'}> 
                <Image src='/strix-logo.png' alt='logo' width={60} height={60} />
            </Link>
           
             <SearchBox />

            <div className="flex pr-5 items-center space-x-4">
                <div className="flex cursor-pointer items-center space-x-1">
                    <CiHeart  className="text-[50px] text-[#28d0e7]" />
                    <div className="flex flex-col items-start">
                         <p className="font-[500]">WishList</p>
                         <p className="text-[14px]">0 items</p>
                    </div>
                </div>
                
                <div className="flex cursor-pointer items-center space-x-1">
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
