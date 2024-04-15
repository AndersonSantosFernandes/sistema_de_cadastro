
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





