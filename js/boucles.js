console.log("Le fichier js à bien été chargé");

let cpt = 1;
while (cpt <10){
console.log("Bonjour" + cpt);
cpt++; /* cpt = cpt +1*/
}

let cpt1= 1;
while (cpt1 <=10){
    console.log(cpt1);
    cpt1++;
}

let cpt2 = 10;
while (cpt2>0){
    console.log(cpt2);
    cpt2--;
}

let cpt3 = 1;
let resultat = 0;
while (cpt3<=20){
    resultat = resultat + cpt3;
    console.log(resultat);
    cpt3++;
}
console.log("La somme des nombres de 1 à 20 => : " + resultat);


let cptProd = 1;
let resultatProduit = 1;

while (cptProd <= 100) {
    resultatProduit = resultatProduit * cptProd;
    cptProd++;
}
console.log("Le produit des nombres entre 1 et 100 : " + resultatProduit);

console.log("===========================================================");
console.log("La boucle do WHILE");

let compteur = 0;
do {
    console.log("Message : boucle infinie");
    compteur--;
}while(compteur>=10);

console.log("===========================================================");
console.log("La boucle FOR");

for (let i = 0; i < 10; i++) {
    console.log("Message : boucle FOR" + i);

}
let resultatAdd50_100 = 0 ;
for(let i = 50 ; i <= 100 ; i++){
    resultatAdd50_100 = resultatAdd50_100 + i;
}

console.log("La somme des nombres entre 50 et 100 : " + resultatAdd50_100);





/*
* while (condition){
* traitement
* }
*
*
* */