const carrinho = [
    { nome: 'Sapato', qtd: 10, preco: 100 },
    { nome: 'Chiclete', qtd: 0, preco: 1.50 },
    { nome: 'Tesoura', qtd: 10, preco: 12.23 },
    { nome: 'Caderno', qtd: 10, preco: 20 },
    { nome: 'Impressora', qtd: 10, preco: 720 },
]

const getTotal = item => item.qtd * item.preco
const somar = (el, acc) => el + acc


const getTotais = carrinho.map(getTotal).reduce(somar, 0)



console.log(getTotais)