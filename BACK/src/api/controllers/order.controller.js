const { insertOrder, selectById, selectByEmail, selectByEmailTruckDriver, selectbyLocation, updateOrderStatus, updateStatusTruckDriver, updateOrderDetails, selectAllOrders, selectAllWarehouse } = require("../models/order.model")
const { checkRolJefe, checkRolEncargado, checkRolOperario, checkRolCamionero } = require("../../utils/jwt");

const createNewOrder = async (req, res) => {
    try {
        if (checkRolOperario(req.user.role)) {
            const data = req.body;
            const insertedNewOrder = await insertOrder(data);
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
    try {
        // Verificación del rol
        if (!checkRolOperario(req.user.role)) {
            return res.status(403).json({ error: 'Acceso denegado. Debe ser operario.' }); // Si el rol no es adecuado
        }

        const result = await selectByEmail(req.user.email);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Pedidos no encontrados' });
        }
        return res.json(result); // Devolver los pedidos en formato JSON

    } catch (error) {
        console.error('Error al buscar pedidos:', error);
        return res.status(500).json({ error: 'Hubo un error al obtener los pedidos' });
    }
};

const searchTruckDriverOrder = async (req, res) => {
    try {
        // Verificación del rol
        if (!checkRolCamionero(req.user.role)) {
            return res.status(403).json({ error: 'Acceso denegado. Debe ser camionero.' }); // Si el rol no es adecuado
        }

        const result = await selectByEmailTruckDriver(req.user.email);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Pedidos no encontrados' });
        }
        return res.json(result); // Devolver los pedidos en formato JSON

    } catch (error) {
        console.error('Error al buscar pedidos:', error);
        return res.status(500).json({ error: 'Hubo un error al obtener los pedidos' });
    }
};

const getOrdersByLocation = async (req, res) => {

    try {
        // Verificación del rol
        if (!checkRolEncargado(req.user.role)) {
            return res.status(403).json({ error: 'Acceso denegado. Debe ser encargado.' }); // Si el rol no es adecuado
        }

        // Llamar a la función selectbyLocation con la localización del almacen
        const result = await selectbyLocation(req.user.warehouse_location);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Pedidos no encontrados' });
        }
        return res.json(result); // Devolver los pedidos en formato JSON

    } catch (error) {
        console.error('Error al buscar pedidos:', error);
        return res.status(500).json({ error: 'Hubo un error al obtener los pedidos' });
    }
};

const getOperator = async (req, res) => {
    const { email_operator } = req.params; // Extraer el email desde los parámetros de la URL
    try {
        // Verificación del rol
        if (!checkRolJefe(req.user.role)) {
            return res.status(403).json({ error: 'Acceso denegado. Debe ser jefe de equipo.' }); // Si el rol no es adecuado
        }

        // Llamar a la función selectByEmail con el email_operator correcto
        const result = await selectByEmail(email_operator);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Pedidos no encontrados' });
        }
        return res.json(result); // Devolver los pedidos en formato JSON

    } catch (error) {
        console.error('Error al buscar pedidos:', error);
        return res.status(500).json({ error: 'Hubo un error al obtener los pedidos' });
    }
};

const getWarehouse = async (req, res) => {
    const { warehouse_location } = req.params; // Extraer el almacén desde los parámetros de la URL
    try {
        // Verificación del rol
        if (!checkRolJefe(req.user.role)) {
            return res.status(403).json({ error: 'Acceso denegado. Debe ser jefe de equipo.' }); // Si el rol no es adecuado
        }

        // Llamar a la función selectbyLocation con la localización del almacen
        const result = await selectbyLocation(warehouse_location);


        if (result.length === 0) {
            return res.status(404).json({ error: 'Pedidos no encontrados' });
        }
        return res.json(result); // Devolver los pedidos en formato JSON

    } catch (error) {
        console.error('Error al buscar pedidos:', error);
        return res.status(500).json({ error: 'Hubo un error al obtener los pedidos' });
    }
};


