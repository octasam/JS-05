/**Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have 
    spaces and punctuation). Figure out if the sentence/word is a palindrome or not. 
    Ignoring punctuation, spaces and capitalized letters. 
*/

//Mediante un prompt se le pide al usuario introducir una palabra o frase
let phrase = prompt("Enter the word or sentece: ");
phrase = phrase.toLowerCase(); //se hace minusculas todo lo que introdujo el usuario

let words = phrase.split(/\s+/); //separamos cada letra
let joinWords = words.join(''); //unimos cada letra
console.log(words);
console.log(joinWords);

let lengthPhrase = joinWords.length;//longitud de las letras juntas
let l = lengthPhrase-1;
let lastLetter = [];

for(let i=0; i<=lengthPhrase; i++){//ciclo para operar sobre las letras ya unidas
    if(joinWords[i] === joinWords[l]){ //valida si la primer letra es igual a la ultima letra
        lastLetter[i] = joinWords[l]; //en caso de que si, se asigna esa letra en otro array
        l--;//contador para recorrer el array de izq a der
    }
}

let joinLastWords = lastLetter.join('');//ponemos en una variable las letras juntas
console.log(lastLetter);

//finalmente validamos si al re-escribir la frase/palabra de izq a der es igual que escrita de der a izq
if(joinLastWords === joinWords){
    console.log(`The word or phrase: [${phrase}] is a palindrome`);//Verdadero, se muestra en consola, la frase y que en efecto es un palindromo
}else{
    console.log(`The word or phrase: [${phrase}] is NOT a palindrome`);//Falso, se muestra en consola la frase y que NO ES un palindromo.
}
