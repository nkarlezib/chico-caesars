const KoaRouter = require('koa-router');
const https = require('https');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const crypto = require('crypto')

const router = new KoaRouter();

const key = "O8vKmNc.6XL0K1";

hmac = crypto.createHmac("sha1", key);
hmac.update("GET");
hash = hmac.digest('base64');
console.log(hash);

router.get("almacenes.index",'/', async (ctx) => {
 
  const res = await fetch('https://dev.api-bodega.2021-2.tallerdeintegracion.cl/bodega/almacenes', {
    headers: { "Content-Type": "application/json",
               "Authorization": "INTEGRACION grupo12:PULangO9FJxBF29wQfK/a2hRB20="
              }
  })
  const almacenes = await res.json();
  console.log(almacenes);
})

module.exports = router;
