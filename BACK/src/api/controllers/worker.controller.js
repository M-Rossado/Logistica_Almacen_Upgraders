const {insertWorker, selectById, selectByEmail, insertWarehouse, selectbyLocation} = require("../models/worker.model")
const bcrypt = require("bcrypt");
const {createToken, checkRolJefe} = require("../../utils/jwt");

const createNewWorker = async (req, res) => {
    try {
        console.log(req.user)
        if(checkRolJefe(req.user.role)){
        const data = req.body;
        data.password = await bcrypt.hash (data.password, 10);
        const insertedWorker = await insertWorker(data);
        if (insertedWorker === -1) {
            return res.status(400).json({ msg: "No se realizó el insert" });
        }

        // Obtener el trabajador creado desde la base de datos
        const workerCreated = await selectById(insertedWorker);
        return res.status(200).json({ success: true, data: workerCreated });
    } else {
        // Si el usuario no es jefe
        return res.status(403).json({ msg: "Acceso denegado: debe ser jefe" });
    }
    } catch (error) {
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const selectedEmail = await selectByEmail(email);

        if(selectedEmail.length === 0){
            return res.status(404).json({msg: "El usuario no existe"});
        }

        const same = await bcrypt.compare(password, selectedEmail[0].password);
        if(!same){
            return res.status(400).json({msg: "La contraseña es incorrecta"});
        }

        return res.status(200).json({token: createToken(selectedEmail[0])});


    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
};

const createNewWarehouse = async (req, res) => {
    try {
        if(checkRolJefe(req.user.role)){
        const data = req.body;
        const insertedWarehouse = await insertWarehouse(data);
        if (insertedWarehouse === -1) {
            return res.status(400).json({ msg: "No se realizó el insert" });
        }

        // Obtener el almacen creado desde la base de datos
        const warehouseCreated = await selectbyLocation(insertedWarehouse);
        return res.status(200).json({ success: true, data: warehouseCreated});
    } else {
        // Si el usuario no es jefe
        return res.status(403).json({ msg: "Acceso denegado: debe ser jefe" });
    }
    } catch (error) {
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};
module.exports = {createNewWorker, login, createNewWarehouse }