
let p = new Promise(function (CumprirPromessa) {
    CumprirPromessa(['ANA', "MARIA", "BIANCA"])
})

p.then(pegarElemento => pegarElemento[0])
    .then(primeiraLetra => primeiraLetra[0])
    .then(letraMinuscula => console.log(letraMinuscula.toLowerCase()))