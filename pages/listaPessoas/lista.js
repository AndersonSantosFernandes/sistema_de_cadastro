
//Cria sessao pala exibir lista em lista
const sectionList = (listaCard) =>{


   if(listaCard == 1){
      sessionStorage.setItem('personList','list')

   }else if(listaCard == 2){
      sessionStorage.setItem('personList','card')
   
   }
   location.href = "lista.html"
}


//Lista de pessoas cadastradas
let showList = document.getElementById('listPersons')
let showHeader = document.getElementById('headPersons')
let showBody = document.getElementById('headPersons')
const personCadList = JSON.parse(localStorage.getItem('personCad'))

if (personCadList.length == 0) {
   showList.innerHTML +=
      `
   <h3> Nenhuma pessoa cadastrada ainda </h3>
   `
} else {

   //Exibe inpormações em tabela
   if(sessionStorage.getItem('personList') == 'list'){
      //Cabeçalho da tabela
      showHeader.innerHTML = 
      `
      <button id="gerapdf">Gerar PDF</button>
      <h4 class="tituloHome">Lista de Pessoas</h4>
      <tr>
      <th>Nome</th>
      <th>Sobrenome</th>
      <th>E-mail</th>
      <th>Cargo</th>            
    </tr>

      
      `      
      for (let li = 0; li < personCadList.length; li++) {

         //Corpo da tabela
         showBody.innerHTML +=
         `
         <tr>
            <td>${personCadList[li]['name']}</td>
            <td>${personCadList[li]['lastName']}</td>
            <td>${personCadList[li]['email']}</td>
            <td>${personCadList[li]['ocupation']}</td>
          </tr>
         
         `

      }

     

   }else{

   
   //Exibir informações em caards
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
}


//Deleta de fato um apessoa cadastrada
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

//Seleciona o arquivo para edição
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
// Salvamento de fato da edição
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
//Obtenção de data para formar o nome do PDF
const pdfData = new Date()
const year = String(pdfData.getFullYear())
const month = String(pdfData.getMonth()+1).padStart(2,'0')
const day = String(pdfData.getDay()).padStart(2,'0')
const hour = String(pdfData.getHours()).padStart(2,'0')
const minut = String(pdfData.getMinutes()).padStart(2,'0')

const second = String(pdfData.getSeconds()).padStart(2,'0')

const concatName = `${year}-${month}-${day}-${hour}:${minut}:${second}.pdf`

console.log(concatName)
//Codigo para gerar um pdf da página
const btnGenerate = document.querySelector("#gerapdf")

btnGenerate.addEventListener("click", () => {

    const content = document.querySelector("#tablePersons")

    const options = {
        margin: [10,10,10,10],
        filename: concatName,
        html2canvas:{scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    html2pdf().set(options).from(content).save()

})

