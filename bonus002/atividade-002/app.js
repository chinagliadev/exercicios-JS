function mostrarnumero(){
    let numero = document.getElementById("numero").value
    document.getElementById("resposta").innerHTML = "o numero informado foi: " +  numero
    document.getElementById("numero").value = ""
}