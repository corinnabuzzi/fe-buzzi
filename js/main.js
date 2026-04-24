// 20-04 LEZIONE 1:

// 1: console.log()
console.log("Ciao!")

console.log(6)

console.log(`ho ${3+30} anni`);


// 2: variabili
let nome = "Gerry"

const cognome = "Scotti"

// 2.1: data types
const number = 3

const float = 3.4

const string = "Ciao"

const bool = true

const array = ["Scotti", 4, true]

const object = {
    stringa: "abc",
    numero: 7,
    booleano: false
}

const nullo = null

const indefinito = undefined

const non_numero = NaN
// esempio: 9 * "ABC" = NaN

// 2.2 operatori:
// + - * / % = != == && || < > <= >= ++ -- += -= *=


// --------------------------------------------------------------------------------------------------

// 24-04 LEZIONE 2:
// strutture di controllo

const eta = 18

// if - else - else if
if (eta >= 18) {
    console.log("Maggiorenne")
}

else if (eta >= 90) {
    console.log("ultra novantenne")
}

else {
    console.log("Minorenne")
}

// operatore ternario
const voto = 8
let valutazione


if (voto >= 6){
    valutazione = "sufficiente"
}
else {
    valutazione = "insufficiente"
}

// condizione ? se vero : se falso
const valutazioneConcisa = voto >= 6 ? "sufficiente" : "insufficiente"

// switch e case
const stringa = "pippo"
switch (true){
    case stringa.length > 4:
        console.log("stringa maggiore di 4")
    case stringa.length > 3:
        console.log("stringa maggiore di 3")
    default:
        console.log("pluto")
}

// ciclo for: (inizializzazione; condizione; incremento)
for (let = 0; i < 7; i++){
    console.log(i)
}

// ciclo while
const contatore = 10

while (contatore > 0){
    console.log("contatore: ", contatore)
    contatore --;
}

// do while
do {
    console.log ("contatore: ", contatore)
} while (contatore > 0)

// funzioni - function nomeFunzione(parametri) {} + chiamata
function pippo() {
    console.log("Pippo")
}

pippo()

// arrow functions - costante () => { } + chiamata

// Nome
const arrowNome= (nome) => {
    console.log(`Ciao ${nome}!`)
}

arrowNome("Corinna")


// Somma
const sum = (a, b) => {
    const somma = a + b
    return somma
}

const risultatoSomma = sum()

console.log(risultatoSomma)

// Differenza
const diff = (a, b) => a - b;
const risultatoDiff = diff(a, b)
console.log(risultatoDiff)