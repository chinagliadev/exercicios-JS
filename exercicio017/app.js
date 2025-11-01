let lista_filmes = []

const btnSalvarFilme = document.getElementById('btnSalvarFilme')

function cadastrarFilme() {
    const nomeFilme = document.getElementById('txtNomeFilme').value
    const capaFilme = document.getElementById('txtCapaFilme').value
    const anoFilme = document.getElementById('txtAnoFilme').value
    const avaliacaoFilme = document.getElementById('txtAvaliacaoFilme').value
    const trailerFilme = document.getElementById('txtTrailerFilme').value
    const generoFilme = document.getElementById('txtGeneroFilme').value
    const duracaoFilme = document.getElementById('txtDuracaoFilme').value
    const descricaoFilme = document.getElementById('txtDescricaoFilme').value

    const filme = {
        nomeFilme: nomeFilme,
        capaFilme: capaFilme,
        anoFilme: anoFilme,
        avaliacaoFilme: avaliacaoFilme,
        trailerFilme: trailerFilme,
        generoFilme: generoFilme,
        duracaoFilme: duracaoFilme,
        descricaoFilme: descricaoFilme
    }

    lista_filmes.push(filme)
    console.dir(lista_filmes)
}

function limparFormulario() {
    document.getElementById('formulario_filme').reset()
}

function listarCardFilmes() {

    const card_filmes = document.getElementById('cards_filmes')

    let dados = ''

    lista_filmes.forEach((filme, i) => {
        dados += `
        <div class="col-12 col-md-4 mt-2">
            <div class="card card_filme p-1">
                <img src="${filme.capaFilme}" class="card-img-top imagem-card" alt="imagem da capa do filme">
                <div class="card-body">
                    <h5 class="card-title fs-4 fw-semibold">${filme.nomeFilme}</h5>
                    <p class="card-text">${filme.anoFilme} | ${filme.avaliacaoFilme} | ${filme.generoFilme} | ${filme.duracaoFilme}</p>
                    <p class="card-text">${filme.descricaoFilme}</p>
                    <a target='blanck' href="${filme.trailerFilme}" class="btn btn-success w-100">Assistir Trailer</a>
                    <button id="excluirItem" onclick="excluirItem(${i})" class="btn btn-danger mt-2 w-100">Excluir item</button>
                </div>
            </div>
        </div>`;
    });

    card_filmes.innerHTML = dados
}

function excluirItem(indice) {
    lista_filmes.splice(indice, 1)
    listarCardFilmes()
}

btnSalvarFilme.addEventListener('click', function () {
    cadastrarFilme()
    limparFormulario()
    listarCardFilmes()
})