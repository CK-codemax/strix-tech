'use client'

import DeviceThumbNail from "./DeviceThumbNail"

export default function Brands({brands, search, devices, iphone}) {
    console.log(brands, devices, search, iphone)
  return (
    <div className="grid grid-cols-6 gap-2">
       {devices.map((device) => <DeviceThumbNail key={device.id} name={device.name} src={device.img} description={device.description}  />)}
   
    </div>
  )
}
