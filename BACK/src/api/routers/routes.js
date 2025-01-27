const router = require("express").Router();

router.use("/order", require("./api_routes/order.routes"));
router.use("/worker", require("./api_routes/worker.routes"));

module.exports = router