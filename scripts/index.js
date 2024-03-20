function logar() {

  const retornoLogado = JSON.parse(localStorage.getItem('novos'))
  console.log(retornoLogado[0]['emailUsuario'])

  let emailUsuario = document.getElementById("email").value
  let senhaUsuario = document.getElementById("password").value

  //Verificação no "BD" se existe usuario e senha compa´tivel

console.log("Retorno logado",retornoLogado)


  if (emailUsuario == retornoLogado[0]['emaiUsuario'] && senhaUsuario == retornoLogado[0]['senhaUsuario']) {
    sessionStorage.setItem('usuarioLogado', retornoLogado[0]['nomeUsuario'])

    alert("Logado com sucesso")
    location.href = "./pages/home.html"
  } else {
    alert("E-mail ou senha incorretos ou usuário não cadastrado")
  }
}
let showUsuario = document.getElementById('nomeUsuario')
let usando = sessionStorage.getItem('usuarioLogado')
if (sessionStorage.getItem('usuarioLogado') != null) {
  showUsuario.innerHTML = `Bem vindo ${usando}`
}




function cadastrar() {

  let nomeUsuario = prompt('digite seu nome')
  let emailUsuario = prompt('digite seu e-mail')
  let senhaUsuario = prompt('digite uma senha')
  let confSenha = prompt('confirme a senha')
  

  const arrayUsuarios = []

  // Cadastra se senhas forem iguais  
  if (senhaUsuario === confSenha) {

    class NovoUsuario {

      constructor(nome, email, senha) {
        this.nome = nome
        this.email = email
        this.senha = senha
      }

      cadastrarNovoUsuario() {
        arrayUsuarios.push({ nome: this.nome, email: this.email, senha: this.senha })
        localStorage.setItem("userCadastrado", JSON.stringify(arrayUsuarios))

        alert(`${this.nome} você foi cadastrado com sucesso`)
        girarLogin()

      }

    }
    const criarUsuario = new NovoUsuario(nomeUsuario, emailUsuario, senhaUsuario)

    criarUsuario.cadastrarNovoUsuario()

    // console.log(arrayUsuarios)

  } else {
    alert("Senhas diferentes! Tente novamente")
  }

}

// Função que encerra a sessão
const encerrarSessao = () => {
  sessionStorage.clear('usuarioLogado')
  location.href = "../index.html"
}

const listarUsuarios = JSON.parse(localStorage.getItem('novos'))

let corpoTabela = document.getElementById("corpoTabela")

for (let i = 0; i < listarUsuarios.length; i++) {

  console.log(listarUsuarios[i])

  corpoTabela.innerHTML += `
  
    <tr>
      <td>${listarUsuarios[i]['nomeUsuario']}</td>
      <td>${listarUsuarios[i]['emaiUsuario']}</td>
      <td>${listarUsuarios[i]['id']}</td>
      <td>${listarUsuarios[i]['id']}</td>
    </tr>
    
    `

}
