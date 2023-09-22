/**Factorial
Write a program that prompts for an intenger number n.
 Where  1 <= n. Solve this using recursion. 
*/

//Mediante un prompt se le pide al usuario introducir un numero entero para conocer su factorial
let nFact = parseInt(prompt(`Enter an integer number to know his factorial: `));
let opFact;

//funcion que va a realizar la operacion factorial de dicho numero
function fact(nFact){
    if (nFact === 0 ){ //valida si el valor introducido es igual a 1, y si es verdadero entonces retorna 1
        return 1;
    } else{ //Falso, entonces retorna la operacion factorial de dicho numero
        return nFact * fact(nFact-1);
    }
}
console.log(nFact);

//finalmente, si el numero que se introdujo es mayor a cero, se le asigna a la variable resultado el valor del factorial previamente calculado
// y se muestra en consola el mensaje "factorial del numero n es igual a n!"
if(nFact > 0){
    let resultFact = fact(nFact);
    console.log(`Factorial of ${nFact} is: ${resultFact}`)
}
