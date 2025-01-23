const {insertWorker, selectById, selectByEmail} = require("../models/trabajadores.model")
const {createToken, checkRolJefe, checkRolEncargado, checkRolOperario, checkRolCamionero} = require("../../utils/jwt");

const createNewWorker = async (req, res) => {
    try {
        if(checkRolJefe(req.email.role)){
        const token = createToken(req.email);
        const data = req.body;
        const insertWorker = await insertWorker(data);
        if (insertTrabajador === -1) {
            return res.status(400).json({ msg: "No se realizó el insert" });
        }

        // Obtener el evento creado desde la base de datos
        const workerCreated = await selectById(workerCreated);
        return res.status(200).json({ success: true, data: workerCreated, token });
    } else {
        // Si el usuario no es jefe
        return res.status(403).json({ msg: "Acceso denegado: debe ser jefe" });
    }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

const register = async (req, res) => {
    try {
        const data = req.body;
        const selectedEmail = await selectByEmail(data.email);
        if(selectedEmail.length !==0){
            return res.status(400).json({msg: "El usuario ya existe"});
        }

        data.password = await bcrypt.hash(data.password, 10);
                const insertedWorker = await insertWorker(data);

        if(insertedUser === -1)
            return res.status(400).json({msg: "No se realizo el insert"});

        const workerCreated = await selectById(insertedWorker);
        return res.status(200).json({ success: true, data: workerCreated });
    } catch (error) {
        return res.status(500).json({ msg: "Error interno del servidor" });
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
module.exports = {createNewWorker,register, login }