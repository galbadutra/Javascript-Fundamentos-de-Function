function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const aleatoria = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatoria)
    })
}
gerarNumerosEntre(10, 15).then(console.log)