//Funcao construtora
function Produto(nome, preco, desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = () => this.preco * (1 - this.desc)
}


p1 = new Produto("chocolate", 5.50)
console.log(p1.preco)
console.log(p1.precoFinal())