import Head from 'next/head';
import Header from '@/app/components/Header';
import IndividualProduct from '@/app/components/IndividualProduct';
import Nav from '@/app/components/Nav';

const gsmarena = require('gsmarena-api');


export default async function page({params : {id = null}}) {

    const device = await gsmarena.catalog.getDevice(id)

  return (
    <>
       <Header />
       <Nav />
       <div className='flex w-full h-screen items-start justify-center'>
          <IndividualProduct device={device} />
       </div>
    </>
  )
}

export async function generateMetadata({params : {id = null}}) {
    
    const device = await gsmarena.catalog.getDevice(id);
   
   
    return {
       title: `${id}`.toUpperCase(),
       description: `${device.name} specifications and descriptions page`,
    };
   }
