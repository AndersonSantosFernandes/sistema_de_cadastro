

listaCargos = document.getElementById('personOcupation')

helpArrayPerson = []//Array auxiliar pessoas
// Inserir nova pessoa
function newPerson() {

    let newName = document.getElementById('personNome')
    let newLastName = document.getElementById('personLastName')
    let newEmail = document.getElementById('personEmail')
    let newOcupation = document.getElementById('personOcupation')

    // Evita salvar campos vazios
    if (newName.value.length < 2 || newLastName.value.length < 2 || newEmail.value.length < 2) {
        alert('Não deixe campos vazios')
    } else {

        // objeto que recebe dos inputs
        objectPerson = { name: newName.value, lastName: newLastName.value, email: newEmail.value, ocupation: newOcupation.value }


        helpArrayPerson = JSON.parse(localStorage.getItem('personCad')) || []
        helpArrayPerson.push(objectPerson)
        localStorage.setItem('personCad', JSON.stringify(helpArrayPerson))

        location.href = "cadastrarPessoas.html"
    }
}

helpArrayOcupation = []//Array auxiliar cargos

function newCargo() {

    let newOcupation = document.getElementById('newOcupation')

    if (newOcupation.value.length < 5) {
        alert('Descreva um cargo com no mínimo 5 letras')
    } else {

        objectOcupation = { ocupation: newOcupation.value }

        helpArrayOcupation = JSON.parse(localStorage.getItem('ocupations')) || []
        helpArrayOcupation.push(objectOcupation)
        localStorage.setItem('ocupations', JSON.stringify(helpArrayOcupation))

        location.href = "cadastrarPessoas.html"
    }
}


helpArrayUpdate = [] 

function updateOcupation(indiceOcupation){

    alert(indiceOcupation)
    // let updateOcupation = document.getElementById('newOcupation')

    helpArrayUpdate = JSON.parse(localStorage.getItem('ocupations'))

    // for (let u = 0; u < helpArrayUpdate.length; u++) {
       
    //     if(indiceOcupation == u){
    //         console.log(helpArrayUpdate[u])
    //         alert('editar com o id ', indiceOcupation)
    //     }
      
    // }

    // helpArrayUpdate  = updateOcupation
    // localStorage.setItem('ocupations', JSON.stringify(helpArrayUpdate))


}


// Lista de cargos
const ocupationList = JSON.parse(localStorage.getItem('ocupations'))

for (let j = 0; j < ocupationList.length; j++) {
    listaCargos.innerHTML +=
        `
    <option onclick="updateOcupation(${j})" value="${ocupationList[j]['ocupation']}">${ocupationList[j]['ocupation']}</option>  
      
    `
}