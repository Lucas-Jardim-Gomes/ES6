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
    constructor(bico, cor, tamanho , peso) {
        //Atributos
        super(cor, tamanho , peso)
        this.bico = bico
    }
        //Metodos
    voar() {
        console.log('Voar')
    }
}


class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho , peso) {
        super('Médio', cor, tamanho , peso)
        this.sabeFalar = sabeFalar
    }
    
    falar() {
        console.log('Falar')
    }
}

let papagaio = new Papagaio(true, 'verde', 25 , 350)
console.log(papagaio)

let papagaio2 = new Papagaio(false, 'branco', 10 , 80)
console.log(papagaio2)