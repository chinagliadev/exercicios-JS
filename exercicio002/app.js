// TODO: Fazer operações matematicas com soma, divisão, multiplicação, modulo), 


let n1 = 10, n2 = 2

// operador de adição
console.log(n1 + n2)
document.getElementById('resultado_soma').innerText = n1+n2; //innerText texto de dentro
// ** Entra na estrutura do DOM(document) pega o elemento pelo id (resultado_soma) e troca o valor da propriedade com o innerText.

document.getElementById('resultado_soma').innerText = n1+n2;
document.getElementById('resultado_subtracao').innerText = n1-n2;
document.getElementById('resultado_multiplicacao').innerText = n1*n2;
document.getElementById('resultado_divisao').innerText = n1/n2;
document.getElementById('resultado_resto').innerText = n1%n2;
document.getElementById('resultado_exponiação').innerText = n1**n2;




// Operador de subtração
console.log(n1 - n2)
// operador de multiplicacao
console.log(n1 * n2)
// operador divisao
console.log(n1 / n2)
// operador de modelo % pega o resto da divisao
console.log(n1 % n2)
// operador de exponiação
console.log(n1 ** n1)