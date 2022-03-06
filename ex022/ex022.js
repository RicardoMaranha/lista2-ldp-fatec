function verificar(){
    var tidade = document.getElementById('idade')
    var tpeso = document.getElementById('peso')
    var idade = Number(tidade.value)
    var peso = Number(tpeso.value)
    var res = document.getElementById('res')
    var g_risco = 0
    if(idade < 20){
        if(peso <= 60){
            g_risco = 9
        }
        if(peso >60 && peso <=90){
            g_risco = 8
        }
        if(peso > 90){
            g_risco = 7
        }
    }
    if(idade >= 20 && idade <= 50){
        if(peso <= 60){
            g_risco = 6
        }
        if(peso > 60 && peso <= 90){
            g_risco = 5
        }
        if(peso > 90){
            g_risco = 4
        }
    }
    if(idade > 50){
        if(peso <= 60){
            g_risco = 3
        }
        if(peso > 60 && peso <= 90){
            g_risco = 2
        }
        if(peso > 90){
            g_risco = 1
        }
    }

    res.innerText = `Grupo de risco ${g_risco}`

}