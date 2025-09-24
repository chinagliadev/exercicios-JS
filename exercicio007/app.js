let dataAtual = new Date()
let dia = dataAtual.getDay()

switch (dia) {
    case 0:
        document.getElementById('resposta').innerText = 'Domingo'
        break;
    case 1:
        document.getElementById('resposta').innerText = 'Segunda-feira'
        break;
    case 2:
        document.getElementById('resposta').innerText = 'Terça-feira'
        break;
    case 3:
        document.getElementById('resposta').innerText = 'Quarta-feira'
        break;
    case 4:
        document.getElementById('resposta').innerText = 'Quinta-feira'
        break;
    case 5:
        document.getElementById('resposta').innerText = 'Sexta-feira'
        break;
    case 6:
        document.getElementById('resposta').innerText = 'Sabado'
        break;
    default:
        document.getElementById('resposta').innerText = 'Dia inesxistente'
        break
}




/*
if (dia == 0) {
    document.getElementById('resposta').innerText = 'Domingo'

} else if (dia == 1) {
    document.getElementById('resposta').innerText = 'Segunda'

} else if (dia == 2) {
    document.getElementById('resposta').innerText = 'Terça-feira'

} else if (dia == 3) {
    document.getElementById('resposta').innerText = 'Quarta-feira'

} else if (dia == 4) {
    document.getElementById('resposta').innerText = 'Quinta-feira'

} else if (dia == 5) {
    document.getElementById('resposta').innerText = 'Sexta-feira'

} else if (dia == 6) {
    document.getElementById('resposta').innerText = 'Sabado'

} else {
    document.getElementById('resposta').innerText = ''

}
*/