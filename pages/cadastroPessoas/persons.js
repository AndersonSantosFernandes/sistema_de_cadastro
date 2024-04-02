
const cargos = ['Selecione', 'Dev Front end', 'Dev back end', 'Dev full stack', 'Gerente de projeto', 'Engenheiro de software', 'Scrum master', 'Arquiteto de software']
listaEstados = document.getElementById('personCountry')
listaCargos = document.getElementById('personOcupation')

helpArrayPerson = []//Array auxiliar pessoas

function newPerson(){

let newName = document.getElementById('personNome')
let newLastName = document.getElementById('personLastName')
let newEmail = document.getElementById('personEmail')
let newOcupation = document.getElementById('personOcupation')

objectPerson = {name: newName.value, lastName: newLastName.value, email: newEmail.value, ocupation: newOcupation.value}


helpArrayPerson = JSON.parse(localStorage.getItem('personCad')) || []
helpArrayPerson.push(objectPerson)
localStorage.setItem('personCad', JSON.stringify(helpArrayPerson))

location.href = "cadastrarPessoas.html"
}

helpArrayOcupation = []//Array auxiliar cargos

function newCargo(){

let newOcupation = document.getElementById('newOcupation')

objectOcupation = {ocupation: newOcupation.value}

helpArrayOcupation = JSON.parse(localStorage.getItem('ocupations')) || []
helpArrayOcupation.push(objectOcupation)
localStorage.setItem('ocupations', JSON.stringify(helpArrayOcupation))

location.href = "cadastrarPessoas.html"
}

// Lista de cargos
const ocupationList = JSON.parse(localStorage.getItem('ocupations')) 

for (let j = 0; j < ocupationList.length; j++) {
    listaCargos.innerHTML +=
        `
    <option value="${ocupationList[j]['ocupation']}">${ocupationList[j]['ocupation']}</option>    
    `
}