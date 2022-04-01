//Função anônima
(function (a, b, c) {
    return a + b + c
})

//Function expression 

const sum = function (a, b) {
    return a + b
}

const result = sum(7, 59)   //recebendo valor da função em result
console.log(result)
console.log(sum(7, 59))

const anothersum = sum     //  const anothersum agora tambem faz a função sum
console.log(anothersum(5, 9))
