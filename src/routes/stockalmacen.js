const KoaRouter = require('koa-router');
const https = require('https');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const crypto = require('crypto')

const router = new KoaRouter();

const key = "O8vKmNc.6XL0K1";

router.get("stockAlmacen.index",'/:id/:sku', async (ctx) => {
    const id = ctx.params.id;
    const sku = ctx.params.sku;
    hmac = crypto.createHmac("sha1", key);
    hmac.update("GET"+String(id)+String(sku));
    hash = hmac.digest('base64');
    console.log("Method 3: ", "INTEGRACION grupo12:"+String(hash));
    console.log(id);
    console.log(sku);
    
    const stock = await fetch('https://dev.api-bodega.2021-2.tallerdeintegracion.cl/bodega/stock?almacenId='+String(id)+'&sku='+String(sku), {
    headers: { "Content-Type": "application/json",
               "Authorization": "INTEGRACION grupo12:"+String(hash)
            }
  });
  const stocks = await stock.json();
  console.log(stocks);

})

module.exports = router;