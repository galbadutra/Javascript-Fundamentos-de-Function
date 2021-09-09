//Declaração de funções javascript


function sayHello() {
    console.log("Hello")
}

function sayHelloTo(name) {
    console.log(`Hello ${name}`)
}

sayHelloTo("javac")

function returnHi() {
    return 'Hi'
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())


function returnHiTo(name) {
    return `Hi ${name}`
}

console.log(returnHiTo("Morreu"))