const pool = require("../../utils/db")

const insertWorker = async ({name, surname, address, dni, email, password, role, warehouse_location, truck_plate}) => {
    console.log("Intentando insertar trabajador:", {name, surname, address, dni, email, password, role, warehouse_location, truck_plate});
    try {
        const [result] = await pool.query("INSERT INTO worker (name, surname, address, dni, email, password, role, warehouse_location, truck_plate) VALUES (?,?,?,?,?,?,?,?,?)", [name, surname, address, dni, email, password, role, warehouse_location, truck_plate]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertId;
    } catch (error) {
        console.log(error)
    }
};

const insertWarehouse = async ({location}) => {
    console.log("Intentando insertar almacen:", {location});
        const [result] = await pool.query("INSERT INTO warehouse (location) VALUES (?)", [location]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertLocation;
   
};

const selectbyLocation = async(location) =>{
    const result = await pool.query("SELECT * FROM warehouse WHERE location = ?", [location])
    return result[0];
}
const selectById = async (id_worker) => {
    const result = await pool.query("SELECT * FROM worker WHERE id_worker = ?", [id_worker]);
    return result[0];
};

const selectByEmail = async (email) => {
    const result = await pool.query("SELECT * FROM worker WHERE email = ?",[email]);
    return result [0];
};

module.exports = {insertWorker, selectById, selectByEmail, insertWarehouse, selectbyLocation}