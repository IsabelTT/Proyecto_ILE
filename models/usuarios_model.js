const { executeQuery, executeQueryOne } = require('../helpers')

//Create
//Read
//Upload
//Delete

//Metodo para leer usuario por User y psw
const ReadByUser = async (user) => {
  const resultado = await executeQuery('SELECT * FROM usuarios WHERE usuario=$1 ', [user]);
  return resultado.rows
}

//Metodo para leer usuario por User y psw
const ReadByUserPsw = async (Usuario) => {
  const resultado = await executeQuery('SELECT * FROM usuarios WHERE usuario=$1 AND contrasena=$2', [Usuario.user, Usuario.psw]);
  return resultado.rows
}

//Metodo para crear usuario
const CreateUser = async (Usuario) => {
  const resultado = await executeQuery('INSERT INTO usuarios(usuario,contrasena,email,nombre,apellido_paterno, apellido_materno) VALUES($1,$2,$3,$4,$5,$6)', [Usuario.user, Usuario.psw, Usuario.email, Usuario.name, Usuario.lastname1, Usuario.lastname2]);
  return resultado.rows
}

//?Exportar funcion 
module.exports = {
  ReadByUser,
  ReadByUserPsw,
  CreateUser
}