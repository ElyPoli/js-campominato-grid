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

"use strict";

// Dichiaro variabili
const gridContainer = document.querySelector("#grid-container");
const selectDifficulty = document.getElementById("select-difficulty");
const btnNewGame = document.querySelector(".btn-new-game");
const btnRetry = document.querySelector(".btn-retry");

btnNewGame.addEventListener("click", onBtnNewGame);

// Click su "New Game"
function onBtnNewGame() {
    const numberOfCell = parseInt(selectDifficulty.value);

    btnNewGame.classList.add("disabled");

    gridPrint(numberOfCell);
}

// Crea singola cella
function cellCreate() {
    const cell = document.createElement("div");
    cell.classList.add("border");

    cell.addEventListener("click", cellClicked); // richiamo la funzione del click della cella

    return cell;
}

// Crea la griglia
function gridCreate(numberOfCell) {
    const grid = [];

    gameDifficulty(numberOfCell); // modifico la grandezza della griglia in base alla difficoltà selezionata

    for (let i = 0; i < numberOfCell; i++) {
        let cell = cellCreate();

        cell.textContent = i;
        grid.push(cell);
    }
    return grid;
}

// Aggiunge una classe in base al numero di celle da creare
function gameDifficulty(numberOfCell) {
    if (numberOfCell === 100) {
        gridContainer.classList.add("my-cel-width-easy");
    } else if (numberOfCell === 81) {
        gridContainer.classList.add("my-cel-width-medium");
    } else {
        gridContainer.classList.add("my-cel-width-hard");
    }
}

// Stampa la griglia
function gridPrint(numberOfCell) {
    const grid = gridCreate(numberOfCell);

    for (let i = 0; i < grid.length; i++) {
        gridContainer.append(grid[i]);
    }
}

// Click della cella
function cellClicked() {
    this.classList.add("my-cell");
    console.log(this.textContent);
}

// Pulsante retry
btnRetry.addEventListener("click", function () {
    location.reload();
})