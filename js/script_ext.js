console.log("Le fichier à bien été chargé");

var nombre = 12;

console.log(nombre + 12);

nombre = "coucou";
console.log(nombre + 12);

nombre = 'bonjour';
console.log(nombre);
/* Utiliser let plutôt que var*/

let chaineDeCars = "Une chaine avec let";
console.log(chaineDeCars);

/*Constante , ne peut être modifiée*/
const constante = 12;
nombre= 8;
console.log("constante");


let resultat = constante + nombre;
console.log("resultat: " + resultat);

/*++ = incrément de +1*/
resultat++;
/*-- = décrément de -1*/
resultat--;

console.log(resultat);

let test = true;
console.log(test);

let test1 = false;
console.log(test1);

let d = 12.4;
console.log(d * 2);

let nombreEntier =10;
let nombreDecimal =15.5;
let chaine ="bonsoir";
let s ='true';
let b =true;

console.log(typeof nombreEntier); /*number*/
console.log(typeof nombreDecimal); /*number*/
console.log(typeof chaine); /*string*/
console.log(typeof s); /*boolean*/
console.log(typeof b);/*string*/

