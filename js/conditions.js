console.log("Le fichier js à été chargé");

/*
Condition if
* if (condition){
* traitement
* }
* */

/*
* Condition if else
* if(condition) {
* traitement1
* }else{
* traitement 2
* }
* */
let nombre = 51;
if(nombre === 50) {
    console.log("50 = " + nombre);
}else{
    console.log("50 != " + nombre);

}

/*
*condition if else if .... else
* if (condition){
*   traitement 1
* } else if (condition2){
*   traitement 2
*   } else {
*   traitement x
*   }
* */

let age = 17;
if(age > 18) {
    console.log("Vous avez + de 18 ans");
}else if (age <18){
    console.log("Vous avez moins de 18 ans");
}else{
    console.log("Vous avez 18 ans");
}

/*
* > Strictement Supérieur
* < Strictement Inférieur
* >= Supérieur ou égal
* <= Inférieur ou égal
* === ou == égal
* !== ou !=
* */

let nom = "azertyuiop";
if (nom !== "azerty") {
    console.log("vous n'êtes pas azerty");
}else{
    console.log("Bonjour Mr azerty");
}
console.log (10%3);



/*Calculatrice*/

let nombre1 = prompt("Veuillez saisir le nombre 1");
let operation = prompt("Veuillez saisir un opérateur");
let nombre2 = prompt("Veuillez saisir le nombre 2");
let resultat = parseInt(nombre1) + parseInt(operation) + parseInt(nombre2);
if (operation === ("+")) {
} else if (operation ===("-")) {
    resultat = nombre1 - nombre2;
} else if (operation ===("*")) {
    resultat = nombre1 * nombre2;
} else if (operation ===("/")) {
    resultat = nombre1 / nombre2;
} else if (operation ===("%")) {
    resultat = nombre1 % nombre2;
}
console.log("résultat: " + nombre1 + " " + operation + " " + nombre2 + " = " + resultat);


/*------------------------------------------------------------------------------------------*/

let noteAvecSwitch = 10;
switch (noteAvecSwitch) {
    case 10:
        console.log("Vous avez eu 10");
        break;
    case 15:
        console.log("15");
        break;
    case 14:
        console.log("14");
        break;
    case 12:
        console.log("12");
        break;
    default:
        console.log("Aucune des valeurs");
        break;
}

/*
 * switch (variable) {
 *   case [valeur1]:
 *      traitement;
 *       break;
 *  case [valeur2]:
 *      traitement;
 *       break;
 *  default:
 *      traitement par defaut
 *      break;
 */

/*Notes et Mentions*/
let note = 10;
if (note >0 && note <=5) {
    console.log("A l'année prochaine");
}else if (note>5 && note <=10) {
    console.log("Presque");
}else if (note>10 && note <=15) {
    console.log("Bien");
}else if (note>15 && note <=20) {
    console.log("T.Bien");
}else{
    console.log('Impossible');}

/*
 * && ET
 * || OU
 */













