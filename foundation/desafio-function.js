// soma(3)(4)(5)  desafio função passando 3 paramentros separados

function soma(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const resultado = soma(3)(4)(5)
console.log(resultado)

// fn -> 3 *7 
// calcular (2)(7)(fn) desafio passar duas funções e uma outra função no terceiro parametro

function calcular(a) {
    return function (b) {
        return function (fn) {
            return fn(a, b)
        }
    }
}
function multiplicar(a, b) {
    return a * b
}

function subtrair(a, b) {
    return a * b
}

const calcularAB = calcular(2)(3)
const calcularMult = calcularAB(multiplicar)
console.log(calcularMult)