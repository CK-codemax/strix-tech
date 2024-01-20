import Image from "next/image";
import SideBar from "./components/SideBar";
import Products from "./components/Products";
import SlideShow from "./components/SlideShow";


export default function page() {
  return (<>
   <div className="flex space-x-7 w-full items-start px-7">
      <SideBar />
     
     <SlideShow />

      <div  className="flex flex-col space-y-5 justify-center mt-8">
        <div className="max-w-[330px] overflow-hidden">

        <Image className="w-[330px] hover:scale-110 transition duration-500 cursor-pointer object-cover h-auto rounded-md" src={'https://strix.com.ng/e/image/catalog/phones.jpg'} alt='home-image' width={855} height={559}/>
        
        </div>
        <div className="max-w-[330px] overflow-hidden">
        <Image className="w-[330px] h-auto hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-md" src={'https://strix.com.ng/e/image/catalog/IMG_2440.jpeg'} alt='home-image' width={554} height={554}/>
       
        </div>

       
        </div>
    </div>
     <Products />
  </>
   
  )
}