const getOrder = async (req, res) => {
    const { id_order } = req.params; // Extraer el id desde los parámetros de la URL
    try {
        // Verificación del rol
        if (!checkRolJefe(req.user.role)) {
            return res.status(403).json({ error: 'Acceso denegado. Debe ser jefe de equipo.' }); // Si el rol no es adecuado
        }


        const result = await selectById(id_order);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Pedidos no encontrados' });
        }
        return res.json(result); // Devolver un pedido concreto en formato JSON

    } catch (error) {
        console.error('Error al buscar pedidos:', error);
        return res.status(500).json({ error: 'Hubo un error al obtener los pedidos' });
    }
};

const acceptOrder = async (req, res) => {
    const { id_order } = req.params;
    const { status, comment } = req.body; // status debe ser "en revision" o "denegado"

    try {
        // Verificación del rol
        if (!checkRolEncargado(req.user.role)) {
            return res.status(403).json({ msg: "Acceso denegado. Debe ser encargado de equipo." }); // Si el rol no es adecuado
        }

        // Llamar a la función para actualizar el estado del pedido
        const result = await updateOrderStatus(id_order, status, comment);
        if (result.affectedRows === 0) {
            return res.status(404).json({ msg: "Pedido no encontrado" });
        }
        return res.status(200).json({ msg: "Estado del pedido actualizado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

const deliverOrder = async (req, res) => {
    const { id_order } = req.params;
    const { status } = req.body; // status debe ser "entregado"

    try {
        // Verificación del rol
        if (!checkRolCamionero(req.user.role)) {
            return res.status(403).json({ msg: "Acceso denegado. Debe ser camionero." }); // Si el rol no es adecuado
        }

        // Cambiar el estado del pedido a "entregado"
        const result = await updateStatusTruckDriver(status, id_order);
        if (result.affectedRows === 0) {
            return res.status(404).json({ msg: "Pedido no encontrado" });
        }
        return res.status(200).json({ msg: "Pedido entregado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

const updateOrder = async (req, res) => {
    const { id_order } = req.params;
    const data = req.body; // Aquí se espera que se envíen todos los parámetros del pedido

    try {
        // Verificación del rol
        if (!checkRolOperario(req.user.role)) {
            return res.status(403).json({ msg: "Acceso denegado. Debe ser operario." }); // Si el rol no es adecuado
        }

        // Actualizar todos los parámetros del pedido
        const result = await updateOrderDetails(id_order, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ msg: "Pedido no encontrado" });
        }
        return res.status(200).json({ msg: "Pedido actualizado", data: result });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

const getAllOrders = async (req, res) => {

    try {
        // Verificación del rol
        if (!checkRolJefe(req.user.role)) {
            return res.status(403).json({ error: 'Acceso denegado. Debe ser jefe.' }); // Si el rol no es adecuado
        }

        const result = await selectAllOrders(req.user);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Pedidos no encontrados' });
        }
        return res.json(result); // Devolver los pedidos en formato JSON

    } catch (error) {
        console.error('Error al buscar trabajadores:', error);
        return res.status(500).json({ error: 'Hubo un error al obtener los trabajadores' });
    }
};

const getAllWarehouse = async (req, res) => {

    try {
        // Verificación del rol
        if (!checkRolJefe(req.user.role)) {
            return res.status(403).json({ error: 'Acceso denegado. Debe ser jefe.' }); // Si el rol no es adecuado
        }

        const result = await selectAllWarehouse(req.user);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Almacenes no encontrados' });
        }
        return res.json(result); // Devolver los almacenes en formato JSON

    } catch (error) {
        console.error('Error al buscar trabajadores:', error);
        return res.status(500).json({ error: 'Hubo un error al obtener los almacenes' });
    }
};
module.exports = { createNewOrder, searchOperatorOrder, getAllOrders, getOrdersByLocation, getOperator, getWarehouse, getOrder, acceptOrder, deliverOrder, updateOrder, searchTruckDriverOrder, getAllWarehouse }