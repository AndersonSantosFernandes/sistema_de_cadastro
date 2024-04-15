
const pdfData = new Date()
const year = String(pdfData.getFullYear())
const month = String(pdfData.getMonth() + 1).padStart(2, '0')
const day = String(pdfData.getDay()).padStart(2, '0')
const hour = String(pdfData.getHours()).padStart(2, '0')
const minut = String(pdfData.getMinutes()).padStart(2, '0')

const second = String(pdfData.getSeconds()).padStart(2, '0')

const concatName = `${year}-${month}-${day}-${hour}:${minut}:${second}.pdf`

const reset = ()=>{
  location.href = "calculos.html"
}

function sortearNumero(retInit, retFin) {
  let titleSort = document.getElementById("titleSort")
  let returnSorteio = document.getElementById("returnSort")
  let contando = document.getElementById('contador')
  let resetBtn = document.getElementsByClassName('inputs')

resetBtn[2].innerHTML=
`
<button class="btn btn-primary" onclick="reset()">Reset</button>
`

  let numeroAleatorio = Math.floor(Math.random() * (retFin - retInit + 1)) + retInit;
  console.clear()
  console.log(`Número sorteado: ${numeroAleatorio}`);

  titleSort.innerHTML=
    `
    <h2>O número sorteado foi:</h2>
    `


  returnSorteio.innerHTML =
    `
        ${numeroAleatorio}
        `
  returnSorteio.style.width = "300px"
  returnSorteio.style.height = "300px"
  returnSorteio.style.opacity = "1"
  returnSorteio.style.fontSize = "150px"
  contando.style.display = "none"
  
}

function aguardarPorSegundos() {
  numero = 5
  let titleSort = document.getElementById("titleSort")
  let initialValue = parseInt(document.getElementById('initial').value)
  let finalValue = parseInt(document.getElementById('final').value)
  let returnSorteio = document.getElementById("returnSort")
  let contando = document.getElementById('contador')

  if (initialValue < 1 || finalValue < 1 || !initialValue || !finalValue) {

    alert('Insira qualquer valor maior que 0')

  } else {

    titleSort.innerHTML=
    `
    <h3>Sorteando...</h3>
    `

    if (initialValue >= finalValue) {
      console.log("O número inicial deve ser menor que o número final.");
      alert('O número inicial deve ser menor que o número final.')
    } else {

      
      returnSorteio.style.width = "0px"
      returnSorteio.style.height = "0px"
      returnSorteio.style.opacity = ".11"
      returnSorteio.style.fontSize = "1px"
      contando.style.display = "flex"
      return new Promise((resolve) => {
        setTimeout(() => {
          sortearNumero(initialValue, finalValue); 
        }, 5 * 1000); 
      });
    }
  }

}

 encerrar = setInterval(contar, 1000)

function contar() {

  let contando = document.getElementById('contador')

  contando.innerHTML =
    `
     ${numero}            
    `
  if (numero == 0) {
    clearInterval(encerrar)
  }

  numero--
}






