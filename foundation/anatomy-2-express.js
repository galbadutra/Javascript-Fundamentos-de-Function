//Função anônima
(function (a, b, c) {
    return a + b + c
})

//Function expression 

const sum = function (a, b) {
    return a + b
}

const result = sum(7, 59)
console.log(result)

const anothersum = sum
console.log(anothersum(5, 9))
