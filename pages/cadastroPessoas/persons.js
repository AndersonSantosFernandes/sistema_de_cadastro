

listaCargos = document.getElementById('personOcupation')

helpArrayPerson = []//Array auxiliar pessoas
// Inserir nova pessoa
function newPerson() {

    let newName = document.getElementById('personNome')
    let newLastName = document.getElementById('personLastName')
    let newEmail = document.getElementById('personEmail')
    let newOcupation = document.getElementById('personOcupation')
    let newCep = document.getElementById('meucep')
    let newStreet = document.getElementById('logradouro')
    let newNumber = document.getElementById('numero')
    let newBairro = document.getElementById('bairro')
    let newCity = document.getElementById('cidade')
    let newState = document.getElementById('estado')
    
    // Evita salvar campos vazios
    if (newName.value.length < 2 || newLastName.value.length < 2 || newEmail.value.length < 2) {
        // alert('Não deixe campos vazios')
        Swal.fire({
            icon: "error",
            // title: "Oops...",
            text: "Não deixe campos vazios",

        });

    } else {

        // objeto que recebe dos inputs
        objectPerson = { name: newName.value, lastName: newLastName.value, email: newEmail.value, ocupation: newOcupation.value,
        cep: newCep.value, street: newStreet.value, number: newNumber.value, bairro: newBairro.value, city: newCity.value, state: newState.value }


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
        // alert('Descreva um cargo com no mínimo 5 letras')

        Swal.fire({
            icon: "error",
            // title: "Oops...",
            text: "Descreva um cargo com no mínimo 5 letras",
        });

    } else {

        objectOcupation = { ocupation: newOcupation.value }

        helpArrayOcupation = JSON.parse(localStorage.getItem('ocupations')) || []
        helpArrayOcupation.push(objectOcupation)
        localStorage.setItem('ocupations', JSON.stringify(helpArrayOcupation))

        location.href = "cadastrarPessoas.html"
    }
}




// Lista de cargos
const ocupationList = JSON.parse(localStorage.getItem('ocupations'))
let updateCargos = document.getElementById('updateCargo')
for (let j = 0; j < ocupationList.length; j++) {
    //Lista para cadastrar
    listaCargos.innerHTML +=
        `
    <option onclick="updateOcupation(${j})" value="${ocupationList[j]['ocupation']}">${ocupationList[j]['ocupation']}</option>  
      
    `

    //Lista para editar que aparece no segundo modal

    //O botão neste trecho envia o número de índice para a função "updateOcupation()"
    updateCargos.innerHTML +=
        `
    <tr>
       
        <td><input type="text" name="nameUpdate" value="${ocupationList[j]['ocupation']}"  style="height:25px;" ></td>
        <td><button onclick="updateOcupation('${j}')" class="btn btn-primary">Salvar</button></td>
        <td><button onclick="deleteOcupation('${j}')" class="btn btn-primary">Deletar</button></td>
    </tr>
    
    `

}


helpArrayUpdate = []
//Valor do índice vem do botão salvar
function updateOcupation(indiceOcupation) {
    let nameUpdates = document.getElementsByName('nameUpdate')

    helpArrayUpdate = ocupationList //Recebe o objeto completo 

    for (let u = 0; u < ocupationList.length; u++) {

        //Procura o objeto com o mesmo numero de ídice
        if (u == indiceOcupation) {

            //Altera o valor da chave do ídice encontrado 
            helpArrayUpdate[u]['ocupation'] = nameUpdates[u].value

            // Retorna o objeto atualizado para o localStorage
            localStorage.setItem('ocupations', JSON.stringify(helpArrayUpdate))

            // Dá um refresh na página para mostrar as atualizações
            location.href = "cadastrarPessoas.html"
            break;

        }

    }
}

helpArrayDelete = []
function deleteOcupation(indiceDelete) {

    helpArrayDelete = ocupationList

    for (let d = 0; d < ocupationList.length; d++) {



        if (d == indiceDelete) {

            helpArrayDelete.splice(indiceDelete, 1)
            localStorage.setItem('ocupations', JSON.stringify(helpArrayDelete))


            location.href = "cadastrarPessoas.html"
            break;
        }

    }


}


function buscaCep() {
    let cep = document.getElementById("meucep").value

    let logradouros = document.getElementById("logradouro")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")


    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
        .then(response => response.json())
        .then(response => exibir(response))

    function exibir(dados) {
        console.log(dados)

        logradouros.value = dados.logradouro
        bairro.value = dados.bairro
        cidade.value = dados.localidade
        estado.value = dados.uf

    }

}