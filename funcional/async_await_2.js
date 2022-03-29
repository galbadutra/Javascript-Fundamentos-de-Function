function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const aleatoria = parseInt(Math.random() * (max - min + 1)) + min
        if (numerosProibidos.includes(aleatoria)) {
            reject('Numero repetido')
        } else {
            resolve(aleatoria)
        }
    })
}

//gerarNumerosEntre(1, 5, [1, 3]).then(console.log).catch(console.log)

async function gerarMegaSena(qtdNumeros) {
    const numeros = []
    for (let _ of Array(qtdNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
}
gerarMegaSena(8).then(console.log).catch(console.log)
console.log(gerarMegaSena(5))