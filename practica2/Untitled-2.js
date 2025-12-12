// EJERCICIO 2


function fizzBuzz() {
  console.log("=== ALGORITMO FIZZ-BUZZ ===");
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}: FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i}: Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}: Buzz`);
    }
    // Si no es múltiplo de 3 ni de 5, no muestra nada
  }
}

// Ejecutar la función
fizzBuzz();