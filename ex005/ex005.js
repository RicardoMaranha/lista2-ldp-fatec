function cal(){
    var tn1 = document.getElementById('tn1')
    var tn2 = document.getElementById('tn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var topt = document.getElementById('opt')
    var opt = Number(topt.value)
    var res = document.getElementById('res')
    var c = ""
    if (opt == 1){
        var m = (n1 + n2) / 2
        c = `A média entre ${n1} e ${n2} é ${m}` 
    }
    if (opt == 2){
        if (n1 > n2 || n1 == n2){
            var d = n1 - n2
            c = `A diferença entre ${n1} e ${n2} é ${d}`
        } 
        else if (n2 > n1){
            var d = n2 - n1
            c = `A diferença entre ${n2} e ${n1} é ${d}`
        } 
    }
    if (opt == 3){
        var mult = n1 * n2
        c = `O produto entre ${n1} e ${n2} é ${mult}`
    }
    if (opt == 4){
        var div = n1 / n2
        c = `A divisão entre ${n1} e ${n2} é ${div}`
    }

    if (opt > 4 || opt < 1){
        c = 'Opção Inválida digite uma opção de 1 a 4' 
    }

    res.innerHTML = c
    
}