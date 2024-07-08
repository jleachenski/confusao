const ehParOuImpar = numero => {

    let array = numero.split("");
    let soma = 0;

    array.foreach(elemento => {

        soma += +elemento
    })

    if(soma % 2 == 0) {
        return "impar"
    }

    return "par"


}

module.exports = { 
    ehParOuImpar
}