const pool = require("../../utils/db")

const insertWarehouse = async ({location}) => {
    console.log("Intentando insertar almacen:", {location});
        const [result] = await pool.query("INSERT INTO warehouse (location) VALUES (?)", [location]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertId;
   
};

const selectbyLocation = async(location) =>{
    const result = await pool.query("SELECT * FROM warehouse WHERE location = ?", [location])
    return result[0];
}

const insertOrder = async ({item_type, status, date_of_entry, date_of_departure, origin, destination, warehouse_location, truck_plate, worker_email, email_manager}) => {
    console.log("Intentando insertar perdido:", {item_type, status, date_of_entry, date_of_departure, origin, destination, warehouse_location, truck_plate, worker_email, email_manager});
    try {
        const [result] = await pool.query("INSERT INTO `order` (item_type, status, date_of_entry, date_of_departure, origin, destination, warehouse_location, truck_plate, worker_email, email_manager) VALUES (?,?,?,?,?,?,?,?,?,?)", [item_type, status, date_of_entry, date_of_departure, origin, destination, warehouse_location, truck_plate, worker_email, email_manager]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertId;
    } catch (error) {
        console.log(error)
    }
};

const selectById = async (id_order) => {
    const result = await pool.query("SELECT * FROM `order` WHERE id_order IS NULL", [id_order]);
    return result[0];
};

const selectByEmail = async (email_manager) => {
    const result = await pool.query("SELECT * FROM `order` WHERE email_manager = ?", [email_manager]);
    return result[0];
};


module.exports = {insertWarehouse, selectbyLocation, insertOrder, selectById, selectByEmail}
