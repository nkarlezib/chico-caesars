const KoaRouter = require('koa-router');
const https = require('https');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const crypto = require('crypto')
const router = new KoaRouter();

const key = "O8vKmNc.6XL0K1";


router.post('moverstock', '/', async (ctx) => {
  try {
    const body = ctx.request.body;
    const productoId = body.productoId;
    const almacenId = body.almacenId;
    hmac = crypto.createHmac("sha1", key);
    hmac.update("POST"+String(productoId)+String(almacenId));
    hash = hmac.digest('base64');
    console.log("POST: ", "INTEGRACION grupo12:"+String(hash));
    const response = await fetch('https://dev.api-bodega.2021-2.tallerdeintegracion.cl/bodega/moveStock', {
      method: "POST",
      headers: { "Content-Type": "application/json",
               "Authorization": "INTEGRACION grupo12:"+String(hash)
              },
      body: JSON.stringify({ "productoId": productoId,
              "almacenId": almacenId })
    });
    const responsee = await response.json();
    console.log(responsee);
    }
    catch (ValidationError) {
    ctx.throw(400);
  }
});

module.exports = router;
