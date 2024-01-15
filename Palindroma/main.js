//Costante per creare il prompt dove l'utente inserisce la parola
const parolaMinuscola = prompt ("Inserisci una parola");

//Funzione per controllare la parola
function checkParolaPalindroma (parola) {
    if(parola.lenght === 0) {
        return false;
    }

    //Costante per inserire la parola tutta minuscola
    const parolaMinuscola = parola.toLowerCase();

    //Variabile per inserire la parola intera
    let inizio = 0;
    //Variabile per inserire la parola invertita
    let fine = parola.lenght -1;

    while (inizio < fine) {
        if (parolaMinuscola[inizio] !== parolaMinuscola[fine]) {
            return false; }
            inizio++;
            fine--;
        }
        return true;
}