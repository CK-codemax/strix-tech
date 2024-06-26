'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";



export default function SmallSearchBox() {

  const router = useRouter();
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  function handleSubmit(e){
   e.preventDefault()
   if(!query)return

    router.push(`/search/${query}`)
    setQuery('')
  }

  return (<div className="relative lg:hidden">
     <CiSearch onClick={() => setIsOpen((open) => !open)} className="text-[30px] text-gray-800" />
   
      <form onSubmit={(e) => handleSubmit(e)} className={`absolute ${isOpen ? 'translate-y-3 opacity-100 z-20' : 'translate-y-0 opacity-0 z-0'} -translate-x-6 lg:hidden flex items-center space-x-3 overflow-hidden border bg-white border-gray-400 rounded-full h-[47px] w-[300px] transition-all duration-500 ease-in-out pl-6`}>
      <input onChange={(e) => setQuery(e.target.value)} value={query} className="border-none outline-none text-gray-700 flex-grow h-full text-[14px] placeholder:text-gray-700" type='text' placeholder="Search Our Catalogue"/>
      <button onClick={(e) => handleSubmit(e)} className="bg-[#28d0e7] h-full w-[70px] hover:bg-gray-800 transition-colors duration-400 ease-in-out flex items-center justify-center">
         <CiSearch className="text-[30px] text-white" />
      </button>

  </form>
   
    </div>
  )
}
