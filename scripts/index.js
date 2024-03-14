function girarCadastro(){
    rodado = document.getElementById("formInit")
    form1 = document.getElementById("init1")
    btn1 = document.getElementById("btn1")
    form2 = document.getElementById("init2")
    btn2 = document.getElementById("btn2")
    //  = document.getElementById("")
     

    form2.style.display='block';
    form1.style.display='none';
    rodado.style.transform=' perspective(600px) rotatey(900deg)';
    // rodado.style.backgroundColor ='purple';
    form1.style.opacity= '0';
    form2.style.opacity= '1';
    btn1.style.opacity= '0';
    btn2.style.opacity= '1';
  }

  function girarLogin(){
    rodado = document.getElementById("formInit")
    form1 = document.getElementById("init1")
    btn1 = document.getElementById("btn1")
    form2 = document.getElementById("init2")
    //  = document.getElementById("")
    //  = document.getElementById("")
     

    form2.style.display='none';
    form1.style.display='block';
    rodado.style.transform=' perspective(600px) rotatey(0deg)';
    // rodado.style.backgroundColor ='aqua';
    form1.style.opacity= '1';
    form2.style.opacity= '0';
    btn1.style.opacity= '1';
    btn2.style.opacity= '0';

  }

  function logar(){
    let emailUsuario = document.getElementById("email")
    let senhaUsuario = document.getElementById("password")
    console.log(emailUsuario.value, senhaUsuario.value)
  }
  function cadastrar(){
    let nomeUsuario = document.getElementById("userCadastro")
    let emailUsuario = document.getElementById("emailCadastro")
    let senhaUsuario = document.getElementById("passwordCadastro")
    let confSenha = document.getElementById("confPasswordCadastro")

    if(senhaUsuario.value === confSenha.value){
        console.log(nomeUsuario.value,emailUsuario.value,senhaUsuario.value,confSenha.value)
    
    }else{
        alert("Senhas diferentes! Tente novamente")
    }

    
  }