import Link from "next/link";
import ProductList from "./ProductList";

export default function Products() {
  return (
    <div className="">
        <div className="border-b flex items-center justify-between pl-6 pr-[200px] border-gray-200">
            <div className="flex flex-col items-center">
                <p className="capitalize text-[28px] font-semibold">strix products</p>
                <div className="">
                    <div className="bg-[#28d0e7] w-[12px] h-[12px] translate-y-[7px] rounded-full" />
                    <div className="bg-[#28d0e7] w-[190px] translate-y-[1px] h-[2px]" />
                </div>
            </div>
            <div className="flex space-x-6">
                <Link className="text-gray-700 hover:text-[#28d0e7] underline decoration-[#28d0e7]" href={'/'}>New Arrivals</Link>
                <Link className="text-gray-700 hover:text-[#28d0e7]" href={'/'}>iPhones</Link>
                <Link className="text-gray-700 hover:text-[#28d0e7]" href={'/'}>Samsung</Link>
                <Link className="text-gray-700 hover:text-[#28d0e7]" href={'/'}>iPads</Link>
                <Link className="text-gray-700 hover:text-[#28d0e7]" href={'/'}>Oraimo</Link>

            </div>
        </div>
        <ProductList />
    </div>
  )
}
