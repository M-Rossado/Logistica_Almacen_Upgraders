const insertTrabajador = async ({nombre, apellidos, direccion, dni, email, contraseña, rol, almacenes_localizacion, camiones_matricula}) => {
    console.log("Intentando insertar evento:", {nombre, apellidos, direccion, dni, email, contraseña, rol, almacenes_localizacion, camiones_matricula});
    try {
        const [result] = await pool.query("INSERT INTO evento (nombre, apellidos, direccion, dni, email, contraseña, rol, almacenes_localizacion, camiones_matricula) VALUES (?,?,?,?,?,?,?,?,?)", [nombre, apellidos, direccion, dni, email, contraseña, rol, almacenes_localizacion, camiones_matricula]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertId;
    } catch (error) {
        
    }
};