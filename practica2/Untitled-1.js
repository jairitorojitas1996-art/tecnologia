// EJERCICIO 1


function determinarClima(temperatura) {
  if (temperatura >= -10 && temperatura <= 15) {
    return "Frio";
  } else if (temperatura >= 16 && temperatura <= 25) {
    return "Templado";
  } else if (temperatura >= 26 && temperatura <= 40) {
    return "Calor";
  } else {
    return "Temperatura fuera de rango";
  }
}

// Ejemplos de uso:
console.log("=== DETERMINAR CLIMA ===");
console.log(`Temperatura = 20°C, Resultado = ${determinarClima(20)}`);
console.log(`Temperatura = 10°C, Resultado = ${determinarClima(10)}`);
console.log(`Temperatura = 30°C, Resultado = ${determinarClima(30)}`);
console.log(`Temperatura = 0°C, Resultado = ${determinarClima(0)}`);
console.log(`Temperatura = 45°C, Resultado = ${determinarClima(45)}`);