const exec = (funcao, a, b) => funcao(a, b)


const subtrair = (a, b) => console.log(`A subtração é igual ${a - b}`)

exec(subtrair, 10, 5)


const cb = () => console.log('Exec...')

setInterval(cb, 1000)

// 2 versao

setInterval(() => console.log('Exec...', 1000))

//3 versao

setInterval(function () {
    console.log("Exec..")
}, 1000)
