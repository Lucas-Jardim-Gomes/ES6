class Animal {
    constructor() {
        this.cor = ''
        this.tamanho  = null
    }

    dormir() {
        console.log('Dormir')
    }
}

class Cachorro extends Animal {
    constructor() {
        super()
        this.orelhas = 'Grandes e caidas'
    }

    correr() {
        console.log('Correr')
    }
    rosnar() {
        console.log('Rosnar')
    }
}

class Passaro extends Animal{
    constructor() {
        //Atributos
        super()
        this.bico = 'Curto'
    }
        //Metodos
    voar() {
        console.log('Voar')
    }
}


class Papagaio extends Passaro {
    constructor() {
        super()
        this.sabeFalar = true
    }
    
    falar() {
        console.log('Falar')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

cachorro.dormir()
passaro.dormir()
papagaio.dormir()
papagaio.falar()
papagaio.voar()