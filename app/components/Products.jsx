import Link from "next/link";
import ProductList from "./ProductList";

export default function Products() {
  return (
    <div className="">
        <div className="sm:border-b flex flex-col mt-3 sm:mt-0 px-3 mb-4 w-full items-center space-y-3 sm:flex-row sm:items-center sm:space-y-0 justify-between sm:px-6 lg:pr-[200px] border-gray-200">
            <div className="flex flex-col items-center">
                <p className="capitalize text-[22px] lg:text-[28px] font-semibold text-nowrap">strix products</p>
                <div className="">
                    <div className="bg-[#28d0e7] w-[12px] h-[12px] translate-y-[7px] rounded-full" />
                    <div className="bg-[#28d0e7] w-[190px] translate-y-[1px] h-[2px]" />
                </div>
            </div>
            <div className="flex space-x-3 flex-nowrap sm:space-x-6">
                <Link className="text-gray-700 text-xs sm:text-sm hover:text-[#28d0e7] underline decoration-[#28d0e7]" href={'/'}>Catalogue</Link>
                <Link className="text-gray-700 text-xs sm:text-sm hover:text-[#28d0e7]" href={'/search/iphone'}>iPhones</Link>
                <Link className="text-gray-700 text-xs sm:text-sm hover:text-[#28d0e7]" href={'/search/samsung'}>Samsung</Link>
                <Link className="text-gray-700 text-xs sm:text-sm hover:text-[#28d0e7]" href={'/search/ipad'}>iPads</Link>
                <Link className="text-gray-700 text-xs sm:text-sm hover:text-[#28d0e7]" href={'/search/google'}>Google</Link>

            </div>
        </div>
        <ProductList />
    </div>
  )
}
