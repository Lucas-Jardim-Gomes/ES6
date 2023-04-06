//modelo do objeto
class ContaBancaria {
    //agencia
    //numeroConta
    //saldo
    //limite
    constructor() {
        this.agencia = 1075
        this.numeroConta = 8354235
        this.saldo = 50
        this.limite = 450
    }

    //depositar
    //sacar
    //consultaSaldo
    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }
    sacar(valorSaque) {
        this.saldo -= valorSaque
    }
    consultaSaldo() {
        return this.saldo
    }
}

let x = new ContaBancaria()
let y = new ContaBancaria()

console.log('O seu saldo é de: ' + x.consultaSaldo() + ' Reais')
x.depositar(250)
document.write('O seu saldo é de: ' + x.consultaSaldo() + ' Reais' + '<br/>')
x.sacar(200)
document.write('O seu saldo é de: ' + x.consultaSaldo() + ' Reais')

console.log(y.consultaSaldo())

