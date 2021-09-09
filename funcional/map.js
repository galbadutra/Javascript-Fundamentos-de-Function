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

const getscore = el => el.score

//map passando só a função dentro
console.log(students.map(getscore))

//map passando o corpo da função dentro
console.log(students.map(el => el.score))

//maps concatenados
console.log(students.map(getscore).map(Math.ceil))