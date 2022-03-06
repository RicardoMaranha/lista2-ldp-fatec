function calc(){
    var tsal = document.getElementById('sal')
    var res = document.getElementById('res')
    var sal = Number(tsal.value)
    var aumento = 0
    var resposta = ''
    if (sal < 500){
        aumento  = sal + (sal * 0.3)
        resposta = `Seu salário era de R$ ${sal} e teve um acrescimo de 30% \nficando R$ ${aumento}`
    } else{
        resposta = `Você não tem direito ao aumento!`
    }

    res.innerText = resposta

}