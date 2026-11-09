console.log('JS connecté')

const nom = 'Clavier'
let prix = 250

const recuperenom = document.getElementById("nom")
const recupereprix = document.getElementById("prix")

recuperenom.textContent = nom 
recupereprix.textContent = prix

prix = 199
recupereprix.textContent = prix

nom = 'Clavieer'
recuperenom.textContent = nom 

