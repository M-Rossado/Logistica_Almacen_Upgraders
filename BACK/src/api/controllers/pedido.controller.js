const {insertWarehouse, selectbyLocation} = require("../models/pedido.model")
const bcrypt = require("bcrypt");
const {createToken, checkRolJefe, checkRolEncargado, checkRolOperario, checkRolCamionero} = require("../../utils/jwt");

const createNewWarehouse = async (req, res) => {
    try {
        console.log(req.user)
        if(checkRolJefe(req.user.role)){
        const data = req.body;
        const insertedWarehouse = await insertWarehouse(data);
        if (insertedWarehouse === -1) {
            return res.status(400).json({ msg: "No se realizó el insert" });
        }

        // Obtener el evento creado desde la base de datos
        const warehouseCreated = await selectbyLocation(insertedWarehouse);
        return res.status(200).json({ success: true, data: warehouseCreated });
    } else {
        // Si el usuario no es jefe
        return res.status(403).json({ msg: "Acceso denegado: debe ser jefe" });
    }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

module.exports = {createNewWarehouse}