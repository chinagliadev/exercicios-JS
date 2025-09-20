let dataAtual = new Date()
let dia = dataAtual.getDay()


if(dia == 0){
    document.getElementById('resposta').innerText = 'Domingo'
}else if(dia == 1){
    document.getElementById('resposta').innerText = 'Segunda'

}else if(dia == 2){
    document.getElementById('resposta').innerText = 'Terça-feira'

}else if(dia == 3){
    document.getElementById('resposta').innerText = 'Quarta-feira'

}else if(dia == 4){
    document.getElementById('resposta').innerText = 'Quinta-feira'

}else if(dia == 5){
    document.getElementById('resposta').innerText = 'Sexta-feira'

}else if(dia == 6){
    document.getElementById('resposta').innerText = 'Sabado'
}else{
    document.getElementById('resposta').innerText = ''
}