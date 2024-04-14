
const pdfData = new Date()
const year = String(pdfData.getFullYear())
const month = String(pdfData.getMonth()+1).padStart(2,'0')
const day = String(pdfData.getDay()).padStart(2,'0')
const hour = String(pdfData.getHours()).padStart(2,'0')
const minut = String(pdfData.getMinutes()).padStart(2,'0')

const second = String(pdfData.getSeconds()).padStart(2,'0')

const concatName = `${year}-${month}-${day}-${hour}:${minut}:${second}.pdf`


function sortearNumero() {

let initialValue = parseInt(document.getElementById('initial').value)
let finalValue = parseInt(document.getElementById('final').value)
let returnSorteio = document.getElementById("returnSort")

    if(initialValue < 1 || finalValue < 1 || !initialValue || !finalValue){

        alert('Insira qualquer valor maior que 0')

    }else{

    if(initialValue >= finalValue) {
        console.log("O número inicial deve ser menor que o número final.");
        alert('O número inicial deve ser menor que o número final.')
    }else{
        let numeroAleatorio = Math.floor(Math.random() * (finalValue - initialValue + 1)) + initialValue;
        console.clear()
        console.log(`Número sorteado: ${numeroAleatorio}`);
        returnSorteio.innerHTML = 
        `
        ${numeroAleatorio}
        `
        returnSorteio.style.width = "300px"
        returnSorteio.style.height = "300px"
        returnSorteio.style.opacity = "1"
        returnSorteio.style.fontSize = "150px"
    }   
    }
    
}




function aguardarPorSegundos() {

  let returnSorteio = document.getElementById("returnSort")
  returnSorteio.style.width = "0px"
  returnSorteio.style.height = "0px"
  returnSorteio.style.opacity = ".11"
  returnSorteio.style.fontSize = "1px"
    return new Promise((resolve) => {
      setTimeout(() => {



        sortearNumero(); // A Promise é resolvida após o tempo especificado
      }, 2 * 1000); // Multiplicamos por 1000 para converter segundos em milissegundos
    });

    
  }


 

  

