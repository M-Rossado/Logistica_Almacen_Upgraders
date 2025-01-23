const pool = require("../../utils/db")




const insertarAlmacenes = async ({localizacion}) => {
    console.log("Intentando insertar almacen:", {localizacion});
    try {
        const [result] = await pool.query("INSERT INTO almacenes (localizacion) VALUES (?)", [localizacion]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertId;
    } catch (error) {
        
    }
};

const selectbyLocation = async(localizacion) =>{
    const result = await pool.query("SELECT * FROM almacenes WHERE localizacion = ?", [localizacion])
    return result[0]
}


module.exports = {insertarAlmacenes, selectbyLocation}
