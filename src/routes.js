const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const almacenes = require('./routes/almacenes');
const moverStock = require('./routes/moverStock');
const skuWithStock = require('./routes/skuWithStock');
const stockalmacen = require('./routes/stockalmacen');


const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/almacenes', almacenes.routes());
router.use('/moverStock', moverStock.routes());
router.use('/skuWithStock',skuWithStock.routes());
router.use('/stockalmacen', stockalmacen.routes());


module.exports = router;
