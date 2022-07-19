
/* Parte 1 */ 
/*  const sobreNome = 
console.log(typeof sobreNome)
let idadeAdulta = 
console.log(typeof idadeAdulta) */

/*Me retorna um erro de sintaxe porque o valor para ser dicernido em tipo, não foi informado */
 

const nome = prompt('Qual o seu nome')
console.log(typeof nome)
let idade = prompt('Qual a sua idade?') 
console.log(typeof idade)

/*Para as duas opções aparecem string 
porque o javascript interpreta o prompt como texto,
 exibe números como texto.*/

 alert("Olá "+nome+ " você tem "+idade+" anos.")
 console.log("Olá "+nome+ " você tem "+idade+" anos.")