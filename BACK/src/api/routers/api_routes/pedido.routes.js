const router = require("express").Router();
const {createNewWarehouse, createNewOrder, searchOperatorOrder} = require("../../controllers/pedido.controller")
const {checkToken} = require("../../middleware/auth")

router.post("/newwarehouse", checkToken, createNewWarehouse )// crea un nuevo almacén
router.post("/neworder", checkToken, createNewOrder) //crea un nuevo pedido
router.get("/:email_manager", checkToken, searchOperatorOrder) // buscar por el email de un operario

module.exports = router