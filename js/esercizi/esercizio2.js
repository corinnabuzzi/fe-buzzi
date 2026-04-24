// 2.1: Dichiara una variabile nome con il tuo nome e una costante annoNascita con il tuo anno di nascita. Stampa entrambi i valori.

let nome = "Corinna"
const annoNascita = 2005

console.log(nome, annoNascita)
console.log( )

// 2.2: Dichiara due variabili numeriche a e b. Stampa il risultato della loro addizione, sottrazione, moltiplicazione, divisione e modulo.
let a = 3
let b = 2

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log( )

// 2.3: Dato un prezzo di 49.90 e uno sconto del 20%, calcola e stampa il prezzo scontato.
let prezzo = 49.90
let sconto = 20

let prezzoScontato = prezzo - (prezzo * sconto / 100)

console.log(prezzoScontato)
console.log( )

// 2.4: Dichiara variabili di tipi diversi (number, string, boolean, undefined, null) e usa typeof per stampare il tipo di ciascuna.
let numero = 10
let stringa = "ciao"
let bool = true
let undefined
let vuota = null

console.log(typeof numero)
console.log(typeof stringa)
console.log(typeof bool)
console.log(typeof undefined)
console.log(typeof vuota)
console.log( )

// 2.5: Scrivi un programma che converta la stringa "123" in un numero, gli aggiunga 7 e stampi il risultato.
let str = "123"
let num = Number(str)
console.log(num + 7)
console.log(  )
