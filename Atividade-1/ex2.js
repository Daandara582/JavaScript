const entrada = require ('readline-sync');

const NomeMaterial = entrada.question ("Digite o nome do material:");
const qtdAdquirida = entrada.questionInt("Digite a quantidade:");
const PrecoUnidade = entrada.questionFloat("Digite o Preco A unidade:");

const total = qtdAdquirida * PrecoUnidade

console.log("Resumo da compra:");
console.log(`O material escolhido foi ${NomeMaterial}`);
console.log(`A quantidade foi de ${qtdAdquirida}`);
console.log(`O Total da compra foi de ${total}`);
