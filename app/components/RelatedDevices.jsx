import RelatedList from './RelatedList';

const gsmarena = require('gsmarena-api');

export default async function RelatedDevices() {
    const apple = await gsmarena.catalog.getBrand('apple-phones-48');
  return (
    <RelatedList apple={apple} />
  )
}
