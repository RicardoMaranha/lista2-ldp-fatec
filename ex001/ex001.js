function somar(){
    var tn1 = window.document.getElementById('n1')
    var tn2 = window.document.getElementById('n2')
    var tn3 = window.document.getElementById('n3')
    var tn4 = window.document.getElementById('n4')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var m = (n1 + n2 + n3 + n4) / 4
    var situação = ""
    if(m >= 7){
        situação = "Aprovado"
    }
    else{
        situação = "Reprovado"
    }
    res.innerHTML = `A média aritmética de ${n1}, ${n2}, ${n3}, ${n4} é ${m} <br> ${situação}`
    
}

