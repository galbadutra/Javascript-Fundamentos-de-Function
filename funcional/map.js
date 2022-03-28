const numbers = [1, 2, 3, 4, 5, 6]

//versão arrow function
const numbersV2 = numbers.map(el => el * 2)


// versão 1
//const numbersV2 = number.map(function (el) {
//    return el * 2
//})

console.log(numbers, numbersV2)


const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Maria', score: 7.4 },
    { name: 'Fernando', score: 9.4 },
    { name: 'Vanessa', score: 9.1 },

]

const getscore = el => el.score //função para pegar o  score apenas

//map passando só a função dentro do getscore pegando só as notas
console.log(students.map(getscore))

//map passando o corpo da função dentro

//pegando as notas e arredondando elas 
console.log(students.map(getscore).map(Math.ceil))

Array.prototype.meuMap = function (fn) {
    const arraynovo = []
    for (let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this)
        arraynovo.push(result)
    }
    return arraynovo
}

console.log(students.meuMap(el => el.score))
