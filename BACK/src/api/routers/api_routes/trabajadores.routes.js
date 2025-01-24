const router = require("express").Router();
const {createNewWorker, createNewWarehouse, login} = require("../../controllers/trabajadores.controller")
const { checkToken} = require("../../../api/middleware/auth")

router.post("/newwarehouse", checkToken, createNewWarehouse )// crea un nuevo almacén
router.post("/newworker", checkToken, createNewWorker)
router.post("/login", login )


module.exports = router