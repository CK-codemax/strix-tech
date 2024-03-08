

const gsmarena = require('gsmarena-api');

export async function getDeviceDetails(id){
    const device = await gsmarena.catalog.getDevice(id)
    return device
}