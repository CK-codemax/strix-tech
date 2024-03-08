import Brands from './Brands';

const gsmarena = require('gsmarena-api');

export default async function ProductList() {
    const brands = await gsmarena.catalog.getBrands();
    const apple = await gsmarena.catalog.getBrand('apple-phones-48');
    const search = await gsmarena.deals.getDeals();
    const iphone = await gsmarena.search.search('iphone 15 pro max');
  return (
    <div>
        <Brands brands={brands} apple={apple} iphone={iphone} search={search} />
    </div>
  )
}
