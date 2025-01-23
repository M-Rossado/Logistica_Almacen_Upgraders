const router = require("express").Router();
const {createNewWarehouse} = require("../../controllers/pedido.controller")
const { checkRolJefe, checkRolOperario, checkRolEncargado, checkRolCamionero} = require("../../../utils/jwt")
const {checkToken} = require("../../middleware/auth")

router.post("/", checkToken, createNewWarehouse )// crea un nuevo almacén

module.exports = router