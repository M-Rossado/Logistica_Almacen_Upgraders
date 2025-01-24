const router = require("express").Router();
const {createNewWorker, login} = require("../../controllers/trabajadores.controller")
const {checkRolJefe, checkRolOperario, checkRolEncargado, checkRolCamionero} = require("../../../utils/jwt")
const { checkToken} = require("../../../api/middleware/auth")

router.post("/", checkToken, createNewWorker)
router.post("/login", login )


module.exports = router