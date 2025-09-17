function fnValidarIdadeCnh(){
    let nomeUsuaio = document.getElementById('txtNome').value
    let idadeUsuario = document.getElementById('txtIdade').value

    event.preventDefault()
    
    if(idadeUsuario < 18){
        texto = "Voce n pode tirar carta"
        document.getElementById('resultado').innerHTML = texto
    }else{
        texto = "Voce pode dirigir"
        document.getElementById('resultado').innerHTML = texto
    }


}   
