function Produto(nome, preco, desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = () => this.preco * (1 - this.desc)
}

Produto.prototype.log = function () {
    console.log(` Nome : ${this.nome} Preco: ${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function () {
        return this._desc
    },
    set: function (novoDesc) {
        if (novoDesc >= 0 && novoDesc <= 1) {
            this._desc = novoDesc
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function () {
        return `${this._desc * 100}%`
    }
})


p1 = new Produto("chocolate", 5.50)
console.log(p1.preco)
console.log(p1.precoFinal())
p1.desc = 3
console.log(p1.descString)