//Calcula formula de Bhaskara

function claculaBhaskara() {
//Inputs para entradas    
let vlrA = document.getElementById('valor__de__a').value
let vlrB = document.getElementById('valor__de__b').value
let vlrC = document.getElementById('valor__de__c').value

//inputs para saídas
let resultDelta = document.getElementById('valor__de__delta')
let resultRaiz1 = document.getElementById('valor__raiz_1')
let resultRaiz2 = document.getElementById('valor__raiz_2')

let delta = Math.pow(vlrB,2) - 4 * vlrA * vlrC
console.log(delta)

let raiz1 = (-vlrB + Math.sqrt(delta)) / (2 * vlrA)
let raiz2 = (-vlrB - Math.sqrt(delta)) / (2 * vlrA)




//Saída de resultados
resultDelta.value = delta
resultRaiz1.value = raiz1
resultRaiz2.value = raiz2


}