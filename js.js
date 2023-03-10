function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById("txtano")
   var res = document.querySelector("div#res")

   if(fano.value.length == 0 || fano.value > ano){
    window.alert("[Erro] insira um valor válido")
   } else {
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement("img")
    img.setAttribute('id', 'foto')
    img.style.borderRadius = ('200px')
    img.style.width = ('300px')
    img.style.height = ('300px')
    
    
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'assets/bbhomem.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'assets/jovemhomem.jpg')
        } else if (idade > 21 && idade < 50 ){
            // adulto
            img.setAttribute('src', 'assets/adultohomem.jpg')
        } else {
            //Idoso
            img.setAttribute('src', 'assets/idosohomem.jpg')
        }

    }else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'assets/bbmulher.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'assets/jovemmulher.jpg')
        } else if (idade > 21 && idade < 50 ){
            // adulto
            img.setAttribute('src', 'assets/mulheradulto.jpg')
        } else {
            //Idoso
            img.setAttribute('src', 'assets/idosomulher.jpg')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)   
   }
    
}