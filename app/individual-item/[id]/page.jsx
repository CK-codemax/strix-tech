import Head from 'next/head';
import Header from '@/app/components/Header';
import IndividualProduct from '@/app/components/IndividualProduct';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';

const gsmarena = require('gsmarena-api');


export default async function page({params : {id = null}}) {

    const device = await gsmarena.catalog.getDevice(id)
    const apple = await gsmarena.catalog.getBrand('apple-phones-48');

  return (
    <div>
       <Header />
       <Nav />
       <div className='flex w-full items-start justify-center'>
          <IndividualProduct device={device} apple={apple} />
       </div>
       <Footer />
    </div>
  )
}

export async function generateMetadata({params : {id = null}}) {
    
    const device = await gsmarena.catalog.getDevice(id);
   
   
    return {
       title: `${id}`.toUpperCase(),
       description: `${device.name} specifications and descriptions page`,
    };
   }
