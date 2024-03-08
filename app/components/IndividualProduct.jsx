import Image from "next/image"
import RelatedDevices from "./RelatedDevices"
import SideBar from "./SideBar"

export default function IndividualProduct({device}) {
    console.log(device)
  return (
    <div className="w-full flex justify-start space-x-3 items-start px-3 xl:px-7">
        <div className="hidden lg:flex flex-col space-y-6">
           <SideBar />
           <RelatedDevices />
        </div>

        <div className="w-full flex-grow">
        <Image className="object-cover mx-auto border px-6 py-8 border-gray-500 rounded-md w-[240px] h-auto" src={device.img} width={500} height={300} alt={`${device.name}-image`} />
        
        </div>
    </div>
  )
}
