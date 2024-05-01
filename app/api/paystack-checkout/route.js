 import { NextResponse } from 'next/server'

const https = require('https');

const SECRET_KEY = process.env.PAYSTACK_SECRET;
//const SECRET_KEY = 'sk_test_7691f38e72363085d2919a0b10e19e71ca3e16f8';

const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "20000",
  "callback_url" : "http://localhost:3000"
});

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: `Bearer ${SECRET_KEY}`,
    'Content-Type': 'application/json'
  }
};
 
export async function POST(response) {
    const dataObj = await response.json();
    console.log(dataObj)
    

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
  

