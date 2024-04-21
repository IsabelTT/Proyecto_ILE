
//metodo para la mayoria
//values = [] es un parametro opcional, quiere decir que si no le paso ese parametro sera un array vacio []
const executeQuery = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve(result)
    });
  });

}

// metodo especial para el Id, que devuelve solo Un Elemento
const executeQueryOne = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      if (result.length === 0) return resolve(null);
      resolve(result[0]); //  devuelve el 1er elemento
    });
  });
}

//Este objeto se importara cuando hagamos require
module.exports = {
  executeQuery, executeQueryOne, //createToken
}
