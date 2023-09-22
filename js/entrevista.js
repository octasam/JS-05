/** BUSQUEDA BINARIA
 * 
 * numero objetivo: 3
 * 
 */

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39];
const param = 3;

function busquedaBinaria(param, sortedArray){
    let i = 0;
    let div;
    let longArray = sortedArray.length;

    // sortedArray [i] = 3 ?

    if(sortedArray[i] === param){
        console.log(`Numero encontrado en la posicion ${i}`)
    }
}