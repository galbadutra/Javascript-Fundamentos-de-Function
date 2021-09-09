//curry

function finalPrice(tax) {
    return function (price) {
        return price * (1 + tax)
    }
}
const nycFinalPrice = finalPrice(0.0875)

console.log(nycfinalPrice(25.1))
console.log(finalPrice(29.1))