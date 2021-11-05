const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const almacenes = require('./routes/almacenes');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/almacenes', almacenes.routes());

module.exports = router;
