//  Anonymous function
// IIFE - Immediately Invoked Function Expression

(function (a, b, c) {     //modo de chamar uma função de forma imediata
    let x = 3
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);

(function (a, b, c) { // o valor local dentro da função que determina o valor.
    let x = 300
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);


(() => {
    console.log("arrow #01")
})();

(() => console.log("arrow #02"))();