const times = [
  "Rio Branco de Americana",
  "União Barbarense",
  "Taquaritinga",
  "São Caetano",
  "Joseense",
  "Paulista",
  "Nacional (SP)",
  "Araçatuba",
  "Colorado Caieiras",
  "Inter de Bebedouro",
  "Vocem",
  "Jabaquara",
  "Barretos",
  "São-Carlense",
  "Penapolense",
  "Osasco Audax",
  "Matonense"
];

const cidadesTimes = [
  "Americana",
  "Santa Bárbara d'Oeste",
  "Taquaritinga",
  "São Caetano do Sul",
  "São José dos Campos",
  "Jundiaí",
  "São Paulo",
  "Araçatuba",
  "Caieiras",
  "Bebedouro",
  "Assis",
  "Santos",
  "Barretos",
  "São Carlos",
  "Penápolis",
  "Osasco",
  "Matão"
];

function fnListaTimes(){
    for(let i= 0; i < times.length; ++i){
    document.getElementById('lista_times').innerHTML += `
        <div class="col-6 border">
            ${times[i]} - ${cidadesTimes[i]}
        </div>
    `
    }
}

fnListaTimes()

console.dir(times)
console.dir(cidadesTimes)