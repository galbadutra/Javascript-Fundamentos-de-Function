//curry

function finalPrice(tax) {
    return function (price) {
        return price * (1 + tax)
    }
}
const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1))
console.log(finalPrice(0.0875)(25.1))


//potencias
function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const bits8 = potencia(2)(8)

console.log(bits8)

//soma 
function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const somado = somar(3)(4)(5)
console.log(somado)

const somar_simples = (a, b) => a + b

// calcular
function calcular(a) {
    return function (b) {
        return function (nome) {
            return nome(a, b)
        }
    }
}
const calcular_soma = calcular(3)(4)(somar_simples)
console.log(calcular_soma)