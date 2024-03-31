const estados = ['Selecione','AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
const cargos = ['Selecione','Dev Front end', 'Dev back end', 'Dev full stack','Gerente de projeto','Engenheiro de software','Scrum master','Arquiteto de software']
listaEstados = document.getElementById('personEstado')
listaCargos = document.getElementById('personCargo')

for (let i = 0; i < estados.length; i++) {

    listaEstados.innerHTML +=
    `
    <option value="${estados[i]}">${estados[i]}</option>
    
    `    
}

for (let j = 0; j < cargos.length; j++) {

    listaCargos.innerHTML +=
    `
    <option value="${cargos[j]}">${cargos[j]}</option>
    
    `    
}