/** Highest number
Write a program that asks for 10 numbers. Using logical operators and any other 
javascript functions/structures you've seen before, determine and output the highest 
of those numbers.*/

//se le pide al usuario que introduzca la cantidad de segundos necesarios mediante 
//un prompt y se guarda en parseInt para indicar que sera un numero entero
let cantSec = parseInt(prompt(`Enter the amount of seconds needed until alarm is executed :`));
//se hace la operacion para convertir los segundos a milisegundos
let miliSec = cantSec*1000;

//funcion que va a mostrar el mensaje y la cantidad de segundos
function getAlarm(){
    console.log("A L A R M");
    alert(`Time for bed after ${cantSec} seconds`);
}

//El método global setTimeout() establece un temporizador que ejecuta una función o 
//una pieza de código específica una vez que expira el temporizador.
setTimeout(getAlarm, miliSec);
