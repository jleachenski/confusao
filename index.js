const prompt = require('prompt-sync')()
const par_impar = require("./par_impar.js")

const numero = prompt("digite um numero: ")

let retorno = par_impar.ehParOuImpar(numero)

console.log(retorno)
