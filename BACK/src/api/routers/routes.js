const router = require("express").Router();

router.use("/pedido", require("./api_routes/pedido.routes"));
router.use("/trabajadores", require("./api_routes/trabajadores.routes"));

module.exports = router