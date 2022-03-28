//função desafio range
function range_inicial(b) {
    let nums = []
    for (let x = 1; x <= b; x++) {
        nums.push(x)
    }
    return nums
}

function range_intervalo(a, b) {
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b

    const nums = []
    for (let x = n1; x <= n2; x++) {
        nums.push(x)
    }
    return nums
}
function range_intervalo_soma(a, b, s = 1) {
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b

    const nums = []
    for (let x = n1; x <= n2; x += s) {
        nums.push(x)
    }
    return nums
}




function range(a, b, s = 1) {

    const n1 = b === undefined ? 1 : a // se b for undefined  n1=1 ,senão n1 = a
    const n2 = b === undefined ? a : b // se b for undefined  n2=a , senão n2 = b
    //const n3 = s === undefined ? 1 : s
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)
    const nums = []

    for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {

        nums.push(i)

    }
    return nums

}
console.log(range_inicial(5))
console.log(range_intervalo(2, 7))
console.log(range_intervalo_soma(10, 19, 2))
//console.log(range(19, 10))
//console.log(range(2, 10, 2))

