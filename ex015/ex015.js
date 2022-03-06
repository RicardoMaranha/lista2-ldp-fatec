function calc(){
    var tval = document.getElementById('val1')
    var val = Number(tval.value)
    var res = document.getElementById('res')
    var topt = document.getElementById('opt')
    var opt = Number(topt.value)
    var tot_val = 0
    var resposta = ""
    if(opt == 1 || opt == 2){
        switch (opt){
            case 1:
                tot_val = val + (val * 0.03)
                resposta = `Valor inicial: R$${val}\n
                Valor Corrigido(1 mês): R$${tot_val}`
                break
                
    
            case 2:
                tot_val = val + (val * 0.04)
                resposta = `Valor inicial: R$${val}\n
                Valor Corrigido(1 mês): R$${tot_val}`
                break           
        } 
    } else{
        resposta = 'Opção inválida!!! Digite [1] ou [2]'
    }
    res.innerText = resposta
    
    
}