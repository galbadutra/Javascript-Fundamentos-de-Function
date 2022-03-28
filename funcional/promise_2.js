//sem promise
setTimeout(function () {
    console.log("Executando callback")
    setTimeout(function () {
        console.log("Executando callback")
        setTimeout(function () {
            console.log("Executando callback")
        }, 2000)
    }, 2000)
}, 2000)

// com promise

function esperarPor(tempo = 2000) {
    return new Promise(function (resolver) {
        setTimeout(function () {
            console.log("Executando uma promise")
            resolver()
        }, tempo)
    })
}
esperarPor()