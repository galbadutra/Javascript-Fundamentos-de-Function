// filter ele sempre retorna um true ou false


const numbers = [1, 2, 3, 4, 5, 6]

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Maria', score: 7.4 },
    { name: 'Fernando', score: 9.4 },
    { name: 'Vanessa', score: 9.1 },

]
const elementospares = el => el % 2 === 0

const maioresQueOito = el => el.score > 8
const menoresQueSete = el => el.score < 7

console.log(students.filter(el => el.score > 7))

console.log(students.filter(el => el.score > 3))

console.log(students.filter(menoresQueSete))

console.log(numbers.filter(elementospares))

const carrinho = [
    { nome: 'Sapato', qtd: 10, preco: 100 },
    { nome: 'Chiclete', qtd: 0, preco: 1.50 },
    { nome: 'Tesoura', qtd: 10, preco: 12.23 },
    { nome: 'Caderno', qtd: 10, preco: 20 },
    { nome: 'Impressora', qtd: 10, preco: 720 },
]

const qtdMaiorQueZero = carrinho.filter(el => el.qtd > 0)

const produtosValidos = carrinho.filter(el => el.qtd > 0).map(el => el.nome)
console.log(qtdMaiorQueZero)
console.log(produtosValidos)

Array.prototype.meuFilter = function (fn) {
    const arrayNovo = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            arraynovo.push(this[i])
        }
    }
    return arrayNovo
}