// let nombre = 100;

// function calcDouble() {
//   let double = nombre * 2;
//   console.log(double);
// }

// calcDouble();

// nombre = 40;

// calcDouble();

// ***********************************

// function calcDouble(a, b) {
//   let double = (a + b) * 2;
//   console.log(double);
// }

// calcDouble(35, 15);



// ***********************************



// function calcDouble(nb) {
//   let double = nb * 2;
//   console.log(double);
// }

// calcDouble(100);

// calcDouble(40);


// function perimetreRectangle(longueur, largeur) {
//   let perimetre = 2 * longueur + 2 * largeur;
//   console.log("Le périmètre du rectangle est de " + perimetre + " cm2.");
// }

// perimetreRectangle(54, 109);

// perimetreRectangle(3, 5);

// perimetreRectangle(65, 776);


// let maFonction = function (a , b) {
//   let hypotenuse = Math.sqrt((a ** 2) + (b ** 2));
//   return hypotenuse;
// }

// console.log("Hypotenuse : " + maFonction(10, 11));

// let processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }

// // Only change code below this line
// console.log(processArg(2));

// let variable = ["boolean", "number", "bigint", "string", "symbol", "null", "undefined", "NaN"];
// let type = variable[2];

// switch (type) {
//   case "string": 
//     console.log("C'est une chaîne de caractères");
//     break;
//   case "number":
//     console.log("C'est un nombre");
//     break;
//   case "boolean":
//     console.log("C'est un boolean");
//     break;
//   case "bigint":
//     console.log("C'est un grand entier");
//     break;
//   case "symbol":
//     console.log("C'est un symbol");
//     break;
//   case "null":
//     console.log("C'est une valeur null");
//     break;
//   case "undefined":
//     console.log("C'est une valeur non definie")
//     break;
//   case "NaN":
//     console.log("C'est une valeur qui n'est pas un nombre");
//     break;

//   default:console.log("Unknown" + i);
//     break;
// }



// const nombre = new Number (1678);

// function isInteger(object) {

//   return Number.isInteger(object)

// }

// console.log(Number.isInteger(nombre.valueOf()));


// const nombre = new Number(3167830918);

// function expo(nb, precision) {

//   return nb.toExponential(precision);
// }

// console.log(expo(nombre, 4));

const stringPrimitif = "Bonjour";

console.log(stringPrimitif + " contient " + stringPrimitif.length + " digits");
console.log(typeof stringPrimitif);

const stringObj = new String("hello world");

console.log(stringObj.valueOf() + " Contenu dans la variable StringObj est de type : " +
 typeof stringObj + " et possède : " +
 stringObj.length + " digits");