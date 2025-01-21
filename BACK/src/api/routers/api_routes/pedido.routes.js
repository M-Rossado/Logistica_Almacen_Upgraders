const router = require("express").Router();
const {checkToken} = require("../../middleware/auth");
const {checkRolJefe, checkRolOperario, checkRolEncargado, checkRolCamionero} = require("../../../utils/jwt")
