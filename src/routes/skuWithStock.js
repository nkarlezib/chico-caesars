const KoaRouter = require('koa-router');
const https = require('https');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const crypto = require('crypto')

const router = new KoaRouter();

const key = "O8vKmNc.6XL0K1";

router.get("skuWithStock.index",'/:id', async (ctx) => {
    const id = ctx.params.id;
    hmac = crypto.createHmac("sha1", key);
    hmac.update("GET"+String(id));
    hash = hmac.digest('base64');
    console.log("Method 3: ", "INTEGRACION grupo12:"+String(hash));
    console.log(id);

    const stock = await fetch('https://dev.api-bodega.2021-2.tallerdeintegracion.cl/bodega/skusWithStock?almacenId='+String(id), {
    headers: { "Content-Type": "application/json",
               "Authorization": "INTEGRACION grupo12:"+String(hash)
            }

  });
  const stocks = await stock.json();
  console.log(stocks);

})

module.exports = router;