let listaDeNumeros = [] //-> variavel fora das funcoes, pois eu quero acessar ela em qualquer ligat

function fnSalvarNumero() {
    let numero = Number.parseFloat(document.getElementById("numero").value)
    listaDeNumeros.push(numero)
    console.log("Funcionou ?", listaDeNumeros)
}

function fnLimpar() {
    document.getElementById("formulario").reset()
}

function fnCalcularMedia(){
    let media = 0
    let qtdNumeros = listaDeNumeros.length
    let somaNumeros = 0
    let i = 0

   while(i<qtdNumeros){
        somaNumeros += listaDeNumeros[i];
        i++
    }

    media = somaNumeros / qtdNumeros;
    document.getElementById("media").innerHTML = media

    listaDeNumeros = []
}