/*
Consegna:
- L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
- Ogni cella ha un numero progressivo, da 1 a 100.
- Ci saranno quindi 10 caselle per ognuna delle 10 righe.
- Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con “facile”=> 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con “medio” => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con “difficile” => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

// Dichiaro variabili
const btnCreate = document.querySelector(".btn-create");
const gridCreate = document.getElementById("grid-create");

btnCreate.addEventListener("click", onBtnCreate); // Richiamo la funzione click sul pulsante


// Funzione click sul pulsante
function onBtnCreate() {
    const numberOfCell = 100;

    const arrayCellNumber = createSequentialNumber(numberOfCell); // Richiamo la funzione che crea i numeri da inserire nelle celle
    printCell(arrayCellNumber, numberOfCell); // Richiamo la funzione che stampa il numero di celle richieste dall'utente
}

// Funzione che crea un numero progressivo da 1 a quello che seleziona l'utente
function createSequentialNumber(limitNumber) {
    const arraySequentialNumber = [];

    for (let i = 1; i <= limitNumber; i++) {
        arraySequentialNumber[i - 1] = i;
    }
    return arraySequentialNumber;
}

// Funzione che crea una singola cella inserendo un numero all'interno
function createSingleCell(arrayNumberInsert, i) {
    gridCreate.innerHTML +=
        `
        <div class="col-3 col-sm-3 col-md-2 me-3 ms-3 d-flex justify-content-center align-items-center fs-3 fw-bold border bg-primary m-2">${arrayNumberInsert[i]}</div>
        `;
}

// Funzione che stampa il numero di celle richieste dall'utente
function printCell(arrayCellNumberPrint, numberOfCellPrint) {
    let i = 0;

    // Stampo il numero di celle richieste dall'utente
    for (let z = 1; z <= numberOfCellPrint; z++) {
        createSingleCell(arrayCellNumberPrint, i); // Richiamo la funzione che crea una singola cella
        i++;
    }
}