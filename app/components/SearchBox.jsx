'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";



export default function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState('')

  function handleSubmit(e){
   e.preventDefault()
   if(!query)return

    router.push(`/search/${query}`)
    setQuery('')
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className=" hidden lg:flex items-center space-x-3 overflow-hidden border border-gray-400 rounded-full h-[47px] lg:w-[470px] pl-6">
        <p className="flex items-center text-center text-gray-700 text-[14px] space-x-2 pr-2 border-r border-gray-400 cursor-pointer h-full">All Categories</p>
        <input onChange={(e) => setQuery(e.target.value)} value={query} className="border-none outline-none text-gray-700 flex-grow h-full text-[14px] placeholder:text-gray-700" type='text' placeholder="Search Our Catalogue"/>
        <button onClick={(e) => handleSubmit(e)} className="bg-[#28d0e7] h-full w-[70px] hover:bg-gray-800 transition-colors duration-400 ease-in-out flex items-center justify-center">
           <CiSearch className="text-[30px] text-white" />
        </button>

    </form>
  )
}
