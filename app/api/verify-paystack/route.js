
https.request(options, res => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})


import { NextResponse } from 'next/server'

const https = require('https');

const SECRET_KEY = process.env.PAYSTACK_SECRET;

export async function GET(response) {
    const dataObj = await response.json();
    console.log(dataObj)

    
const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/verify/:reference',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${SECRET_KEY}`
    }
  }
    

//    const { email, amount } = productData
    return new Promise((resolve, reject) => {
      const req = https.request(options, (response) => {
        let data = '';
  
        response.on('data', (chunk) => {
          data += chunk;
        });
  
        response.on('end', () => {
          console.log(JSON.parse(data));
          // Ensure that the `res` object is used correctly here
          resolve(NextResponse.json(JSON.parse(data)));
        });
      }).on('error', (error) => {
        console.error(error);
        reject(error);
      });
  
      req.write(JSON.stringify(dataObj));
      req.end();
    });
  }
  

