const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Maria', score: 7.4 },
    { name: 'Fernando', score: 9.4 },
    { name: 'Vanessa', score: 9.1 },

]

const greatStudent = student => student.score >= 9
const getScore = el => el.score


const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

console.log(students.filter(greatStudent).map(getScore).reduce(avg))