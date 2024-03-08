
import RelatedDevices from "./RelatedDevices"
import SideBar from "./SideBar"
import Brands from "./Brands"

export default function SearchList({devices}) {
    console.log(devices)
  return (
    <div className="w-full flex justify-start space-x-3 items-start px-3 xl:px-7">
        <div className="hidden lg:flex flex-col space-y-6">
           <SideBar />
        </div>

        <div className="w-full h-screen scrollbar-hide overflow-y-scroll pt-4 flex-grow">
        <Brands apple={devices} />
        </div>
    </div>
  )
}
