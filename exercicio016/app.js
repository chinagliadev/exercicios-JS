const btnCalcular = document.getElementById('btnCalcular')

function fnExecutarCalculo() {
    const valor = parseFloat(document.getElementById('txtValor').value)
    const valorPorcentagem = parseFloat(document.getElementById('txtValorDesconto').value)
    const funcao = document.getElementById('txtFuncao').value

    if (funcao === 'acresimo') {
        fnIncluirAcresimo(valor, valorPorcentagem)
    }else{
        fnIncluirDesconto(valor, valorPorcentagem)
    }
}

function fnIncluirAcresimo(valor, valorAcresimo) {
    const resultadoValor = document.getElementById('resultado')
    let valorConta = valor

    let acresimoPorcentagem = valorAcresimo / 100
    let valorAcresentado = acresimoPorcentagem * valorConta
    let resultado = valorConta + valorAcresentado
    resultadoValor.innerHTML = resultado
}

function fnIncluirDesconto(valor, valorAcresimo) {
    const resultadoValor = document.getElementById('resultado')
    let valorConta = valor
    
    let acresimoPorcentagem = valorAcresimo / 100
    let valorDescontado = acresimoPorcentagem * valorConta
    let resultado = valorConta - valorDescontado
    resultadoValor.innerHTML = resultado
}

function fnLimparFormulario(){
    document.getElementById('formulario').reset()
}

btnCalcular.addEventListener('click', () => {
    fnExecutarCalculo()
})