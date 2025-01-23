const router = require("express").Router();
const {createNewWarehouse} = require("../../controllers/pedido.controller")
const { checkRolJefe, checkRolOperario, checkRolEncargado, checkRolCamionero} = require("../../../utils/jwt")

router.post("/", createNewWarehouse )// crea un nuevo almacén

module.exports = router