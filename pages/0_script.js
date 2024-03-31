//Calcula formula de Bhaskara

const claculaBhaskara = () => {
    //Inputs para entradas    
    let vlrA = document.getElementById('valor__de__a').value
    let vlrB = document.getElementById('valor__de__b').value
    let vlrC = document.getElementById('valor__de__c').value

    //inputs para saídas
    let resultDelta = document.getElementById('valor__de__delta')
    let resultRaiz1 = document.getElementById('valor__raiz_1')
    let resultRaiz2 = document.getElementById('valor__raiz_2')

    let delta = Math.pow(vlrB, 2) - 4 * vlrA * vlrC
    console.log(delta)

    let raiz1 = (-vlrB + Math.sqrt(delta)) / (2 * vlrA)
    let raiz2 = (-vlrB - Math.sqrt(delta)) / (2 * vlrA)

    //Saída de resultados
    resultDelta.value = delta
    resultRaiz1.value = raiz1
    resultRaiz2.value = raiz2


}

const calculateTemperature = () => {


let getTemperature = document.getElementById('value__temperature')

    class Temperatura {

        constructor(valorTemperatura) {
            this.valorTemperatura = valorTemperatura
            
        }

        calcular = () => {

            let returnResults = document.getElementById("return__temperature")
            let selectConvert = document.getElementsByName('tempSelect')

            if (selectConvert[0].checked) {

                let retornandof = (this.valorTemperatura * 9 / 5) + 32                

                returnResults.innerHTML = 
                `
                <h3>${this.valorTemperatura} Graus Celcius equivalem a</h3>
                <br>
                <h3>${retornandof.toFixed(1)} Fahrenheit</h3>
                `



            } else if (selectConvert[1].checked) {

                let retornandoC = (this.valorTemperatura - 32) * 5 / 9

                returnResults.innerHTML = 
                `
                <h3>${this.valorTemperatura} fahrenheit equivalem a</h3>
                <br>
                <h3>${retornandoC.toFixed(1)} grus celcius</h3>
                `
                
            }

          
        }

    }

    const convertendo = new Temperatura(getTemperature.value)

    convertendo.calcular()




}