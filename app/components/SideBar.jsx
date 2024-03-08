
const categories = [
    'Smart Phones',
    'Content Creation',
    'Computer',
    'iPads',
    'Tablets',
    'Accessories',
    'Oraimo',
    'Smart Speakers',
    'Apple Airpods',
    'Gaming',
    'iWatches',
]

export default function SideBar() {
  return (
    <ul className=" hidden lg:flex flex-col lg:min-w-[237px] xl:min-w-[261px]  rounded-md overflow-hidden items-start xl:ml-1 border border-gray-400">
        {categories.map((category) => <li className="w-full last:border-none transition-colors duration-300 ease-in-out cursor-pointer hover:text-[#28d0e7] text-gray-700 tracking-widest text-[14px] border-b border-gray-400 flex items-center h-[40px] px-2" key={category}>{category}</li>)}
    </ul>
  )
}
