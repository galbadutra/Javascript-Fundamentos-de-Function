function esperarPor(tempo = 2000) {
    return new Promise(function (resolver) {
        setTimeout(function () {
            console.log("Executando uma promise")
            resolver()
        }, tempo)
    })
}

//console.log(esperarPor(2000))

async function executar() {
    await esperarPor(1500)
    console.log("Async/Await 1 ...")

    await esperarPor(1500)
    console.log("Async/Await 2 ...")

    await esperarPor(1500)
    console.log("Async/Await 3 ...")
}

executar()