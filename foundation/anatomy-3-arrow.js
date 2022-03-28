const increment1 = function (n) { //padrão da função anonima
    return n + 1
}

// arrow function ins always anonymous
const increment2 = (n) => { //  assim quando colocar o ARROW não precisa mais do function.
    return n + 1
}

const increment3 = n => { // não precisa mais do parametro () se passar apenas 1 valor.
    return n + 1
}

const increment4 = n => n + 1 // função arrow return de forma implicita , versao enxuta.

console.log(increment1(0))
console.log(increment2(1))
console.log(increment3(2))
console.log(increment4(3))

// arrow function versão mais curta
const sum = (a, b) => a + b

console.log(sum(3, 2))

const potencia = (base) => {
    return (exp) => {
        return Math.pow(base, exp)
    }
}
console.log(potencia(2)(2))