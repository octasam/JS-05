/** Highest number
 * Write a program that asks for 10 numbers. Using logical operators and any other 
 * javascript functions/structures you've seen before, determine and output the highest 
 * of those numbers.
 */

alert("Enter 10 numbers"); //alerta para avisarle al usuario que tiene que introducir 10 numeros
let highestNumber = null; //variable para guardar el numero mayor
let arrayN = []; //array donde se van a guardar los 10 numeros

for (let i = 1; i <= 10; i++) {
  let uNumber = parseInt(prompt(`Enter ${i}st number:`)); // parseInt para que sea reconocido como numero entero el valor ingresado
  arrayN[i-1] = uNumber;
if (uNumber > highestNumber) {
    highestNumber = uNumber;
}
}

//Se muestra en consola el array con los 10 numeros introducidos por el usuario y cual es el numero mayor
console.log(`Array of 10 numbers: [${arrayN}]`); // Muestra todo el array con los 10 numeros
console.log(`The highest number is: ${highestNumber}`); // Muestra el numero mayor del array
