function fnCalculaMedia(){
    let vendedor = '', jan = 0, fevereiro = 0, marco = 0, media = 0

    vendedor = parseFloat(document.getElementById('vendedor').value)
    janeiro = parseFloat(document.getElementById('janeiro').value)
    fevereiro = parseFloat(document.getElementById('fevereiro').value)
    marco = parseFloat(document.getElementById('marco').value)
    
    media = (janeiro + fevereiro + marco) / 3
    

    media = document.getElementById('media').innerText = 'R$ ' + media.toFixed(2)

}