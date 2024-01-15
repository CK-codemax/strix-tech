import { CiSearch } from "react-icons/ci";



export default function SearchBox() {
  return (
    <form className="flex items-center space-x-3 overflow-hidden border border-gray-400 rounded-full h-[47px] w-[470px] pl-6">
        <label  for='category' className="flex items-center space-x-2 pr-2 border-r border-gray-400 cursor-pointer h-full">
        <select className="outline-none text-center text-gray-700 text-[14px]" name="category" id="category">
            <option selected value="all">All Categories</option> 
            <option value="chargers">Chargers</option> 
            <option value="smartphones">Smartphones</option> 
            <option value="iphones">iPhones</option>            
        </select>
        </label>
       
        <input className="border-none outline-none text-gray-700 flex-grow h-full text-[14px] placeholder:text-gray-700" type='text' placeholder="Search Our Catalogue"/>
        <button className="bg-[#28d0e7] h-full w-[70px] hover:bg-gray-800 transition-colors duration-400 ease-in-out flex items-center justify-center">
           <CiSearch className="text-[30px] text-white" />
        </button>

    </form>
  )
}
