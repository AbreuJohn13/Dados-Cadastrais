let nome = ""; //declaração de variaveis 
let idade = 0;
let altura = 0
let peso = 0;
// solicitando informação e atribuindo valor
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: " ))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseFloat(prompt("Digite seu peso: "))
// calculando o ano que nasceu e o imc
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0 
imc = peso / (altura * altura)
//exibindo as informações no console
console.log("Ola " + nome + ", você tem " + idade + " anos e nasceu em " + anoNasc +
            " e tem " + altura + " de altura,  " +  " e pesa " + peso + " kg e seu imc é " + imc + " kg/m ")