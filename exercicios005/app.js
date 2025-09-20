function fnValidarPeriodo(){
    let periodoSelecionado = document.getElementById('txtPeriodo').value
    
    if(periodoSelecionado == 'd'){
        document.getElementById('resposta').innerText = 'Dia ☀️'
        document.body.style.backgroundColor = 'yellow'
        document.body.style.color = 'black'
        document.getElementById('foto').src = './img/dia.webp'
    }else if(periodoSelecionado == 't'){
        document.getElementById('resposta').innerText = 'Tarde 🌤️'
        document.body.style.backgroundColor = 'orange'
        document.getElementById('foto').src = './img/tarde.jpg'

    }else if(periodoSelecionado == 'n'){
        document.getElementById('resposta').innerText = 'Noite 🌃'
        document.body.style.backgroundColor = '#020524'
        document.body.style.color = 'white'
        document.getElementById('foto').src = './img/noite.jpg'
    }else{
        document.getElementById('resposta').innerText = ''
        document.body.style.backgroundColor = '#d2bfdb'
        document.getElementById('foto').src = './img/padrao.jpg'
    }
}