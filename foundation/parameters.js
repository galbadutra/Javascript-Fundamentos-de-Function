//Tipos  de parametros 
function logParams(a, b, c) {
    console.log(a, b, c)
}

//Tipos de padrões aceitos como passagem em parâmetro
logParams(1, 2, 3)
logParams(1, 2)   // não passou um valor aparece undefined
logParams()

//Predeterminação de valor do parâmetro senão for passado nenhum valor quando função for chamada.
function defaultParams(a, b = 1, c = 0) {
    console.log(a, b, c)
}

defaultParams(3, 4, 5)
defaultParams(3, 0)

// função de imrprimir um conjunto de elementos.
function logNums(nums) {
    for (let n of nums) {
        console.log(n)
    }
}

//  o uso do ... no parâmetro definir que ele esperar nenhum ou vários elementos que passará como um array.
function logNums2(...nums) {
    console.log(nums)

}

logNums([1, 2, 3, 4])
logNums2(1)

//função de soma vários elementos.
function sum(...nums) {
    let total = 0
    for (let n of nums) {
        total += n
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5, 6, 7))
