function fnHorasExtras(Salario, horasTrabalhadas, cargaHoraria) {
    let horasextras = 0
    if(Salario < 0){
        return 'todos os valores devem ser positivos'
    }
    
    

    if(horasTrabalhadas > cargaHoraria){
        console.log(horasextras)
        horasextras = (horasTrabalhadas - cargaHoraria) * Salario
        console.log(horasTrabalhadas , cargaHoraria, Salario, horasextras)
    }

    return horasextras
}