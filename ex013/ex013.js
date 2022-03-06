function calc(){
    var p_produto_t = document.getElementById('p_produto')
    var res = document.getElementById('res')
    var p_produto = Number(p_produto_t.value)
    var aumento = 0
    var p_total = 0
    var classifica = ""
    var resposta = ""
    if(p_produto <= 50){
        aumento = p_produto * 0.05
    }
    if(p_produto > 50 && p_produto < 100){
        aumento = p_produto * 0.10
    }
    if(p_produto > 100){
        aumento = p_produto * 0.15
    }
    p_total = p_produto + aumento

    if(p_total <= 80){
        classifica = 'Barato'
    }
    if(p_total > 80 && p_total <= 120){
        classifica = 'Normal'
    }
    if(p_total > 120 && p_total <= 200){
        classifica = 'Caro'
    }
    if(p_total > 200){
        classifica = 'Muito Caro'
    }
    resposta = 
    `Preço Antigo: R$${p_produto}\n
    Aumento: R$${aumento}\n
    Preço Novo: R$${p_total}\n
    Classificação: ${classifica}\n`
    res.innerText = resposta
    
}