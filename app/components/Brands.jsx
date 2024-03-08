'use client'

import DeviceThumbNail from "./DeviceThumbNail"

export default function Brands({brands, search, apple, iphone}) {
    console.log(brands, apple, search, iphone)
  return (
    <div className="px-2 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-2">
       {apple.map((device) => <DeviceThumbNail key={device.id} name={device.name} src={device.img} description={device.description} id={device.id} />)}
   
    </div>
  )
}
