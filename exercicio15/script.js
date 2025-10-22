let contatos = []


function fnSalvar() {
    let umContato = {
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        foto: document.getElementById('foto').value
    }

    contatos.push(umContato)
    console.dir(contatos)

}

function fnListar() {
    let dados = ""

    contatos.forEach(function (contato, indice) {
            dados+=`<div class="card p-2" style="max-width:300px;">
                    <img src="${contato.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Nome: ${contato.nome}</h5>
                    <p class="card-text">Telefone: ${contato.telefone}</p>
                    <p class="card-text">Email ${contato.email}</p>
                    <a href="#" class="btn btn-danger w-100">DELETAR</a>
                </div>
            </div>`
    })

    document.getElementById('listaDeContato').innerHTML = dados
}

function fnExcluir() { }

function fnExemplo() {
    alert('oi')
}

const btnSalvar = document.getElementById('btnSalvar')

btnSalvar.addEventListener('click', function () {
    fnSalvar()
    fnListar()
})