function calc(){
    var tval = document.getElementById('val1')
    var val = Number(tval.value)
    var des = document.getElementById('des')
    var desconto = 0
    var n_val = 0
    var resposta = ""
    if(val<=30){
        resposta = `Este produto não tem desconto!`
    }
    if(val > 30 && val <=100){
        desconto = val * 0.1
        n_val = val - desconto
        resposta = 
        `Este produto teve 10% de desconto! \n
        Valor do Desconto: R$${desconto}\n
        Valor com Desconto: R$${n_val}`
    }
    if(val > 100){
        desconto = val * 0.15
        n_val = val - desconto
        resposta = 
        `Este produto teve 15% de desconto! \n
        Valor do Desconto: R$${desconto}\n
        Valor com Desconto: R$${n_val}`
    }
    des.innerText = resposta
}