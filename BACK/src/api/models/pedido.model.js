const insertAlmacenes = async ({localizacion, nombre_nave}) => {
    console.log("Intentando insertar almacen:", {localizacion, nombre_nave});
    try {
        const [result] = await pool.query("INSERT INTO almacenes (localizacion, nombre_nave) VALUES (?,?)", [localizacion, nombre_nave]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertId;
    } catch (error) {
        
    }
};