
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Nav from '@/app/components/Nav';
import SearchList from '@/app/components/SearchList';

const gsmarena = require('gsmarena-api');


export default async function page({params : {query = null}}) {

   const devices = await gsmarena.search.search(query);
   

  return (
    <div>
       <Header />
       <Nav />
       <div className='flex w-full items-start justify-center'>
         <SearchList devices={devices} />
       </div>
       <Footer />
    </div>
  )
}

export async function generateMetadata({params : {query = null}}) {
    
   
   
   
    return {
       title: query,
       description: `Search for ${query}`,
    };
   }
