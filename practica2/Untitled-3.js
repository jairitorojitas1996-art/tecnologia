// EJERCICIO 3


function mostrarFechaActual() {
  const fecha = new Date();
  
  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  const diaSemana = diasSemana[fecha.getDay()];
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const año = fecha.getFullYear();
  
  return `${diaSemana}, ${dia} de ${mes} del ${año}`;
}

// Ejemplo de uso:
console.log("=== FECHA ACTUAL ===");
console.log(mostrarFechaActual());