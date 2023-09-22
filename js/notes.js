//------------------ USER PROFILE ---------
// alert("Ejercicios");

// Realiza los siguientes ejercicios en JS y entrega por medio de un link tu 
// repositorio que contiene los ejercicios resueltos.
// function userProfile(uName, uAge, uMovie1, uMovie2, uMovie3){
//     let i = 1;
//     let films = [uMovie1,uMovie2,uMovie3];
    
//     console.log(`User: ${uName}`);
//     console.log (`Age: ${uAge}`); 
//     console.log (`The film ${films[i]} is one of his favorites`); 
// }

// ------------------ HIGHEST NUMBER -------------
// let list=[];

// alert("Enter 10 numbers");
// let n1 = prompt("First number: ");
// let n2 = prompt("Second number: ");
// let n3 = prompt("Third number: ");
// let n4 = prompt("Fourth number: ");
// let n5 = prompt("Fifth number: ");
// let n6 = prompt("Sixth number: ");
// let n7 = prompt("Seventh number: ");
// let n8 = prompt("Eighth number: ");
// let n9 = prompt("Ninth number: ");
// let n10 = prompt("Tenth number: ");

// let arrayN = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10];


// function highestNumber (arrayN){
//     let max = arrayN[0];
//     for(let i = 0; i < arrayN.lenght; i++){
//         if (arrayN[i] > max){
//             max = arrayN[i];
//         }
//     }
//     console.log(`The highest number is: ${max}`);
// }

//------------------- FLAT ARRAY ------------------

// let multiDimension =
//     [1,
//         [2, 3,
//             [4, 5,
//                 [6]
//             ]
//         ]
//     ];

/**El método flat() crea una nueva matriz con todos los elementos de sub-array concatenados 
 * recursivamente hasta la profundidad especificada. */

// multiDimension.flat(2);

// multiDimension.reduce((acc,val) => acc.concat(val), []);
// // const flatSingle = (arr) => 

// console.log(multiDimension);

// function flatArray(multiDimension){
//     var flatEnd = [];
//     !(function flat(multiDimension){
//         multiDimension.forEach(function (el) {
//             if(multiDimension.isArray(el)) flat(el);
//             else flatEnd.push(el);
//          });
//     })(multiDimension);
//     return flatEnd;
//     // console.log(flatEnd);
// }