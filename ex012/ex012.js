function calc(){
    var tsal_b = document.getElementById('sal_b')
    var res = document.getElementById('res')
    var sal_b = Number(tsal_b.value)
    var grat = 0
    var tot_sal = 0
    var v_imposto = sal_b * 0.07
    if(sal_b <= 350){
        grat = 100
        tot_sal = sal_b + grat - (sal_b * 0.07)
    }
    if(sal_b > 350 && sal_b < 600){
        grat = 75
        tot_sal = sal_b + grat - (sal_b * 0.07)   
    }
    if(sal_b >= 600 && sal_b <= 900){
        grat = 50
        tot_sal = sal_b + grat - (sal_b * 0.07)
        
    }
    if(sal_b > 900){
        grat = 35
        tot_sal = sal_b + grat - (sal_b * 0.07)   
    }
res.innerText = `Salário Bruto: R$${sal_b}
\nImposto(7%): R$${v_imposto}
\nVocê teve uma gratificação de R$ ${grat}
\nSalário Total: R$${tot_sal}`
}