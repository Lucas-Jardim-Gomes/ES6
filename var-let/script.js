// 3 escopos: Global, Função e Bloco


function x() {

    console.log('Dentro da função: ' + serie)

    if(true){
       
    }
}

x()
if(true){
    var serie = 'One piece'
    x()
    console.log(serie)
}

console.log(serie)