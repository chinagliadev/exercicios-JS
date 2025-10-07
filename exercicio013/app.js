let numerosDeVagas = []
let veiculos = []

function fnSalvarVeiculo() {
    numerosDeVagas.push(document.getElementById("numero_vaga").value)
    veiculos.push(document.getElementById("veiculo").value)
}

function fnListarVeiculo() {
    
    document.getElementById('tabela_veiculos').innerHTML = ""
    for(let i =0; i < veiculos.length; i++){
        document.getElementById("tabela_veiculos").innerHTML += `<tr>`
        document.getElementById("tabela_veiculos").innerHTML += `<td> ${numerosDeVagas[i]} </td><td>${veiculos[i]}</td>`
        document.getElementById("tabela_veiculos").innerHTML += `<tr>`
    }
}

function fnLimpar() { }