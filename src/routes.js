const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const almacenes = require('./routes/almacenes');
const fabricarSinPago = require('./routes/fabricarSinPago');
const skuWithStock = require('./routes/skuWithStock');
const stockalmacen = require('./routes/stockalmacen');
const moverstock = require('./routes/moverstock');


const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/almacenes', almacenes.routes());
router.use('/fabricarSinPago', fabricarSinPago.routes());
router.use('/skuWithStock',skuWithStock.routes());
router.use('/stockalmacen', stockalmacen.routes());
router.use('/moverstock', moverstock.routes());


module.exports = router;
