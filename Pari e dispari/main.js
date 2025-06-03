/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto. */

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const player_choice = prompt("Pari o dispari??");
console.log ("L'utente ha scelto " + player_choice);
alert ("L'utente ha scelto " + player_choice);

const player_number = Number(prompt("Inserisci un numero da 1 a 5"));
console.log ("L'utente ha scelto il numero " + player_number);
alert ("L'utente ha scelto il numero " + player_number);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function number_random () {
    return Math.floor(Math.random() * 5) + 1;
}

let computer_number = number_random ();
console.log ("Il computer ha avuto il numero " + computer_number);
alert ("Il computer ha avuto il numero " + computer_number);

// Sommiamo i due numeri.

let add_numbers = player_number + computer_number;
console.log ("La somma di " + player_number + " e " + computer_number + " è: " + add_numbers);
alert ("La somma di " + player_number + " e " + computer_number + " è: " + add_numbers);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).

function pari_dispari(number) {
    if (number % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}
let pari_o_dispari = pari_dispari(add_numbers);
console.log ("Il numero " + add_numbers + " è " + pari_o_dispari);
alert ("Il numero " + add_numbers + " è " + pari_o_dispari);

// Dichiariamo chi ha vinto.

if (player_choice === pari_o_dispari) {
    console.log ("Ha vinto l'utente");
    alert ("Ha vinto l'utente");
} else {
    console.log("Ha vinto il computer");
    alert ("Ha vinto il computer");
}
