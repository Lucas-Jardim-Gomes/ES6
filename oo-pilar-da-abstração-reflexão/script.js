//um sofware de marcenaria
//cadeira e sofá

//paradigma procedural


//Array de cadeiras

/*
let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0]['quant_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = Array()
cadeiras[1]['quant_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'



function girar_cadeira(indice) {
    if (cadeiras[indice]['giratoria'] === true) {
        console.log('girou')

    } else {
        console.log('cadeira não é giratória')
    }
}

function adicionar_cadeira(quant_pernas, giratoria, cor){
    let cadeira = Array()

    cadeira['quant_pernas'] = quant_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

        cadeiras.push(cadeira)

}


adicionar_cadeira(3, false, 'rosa')

console.log(cadeiras)

//girar_cadeira(1)


*/

//PARADÍGMA DE ORIENTAÇÃO A OBJETOS
class Cadeira {
    constructor(quant_pernas, giratoria, cor) {
        this.quant_pernas = quant_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira() {
        if (this.giratoria === true) {
            console.log('Girou')
        } else {
            console.log('Não é giratória')
        }
    }
}

//let cadeira = new Cadeira(4, false, 'azul')
//let cadeira2 = new Cadeira(1, true, 'vermelha')


let cadeiras = Array()

cadeiras.push(new Cadeira(4, false, 'azul'))
cadeiras.push(new Cadeira(1, true, 'vermelha'))


console.log(cadeiras)
//cadeira.girarCadeira()
//cadeira2.girarCadeira()