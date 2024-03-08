import Image from "next/image";
import SlideShow from "./SlideShow";
import SideBar from "./SideBar";

export default function TopSlide() {
  return (<>
  {/*extra large screens*/}
   <div className="hidden xl:flex justify-start xl:space-x-3 w-full items-start px-7">
      <SideBar />
     
    <SlideShow />

    <div className="hidden xl:flex space-y-5 flex-col">

    <div className="w-full xl:min-w-[280px] mt-8 overflow-hidden">
        <Image className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover h-auto rounded-md" src={'https://strix.com.ng/e/image/catalog/phones.jpg'} alt='home-image' width={855} height={559}/>
        </div>
        <div className="w-full xl:min-w-[280px] overflow-hidden">
        <Image className="w-full h-auto hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-md" src={'https://strix.com.ng/e/image/catalog/IMG_2440.jpeg'} alt='home-image' width={554} height={554}/>
        </div>

    </div>
    </div>

    {/*large screens*/}
    <div className="hidden lg:flex xl:hidden justify-start lg:space-x-3 w-full items-start px-3">
      <SideBar />
     
    <SlideShow />

    <div className="hidden lg:flex  space-y-5 flex-col">

    <div className="w-full lg:max-w-[330px] mt-8 overflow-hidden">
        <Image className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover h-auto rounded-md" src={'https://strix.com.ng/e/image/catalog/phones.jpg'} alt='home-image' width={855} height={559}/>
        </div>
        <div className="w-full lg:max-w-[330px] overflow-hidden">
        <Image className="w-full h-auto hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-md" src={'https://strix.com.ng/e/image/catalog/IMG_2440.jpeg'} alt='home-image' width={554} height={554}/>
        </div>

    </div>
    </div>
     

     {/*small screens*/}
    {/* <div className="hidden lg:flex lg:flex-col xl:hidden justify-start lg:space-y-3 w-full">
      <div className="flex space-x-3 items-start"> */}
      {/* <SideBar /> */}
      <div className="flex flex-col lg:hidden space-y-3 justify-between w-full ">
     
    <div className="w-full px-2 sm:px-5">
    <SlideShow />
    </div>
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 sm:items-start px-4 sm:px-2">

     <div className="w-full lg:max-w-[330px] mt-8 overflow-hidden">
   <Image className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover h-auto rounded-md" src={'https://strix.com.ng/e/image/catalog/phones.jpg'} alt='home-image' width={855} height={559}/>
    </div>
    <div className="w-full lg:max-w-[330px] overflow-hidden">
     <Image className="w-full h-auto hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-md" src={'https://strix.com.ng/e/image/catalog/IMG_2440.jpeg'} alt='home-image' width={554} height={554}/>
    </div>

     </div>
      </div>
     
    
     {/* <div className="w-full">
     <SlideShow /> */}
     {/* <div className="hidden lg:flex lg:flex-row space-x-3 justify-start items-start">

     <div className="w-full lg:max-w-[330px] mt-8 overflow-hidden">
        <Image className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover h-auto rounded-md" src={'https://strix.com.ng/e/image/catalog/phones.jpg'} alt='home-image' width={855} height={559}/>
    </div>
    <div className="w-full lg:max-w-[330px] overflow-hidden">
       <Image className="w-full h-auto hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-md" src={'https://strix.com.ng/e/image/catalog/IMG_2440.jpeg'} alt='home-image' width={554} height={554}/>
    </div>

     </div> */}
     {/* </div>
  */}
      {/* </div>
   
    </div> */}
         {/* <div className="flex flex-col justify-start space-y-4 flex-wrap xl:space-y-0 lg:flex-row lg:space-x-3 w-full xl:items-start px-3 xl:px-7">
      <SideBar />
     
    <SlideShow />

    <div className="hidden xl:flex space-y-5 flex-col">

    <div className="w-full lg:max-w-[330px] mt-8 overflow-hidden">
        <Image className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover h-auto rounded-md" src={'https://strix.com.ng/e/image/catalog/phones.jpg'} alt='home-image' width={855} height={559}/>
        </div>
        <div className="w-full lg:max-w-[330px] overflow-hidden">
        <Image className="w-full h-auto hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-md" src={'https://strix.com.ng/e/image/catalog/IMG_2440.jpeg'} alt='home-image' width={554} height={554}/>
        </div>

    </div>

    <div className="flex flex-col space-y-3 sm:space-y-0 xl:hidden space-x-3 sm:items-start sm:flex-row">

    <div className="w-full lg:max-w-[330px] mt-8 overflow-hidden">
        <Image className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover h-auto rounded-md" src={'https://strix.com.ng/e/image/catalog/phones.jpg'} alt='home-image' width={855} height={559}/>
        </div>
        <div className="w-full lg:max-w-[330px] overflow-hidden">
        <Image className="w-full h-auto hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-md" src={'https://strix.com.ng/e/image/catalog/IMG_2440.jpeg'} alt='home-image' width={554} height={554}/>
        </div>

    </div>
    </div> */}
    </>
  )
}
