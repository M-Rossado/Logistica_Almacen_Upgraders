const {insertWarehouse, selectbyLocation, insertOrder, selectById, selectByEmail} = require("../models/pedido.model")
const bcrypt = require("bcrypt");
const {createToken, checkRolJefe, checkRolEncargado, checkRolOperario, checkRolCamionero} = require("../../utils/jwt");

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

const createNewOrder = async (req, res) => {
    try {
        if(checkRolOperario(req.user.role)){
            const data = req.body;
        const insertedNewOrder = await insertOrder (data);
        if (insertedNewOrder === -1) {
            return res.status(400).json({ msg: "No se realizó el insert" });
        }
         // Obtener el pedido creado desde la base de datos
         const orderCreated = await selectById(insertedNewOrder);
         return res.status(200).json({ success: true, data: orderCreated });
        } else {
            // Si el usuario no es operario
            return res.status(403).json({ msg: "Acceso denegado: debe ser operario" });
        }
     } catch (error) {
         console.log(error)
         return res.status(500).json({ msg: "Error en el servidor" });
     }
 };

 const searchOperatorOrder = async (req, res) => {
    const { email_manager } = req.params; // Extraer el email desde los parámetros de la URL

    try {
        // Verificación del rol
        if (!checkRolOperario(req.user.role)) {
            return res.status(403).json({ error: 'Acceso denegado. Debe ser operario.' }); // Si el rol no es adecuado
        }

        // Llamar a la función selectByEmail con el email_manager correcto
        const email = await selectByEmail(email_manager);

        if (email.length === 0) {
            return res.status(404).json({ error: 'Pedidos no encontrados' }); 
        }

        return res.json(result); // Devolver los pedidos en formato JSON

    } catch (error) {
        console.error('Error al buscar pedidos:', error); 
        return res.status(500).json({ error: 'Hubo un error al obtener los pedidos' }); 
    }
};



module.exports = {createNewWarehouse, createNewOrder, searchOperatorOrder}