// multiDimension matrix

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
// flatArray = multiDimension.join(multiDimension);

// console.log(flatArray);

function flattenMatrix(matrix) { // funcion para operar la matriz
    let flattenedArray = []; // variable para guardar la matriz 1D
  
    function recursiveFlatten(arr) { // funcion recursiva para operar en cada nivel de la matriz
      for (let i = 0; i < arr.length; i++) { // este ciclo se va a detener hasta que terminemos de iterar en la longitud de cada subnivel
        if (Array.isArray(arr[i])) { // El método Array.isArray() determina si el valor pasado es un Array
          recursiveFlatten(arr[i]);
        } else {
          flattenedArray.push(arr[i]); // El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
        }
      }
    }
  
    recursiveFlatten(matrix);
    return flattenedArray; //La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.
  }
  
const flattenedArray = flattenMatrix(multiDimension); 

//Mostramos en consola la matriz multidimensional
console.log(`Multidimension matrix: ${multiDimension}`);
//Mostramos en consola la matriz 1D
console.log(`1D array: [${flattenedArray}]`);

