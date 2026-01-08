let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a internet',
    status() {
        console.log('Ativa');
    }
}

console.log(assinatura.descricao)


let y = assinatura
console.log(y.descricao)

y.descricao = 'internet banda larga'

console.log(assinatura.descricao)
console.log(y.descricao)