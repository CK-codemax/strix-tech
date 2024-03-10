import Image from "next/image"
import RelatedDevices from "./RelatedDevices"
import SideBar from "./SideBar"

export default function IndividualProduct({device}) {
    console.log(device)
  return (
    <div className="w-full flex justify-start space-x-3 items-start px-3 xl:px-7">
        <div className="hidden lg:flex flex-col space-y-6">
           <SideBar />
           <RelatedDevices />
        </div>

        <div className="w-full flex-grow">
        <Image className="object-cover mx-auto border px-6 py-8 border-gray-500 rounded-md w-[240px] h-auto" src={device.img} width={500} height={300} alt={`${device.name}-image`} />

        <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[1].category}</p>
      {device.detailSpec[1].specifications.map((spec) => <p key={spec.value}>
         {spec.name} : {spec.value}
       </p>)}
      </div>

      <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[0].category}</p>
        <p>{device.detailSpec[0].specifications[0].name}  :  {device.detailSpec[0].specifications[0].value}</p>
        <p>{device.detailSpec[0].specifications[1].name}  :  {device.detailSpec[0].specifications[1].value}</p>
        <p>{device.detailSpec[0].specifications[3].name}  :  {device.detailSpec[0].specifications[3].value}</p>
        <p>{device.detailSpec[0].specifications[5].name}  :  {device.detailSpec[0].specifications[5].value}</p>
        <p>{device.detailSpec[0].specifications[9].name}  :  {device.detailSpec[0].specifications[9].value}</p>
        <p>{device.detailSpec[0].specifications[13].name}  :  {device.detailSpec[0].specifications[13].value}</p>
      </div>
        {/* <p>{device.detailSpec[1].specifications[0].name}  :  {device.detailSpec[1].specifications[0].value}</p>
        <p>{device.detailSpec[1].specifications[1].name}  :  {device.detailSpec[1].specifications[1].value}</p>
         */}
       

       <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[2].category}</p>
      {device.detailSpec[2].specifications.map((spec) => <p key={spec.value}>
         {spec.name} : {spec.value}
       </p>)}
      </div>

      <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[3].category}</p>
      {device.detailSpec[3].specifications.map((spec) => <p key={spec.value}>
         {spec.name} : {spec.value}
       </p>)}
      </div>

      <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[4].category}</p>
      {device.detailSpec[4].specifications.map((spec) => <p key={spec.value}>
         {spec.name} : {spec.value}
       </p>)}
      </div>

      <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[5].category}</p>
      {device.detailSpec[5].specifications.map((spec) => <p key={spec.value}>
         {spec.name} : {spec.value}
       </p>)}
      </div>

      <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[6].category}</p>
      {device.detailSpec[6].specifications.map((spec) => <p key={spec.value}>
         {spec.name} : {spec.value}
       </p>)}
      </div>

      <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[7].category}</p>
      {device.detailSpec[7].specifications.map((spec) => <p key={spec.value}>
         {spec.name} : {spec.value}
       </p>)}
      </div>

      <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[8].category}</p>
      {device.detailSpec[8].specifications.map((spec) => <p key={spec.value}>
         {spec.name} : {spec.value}
       </p>)}
      </div>

      <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[9].category}</p>
      {device.detailSpec[9].specifications.map((spec) => <p key={spec.value}>
         {spec.name} : {spec.value}
       </p>)}
      </div>

      <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[10].category}</p>
      {device.detailSpec[10].specifications.map((spec) => <p key={spec.value}>
         {spec.name} : {spec.value}
       </p>)}
      </div>

      <div>
        <p className="font-bold text-xl my-3">{device.detailSpec[11].category}</p>
      {device.detailSpec[11].specifications.map((spec) => <p key={spec.value}>
         {spec.name} : {spec.value}
       </p>)}
      </div>

     {/* <p>
     {device.detailSpec[12].specifications[4].name} : {device.detailSpec[12].specifications[4].value}
       </p> */}

<p>
     {device.detailSpec[12].specifications[4].name} : {device.detailSpec[12].specifications[4].value.split('/')[0]}
       </p>
        </div>
    </div>
  )
}
