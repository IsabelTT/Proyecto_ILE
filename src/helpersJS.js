function formatearDate2ddmmyyyy(data){
    const date = new Date(data);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let fullYear = date.getFullYear();
    
    //Usamos la interpolación de variables
    
    let fecha = `${day}/${month}/${fullYear}`;
    return fecha
}


function compararFecha(fechaComparar) {
    // Inicializamos a "fecha" como un objeto tipo "Date()".
    let fecha = new Date();
    // Transformamos a "fecha" en el formato "dd/mm/aaaa" de la fecha actual.
    let fechaActual = String(fecha.getDate()).padStart(2, '0') + '/' + String(fecha.getMonth() + 1).padStart(2, '0') + '/' + fecha.getFullYear();
    // Comparamos si la fechaActual es igual a la fecha que recibirá como parámetro la función
    if (fechaActual > fechaComparar) {
      // Si es igual retornará esto.
      return 'La fecha es igual.';
    } else {
      // Si no es igual retornará esto.
      return 'La fecha no es igual';
    }
  }

  module.exports = {
    compararFecha,
    formatearDate2ddmmyyyy 
  }