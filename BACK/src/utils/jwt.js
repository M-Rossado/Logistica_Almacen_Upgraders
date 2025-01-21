const jwt = require("jsonwebtoken");

const createToken = (info)=>{
   
const data = {
    idTrabajadores: info.idTrabajadores,
    email: info.email,
};
  return jwt.sign(data, process.env.SECRET_KEY_JWT, {expiresIn: "1h"});
 
}


const checkRolJefe = (role)=>{
  if(role !== "jefe"){
      return res.status(403).json({msg: "Debe ser jefe para acceder a esta ruta"});
  }
  return true;
};

const checkRolOperario = (role)=>{
  if(role !== "operario"){
      return res.status(403).json({msg: "Debe ser operario para acceder a esta ruta"});
  }
  return true;
};

const checkRolCamionero = (role)=>{
  if(role !== "camionero"){
      return res.status(403).json({msg: "Debe ser camionero para acceder a esta ruta"});
  }
  return true;
};

const checkRolEncargado = (role)=>{
  if(role !== "encargado"){
      return res.status(403).json({msg: "Debe ser encargado para acceder a esta ruta"});
  }
  return true;
};

module.exports = {createToken, checkRolEncargado, checkRolJefe, checkRolOperario, checkRolCamionero};