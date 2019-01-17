console.log("Le fichier lecture_clavier à bien été chargé");
let nom = prompt("veuillez saisir votre nom");
let prenom = prompt('Veuillez saisir votre prénom')

console.log("Bonjour " + prenom + " " + nom);

let nombre = prompt ("veuillez saisir un nombre");
console.log(nombre);
console.log(nombre + 15);

let vraiNombre = Number(nombre);
let unAutreVraiNombre = parseInt(nombre);

console.log(vraiNombre + 15);
console.log(unAutreVraiNombre + 15);

/*calculatrice pour additionner via un pop-up*/
let nb1S = prompt("Veuillez saisir le nombre 1");
let nb2S = prompt("Veuillez saisir le nombre 2");
let resultat = parseInt(nb1S) + parseInt(nb2S);
alert("Resultat: " + resultat);
console.log(resultat);
