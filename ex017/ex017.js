function validar(){
    var tsenha = document.getElementById('senha')
    var senha = Number(tsenha.value)
    var chave = 4531
    var olho = document.getElementById('olho')
    var login = document.getElementById('logar')
    
    if(senha == chave){
        login.innerText = `Usuário Logado! Seja bem vindo!`
    }else{
        login.innerText = `Senha incorreta! Usuário não logado!`
    }
}
