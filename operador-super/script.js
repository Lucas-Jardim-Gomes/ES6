class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho  = tamanho
        this.peso = peso
    }

    dormir() {
        console.log('Dormir')
    }
}

class Passaro extends Animal{
    constructor(bico) {
        //Atributos
        super('Verde' , 25, 350)
        this.bico = bico
    }
        //Metodos
    voar() {
        console.log('Voar')
    }
}


class Papagaio extends Passaro {
    constructor(sabeFalar) {
        super('Médio')
        this.sabeFalar = sabeFalar
    }
    
    falar() {
        console.log('Falar')
    }
}

let papagaio = new Papagaio(true)
console.log(papagaio)