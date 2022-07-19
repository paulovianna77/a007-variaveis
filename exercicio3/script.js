
/* Resolução 
Peguei uma variável vazia C, coloquei o valor de A dentro dela.
[C = 10 & A = null ] 
A ficou vazia, então coloquei B dentro de A.
[A = 25 & B = null]
B ficou vazia, coloquei C dentro de B, pois tinha colocado A dentro de C no início.
[B = 25 & C = null]
*/

let a = 10
let b = 25
let c = a
a = b
b = c

console.log('a', a)
console.log('b', b)