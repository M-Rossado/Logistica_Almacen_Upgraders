const pool = require("../../utils/db")

const selectbyLocation = async(warehouse_location) =>{
    const result = await pool.query("SELECT * FROM orders WHERE warehouse_location = ?", [warehouse_location])
    return result[0];
}

const insertOrder = async ({item_type, status, date_of_entry, date_of_departure, origin, destination, warehouse_location, truck_plate, worker_email, email_manager}) => {
    console.log("Intentando insertar perdido:", {item_type, status, date_of_entry, date_of_departure, origin, destination, warehouse_location, truck_plate, worker_email, email_manager});
    try {
        const [result] = await pool.query("INSERT INTO orders (item_type, status, date_of_entry, date_of_departure, origin, destination, warehouse_location, truck_plate, worker_email, email_manager) VALUES (?,?,?,?,?,?,?,?,?,?)", [item_type, status, date_of_entry, date_of_departure, origin, destination, warehouse_location, truck_plate, worker_email, email_manager]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertId;
    } catch (error) {
        console.log(error)
    }
};

const selectById = async (id_order) => {
    const result = await pool.query("SELECT * FROM orders WHERE id_order IS NULL", [id_order]);
    return result[0];
};

const selectByEmail = async (email_manager) => {
    const [rows] = await pool.query("SELECT * FROM orders WHERE email_manager = ?", [email_manager]);
    return rows;
};

module.exports = {selectbyLocation, insertOrder, selectById, selectByEmail}
