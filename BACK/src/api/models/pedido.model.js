const pool = require("../../utils/db")

const insertWarehouse = async ({location}) => {
    console.log("Intentando insertar almacen:", {location});
    try {
        const [result] = await pool.query("INSERT INTO warehouse (location) VALUES (?)", [location]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertId;
    } catch (error) {
        
    }
};

const selectbyLocation = async(location) =>{
    const result = await pool.query("SELECT * FROM warehouse WHERE location = ?", [location])
    return result[0];
}


module.exports = {insertWarehouse, selectbyLocation}
