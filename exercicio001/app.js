/* 
const -> Sempre vai ser constante nunca vai mudar.
let -> variavel vai sempre mudar e ele tem o escopo
var -> não recomenda, todo o programa sabe de sua existencia
*/

let nome = '', idade = 0

nome = prompt('Informe seu nome')
idade = prompt('Informe sua idade')

alert('Ola seja bem vindo ' + nome + '\n voce tem ' + idade + ' anos')

document.write('Ola seja bem vindo ' + nome + '\n voce tem ' + idade + ' anos')