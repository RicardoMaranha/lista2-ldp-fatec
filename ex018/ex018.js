function verificar(){
    var Tidade = document.getElementById('idade')
    var idade = Number(Tidade.value)
    var maioridade = document.getElementById('maioridade')
    var resposta = ""
    if(idade<18){
        resposta = 'Menor de Idade'
    } else{
        resposta = 'Maior de Idade'
    }
    maioridade.innerText = resposta
}