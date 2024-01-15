// Varibili per chiedere all'utente di scegliere pari o dispari e inserire un numero da 1 a 5
let pariDispari = prompt("Scegli un pari o dispari:");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
// console.log (sceltaUtente, numeroUtente)

//Funzione per generare un numero random da 1 a 5
function numeroRandom (){
    return Math.floor(Math.random()* 5) + 1;
}


