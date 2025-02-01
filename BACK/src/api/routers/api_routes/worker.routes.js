const router = require("express").Router();
const { createNewWorker, createNewWarehouse, login, getAllWorkers, getAllTruckPlates } = require("../../controllers/worker.controller")
const { checkToken } = require("../../../api/middleware/auth")

// funcion para todos los usuarios
router.post("/login", login) // cualquier trabajador hace login

//funciones del jefe
router.post("/newwarehouse", checkToken, createNewWarehouse)// crea un nuevo almacén
router.post("/newworker", checkToken, createNewWorker) // crea un nuevo trabajador
router.get("/allworkers", checkToken, getAllWorkers) // ve un listado con todos los trabajadores
router.get("/alltruckplates", checkToken, getAllTruckPlates) // ve un listado con todos los trabajadores





module.exports = router