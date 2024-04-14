
const pdfData = new Date()
const year = String(pdfData.getFullYear())
const month = String(pdfData.getMonth()+1).padStart(2,'0')
const day = String(pdfData.getDay()).padStart(2,'0')
const hour = String(pdfData.getHours()).padStart(2,'0')
const minut = String(pdfData.getMinutes()).padStart(2,'0')

const second = String(pdfData.getSeconds()).padStart(2,'0')

const concatName = `${year}-${month}-${day}-${hour}:${minut}:${second}.pdf`


// function sortearNumeros(inicial, final, quantidade) {
//     if (inicial > final) {
//         console.error("O valor inicial não pode ser maior do que o valor final.");
//         return [];
//     }

//     const numerosSorteados = new Set();

//     while (numerosSorteados.size < quantidade) {
//         const numeroAleatorio = Math.floor(Math.random() * (final - inicial + 1)) + inicial;
//         numerosSorteados.add(numeroAleatorio);
//     }

//     return Array.from(numerosSorteados);
// }

// Exemplo de uso:
// const numerosSorteados = sortearNumeros(1, 5, 5);
// console.log("Números sorteados:", numerosSorteados);

// Neste código:

// A função sortearNumeros recebe três argumentos: inicial, final e quantidade.
// Ela verifica se o inicial é menor ou igual ao final.
// Em seguida, ela gera números aleatórios entre inicial e final, sem repetições, até atingir a quantidade desejada.
// Os números sorteados são armazenados em um conjunto (Set) para garantir que não haja duplicatas.
// Por fim, os números são convertidos em um array e retornados.
// Lembre-se de ajustar os valores de inicial, final e quantidade conforme suas necessidades. 

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
    }   
    }
    
}




function aguardarPorSegundos() {
    return new Promise((resolve) => {
      setTimeout(() => {


        sortearNumero(); // A Promise é resolvida após o tempo especificado
      }, 5 * 1000); // Multiplicamos por 1000 para converter segundos em milissegundos
    });
  }
  

  

