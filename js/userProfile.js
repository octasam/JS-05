/**USER PROFILE
 * Write a program that prompts a user for their data: username, age, and a list 
 * of their favorite movies. Store the information and then showcase it in the console. 
 * Take note that the output for the films should add a 
 * small message like: 'The film {film} is one of my favorites'.
 */

//Se implemento prompt, para pedirle al usuario que indtroduza la informacion requerida

let uName = prompt("What's your username?: "); //Aparece ventana para que el usuario introduzca su username
// document.write(uName);
let uAge = prompt("Whats your age?: "); //Le pide la usuario que introduzca su edad
// document.write(parseInt(uAge));
let uMovie1 = prompt("Introduce first favorite movie: "); // Le pide al usuario introducir 3 peliculas favoritas
let uMovie2 = prompt("Introduce second favorite movie: ");
let uMovie3 = prompt("Introduce third favorite movie: ");
let films = [uMovie1,uMovie2,uMovie3]; //juntamos todas las peliculas favoritas del usuario en un array
let i = films.length-1; //contador

//Finalmente se muestra en consola, el username del usuario, su edad y alguno de sus filmes favoritos previamente introducidos
console.log(`User: ${uName}`);
console.log (`Age: ${uAge}`); 
console.log (`The film ${films[i]} is one of his favorites`); 
