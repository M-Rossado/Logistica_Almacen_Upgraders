const router = require("express").Router();
const {createNewOrder, searchOperatorOrder, getAllOrders} = require("../../controllers/order.controller")
const {checkToken} = require("../../middleware/auth")

router.post("/neworder", checkToken, createNewOrder) //crea un nuevo pedido
router.get("/:email_manager", checkToken, searchOperatorOrder) // buscar por el email de un operario
router.get("/searchOrderBy/:warehouse_location", checkToken, getAllOrders ) // buscar por localización de almacén


module.exports = router