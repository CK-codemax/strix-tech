export default function Icon({Icon, color}) {
  if(color === 'red')return (<div className="w-[30px] h-[30px] flex items-center justify-center">

<Icon className='text-[16px] cursor-pointer hover:text-red-400'/>
  </div>)
   
   return (<div className="w-[30px] h-[30px] flex items-center justify-center">

   <Icon className='text-[16px] hover:text-[#0096ff] cursor-pointer'/>
     </div>
  )
}
