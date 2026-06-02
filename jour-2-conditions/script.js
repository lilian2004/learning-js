console.log("=== JOUR 2 : If/Else et Conditions ===");

// EXERCICE 1 : If basique
let age = 18;
if (age >= 18) {
    console.log("Tu peux voter");
} else {
    console.log("Tu es trop jeune");
}

// EXERCICE 2 : If/Else If/Else
let score = 75;
if (score >= 80) {
    console.log("Excellent !");
} else if (score >= 60) {
    console.log("Bien");
} else if (score >= 40) {
    console.log("Passable");
} else {
    console.log("Mauvais");
}

// EXERCICE 3 : Opérateurs logiques
let age2 = 25;
let hasLicense = true;
if (age2 >= 18 && hasLicense == true) {
    console.log("Tu peux conduire");
} else {
    console.log("Tu ne peux pas conduire");
}

// EXERCICE 4 : Ternaire
let age3 = 25;
let status = age3 >= 18 ? "Adulte" : "Enfant";
console.log(status);

let score2 = 75;
let resultat = score2 >= 50 ? "Bon" : "Mauvais";
console.log(resultat);

let estDay = true;
let lejour = estDay ? "jour" : "nuit";
console.log(lejour);

// EXERCICE 5 : Switch
let jour = "lundi";
switch (jour) {
    case "lundi":
        console.log("C'est lundi 😩");
        break;
    case "samedi":
    case "dimanche":
        console.log("C'est le weekend 🎉");
        break;
    default:
        console.log("C'est un jour normal");
}