function calc(){
    var tsal = document.getElementById('sal')
    var sal = Number(tsal.value)
    var res = document.getElementById('res')
    var aumento = 0
    var tot_sal = 0
    var aumento_p = 0
    if(sal <= 300){
        aumento = sal * 0.5
        aumento_p = 50
    }
    if(sal > 300 && sal <= 500){
        aumento = sal * 0.4
        aumento_p = 40
    }
    if(sal > 500 && sal <= 700){
        aumento = sal * 0.3
        aumento_p = 30
    }
    if(sal > 700 && sal <= 800){
        aumento = sal * 0.2
        aumento_p =  20
    }
    if(sal > 800 && sal <= 1000){
        aumento = sal * 0.1
        aumento_p = 10
    }
    if(sal > 1000){
        aumento = sal * 0.05
        aumento_p = 5
    }
    tot_sal = sal + aumento
    res.innerText = 
    `Aumento: ${aumento_p}%\n
     Valor aumento: R$${aumento}\n
     Salário Total: R$${tot_sal}`
}