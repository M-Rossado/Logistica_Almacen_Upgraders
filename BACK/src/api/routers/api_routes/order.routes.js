const router = require("express").Router();
const { createNewOrder, searchOperatorOrder, getOrdersByLocation, getAllOrders, getOperator, getWarehouse, getOrder, acceptOrder, deliverOrder, updateOrder, searchTruckDriverOrder } = require("../../controllers/order.controller")
const { checkToken } = require("../../middleware/auth")

router.post("/neworder", checkToken, createNewOrder) //crea un nuevo pedido
router.get("/searchbyemail", checkToken, searchOperatorOrder) // buscar por el email de un operario    
router.get("/searchbytruckdriveremail", checkToken, searchTruckDriverOrder) //buscar por el email de un camionero
router.get("/managerseachorders", checkToken, getAllOrders) // buscar por localización de almacén (encargado)// debe ser jefe 
router.get("/searchorderby/location", checkToken, getOrdersByLocation) // buscar por localización de almacén (encargado)
router.get("/managersearchby/:email_operator", checkToken, getOperator) // jefe de equipo busca a los operarios camión
router.get("/managersearchbylocation/:warehouse_location", checkToken, getWarehouse) //jefe de equipo busca almacenes
router.get("/managersearchbyid/:id_order", checkToken, getOrder) // jefe de equipo busca pedidos
router.put("/accept/:id_order", checkToken, acceptOrder); // Aceptar o denegar un pedido (encargado)
router.put("/deliver/:id_order", checkToken, deliverOrder); // Cambiar estado a "entregado"
router.put("/update/:id_order", checkToken, updateOrder); // Actualizar todos los parámetros del pedido

module.exports = router