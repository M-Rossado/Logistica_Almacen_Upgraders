const router = require("express").Router();
const {createNewWorker, login} = require("../../controllers/trabajadores.controller")
const { checkToken} = require("../../../api/middleware/auth")

router.post("/newworker", checkToken, createNewWorker)
router.post("/login", login )


module.exports = router