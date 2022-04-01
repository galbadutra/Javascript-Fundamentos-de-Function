//Declaração de funções javascript


function sayHello() {
    console.log("Hello")
}

function sayHelloTo(name) {
    console.log(`Hello ${name}`)
}


function returnHi() {
    return 'Hi'
}

function returnHiTo(name) {
    return `Hi ${name}`
}


sayHello()

sayHelloTo("javac")


console.log(returnHi())

const greeting = returnHi()

console.log(greeting)

console.log(returnHiTo("Morreu"))