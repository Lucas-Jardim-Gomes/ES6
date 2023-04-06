/*
let quadrado = function(x = 5){
    return x * x
}
*/


/*
let quadrado = x => {
    return x * x
}

document.write( quadrado(3) + '<br/>')


let circulo = (y = 4,z = 5) => y * z  //return implicito
document.write(circulo())

*/

/*
let parOuImpar = function(numero){
    if(numero % 2 === 0){
        return 'par'
    } else {
        return 'impar'
    }
}

document.write(parOuImpar(7))
*/


/*
let parOuImpar = numero => {
    if(numero % 2 === 0){
        return 'par'
    } else {
        return 'impar'
    }
}

document.write(parOuImpar(8))

*/


let parOuImpar = numero => numero % 2 === 0 ? 'par' : 'impar' //return implicito

document.write(parOuImpar(3))

