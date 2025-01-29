const router = require("express").Router();
const { createNewWorker, createNewWarehouse, login, getAllWorkers } = require("../../controllers/worker.controller")
const { checkToken } = require("../../../api/middleware/auth")

router.post("/newwarehouse", checkToken, createNewWarehouse)// jefe crea un nuevo almacén
router.post("/newworker", checkToken, createNewWorker) // jefe crea un nuevo trabajador
router.post("/login", login) // cualquier trabajador hace login
router.get("/allworkers", checkToken, getAllWorkers) //jefe ve todos los trabajadores


module.exports = router