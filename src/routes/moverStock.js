const KoaRouter = require('koa-router');
const https = require('https');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const crypto = require('crypto')
const router = new KoaRouter();

const key = "O8vKmNc.6XL0K1";


router.put('moverStock', '/', async (ctx) => {
  try {
    const body = ctx.request.body;
    const sku = body.sku;
    const cantidad = body.cantidad;
    hmac = crypto.createHmac("sha1", key);
    hmac.update("PUT"+String(sku)+String(cantidad));
    hash = hmac.digest('base64');
    console.log("Method 4: ", "INTEGRACION grupo12:"+String(hash));
    console.log(sku);
    console.log(cantidad);
    console.log(body);
    const response = await fetch('https://dev.api-bodega.2021-2.tallerdeintegracion.cl/bodega/fabrica/fabricarSinPago', {
      method: "PUT",
      headers: { "Content-Type": "application/json",
               "Authorization": "INTEGRACION grupo12:"+String(hash)
              },
      body :JSON.stringify({ "sku": sku,
              "cantidad": cantidad
            })
      });
    
    const responsee = await response.json();
    console.log(responsee);
  }
  catch (ValidationError) {
    ctx.throw(400);
  }
});

module.exports = router;
