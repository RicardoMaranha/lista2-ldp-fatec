function calc(){
    var tsal = document.getElementById('sal')
    var res = document.getElementById('res')
    var sal = Number(tsal.value)
    var aumento = 0
    var resposta = ''
    if (sal <= 300){
        aumento  = sal + (sal * 0.35)
        resposta = `Seu salário era de R$ ${sal} e teve um acrescimo de 35% \nficando R$ ${aumento}`
    } else if(sal > 300){
        aumento  = sal + (sal * 0.15)
        resposta = `Seu salário era de R$ ${sal} e teve um acrescimo de 15% \nficando R$ ${aumento}`
    }

    res.innerText = resposta
}