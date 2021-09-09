const increment1 = function (n) {
    return n + 1
}

// arrow function ins always anonymous
const increment2 = (n) => {
    return n + 1
}

const increment3 = n => {
    return n + 1
}

const increment4 = n => n + 1

console.log(increment1(0))
console.log(increment2(1))
console.log(increment3(2))
console.log(increment4(3))

// arrow function versão mais curta
const sum = (a, b) => a + b

console.log(sum(3, 2))