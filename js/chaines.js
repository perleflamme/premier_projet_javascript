console.log("Le fichier lecture_clavier à bien été chargé");

let nombre = 207;
let chaine = "207";

console.log(nombre==chaine); //true
console.log(nombre===chaine); //false

let chaineBonjour = "bonjour";
console.log(chaineBonjour.length);
console.log(chaineBonjour.toLowerCase());
console.log(chaineBonjour.toUpperCase());
console.log(chaineBonjour.endsWith("e"));
console.log(chaineBonjour.startsWith("bo"));
if (chaineBonjour.startsWith("bon")){
    console.log("chaineBonjour commence par bon");
    }
if (chaineBonjour.endsWith("jour")){
    console.log("chaineBonjour fini par jour");
}
