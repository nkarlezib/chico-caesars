const KoaRouter = require('koa-router');
const https = require('https');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const crypto = require('crypto')
const router = new KoaRouter();

const key = "O8vKmNc.6XL0K1";

hmac = crypto.createHmac("sha1", key);
hmac.update("GET6167752d51533a000492234b");
hash = hmac.digest('base64');
console.log("Method 4: ", "INTEGRACION grupo12:"+String(hash));

router.post('moverStock', '/', async (ctx) => {
  try {
    const body = ctx.request.body;
    console.log(body);
    fetch('https://dev.api-bodega.2021-2.tallerdeintegracion.cl/bodega/almacenes', {
      method: "POST",
      headers: { "Content-Type": "application/json",
               "Authorization": "INTEGRACION grupo12:"+String(hash)
              }
      });
    }
  catch (ValidationError) {
    ctx.throw(400);
  }
});

module.exports = router;
