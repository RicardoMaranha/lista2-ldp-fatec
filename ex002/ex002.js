function somar(){
    var tn1 = window.document.getElementById('tn1')
    var tn2 = window.document.getElementById('tn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var m = (n1 + n2) / 2
    var sit =  ""
    var res = window.document.getElementById('res')
    if(m < 3)
    {
        sit = 'Reprovado'
    } else if (3 <= m < 7)
        {
           sit = 'Exame' 
        } if(m >= 7)
            {
                sit = 'Aprovado'
            }
    res.innerHTML = `A média entre ${n1} e ${n2} é ${m} <br> ${sit}`
}