function calc(){
    var tn1 = document.getElementById('tn1')
    var tn2 = document.getElementById('tn2')
    var topt = document.getElementById('opt')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var opt = Number(topt.value)
    var calculo = 0
     switch(opt){
        case 1:
            calculo = n1 ** n2
            break
        case 2:
            var rq_n1 = Math.sqrt(n1)
            var rq_n2 = Math.sqrt(n2)
            calculo = `Raiz quadrada de ${n1} é ${rq_n1} \n Raiz quadrada de ${n2} é ${rq_n2}`
            break
        case 3:
            var rc_n1 = Math.cbrt(n1)
            var rc_n2 = Math.cbrt(n2)
            calculo = `Raiz quadrada de ${n1} é ${rc_n1} \n Raiz quadrada de ${n2} é ${rc_n2}`
            break
    }
    res.innerText = calculo
}