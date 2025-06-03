/* Palidroma
Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma. */

// Chiedere all’utente di inserire una parola

const user_word = prompt("Inserisci una parola.");

console.log (user_word);

let reverse_user_word = "";

// Creare una funzione per capire se la parola inserita è palindroma

function palindroma(reverse_user_word) {
    for (let i = 0; i < user_word.length; i++) {
        reverse_user_word = user_word.split("").reverse("").join("");
        return (reverse_user_word = user_word.split("").reverse("").join(""));
    }
}

console.log (reverse_user_word = user_word.split("").reverse("").join(""));

if (user_word === reverse_user_word) {
    console.log("La parola " + user_word + " è palindroma");
    alert("La parola " + user_word + " è palindroma");
} else {
    console.log("La parola " + user_word + " non è palindroma");
    alert("La parola " + user_word + " non è palindroma");
}
