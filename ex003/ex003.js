function calcular(){
    var tn1 = document.getElementById('tn1')
    var tn2 = document.getElementById('tn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var res = document.getElementById('res')
    var menor = n2
    if (n1 < menor){
        menor = n1
    } else if (n2 < n1){
        menor = n2
    }
    res.innerHTML = `O menor numero é ${menor}`
}