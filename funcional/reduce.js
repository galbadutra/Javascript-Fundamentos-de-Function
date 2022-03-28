const numbers = [1, 2, 3, 4, 5]

console.log(numbers.reduce((el, total) => el + total))  //reduce tem um acumulador 


const avg = (acc, el, i, array) => { // reduce,map e filter vc recebe o acumulador ,o elemento, o indicee e o array
    if (i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

const result = numbers.reduce(avg)
console.log(result)