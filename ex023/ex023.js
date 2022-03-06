function calc(){
    var tproduto = document.getElementById('cod_p')
    var tquant = document.getElementById('quant')
    var produto = Number(tproduto.value)
    var quant = Number(tquant.value)
    var res = document.getElementById('res')
    var p_unit = 0
    var p_tot = 0
    var desconto = 0
    var p_final = 0
    var v_desconto
    //Verificar Código do produto e calcular o preço total
    if(produto >= 1 && produto <= 10){
        p_unit = 10
    }
    if(produto > 10 && produto <= 20){
        p_unit = 15
    }
    if(produto > 20 && produto <= 30){
        p_unit = 20
    }
    if(produto > 30 && produto <= 40){
        p_unit = 30
    }
    p_tot = p_unit * quant
    //Verificar o preço total e Atribuir Taxa de Desconto
    if(p_tot <= 250){
        desconto = 0.05
    }
    if(p_tot > 250 && p_tot <= 500){
        desconto = 0.1
    }
    if(p_tot > 500){
        desconto = 0.15
    }
    //Calcular Valor do Desconto
    v_desconto = p_tot * desconto
    //Calcular Preço Final
    p_final = p_tot - v_desconto
    //Mostrar
    res.innerText = 
    `Preço unitário: R$${p_unit}
    \nPreço total: R$${p_tot}
    \nDesconto: R$${v_desconto}
    \nPreço Final: R$${p_final}`
}