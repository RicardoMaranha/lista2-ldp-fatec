function cat(){
    var tidade = document.getElementById('idade')
    var res = document.getElementById('res')
    var idade =  Number(tidade.value)
    var categoria = ""
    if(idade < 5){
        categoria = "Não listado!"
    }
    if (idade >= 5 && idade <= 7){
        categoria = "Infantil"
    }
    if (idade > 7 && idade <= 10){
        categoria = "Juvenil"
    }
    if (idade > 10 && idade <= 15){
        categoria = "Adolescente"
    }
    if (idade > 15 && idade <= 30){
        categoria = "Adulto"
    }
    if (idade > 30){
        categoria = "Senior"
    }

    res.innerText = "Categoria - " + categoria
}