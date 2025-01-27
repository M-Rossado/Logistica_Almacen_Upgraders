const pool = require("../../utils/db")

const selectbyLocation = async(warehouse_location) =>{
    const result = await pool.query("SELECT * FROM orders WHERE warehouse_location = ?", [warehouse_location])
    return result[0];
}

const insertOrder = async ({item_type, status, date_of_entry, date_of_departure, destination, warehouse_location, worker_email, email_operator}) => {
    console.log("Intentando insertar perdido:", {item_type, status, date_of_entry, date_of_departure, destination, warehouse_location, worker_email, email_operator});
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

const updateOrderStatus = async (id_order, status, comment) => {
    return await pool.query("UPDATE orders SET status = ?, comment = ? WHERE id_order = ?", [status, comment, id_order]);
};

const updateOrderDetails = async (id_order, data) => {
    const { item_type, status, date_of_entry, date_of_departure, destination, warehouse_location, worker_email, email_manager } = data;
    return await pool.query("UPDATE orders SET item_type = ?, status = ?, date_of_entry = ?, date_of_departure = ?, destination = ?, warehouse_location = ?, worker_email = ?, email_manager = ? WHERE id_order = ?", 
    [item_type, status, date_of_entry, date_of_departure, destination, warehouse_location, worker_email, email_manager, id_order]);
};

module.exports = {selectbyLocation, insertOrder, selectById, selectByEmail, updateOrderStatus, updateOrderDetails}
