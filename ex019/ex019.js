function calc(){
    var taltura = document.getElementById('altura')
    var altura = Number(taltura.value)
    var tsexo = document.getElementById('sexo')
    var sexo = Number(tsexo.value)
    var peso_i = 0
    var resposta = ""
    var ideal = document.getElementById('ideal')
    if(sexo == 1){
        peso_i = (72.7 * altura) - 58
        resposta = `Peso ideal ${peso_i}`
    }
    if(sexo == 2){
        peso_i = (62.1 * altura) -44.7
        resposta = `Peso ideal ${peso_i}`
    }
    if(sexo < 1 || sexo > 2){
        resposta = `Opção Inválida!!! [1 / 2]`
    }
    ideal.innerText = resposta
}