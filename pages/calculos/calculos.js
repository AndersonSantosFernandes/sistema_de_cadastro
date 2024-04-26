
function relogio(){

let pdfData = new Date()
let year = String(pdfData.getFullYear())
let month = String(pdfData.getMonth() + 1).padStart(2, '0')
let day = String(pdfData.getDay() + 14).padStart(2, '0')
let hour = String(pdfData.getHours()).padStart(2, '0')
let minut = String(pdfData.getMinutes()).padStart(2, '0')

 second = String(pdfData.getSeconds()).padStart(2, '0')

let concatName = `${day}/${month}/${year}   ${hour}:${minut}:${second}`

let clock = document.getElementsByClassName("clock")


clock[0].innerHTML = 
`
${concatName}
`

}

setInterval(relogio, 1000)

function buscaCep(){
let cep = document.getElementById("meucep").value

let logradouros = document.getElementById("logradouro")
let bairro = document.getElementById("bairro")
let cidade = document.getElementById("cidade")
let estado = document.getElementById("estado")


let url = `https://viacep.com.br/ws/${cep}/json/`

fetch(url)
.then(response => response.json())
.then(response =>exibir(response))

function exibir(dados){
console.log(dados)

logradouros.value = dados.logradouro
bairro.value = dados.bairro
cidade.value = dados.localidade
estado.value = dados.uf

}

}