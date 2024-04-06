
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

    const content = document.querySelector("#content")

    const options = {
        margin: [10,10,10,10],
        filename: concatName,
        html2canvas:{scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    html2pdf().set(options).from(content).save()

})