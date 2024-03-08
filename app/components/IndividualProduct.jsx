import RelatedDevices from "./RelatedDevices"
import SideBar from "./SideBar"

export default function IndividualProduct({device}) {
    console.log(device)
  return (
    <div className="w-full flex justify-start items-start px-3 xl:px-7">
        <div className="hidden lg:flex flex-col space-y-6">
           <SideBar />
           <RelatedDevices />
        </div>
    </div>
  )
}
