// Controllo funzionamento javascript

console.log(`JS OK`)

// Recupero dell'elemento dal DOM

const askpassword = document.getElementById(`password-give`)
console.log(askpassword)

// Chiedo all' utente il suo nome (verifico)
// inserisco la risposta in una variabile

const askname = prompt(`Qual\'è il tuo nome?` , `Andrea`)
console.log(askname)


// Chiedo all' utente il suo cognome (verifico)
// inserisco la risposta in una variabile

const asklastname = prompt(`Qual\'è il tuo cognome?` , `Creazzi`)
console.log(asklastname)

// Chiedo all' utente il suo colore (verifico)
// inserisco la risposta in una variabile

const askcolor = prompt(`Qual\'è il tuo colore preferito?` , `Blu`)
console.log(askcolor)

//Inserisco numero password in variabile
//Verifica numero in console

const number = `21`;
console.log(number)

//Inserisco l'elemento nel DOM

askpassword.innerText = askname + asklastname + askcolor + number