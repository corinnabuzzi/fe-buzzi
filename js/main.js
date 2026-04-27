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

// --------------------------------------------------------------------------------------------------
// ARRAY!!!!!!!!!! 27-04-26
// per runnare il programma commentare tutto ciò che non interessa sennò casino

// creare array
const arrayString = ["ciao", "buongiorno", "hello"]
const arrayNum = [1, 2, 3]


const movies = [
    {
        title: "Matrix"
        year: 1999
    },
    {
        title: "Indiana Jones"
        year: 2001
    }
]

const arrayMisti = ["pippo", 2, true, {}]

// accedere a elementi
const movie = movies[1]
console.log(movie)

console.log("Lunghezza dell'array movies: ", movies.length())

// lunghezza array
console.log("ultimo film: ", movies[movies.length - 1])

// modificare array

// aggiungere nuovi elementi (push, unshift)

// aggiungere in fondo
movies.push({title: "Oppenheimer", year: 2023})
console.log("PUSH: ", movies)
console.log (movies.length - 1)

// aggiungere in testa
movies.unshift({title: "Mamma ho perso l'aereo", year: 1990})
console.log("UNSHIFT: ", movies)

// eliminare elementi (pop, shift)

// eliminare elemento in coda
movies.pop()
console.log(movies)

// eliminare in testa
movies.shift()
console.log(movies)

// rimuovere elementi in posizione precisa (splice(1,2))
movies.splice(0, 1)
console.log("SPLICE: ", movies)


// aggiungere elementi in posizione precisa (splice(1,0, 'nuovo elemento'))
movies.splice(1, 0, {title: "Harry Potter", year: 2003})
console.log("SPLICE: ", movies)

// accedere a un sottoArray (slice(1,3))
const sliceArray = [0, 1, 2, 3, 4, 5, 6]

console.log(sliceArray.slice(2, 5)) // voglio numeri dal 2 al 4. il secondo parametro è esclusivo!per questo 2,5

// unire array (concat)
const array1 = [1, 2, 3]

const array2 = [3, 4, 5]

const array3 = array1.concat(array2)

console.log(array3)

// verificare se un elemento è presente (includes)
console.log(array3.includes(6)) // l'output è true o false

// trovare posizione di specifico elemento (indexOf)
console.log(array3.indexOf(6)) // l'output è l'indice dell'elemento
// output -1: elemento non trovato.

// argomento saltato: join - trasformare array in stringa, output concatenazione array stringhe

// invertire ordine array (reverse): output nuovo array specularmente opposto
const reverseArray3 = array3.reverse()
console.log("REVERSE: ", reverseArray3)

// (ri)ordinare un array (sort): output nuovo array con elementi ordinati
// con stringhe
const arrayDisordinato = ["Pippo", "Alpha", "Gerry", "Bobo"]
console.log(arrayDisordinato.sort())

// con numeri
const arrayDisordinato2 = [9, 0, 25, 4, 3, 6, 7]
console.log(arrayDisordinato2.sort()) // array ordinato male: vede il 2 di 25 e lo ordina alfabeticamente come un 2

console.log(arrayDisordinato2.sort((a, b) => a - b)) // parametro FUNZIONE senza nome

// stampare ogni elemento con for loop
for(let i = 0; i < arrayDisordinato2.length; i++){
    console.log(arrayDisordinato2[i])
}

// sintassi concisa
for (const i in movies) {
    console.log(movies[i])
}


// metodo specifico degli array
movies.forEach((movie, i) => {
    console.log(i)
    console.log(movie.title)
}