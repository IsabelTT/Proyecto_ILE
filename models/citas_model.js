const { executeQuery, executeQueryOne } = require('../helpers')

//Create
//Read
//Upload
//Delete

const ReadByIddoctorDateHour = async (cita) => {
  const resultado = await executeQuery('SELECT * FROM citas WHERE id_medico=$1 AND fecha_cita=$2 AND hora_cita=$3', [cita.id_doctor, cita.date, cita.time]);
  return resultado.rows
}

//Metodo para crear cita
const CreateAppointment = async (cita) => {
  const resultado = await executeQuery('INSERT INTO citas (fecha_cita,id_medico,hora_cita,id_usuario) VALUES($1,$2,$3,$4)', [cita.date, cita.id_doctor, cita.time, cita.id_user]);
  return resultado.rows
}

//?Exportar funcion 
module.exports = {
  ReadByIddoctorDateHour,
  CreateAppointment
}