const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Maria']
console.log(nomes.map((n => n[0])))

const carrinho = [
    { nome: 'Sapato', qtd: 10, preco: 100 },
    { nome: 'Chiclete', qtd: 0, preco: 1.50 },
    { nome: 'Tesoura', qtd: 10, preco: 12.23 },
    { nome: 'Caderno', qtd: 10, preco: 20 },
    { nome: 'Impressora', qtd: 10, preco: 720 },
]

const getName = item => item.nome
const getTotal = item => item.qtd * item.preco

console.log(carrinho.map(getName))

console.log(carrinho.map(getTotal))