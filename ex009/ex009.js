function calc(){
    var tsaldoM = document.getElementById('saldoM')
    var saldoM = Number(tsaldoM.value)
    var res = document.getElementById('res')
    var resposta = ""
    var cred = 0

    if(saldoM <= 200){
        cred = saldoM * 0.1
    }
    if(saldoM > 200 && saldoM <=300){
        cred = saldoM * 0.2
    }
    if(saldoM > 300 && saldoM <= 400){
        cred = saldoM * 0.25
    }
    if(saldoM > 400){
        cred = saldoM * 0.3
    }

    resposta = `O seu saldo médio é de R$ ${saldoM} e o valor do crédito é de R$ ${cred} .`
    res.innerText = resposta
}