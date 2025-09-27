function fnCalcularMedia(){
    let nome = document.getElementById('nome').value
    let n1 = parseFloat(document.getElementById('nota1').value)    
    let n2 = parseFloat(document.getElementById('nota2').value)    
    let n3 = parseFloat(document.getElementById('nota3').value)    
    let n4 = parseFloat(document.getElementById('nota4').value)    

    let media = (n1+n2+n3+n4) / 4
    console.log(media)
    
    document.getElementById("nome_resultado").innerHTML = nome
    document.getElementById("media").innerHTML = media.toFixed(1)
    fnExibir("resultado")
}



function fnExibir(painel_exibir){
    document.getElementById("painel_formulario").style.display = "none"
    document.getElementById("painel_resultado").style.display = "none"
    if(painel_exibir == "resultado"){
        document.getElementById("painel_resultado").style.display = "block"
    }else if(painel_exibir == "formulario"){
        document.getElementById("painel_formulario").style.display = "block"
        fnLimparCampos()
    }
}

function fnLimparCampos(){
    document.getElementById("painel_formulario").reset()
}