const router = require("express").Router();
const { createNewOrder, searchOperatorOrder, getOrdersByLocation, getAllOrders, getOperator, getWarehouse, getOrder, acceptOrder, deliverOrder, updateOrder, searchTruckDriverOrder } = require("../../controllers/order.controller")
const { checkToken } = require("../../middleware/auth")


// funciones de los operarios 
router.post("/neworder", checkToken, createNewOrder) // crea un nuevo pedido
router.get("/searchbyemail", checkToken, searchOperatorOrder) // buscar por el email sus pedidos
router.put("/update/:id_order", checkToken, updateOrder); // puede actualizar todos los parámetros del pedido

//funciones de los camioneros 
router.get("/searchbytruckdriveremail", checkToken, searchTruckDriverOrder) //buscar por el email los pedidos que tienen asignados
router.put("/deliver/:id_order", checkToken, deliverOrder); // cambia el estado a "entregado"

//funciones de los encargados
router.get("/searchorderby/location", checkToken, getOrdersByLocation) // buscar por localización de su almacén 
router.put("/accept/:id_order", checkToken, acceptOrder); // acepta o deniega un pedido pudiendo poner un comentario 

//funciones del jefe
router.get("/managerseachorders", checkToken, getAllOrders) // buscar todos los pedidos
router.get("/managersearchby/:email_operator", checkToken, getOperator) // busca el listado de pedidos con el email del operario que los creo
router.get("/managersearchbylocation/:warehouse_location", checkToken, getWarehouse) // busca por almacen
router.get("/managersearchbyid/:id_order", checkToken, getOrder) // busca un pedido concreto por su id


module.exports = router
