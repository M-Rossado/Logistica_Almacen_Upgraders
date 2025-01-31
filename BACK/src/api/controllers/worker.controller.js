const { insertWorker, selectById, selectByEmail, insertWarehouse, selectbyLocation, selectAllWorkers } = require("../models/worker.model")
const bcrypt = require("bcrypt");
const { createToken, checkRolJefe } = require("../../utils/jwt");

const createNewWorker = async (req, res) => {
    try {
        console.log(req.user)
        if (checkRolJefe(req.user.role)) {
            const data = req.body;
            data.password = await bcrypt.hash(data.password, 10);
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
        const { email, password } = req.body;
        const selectedEmail = await selectByEmail(email);

        if (selectedEmail.length === 0) {
            return res.status(404).json({ msg: "El usuario no existe" });
        }

        const same = await bcrypt.compare(password, selectedEmail[0].password);
        if (!same) {
            return res.status(400).json({ msg: "La contraseña es incorrecta" });
        }
        const token = createToken(selectedEmail[0]);
        const name = selectedEmail[0].name;
        const role = selectedEmail[0].role;
        const emailLS = selectedEmail[0].email;
        const warehouse_location = selectedEmail[0].warehouse_location;

        return res.status(200).json({
            msg: "inicio de sesion exitoso",
            token,
            role,
            name,
            email: emailLS,
            warehouse_location
           
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
};

const createNewWarehouse = async (req, res) => {
    try {
        if (checkRolJefe(req.user.role)) {
            const data = req.body;
            const insertedWarehouse = await insertWarehouse(data);
            if (insertedWarehouse === -1) {
                return res.status(400).json({ msg: "No se realizó el insert" });
            }

            // Obtener el almacen creado desde la base de datos
            const warehouseCreated = await selectbyLocation(insertedWarehouse);
            return res.status(200).json({ success: true, data: warehouseCreated });
        } else {
            // Si el usuario no es jefe
            return res.status(403).json({ msg: "Acceso denegado: debe ser jefe" });
        }
    } catch (error) {
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

const getAllWorkers = async (req, res) => {

    try {
        // Verificación del rol
        if (!checkRolJefe(req.user.role)) {
            return res.status(403).json({ error: 'Acceso denegado. Debe ser jefe.' }); // Si el rol no es adecuado
        }

        const result = await selectAllWorkers(req.user);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Trabajadores no encontrados' });
        }

        const filteredWorkers = result.filter(worker => worker.role !== 'jefe');

        return res.json(filteredWorkers)// Devolver los trabajadores en formato JSON menos el jefe

    } catch (error) {
        console.error('Error al buscar trabajadores:', error);
        return res.status(500).json({ error: 'Hubo un error al obtener los trabajadores' });
    }
};

module.exports = { createNewWorker, login, createNewWarehouse, getAllWorkers }