const carrinho = [
    { nome: 'Sapato', qtd: 10, preco: 100, fragil: false },
    { nome: 'Chiclete', qtd: 1, preco: 1.50, fragil: true },
    { nome: 'Tesoura', qtd: 10, preco: 12.23, fragil: true },
    { nome: 'Caderno', qtd: 10, preco: 20, fragil: false },
    { nome: 'Impressora', qtd: 10, preco: 720, fragil: true },
]

const fragil = item => item.fragil == true
const totalElemento = item => item.qtd * item.preco


const produtosFrageis = carrinho.filter(fragil)
const totalTodosProdutos = carrinho.map(totalElemento)

const media = carrinho.filter(fragil)
    .map(totalElemento)
    .reduce((acc, el) => {

    })

console.log(produtosFrageis)
console.log(totalTodosProdutos)