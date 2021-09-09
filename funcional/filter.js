// filter ele sempre retorna um true ou false


const numbers = [1, 2, 3, 4, 5, 6]

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Maria', score: 7.4 },
    { name: 'Fernando', score: 9.4 },
    { name: 'Vanessa', score: 9.1 },

]

const maioresQueDez = el => el > 10
const maioresQueCinco = el => el > 10

console.log(numbers.filter(el => el > 1))

console.log(students.filter(el => el.score > 3))