const insertTrabajador = async ({nombre, apellidos, direccion, dni, email, contraseña, rol, almacenes_localizacion, camiones_matricula}) => {
    console.log("Intentando insertar trabajador:", {nombre, apellidos, direccion, dni, email, contraseña, rol, almacenes_localizacion, camiones_matricula});
    try {
        const [result] = await pool.query("INSERT INTO trabajadores (nombre, apellidos, direccion, dni, email, contraseña, rol, almacenes_localizacion, camiones_matricula) VALUES (?,?,?,?,?,?,?,?,?)", [nombre, apellidos, direccion, dni, email, contraseña, rol, almacenes_localizacion, camiones_matricula]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertId;
    } catch (error) {
        
    }
};

const selectById = async (idTabajadores) => {
    const result = await pool.query("SELECT * FROM trabajadores WHERE idTrabajadores = ?", [idTabajadores]);
    return result[0];
};

module.exports = {insertTrabajador, selectById}