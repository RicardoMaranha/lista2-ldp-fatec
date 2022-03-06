function calcular(){
    var tn1 = document.getElementById('tn1')
    var tn2 = document.getElementById('tn2')
    var tn3 = document.getElementById('tn3')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var res = document.getElementById('res')
    maior = 0
    if(n1 > n2 && n1 > n3){
        maior = n1
    } else{
        if(n2 > n1 && n2 > n3){
            maior = n2
        } else {
            if(n3 > n1 && n3 > n2){
                maior = n3
            }
        }
    }
    
    res.innerHTML = maior

}