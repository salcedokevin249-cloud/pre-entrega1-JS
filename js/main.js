const nombre = prompt("¿Cuál es tu nombre?"); 
console.log("Hola, " + nombre + "!");

const año = parseInt(prompt("¿En que año naciste?")); 
console.log("Naciste en el año " + año + ".");

let ciudad = prompt("¿En qué ciudad vivís?"); 
console.log("Vivís en " + ciudad + ".");



const anioActual = 2026;
const calculoEdad = anioActual - año;

const mensaje = "Hola, " + nombre + "! Tenés " + calculoEdad + " años y vivís en " + ciudad + ".";
console.log(mensaje);
alert(mensaje);