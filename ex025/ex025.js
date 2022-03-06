function calc(){
    var th_extras = document.getElementById('h_extras')
    var th_falta = document.getElementById('h_falta')
    var h_extras = Number(th_extras.value)
    var h_falta = Number(th_falta.value)
    var res = document.getElementById('res')
    var premio = 0
    var H = (h_extras - (2/3 *(h_falta))) * 60

    if(H>=2400){
        premio = 500
    }
    if(H >=1800 && H<2400){
        premio = 400
    }
    if(H>=1200 && H<1800){
        premio = 300
    }
    if(H>=600 && H<1200){
        premio = 200

    }  
    if(H<600){
        premio = 100
    }

    res.innerText = `Valor do premio R$${premio}`
                           
}0