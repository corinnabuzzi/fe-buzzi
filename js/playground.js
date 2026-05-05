const persona {
    altezza: 180, // numeri
    peso: 65,
    nome: "Andrea", // stringhe
    coloreCapelli: "Marrone" 
    figlioUnico: false, // bool
    sorelle: ["Giada", "Paola"] // array 
    statoCivile: undefined 
    fareSport: (quanto)  => {
        console.log(persona.nome + "fa" + quanto + "Nuoto")
    }
}

// Accedere a proprietà: notazione punto
console.log(persona.nome)

// Accedere a proprietà: notazione quadra
console.log(persona["nome"])

// Modificare proprietà
persona.altezza = 182
console.log(persona.nome)

// Aggiungere proprietà
persona.ciboPreferito = "Pizza"

// Eliminare proprietà
delete persona.figlioUnico
console.log(persona)

// Verificare esistenza di una proprietà (trovare chiave, non valore) - operatore in, output bool
console.log("Esiste proprietà figlio unico?", "figlioUnico" in persona)

// Metodi - fareSport
persona.fareSport("Tantissimo")