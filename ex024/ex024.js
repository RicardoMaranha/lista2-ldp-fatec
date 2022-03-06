function calc(){
    var tpreco = document.getElementById('preco')
    var tcategoria = document.getElementById('categoria')
    var trefrigeracao = document.getElementById('refrigeracao')
    var preco = Number(tpreco.value)
    var categoria = Number(tcategoria.value)
    var refrigeracao = Number(trefrigeracao.value)
    var p_aumento = 0
    var imposto = 0
    var n_preco = 0
    var classificacao = ""
    var res = document.getElementById('res')

    if(preco <= 25){
        if(categoria == 1){
            p_aumento = 0.05
        }
        if(categoria == 2){
            p_aumento = 0.08

        }
        if(categoria == 3){
            p_aumento = 0.1
        }
    }
    if(preco > 25){
        if(categoria == 1){
            p_aumento = 0.12
        }
        if(categoria == 2){
            p_aumento = 0.15

        }
        if(categoria == 3){
            p_aumento = 0.18
        }
    }
    if(refrigeracao == 1 || categoria == 2){
        imposto = 0.05
    } else{
        imposto = 0.08
    }
    n_preco = preco + (preco * p_aumento) -(preco * imposto)
    if(n_preco <= 50){
        classificacao = 'Barato'
    }
    if(n_preco >50 && n_preco<120){
        classificacao = 'Normal'
    }
    if(n_preco >=120){
        classificacao = 'Caro'
    }
    res.innerText = 
    `Percentual de Aumento - ${p_aumento *100}%
    \nValor Aumento - R$${preco * p_aumento}
    \nPercentual Imposto -  ${imposto * 100}%
    \nValor Imposto  - R$${preco * imposto}
    \nNovo Preço - R$${n_preco}
    \nClassificação - ${classificacao}`
    

}