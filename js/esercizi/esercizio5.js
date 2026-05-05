// 5.1: Crea un array con i nomi di 5 tuoi amici. Stampa il primo, l'ultimo e la lunghezza dell'array.
const amici = ["Mario", "Luigi", "Wario", "Waluigi", "Yoshi"]
console.log(amici[0])
console.log(amici[amici.length - 1])
console.log(amici.length)
console.log(  )

// 5.2: Dato un array di numeri, scrivi una funzione che restituisca la somma di tutti gli elementi.
const numeri = [1, 2, 3, 4, 5]
const sommaArray = (numeri) => {
    let somma = 0
    for (let i = 0; i < numeri.length; i++) {
        somma += numeri[i]
    }
    return somma
}
console.log(sommaArray(numeri))
console.log(  )

// 5.3: Dato un array di numeri, scrivi una funzione che restituisca il valore massimo.
const maxArray = (array) => {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(maxArray([3, 7, 2, 8, 9]))



// 5.4: Dato un array di numeri, scrivi una funzione che restituisca un nuovo array contenente solo i numeri pari.

// 5.5: Scrivi una funzione che accetti un array e un valore, e restituisca quante volte quel valore appare nell'array.

// 5.6: Scrivi una funzione che accetti un array di numeri e restituisca la media aritmetica.

// 5.7: Scrivi una funzione che accetti un array e restituisca un nuovo array senza elementi duplicati.

// 5.8: Scrivi una funzione che accetti due array e restituisca un array con gli elementi comuni (intersezione).

// 5.9: Scrivi una funzione che accetti un array di stringhe e restituisca l'array ordinato per lunghezza delle stringhe (dalla più corta alla più lunga).

// 5.10: Scrivi una funzione che accetti un array e lo "ruoti" di N posizioni verso destra. Ad esempio, [1, 2, 3, 4, 5] ruotato di 2 posizioni diventa [4, 5, 1, 2, 3].

// 5.11: Scrivi una funzione che accetti un array di numeri e restituisca un oggetto con le proprietà min, max, media e somma.

// 5.12: Scrivi una funzione che "appiattisca" un array multidimensionale di un livello. Ad esempio, [[1, 2], [3, 4], [5]] diventa [1, 2, 3, 4, 5]. Non usare flat().

// 5.13: Scrivi una funzione che verifichi se un array è un palindromo (si legge uguale da sinistra a destra e da destra a sinistra).

// 5.14: Scrivi una funzione che, dato un array di numeri, restituisca un array dove ogni elemento è la somma cumulativa fino a quel punto. Ad esempio, [1, 2, 3, 4] diventa [1, 3, 6, 10].

// 5.15: Scrivi una funzione che accetti un array e restituisca un nuovo array con gli elementi in ordine casuale (shuffle).

// 5.16: Scrivi una funzione che accetti un array di numeri e restituisca il secondo valore più grande.

// 5.17: Scrivi una funzione che accetti un array e lo divida in sotto-array di dimensione N. Ad esempio, [1, 2, 3, 4, 5] con N=2 diventa [[1, 2], [3, 4], [5]].

// 5.18: Scrivi una funzione che accetti due array ordinati di numeri e restituisca un unico array ordinato (merge di due array ordinati).

// 5.19: Scrivi una funzione che accetti un array e restituisca un array con tutti gli elementi che appaiono più di una volta.

// 5.20: Scrivi una funzione che accetti un array di numeri e restituisca la differenza tra il valore massimo e il valore minimo (range).

// 5.21: Scrivi una funzione che accetti un array di numeri e restituisca la coppia di elementi la cui somma è più vicina a zero.

// 5.22: Scrivi una funzione che accetti un array e un numero N, e restituisca gli N elementi più frequenti.

// 5.23: Scrivi una funzione che accetti un array di stringhe e restituisca un array dove le stringhe adiacenti duplicate sono state rimosse. Ad esempio, ["a", "a", "b", "b", "b", "a"] diventa ["a", "b", "a"].

// 5.24: Scrivi una funzione che generi tutte le coppie possibili (senza ripetizione) dagli elementi di un array. Ad esempio, [1, 2, 3] produce [[1,2], [1,3], [2,3]].

// 5.25: Scrivi una funzione che accetti due array e restituisca la differenza simmetrica (elementi che sono in uno dei due array ma non in entrambi).

// 5.26: Scrivi una funzione che, dato un array di numeri, trovi la sotto-sequenza contigua con la somma più grande e restituisca quella somma. Ad esempio, in [-2, 1, -3, 4, -1, 2, 1, -5, 4] la risposta è 6 (da [4, -1, 2, 1]).

// 5.27: Scrivi una funzione che accetti un array di numeri e restituisca true se l'array è ordinato in modo crescente, false altrimenti.

// 5.28: Scrivi una funzione che implementi la ricerca binaria: accetta un array ordinato e un valore da cercare, e restituisce l'indice del valore o -1 se non trovato.