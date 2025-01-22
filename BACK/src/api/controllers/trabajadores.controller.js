const {insertTrabajador, selectById} = require("../models/trabajadores.model")
const {createToken, checkRolJefe, checkRolEncargado, checkRolOperario, checkRolCamionero} = require("../../utils/jwt");

const createNewTrabajador = async (req, res) => {
    try {
        if(checkRolJefe(req.email.role)){
        const token = createToken(req.email);
        const data = req.body;
        const insertTrabajador = await insertTrabajador(data);
        if (insertTrabajador === -1) {
            return res.status(400).json({ msg: "No se realizó el insert" });
        }

        // Obtener el evento creado desde la base de datos
        const trabajadorCreated = await selectById(insertTrabajador);
        return res.status(200).json({ success: true, data: trabajadorCreated, token });
    } else {
        // Si el usuario no es jefe
        return res.status(403).json({ msg: "Acceso denegado: debe ser jefe" });
    }
    } catch (error) {
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

module.exports = {createNewTrabajador}