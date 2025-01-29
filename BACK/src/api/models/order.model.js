const pool = require("../../utils/db")

const selectbyLocation = async (warehouse_location) => {
    const result = await pool.query("SELECT * FROM orders WHERE warehouse_location = ?", [warehouse_location])
    return result[0];
}

const insertOrder = async ({ item_type, status, date_of_entry, date_of_departure, destination, warehouse_location, worker_email, email_operator }) => {
    console.log("Intentando insertar perdido:", { item_type, status, date_of_entry, date_of_departure, destination, warehouse_location, worker_email, email_operator });
    try {
        const [result] = await pool.query("INSERT INTO orders (item_type, status, date_of_entry, date_of_departure, destination, warehouse_location, worker_email, email_operator) VALUES (?,?,?,?,?,?,?,?)", [item_type, status, date_of_entry, date_of_departure, destination, warehouse_location, worker_email, email_operator]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertId;
    } catch (error) {
        console.log(error)
    }
};

const selectById = async (id_order) => {
    const result = await pool.query("SELECT * FROM orders WHERE id_order = ?", [id_order]);
    return result[0];
};

const selectByEmail = async (email_operator) => {
    const [rows] = await pool.query("SELECT * FROM orders WHERE email_operator = ?", [email_operator]);
    return rows;
};

const selectByEmailTruckDriver = async (worker_email) => {
    const [rows] = await pool.query("SELECT * FROM orders WHERE worker_email = ?", [worker_email]);
    return rows;
};


const updateOrderStatus = async (id_order, status, comment) => {
    return await pool.query("UPDATE orders SET status = ?, comment = ? WHERE id_order = ?", [status, comment, id_order]);
};

const updateStatusTruckDriver = async (status, id_order) => {
    return await pool.query("UPDATE orders SET status = ? WHERE id_order = ?", [status, id_order]);
};

const updateOrderDetails = async (id_order, data) => {
    const { status, date_of_departure, destination, worker_email } = data;
    try {
        const [result] = await pool.query(
            `UPDATE orders SET status = IFNULL(?,status), date_of_departure = IFNULL(?,date_of_departure),
   destination = IFNULL(?,destination), worker_email = IFNULL(?,worker_email) WHERE id_order = ?`,
            [status, date_of_departure, destination, worker_email, id_order]);
        return result
    } catch (error) {
    }
};

const selectAllOrders = async () => {
    const result = await pool.query("SELECT * FROM orders");
    return result[0];
};

module.exports = { selectbyLocation, insertOrder, selectById, selectByEmail, updateOrderStatus, updateStatusTruckDriver, updateOrderDetails, selectByEmailTruckDriver, selectAllOrders }
