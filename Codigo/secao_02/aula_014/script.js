// Escrevendo no console

console.log("Teste");
console.log("Teste 1" + " " + "Teste 2");
console.log("Teste 1", "Teste 2", "Teste 3");
console.log();

// Variaveis e constantes

let idade = 10;
const nome = "Fernando";
const PI = 3.1425;

// Tipagem dinamica

let texto = "Este é um texto";
console.log(texto);
texto = 10;
console.log(texto);
console.log();

// Tipos de dados

let tipoDeDados;
console.log(tipoDeDados);
console.log(typeof tipoDeDados);
tipoDeDados = null;
console.log(tipoDeDados);
console.log(typeof tipoDeDados);
tipoDeDados = 10;
console.log(tipoDeDados);
console.log(typeof tipoDeDados);
tipoDeDados = "texto";
console.log(tipoDeDados);
console.log(typeof tipoDeDados);
tipoDeDados = true;
console.log(tipoDeDados);
console.log(typeof tipoDeDados);
console.log();

// Operadores

let valor1 = 20;
let valor2 = 10;
console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);
console.log(valor1 ** valor2);
console.log(valor1 % valor2);
console.log();

let valor3 = 1;
valor3 += 10;
console.log(valor3);
valor3 -= 1;
console.log(valor3);
valor3 *= 2;
console.log(valor3);
valor3 /= 3;
console.log(valor3);
valor3 **= 2;
console.log(valor3);
valor3 %= 1;
console.log(valor3);
console.log();

let valor4 = 1;
console.log(valor4);
console.log(valor4++);
console.log(valor4++);
console.log(valor4);
console.log(valor4--);
console.log(valor4);
console.log();

let valor5 = 1;
console.log(valor5);
console.log(++valor5);
console.log(++valor5);
console.log(valor5);
console.log(--valor5);
console.log(valor5);
console.log();

let valor6 = 10;
let valor7 = 20;

console.log(valor6 > valor7);
console.log(valor6 >= valor7);
console.log(valor6 < valor7);
console.log(valor6 <= valor7);
console.log(valor6 == valor7);
console.log(valor6 === valor7);
console.log(valor6 != valor7);
console.log(valor6 !== valor7);

// Ordem dos Operadores

console.log(5 + 1 > 6 - 2);
