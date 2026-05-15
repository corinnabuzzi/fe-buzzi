// Esercizio 9.1 
// Senza eseguire il codice, prevedi l'output di questo programma, poi verificalo:
let x = 10; // inizializzazione variabile

const foo = () => {
  let x = 20; // ridefinizione variabile
  console.log(x); // stampa "nuova" variabile nello scope della funzione
};

foo(); // stampa 20 + si "ricorda" del 20 sopra il 10
console.log(x); // stampa 20

// Esercizio Esercizio 9.2
// Senza eseguire il codice, prevedi l'output:

// const a = 1;

// const esterna = () => {
//   const b = 2;

//   const interna = () => {
//     const c = 3;
//     console.log(a, b, c);
//   };

//   interna();
//   console.log(a, b);
// };

// esterna();
// console.log(a);