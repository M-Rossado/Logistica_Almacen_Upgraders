const jwt = require("jsonwebtoken");

const createToken = (info) => {

  const data = {
    id_woker: info.id_worker,
    email: info.email,
  };
  return jwt.sign(data, process.env.SECRET_KEY_JWT, { expiresIn: "1h" });

}


const checkRolJefe = (role) => {
  return role === "jefe";  // Retorna true si el rol es "jefe", de lo contrario, false
};

const checkRolOperario = (role) => {
  return role === "operario";  // Retorna true si el rol es "operario", de lo contrario, false
};


const checkRolCamionero = (role) => {
  return role === "camionero";  // Retorna true si el rol es "camionero", de lo contrario, false
};

const checkRolEncargado = (role) => {
  return role === "encargado";  // Retorna true si el rol es "encargado", de lo contrario, false
};


module.exports = { createToken, checkRolEncargado, checkRolJefe, checkRolOperario, checkRolCamionero };