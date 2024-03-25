//Exibir tabela com as informações
const tabela = document.getElementById('corpo')
if(verificaDisponibilidade != null){
for (let j = 0; j < verificaDisponibilidade.length; j++) {
    tabela.innerHTML +=
        `
<tr>
<td>${verificaDisponibilidade[j]['nomeUs']}</td>
<td>${verificaDisponibilidade[j]['emailUs']}</td>    
<td class="alinhaIconeTb">${verificaDisponibilidade[j]['dataCad']}</td>
<td class="alinhaIconeTb"><button class="btnDelete" onclick="delUsuario('${j}')">Del</button></td>
</tr>
`
}
}