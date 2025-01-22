const router = require("express").Router();

router.use("/pedido", require("./api/pedido.router"));
router.use("/trabajadores", require("../middleware/auth"));

module.exports = router;