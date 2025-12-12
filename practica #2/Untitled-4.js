// EJERCICIO 4

const lugarTuristico = {
  nombre: "Machu Picchu",
  ciudad: "Cusco",
  precioEntrada: 152,
  horario: "6:00 AM - 5:30 PM",
  calificaciones: [5, 4.5, 5, 4.8, 5, 4.9],
  
  promedioCalificaciones() {
    if (this.calificaciones.length === 0) return 0;
    const suma = this.calificaciones.reduce((acc, cal) => acc + cal, 0);
    return suma / this.calificaciones.length;
  },
  
  aplicarDescuento(porcentaje) {
    if (porcentaje < 0 || porcentaje > 100) {
      console.log("El porcentaje debe estar entre 0 y 100");
      return;
    }
    const descuento = this.precioEntrada * (porcentaje / 100);
    this.precioEntrada = this.precioEntrada - descuento;
    console.log(`Descuento aplicado. Nuevo precio: $${this.precioEntrada.toFixed(2)}`);
  }
};

// Ejemplo de uso:
console.log("=== LUGAR TURÍSTICO ===");
console.log(`Lugar: ${lugarTuristico.nombre}`);
console.log(`Ciudad: ${lugarTuristico.ciudad}`);
console.log(`Precio de entrada: $${lugarTuristico.precioEntrada}`);
console.log(`Horario: ${lugarTuristico.horario}`);
console.log(`Promedio de calificaciones: ${lugarTuristico.promedioCalificaciones().toFixed(2)}`);
lugarTuristico.aplicarDescuento(20);
console.log(`Precio después del descuento: $${lugarTuristico.precioEntrada}`);