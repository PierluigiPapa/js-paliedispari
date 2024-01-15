// Varibili per chiedere all'utente di scegliere pari o dispari e inserire un numero da 1 a 5
let pariDispari = prompt("Scegli un pari o dispari:");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

//Variabile per generare il numero casuale
let numeroPc = numeroRandom();

//Variabile per determinare il risultato
let risultato = numeroRisultato;

if (risultato === pariDispari) {
    console.log("Hai vinto")
} else{
    console.log("Hai perso");
}

//Funzione per generare un numero random da 1 a 5
function numeroRandom (){
    return Math.floor(Math.random()* 5) + 1;
}

// Funzione per stabilire la somma
function numeroRisultato() {
    let somma = numeroPc + numeroUtente;
    console.log("La somma dei due numeri è: "+ somma);
    //SE la somma è pari
    if (somma % 2 === 0){
        return "pari"
    //ALTRIMENTI la somma è dispari
    } else{
        return "dispari"
    }
}