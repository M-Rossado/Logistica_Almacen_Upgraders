const router = require("express").Router();
const {createNewOrder, searchOperatorOrder} = require("../../controllers/pedido.controller")
const {checkToken} = require("../../middleware/auth")

router.post("/neworder", checkToken, createNewOrder) //crea un nuevo pedido
router.get("/:email_manager", checkToken, searchOperatorOrder) // buscar por el email de un operario

module.exports = router