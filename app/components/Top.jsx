import { FaChevronDown, FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import Icon from "./Icon";
import { TfiYoutube } from "react-icons/tfi";

export default function Top() {
  return (
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

  )
}
