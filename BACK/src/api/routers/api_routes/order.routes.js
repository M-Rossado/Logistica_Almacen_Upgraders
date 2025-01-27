const router = require("express").Router();
const {createNewOrder, searchOperatorOrder, getAllOrders, getOperator,getWarehouse,getOrder, acceptOrder, deliverOrder, updateOrder} = require("../../controllers/order.controller")
const {checkToken} = require("../../middleware/auth")

router.post("/neworder", checkToken, createNewOrder) //crea un nuevo pedido
router.get("/searchbyemail", checkToken, searchOperatorOrder) // buscar por el email de un operario
router.get("/searchorderby/location", checkToken, getAllOrders ) // buscar por localización de almacén
router.get("/managersearchby/:email_operator", checkToken, getOperator ) // jefe de equipo busca a los operarios camión
router.get("/managersearchbylocation/:warehouse_location", checkToken, getWarehouse ) //jefe de equipo busca almacenes
router.get("/managersearchbyid/:id_order", checkToken, getOrder ) // jefe de equipo busca pedidos
router.put("/accept/:id_order", checkToken, acceptOrder); // Aceptar o denegar un pedido
router.put("/deliver/:id_order", checkToken, deliverOrder); // Cambiar estado a "entregado"
router.put("/update/:id_order", checkToken, updateOrder); // Actualizar todos los parámetros del pedido

module.exports = router