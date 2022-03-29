class Produto {

    constructor(nome, preco, desc) {
        this._nome = nome
        this._preco = preco
        this.desc = desc
    }

    get nome() {
        return `O produto: ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    set preco(novoPreco) {
        this._preco = novoPreco
    }

    get preco() {
        return this._preco
    }

    get precoFinal() {
        return this._preco * (1 - this.desc)
    }
}

p1 = new Produto("caneta", 3.20, 0.15)
p1.nome = "galba"
console.log(p1.nome)

p2 = new Produto("chocolate", 5.50, 0.50)
console.log(p2.preco)
console.log(p2.precoFinal)