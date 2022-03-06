function verificar(){
    var tpreco = document.getElementById("preco")
    var preco = Number(tpreco.value)
    var t_cod_o = document.getElementById("cod_o")
    var cod_o = Number(t_cod_o.value)
    var procedencia = document.getElementById("procedencia")
    var res_procedencia = ""
    if(cod_o == 1){
        res_procedencia = "Sul"
    }
    if(cod_o == 2){
        res_procedencia = "Norte"
    }
    if(cod_o == 3){
        res_procedencia = "Leste"
    }
    if(cod_o == 4){
        res_procedencia = "Oeste"
    }
    if(cod_o == 5 || cod_o == 6){
        res_procedencia = "Nordeste"
    }
    if(cod_o >= 7 && cod_o <= 9){
        res_procedencia = "Sudeste"
    }
    if(cod_o > 9 && cod_o <= 20 ){
        res_procedencia = "Centro-Oeste"
    }
    if(cod_o > 20 && cod_o <= 30){
        res_procedencia = "Nordeste"
    }
    if (cod_o < 1 && cod_o > 30){
        res_procedencia = "Opção Inválida"
    }

    procedencia.innerText = 
    `Preço - R$${preco}
    \nCódigo de origem - ${cod_o}
    \nProcedência - ${res_procedencia}`
}