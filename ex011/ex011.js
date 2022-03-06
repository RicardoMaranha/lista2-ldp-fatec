function calc(){
    var Tsal_a = document.getElementById('Asal')
    var res = document.getElementById('res')
    var sal_a = Number(Tsal_a.value)
    var v_aum = 0
    var t_aum = 0
    var resposta = ""
    if(sal_a <= 300){
        v_aum = sal_a * 0.15
        t_aum = sal_a + v_aum
    }
    if(sal_a > 300 && sal_a <600){
        v_aum = sal_a * 0.10
        t_aum = sal_a + v_aum
    }
    if(sal_a >=600 && sal_a <= 900){
        v_aum = sal_a * 0.05
        t_aum = sal_a + v_aum
    }
    if(sal_a > 900){
        v_aum = sal_a * 0.05
        t_aum = sal_a + v_aum    
    }
resposta = `O valor do aumento é de R$ ${v_aum}, o seu salário foi para R$ ${t_aum}!`
res.innerHTML = resposta

}