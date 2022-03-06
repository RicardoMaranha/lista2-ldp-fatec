function calc(){
    var tcusto = document.getElementById('CustoF')
    var res = document.getElementById('res')
    var CustoF = Number(tcusto.value)
    var calculo = 0
    var resposta = ""
    if(CustoF <= 12000){
        calculo = CustoF + (CustoF * 0.05 )
    }
    if(CustoF > 12000 && CustoF <= 25000){
        calculo = CustoF + (CustoF * 0.10) + (CustoF * 0.15)
    }
    if(CustoF > 25000){
        calculo = CustoF + (CustoF * 0.15) + (CustoF * 0.20)
    }

    resposta = `O custo para consumidor é de ${calculo}`
    res.innerText = resposta
}