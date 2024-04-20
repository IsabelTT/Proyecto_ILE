const { executeQuery, executeQueryOne } = require('../helpers')

//Create
//Read
//Upload
//Delete

//Metodo para...
const ReadSpecialities = async () => {
  const resultado = await executeQuery('SELECT especialidad FROM medicos GROUP BY especialidad',[]);
  return resultado.rows
}

//Metodo para leer 
const ReadAll = async () => {
  const resultado = await executeQuery('SELECT * FROM medicos', []);
  return resultado.rows
}

//Metodo para leer 
const ReadBySpeciality = async (especialidad) => {
  const resultado = await executeQuery('SELECT * FROM medicos WHERE especialidad=$1', [especialidad]);
  return resultado.rows
}


//?Exportar funcion 
module.exports = {
  ReadSpecialities,
  ReadAll,
  ReadBySpeciality,
}