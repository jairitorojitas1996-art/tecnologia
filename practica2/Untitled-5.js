// EJERCICIO 5


class Hotel {
  constructor(nombre, ciudad, habitacionesDisponibles) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.habitacionesDisponibles = habitacionesDisponibles;
  }
  
  reservar(cantidad) {
    if (cantidad <= 0) {
      console.log("La cantidad debe ser mayor a 0");
      return false;
    }
    
    if (cantidad > this.habitacionesDisponibles) {
      console.log(`No hay suficientes habitaciones disponibles. Solo quedan ${this.habitacionesDisponibles}`);
      return false;
    }
    
    this.habitacionesDisponibles -= cantidad;
    console.log(`Reserva exitosa de ${cantidad} habitación(es). Quedan ${this.habitacionesDisponibles} disponibles`);
    return true;
  }
  
  liberar(cantidad) {
    if (cantidad <= 0) {
      console.log("La cantidad debe ser mayor a 0");
      return false;
    }
    
    this.habitacionesDisponibles += cantidad;
    console.log(`Se liberaron ${cantidad} habitación(es). Total disponibles: ${this.habitacionesDisponibles}`);
    return true;
  }
  
  info() {
    return `Hotel: ${this.nombre} | Ciudad: ${this.ciudad} | Habitaciones disponibles: ${this.habitacionesDisponibles}`;
  }
}

// Ejemplo de uso:
console.log("=== CLASE HOTEL ===");
const miHotel = new Hotel("Gran Hotel Plaza", "Cochabamba", 50);
console.log(miHotel.info());
miHotel.reservar(5);
miHotel.reservar(3);
miHotel.liberar(2);
console.log(miHotel.info());
miHotel.reservar(60); 