// 4.1: Scrivi una arrow function benvenuto che accetti un nome come parametro e restituisca la stringa "Benvenuto, [nome]!".
let benvenuto = nome => `Benvenuto, ${nome}!`
console.log(benvenuto("Luca"))
console.log()

// 4.2: Scrivi una arrow function rettangolo che accetti base e altezza come parametri e restituisca l'area del rettangolo.
const rettangolo = (base, altezza) => base * altezza
console.log(rettangolo(5,3))
console.log()

// 4.3: Scrivi una arrow function celsiusToFahrenheit che converta una temperatura da Celsius a Fahrenheit. La formula è: F = C × 9/5 + 32.
const celsiusToFahrenheit = (Celsius) => Celsius * 9/5 + 32
console.log(celsiusToFahrenheit(25))
console.log()
