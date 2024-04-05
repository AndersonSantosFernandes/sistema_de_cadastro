//Lista de pessoas cadastradas
let showList = document.getElementById('listPersons')
const personCadList = JSON.parse(localStorage.getItem('personCad'))

if (personCadList.length == 0) {
   showList.innerHTML +=
      `
   <h3> Nenhuma pessoa cadastrada ainda </h3>
   `
} else {

   for (let i = 0; i < personCadList.length; i++) {

      showList.innerHTML += `
    
      <div class="card__person">
         <h3>${personCadList[i]['name']}</h3>
         <h5>${personCadList[i]['lastName']}</h5>
         <h5>${personCadList[i]['email']}</h5>
         <h5 class="strong">${personCadList[i]['ocupation']}</h5>
         
         <hr>
         <div class="out__btn">
            <button class="btn btn-primary" onclick="deletePerson('${i}')">Apagar ${personCadList[i]['name']} </button>
          
            
            <button type="button" class="btn btn-primary" onclick="updateUsers('${i}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Editar
          </button>          

          </div>
      </div>
    
    `
   }
}



function deletePerson(indice) {

   const listDelete = JSON.parse(localStorage.getItem('personCad'))

   auxDelete = []
   for (let j = 0; j < listDelete.length; j++) {

      if (j == indice) {        

         auxDelete = listDelete        

         auxDelete.splice(indice, 1)

         localStorage.setItem('personCad', JSON.stringify(auxDelete))
      }

   }

   location.href = "lista.html"
}

arraySelectPerson = []
function updateUsers(indiceUpdate) {

   let editPersons = document.getElementById('editPerson')
   arraySelectPerson = personCadList

   for (let sel = 0; sel < arraySelectPerson.length; sel++) {

      if (indiceUpdate == sel) {
         
         editPersons.innerHTML = `
         
         <input class="modalInput" value="${arraySelectPerson[sel]['name']}" type="text" name="" id="name">
         <input class="modalInput" value="${arraySelectPerson[sel]['lastName']}" type="text" name="" id="lastName">
         <input class="modalInput" value="${arraySelectPerson[sel]['email']}" type="email" name="" id="email" disabled="disabled">
         <input class="modalInput" value="${arraySelectPerson[sel]['ocupation']}" type="text" name="" id="ocupation">

         <hr>

         <button type="button" class="btn btn-primary"  onclick="saveEdition('${sel}')" >
         Salvar
          </button>

          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancela</button>
         `
      }
   }

}

arrayUpdate = []
function saveEdition(indiceSave){
   arrayUpdate = personCadList

let upName = document.getElementById('name')
let upLastName = document.getElementById('lastName')
let upEmail = document.getElementById('email')
let upOcupation = document.getElementById('ocupation')

   for (let update = 0; update < arrayUpdate.length; update++) {
      
      if(update == indiceSave){
         arrayUpdate[update]['name'] = upName.value
         arrayUpdate[update]['lastName'] = upLastName.value
         arrayUpdate[update]['email'] = upEmail.value
         arrayUpdate[update]['ocupation'] = upOcupation.value
         
         localStorage.setItem('personCad', JSON.stringify(arrayUpdate))

         location.href = "lista.html"
      }      
   }  
}



